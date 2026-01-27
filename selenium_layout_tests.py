#!/usr/bin/env python3
"""
Selenium Layout Regression Test Suite
Covers BOTH Desktop (Web) and Mobile layout validation
Focus: geometry, overlap, alignment, scroll, footer, navbar
"""

import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.common.exceptions import WebDriverException


class SeleniumLayoutTester:
    def __init__(self, url="http://localhost:3000"):
        self.url = url
        self.driver = None
        self.results = []

    # ------------------ UTILITIES ------------------

    def log(self, name, passed, msg=""):
        status = "PASS" if passed else "FAIL"
        output = f"{status}: {name} - {msg}"
        self.results.append(output)
        print(output)

    def setup_driver(self, mobile=False):
        options = Options()
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")

        if mobile:
            options.add_argument("--window-size=375,667")
            options.add_argument(
                "--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)"
            )
        else:
            options.add_argument("--window-size=1920,1080")

        try:
            self.driver = webdriver.Chrome(options=options)
            return True
        except WebDriverException as e:
            self.log("Driver Init", False, str(e))
            return False

    def teardown(self):
        if self.driver:
            self.driver.quit()
            self.driver = None

    # ------------------ SHARED LAYOUT ASSERTIONS ------------------

    def assert_no_horizontal_overflow(self, context):
        body_width = self.driver.execute_script("return document.body.scrollWidth")
        viewport = self.driver.execute_script("return window.innerWidth")
        self.log(
            f"{context} No Horizontal Overflow",
            body_width <= viewport,
            f"body={body_width}, viewport={viewport}"
        )

    def assert_scroll_height_valid(self, context):
        scroll_height = self.driver.execute_script("return document.body.scrollHeight")
        viewport = self.driver.execute_script("return window.innerHeight")
        self.log(
            f"{context} Scroll Height",
            scroll_height > viewport,
            f"scroll={scroll_height}, viewport={viewport}"
        )

    def assert_footer_visible_and_aligned(self, context):
        footer = self.driver.find_element(By.TAG_NAME, "footer")
        main = self.driver.find_element(By.TAG_NAME, "main")

        self.driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")
        time.sleep(1)

        footer_box = footer.rect
        main_box = main.rect

        visible = footer.is_displayed()
        aligned = abs(footer_box["x"] - main_box["x"]) < 6

        self.log(
            f"{context} Footer Visible",
            visible,
            "Footer reachable by scroll"
        )

        self.log(
            f"{context} Footer Alignment",
            aligned,
            f"footer.x={footer_box['x']} main.x={main_box['x']}"
        )

        position = self.driver.execute_script(
            "return window.getComputedStyle(arguments[0]).position;", footer
        )

        self.log(
            f"{context} Footer Position",
            position not in ["fixed", "absolute"],
            f"position={position}"
        )

    def assert_header_not_overlapping_main(self, context):
        header = self.driver.find_element(By.TAG_NAME, "header")
        main = self.driver.find_element(By.TAG_NAME, "main")

        header_height = header.size["height"]
        main_top = self.driver.execute_script(
            "return arguments[0].getBoundingClientRect().top;", main
        )

        self.log(
            f"{context} Header Overlap",
            main_top >= header_height,
            f"main.top={main_top}, header.height={header_height}"
        )

    def assert_header_stable_on_scroll(self, context):
        header = self.driver.find_element(By.TAG_NAME, "header")
        top_before = self.driver.execute_script(
            "return arguments[0].getBoundingClientRect().top;", header
        )

        self.driver.execute_script("window.scrollTo(0, 500)")
        time.sleep(1)

        top_after = self.driver.execute_script(
            "return arguments[0].getBoundingClientRect().top;", header
        )

        self.log(
            f"{context} Header Stable",
            abs(top_before - top_after) < 3,
            f"{top_before} → {top_after}"
        )

    # ------------------ DESKTOP LAYOUT TESTS ------------------

    def run_web_layout_tests(self):
        print("\n=== DESKTOP (WEB) LAYOUT TESTS ===")

        if not self.setup_driver(mobile=False):
            return

        try:
            self.driver.get(self.url)
            time.sleep(2)

            self.assert_header_not_overlapping_main("Web")
            self.assert_header_stable_on_scroll("Web")
            self.assert_no_horizontal_overflow("Web")
            self.assert_scroll_height_valid("Web")
            self.assert_footer_visible_and_aligned("Web")

        finally:
            self.teardown()

    # ------------------ MOBILE LAYOUT TESTS ------------------

    def run_mobile_layout_tests(self):
        print("\n=== MOBILE LAYOUT TESTS ===")

        if not self.setup_driver(mobile=True):
            return

        try:
            self.driver.get(self.url)
            time.sleep(2)

            self.assert_header_not_overlapping_main("Mobile")
            self.assert_header_stable_on_scroll("Mobile")
            self.assert_no_horizontal_overflow("Mobile")
            self.assert_scroll_height_valid("Mobile")
            self.assert_footer_visible_and_aligned("Mobile")

        finally:
            self.teardown()

    # ------------------ RUNNER ------------------

    def run_all(self):
        print("Starting Selenium Layout Regression Tests")
        print("=" * 60)

        self.run_web_layout_tests()
        self.run_mobile_layout_tests()

        print("\n=== TEST SUMMARY ===")
        for r in self.results:
            print(r)

        passed = len([r for r in self.results if r.startswith("PASS")])
        print(f"\nPassed {passed}/{len(self.results)}")

        return passed == len(self.results)


if __name__ == "__main__":
    tester = SeleniumLayoutTester()
    exit(0 if tester.run_all() else 1)
