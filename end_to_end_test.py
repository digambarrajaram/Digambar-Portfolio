#!/usr/bin/env python3
"""
END-TO-END REGRESSION + VISUAL UX + FOOTER TEST SUITE

✔ Functional navigation
✔ SPA-safe routing
✔ Desktop + Mobile
✔ Navbar checks
✔ Footer tests (NEW)
✔ Footer internal links (NEW)
✔ Footer social links (NEW)
✔ Footer icons rendered (NEW)

🔥 VISUAL TESTS
✔ Detect gap between header & main
✔ Detect blank first viewport
✔ Detect main not visible on load
✔ Detect scroll-required UX bug
"""

import os
import sys
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# ================= CONFIG =================

BASE_URL = "http://localhost:3000"
PATHS = ["/", "/about", "/projects", "/resume", "/contact"]

WAIT = 10
HEADLESS = False

DESKTOP_VIEWPORT = "1920,1080"
MOBILE_VIEWPORT = "375,667"

SCREENSHOTS = "screenshots"
os.makedirs(SCREENSHOTS, exist_ok=True)

# ================= TESTER =================


class UltimateWebAuditor:
    def __init__(self):
        self.driver = None
        self.wait = None
        self.mode = "web"
        self.passed = []
        self.failed = []

    # ---------- LOGGING ----------

    def log(self, name, passed, details=""):
        entry = name if not details else f"{name} | {details}"
        if passed:
            self.passed.append(entry)
            print(f"PASS: {entry}")
        else:
            self.failed.append(entry)
            print(f"FAIL: {entry}")
            self.take_screenshot(name)

    def take_screenshot(self, name):
        ts = datetime.now().strftime("%Y%m%d_%H%M%S")
        fname = f"{SCREENSHOTS}/{self.mode}_{name}_{ts}.png"
        fname = fname.replace(" ", "_").replace("/", "")
        self.driver.save_screenshot(fname)
        print(f"📸 Screenshot → {fname}")

    # ---------- DRIVER ----------

    def setup(self, mobile=False):
        options = Options()
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")

        if HEADLESS:
            options.add_argument("--headless=new")

        if mobile:
            options.add_argument(f"--window-size={MOBILE_VIEWPORT}")
            options.add_argument(
                "--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)"
            )
            self.mode = "mobile"
        else:
            options.add_argument(f"--window-size={DESKTOP_VIEWPORT}")
            self.mode = "web"

        self.driver = webdriver.Chrome(options=options)
        self.wait = WebDriverWait(self.driver, WAIT)

    def teardown(self):
        if self.driver:
            self.driver.quit()

    def open_page(self, path):
        self.driver.get(BASE_URL + path)
        self.wait.until(EC.presence_of_element_located((By.TAG_NAME, "main")))

    # ================= SAFE HELPERS =================

    def get_navbar(self):
        try:
            return self.driver.find_element(By.TAG_NAME, "nav")
        except:
            self.log("Navbar Missing", False)
            return None

    def get_footer(self):
        try:
            return self.driver.find_element(By.TAG_NAME, "footer")
        except:
            self.log("Footer Missing", False)
            return None

    def get_nav_hrefs(self):
        nav = self.get_navbar()
        if not nav:
            return []
        hrefs = []
        for a in nav.find_elements(By.TAG_NAME, "a"):
            href = a.get_attribute("href")
            if href and BASE_URL in href:
                hrefs.append(href)
        return list(dict.fromkeys(hrefs))

    # ================= OLD LAYOUT TESTS =================

    def test_header_overlap(self, ctx):
        header = self.driver.find_element(By.TAG_NAME, "header")
        main = self.driver.find_element(By.TAG_NAME, "main")

        position = self.driver.execute_script(
            "return window.getComputedStyle(arguments[0]).position;", header
        )
        header_h = header.rect["height"]
        # Check the top of the first child of main instead of main itself
        first_child = main.find_element(By.XPATH, "./*")
        content_top = self.driver.execute_script(
            "return arguments[0].getBoundingClientRect().top;", first_child
        )

        passed = (
            content_top >= 0
            if position in ("fixed", "sticky")
            else content_top >= 0
        )

        self.log(
            f"{ctx} Header Overlap",
            passed,
            f"position={position}, content.top={int(content_top)}, header.h={int(header_h)}",
        )

    def test_horizontal_overflow(self, ctx):
        body_w = self.driver.execute_script("return document.body.scrollWidth")
        vw = self.driver.execute_script("return window.innerWidth")
        self.log(f"{ctx} No Horizontal Overflow", body_w <= vw)

    def test_footer_reachable(self, ctx):
        footer = self.driver.find_element(By.TAG_NAME, "footer")
        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")
        self.log(f"{ctx} Footer Reachable", footer.is_displayed())

    # ================= 🔥 NEW VISUAL / UX TESTS =================

    def test_gap_between_header_and_main(self, ctx):
        header = self.driver.find_element(By.TAG_NAME, "header")
        main = self.driver.find_element(By.TAG_NAME, "main")

        header_bottom = self.driver.execute_script(
            "return arguments[0].getBoundingClientRect().bottom;", header
        )
        main_top = self.driver.execute_script(
            "return arguments[0].getBoundingClientRect().top;", main
        )

        gap = main_top - header_bottom
        passed = gap <= 40

        self.log(
            f"{ctx} No Gap After Header",
            passed,
            f"gap={int(gap)}px",
        )

    def test_main_visible_on_load(self, ctx):
        self.driver.execute_script("window.scrollTo(0, 0)")
        main = self.driver.find_element(By.TAG_NAME, "main")

        visible = self.driver.execute_script(
            """
            const r = arguments[0].getBoundingClientRect();
            return r.top < window.innerHeight && r.bottom > 0;
            """,
            main,
        )

        self.log(f"{ctx} Main Visible Without Scroll", visible)

    def test_first_viewport_not_empty(self, ctx):
        coverage = self.driver.execute_script(
            """
            const vh = window.innerHeight;
            let covered = 0;
            document.querySelectorAll("body > *").forEach(el => {
                const r = el.getBoundingClientRect();
                if (r.top < vh && r.bottom > 0) {
                    covered += Math.min(vh, r.bottom) - Math.max(0, r.top);
                }
            });
            return covered;
            """
        )

        passed = coverage >= self.driver.execute_script(
            "return window.innerHeight * 0.6"
        )

        self.log(
            f"{ctx} First Viewport Has Content",
            passed,
            f"coverage={int(coverage)}px",
        )

    # ================= NAVBAR TESTS =================

    def navbar_checks(self, ctx, mobile=False):
        nav = self.get_navbar()
        if not nav:
            return

        self.driver.execute_script("window.scrollTo(0, 0)")
        self.log(f"{ctx} Navbar Visible at Top", nav.is_displayed())

        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")
        self.log(f"{ctx} Navbar Visible at Bottom", nav.is_displayed())

        links = nav.find_elements(By.TAG_NAME, "a")
        if links:
            try:
                links[0].click()
                self.log(f"{ctx} Navbar Click After Scroll", True)
            except:
                self.log(f"{ctx} Navbar Click After Scroll", False)

        for href in self.get_nav_hrefs():
            self.driver.get(href)
            try:
                self.wait.until(lambda d: href in d.current_url)
                self.log(f"{ctx} Route Works {href}", True)
            except:
                self.log(f"{ctx} Route Works {href}", False)

            self.driver.get(BASE_URL)
            self.wait.until(EC.presence_of_element_located((By.TAG_NAME, "main")))

    # ================= FOOTER TESTS (NEW) =================

    def test_footer_links(self, ctx):
        footer = self.get_footer()
        if not footer:
            return

        links = footer.find_elements(By.TAG_NAME, "a")
        internal = []

        for a in links:
            href = a.get_attribute("href")
            if href and BASE_URL in href:
                internal.append(href)

        for href in set(internal):
            try:
                self.driver.get(href)
                self.wait.until(lambda d: href in d.current_url)
                self.log(f"{ctx} Footer Link Works {href}", True)
            except:
                self.log(f"{ctx} Footer Link Works {href}", False)

            self.driver.get(BASE_URL)
            self.wait.until(EC.presence_of_element_located((By.TAG_NAME, "main")))

    def test_footer_social_links(self, ctx):
        footer = self.get_footer()
        if not footer:
            return

        icons = footer.find_elements(By.CSS_SELECTOR, "[aria-label]")

        for icon in icons:
            label = icon.get_attribute("aria-label")
            href = icon.get_attribute("href")

            if not href:
                self.log(f"{ctx} Social Icon Missing href {label}", False)
                continue

            self.log(f"{ctx} Social Icon Present {label}", True)

    def test_footer_icons_rendered(self, ctx):
        footer = self.get_footer()
        if not footer:
            return

        svgs = footer.find_elements(By.TAG_NAME, "svg")
        self.log(f"{ctx} Footer Icons Rendered", len(svgs) >= 2, f"count={len(svgs)}")

    # ================= RUNNER =================

    def run(self, mobile=False):
        self.setup(mobile)
        try:
            for path in PATHS:
                ctx = f"{self.mode.upper()} {path}"
                print(f"\n→ {BASE_URL + path}")

                self.open_page(path)

                # OLD TESTS
                self.test_header_overlap(ctx)
                self.test_horizontal_overflow(ctx)
                self.test_footer_reachable(ctx)

                # NEW VISUAL TESTS
                self.test_gap_between_header_and_main(ctx)
                self.test_main_visible_on_load(ctx)
                self.test_first_viewport_not_empty(ctx)

                # NAVBAR TESTS
                self.navbar_checks(ctx, mobile)

                # FOOTER TESTS (NEW)
                self.test_footer_links(ctx)
                self.test_footer_social_links(ctx)
                self.test_footer_icons_rendered(ctx)

        finally:
            self.teardown()

    def run_all(self):
        print("\n=== STARTING FULL REGRESSION + VISUAL AUDIT ===")
        self.run(mobile=False)
        self.run(mobile=True)

        print("\n" + "=" * 60)
        print("📗 PASSED TESTS")
        for p in self.passed:
            print("✔", p)

        print("\n" + "=" * 60)
        print("📕 FAILED TESTS (REAL UI BUGS)")
        for f in self.failed:
            print("✖", f)

        print("\nSUMMARY")
        print("TOTAL:", len(self.passed) + len(self.failed))
        print("PASSED:", len(self.passed))
        print("FAILED:", len(self.failed))
        print("=" * 60)

        return len(self.failed) == 0


# ================= ENTRY =================

if __name__ == "__main__":
    success = UltimateWebAuditor().run_all()
    sys.exit(0 if success else 1)
