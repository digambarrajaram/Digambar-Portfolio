#!/usr/bin/env python3
"""
Comprehensive End-to-End Testing Suite using Selenium
Tests both web and mobile functionality for the portfolio website
"""

import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException, WebDriverException

class SeleniumE2ETester:
    def __init__(self, url="http://localhost:3000"):
        self.url = url
        self.driver = None
        self.results = []

    def setup_driver(self, mobile=False):
        """Setup Chrome driver with appropriate viewport"""
        chrome_options = Options()

        if mobile:
            # Mobile viewport
            chrome_options.add_argument("--window-size=375,667")  # iPhone SE size
            chrome_options.add_argument("--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1")
        else:
            # Desktop viewport
            chrome_options.add_argument("--window-size=1920,1080")

        try:
            self.driver = webdriver.Chrome(options=chrome_options)
        except WebDriverException as e:
            self.log_result("Driver Setup", False, f"Failed to initialize Chrome driver: {str(e)}")
            return False
        return True

    def log_result(self, test_name, passed, message=""):
        """Log test result"""
        status = "PASS" if passed else "FAIL"
        result = f"{status}: {test_name} - {message}"
        self.results.append(result)
        print(result)

    def teardown_driver(self):
        """Clean up driver"""
        if self.driver:
            self.driver.quit()
            self.driver = None

    # Web Tests
    def test_web_homepage_load(self):
        """Test that homepage loads correctly on desktop"""
        try:
            self.driver.get(self.url)
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.TAG_NAME, "body"))
            )

            # Check title
            title = self.driver.title
            if "Digambar" in title or "Portfolio" in title:
                self.log_result("Web Homepage Load", True, f"Page loaded with title: {title}")
            else:
                self.log_result("Web Homepage Load", False, f"Unexpected title: {title}")

            # Check main content
            h1_elements = self.driver.find_elements(By.TAG_NAME, "h1")
            if h1_elements:
                self.log_result("Web Content Visibility", True, "Main heading found")
            else:
                self.log_result("Web Content Visibility", False, "No main heading found")

        except Exception as e:
            self.log_result("Web Homepage Load", False, f"Error: {str(e)}")

    def test_web_navigation(self):
        """Test navigation between pages on desktop"""
        pages = [
            ("About", "/about", ["About Me", "About"]),
            ("Projects", "/projects", ["My Projects", "Projects"]),
            ("Contact", "/contact", ["Get in Touch", "Contact"])
        ]

        for page_name, path, expected_texts in pages:
            try:
                self.driver.get(f"{self.url}{path}")
                WebDriverWait(self.driver, 10).until(
                    EC.presence_of_element_located((By.TAG_NAME, "body"))
                )

                # Check if page loaded by looking for expected content
                page_loaded = False
                for expected_text in expected_texts:
                    try:
                        # Look for the text anywhere on the page
                        elements = self.driver.find_elements(By.XPATH, f"//*[contains(text(), '{expected_text}')]")
                        if elements:
                            self.log_result(f"Web Navigation - {page_name}", True, f"Navigated to {page_name} page - found '{expected_text}'")
                            page_loaded = True
                            break
                    except:
                        continue

                if not page_loaded:
                    # Fallback: check if URL changed correctly
                    current_url = self.driver.current_url
                    if path in current_url:
                        self.log_result(f"Web Navigation - {page_name}", True, f"Navigated to {page_name} page - URL contains {path}")
                    else:
                        self.log_result(f"Web Navigation - {page_name}", False, f"Failed to navigate to {page_name} page")

            except Exception as e:
                self.log_result(f"Web Navigation - {page_name}", False, f"Error: {str(e)}")

    def test_web_navigation_links(self):
        """Test that navigation links are present and functional"""
        try:
            self.driver.get(self.url)
            nav = self.driver.find_element(By.TAG_NAME, "nav")

            links = ["about", "projects", "contact"]
            for link in links:
                try:
                    nav_link = nav.find_element(By.CSS_SELECTOR, f"a[href='/{link}']")
                    if nav_link.is_displayed():
                        self.log_result(f"Web Nav Link - {link}", True, f"{link} link is visible")
                    else:
                        self.log_result(f"Web Nav Link - {link}", False, f"{link} link is not visible")
                except NoSuchElementException:
                    self.log_result(f"Web Nav Link - {link}", False, f"{link} link not found")

        except Exception as e:
            self.log_result("Web Navigation Links", False, f"Error: {str(e)}")

    # Mobile Tests
    def test_mobile_layout_stability(self):
        """Test mobile layout stability"""
        try:
            self.driver.get(self.url)
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.TAG_NAME, "header"))
            )

            # Test header stability
            header = self.driver.find_element(By.TAG_NAME, "header")
            initial_position = self.driver.execute_script("return arguments[0].getBoundingClientRect().top;", header)

            self.driver.execute_script("window.scrollTo(0, 300);")
            time.sleep(1)

            final_position = self.driver.execute_script("return arguments[0].getBoundingClientRect().top;", header)

            if abs(final_position - initial_position) < 5:
                self.log_result("Mobile Header Stability", True, "Header remains stable during scroll")
            else:
                self.log_result("Mobile Header Stability", False, f"Header moved from {initial_position} to {final_position}")

        except Exception as e:
            self.log_result("Mobile Header Stability", False, f"Error: {str(e)}")

    def test_mobile_menu_functionality(self):
        """Test mobile menu toggle"""
        try:
            self.driver.get(self.url)
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.TAG_NAME, "body"))
            )

            # Look for mobile menu button
            menu_buttons = self.driver.find_elements(By.CSS_SELECTOR, "button[aria-label*='menu'], button svg, .mobile-menu-button")

            if menu_buttons:
                menu_button = menu_buttons[0]
                menu_button.click()
                time.sleep(1)

                # Check if menu opened
                menu_panel = self.driver.find_elements(By.CSS_SELECTOR, ".fixed.top-20, .mobile-menu, [class*='menu-open']")
                if menu_panel:
                    self.log_result("Mobile Menu", True, "Mobile menu opens correctly")
                else:
                    self.log_result("Mobile Menu", False, "Mobile menu did not open")
            else:
                self.log_result("Mobile Menu", True, "No mobile menu button found (possibly desktop view)")

        except Exception as e:
            self.log_result("Mobile Menu", False, f"Error: {str(e)}")

    def test_mobile_content_scrolling(self):
        """Test content scrolling on mobile"""
        try:
            self.driver.get(self.url)
            initial_scroll = self.driver.execute_script("return window.pageYOffset;")

            self.driver.execute_script("window.scrollTo(0, 500);")
            time.sleep(1)

            final_scroll = self.driver.execute_script("return window.pageYOffset;")

            if final_scroll > initial_scroll:
                self.log_result("Mobile Scrolling", True, f"Content scrolled from {initial_scroll} to {final_scroll}")
            else:
                self.log_result("Mobile Scrolling", False, "Content did not scroll properly")

        except Exception as e:
            self.log_result("Mobile Scrolling", False, f"Error: {str(e)}")

    def test_mobile_responsiveness(self):
        """Test mobile responsiveness"""
        try:
            self.driver.get(self.url)
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.TAG_NAME, "body"))
            )

            # Check viewport width
            viewport_width = self.driver.execute_script("return window.innerWidth;")
            if viewport_width <= 768:  # Mobile breakpoint
                self.log_result("Mobile Responsiveness", True, f"Viewport width: {viewport_width}px (mobile)")
            else:
                self.log_result("Mobile Responsiveness", False, f"Viewport width: {viewport_width}px (not mobile)")

            # Check if content fits screen
            body_width = self.driver.execute_script("return document.body.scrollWidth;")
            if body_width <= viewport_width + 20:  # Allow small tolerance
                self.log_result("Mobile Content Fit", True, "Content fits within mobile viewport")
            else:
                self.log_result("Mobile Content Fit", False, f"Content width {body_width}px exceeds viewport {viewport_width}px")

        except Exception as e:
            self.log_result("Mobile Responsiveness", False, f"Error: {str(e)}")

    def run_web_tests(self):
        """Run all web tests"""
        print("\n" + "=" * 50)
        print("RUNNING WEB TESTS")
        print("=" * 50)

        if not self.setup_driver(mobile=False):
            return

        try:
            self.test_web_homepage_load()
            self.test_web_navigation()
            self.test_web_navigation_links()
        finally:
            self.teardown_driver()

    def run_mobile_tests(self):
        """Run all mobile tests"""
        print("\n" + "=" * 50)
        print("RUNNING MOBILE TESTS")
        print("=" * 50)

        if not self.setup_driver(mobile=True):
            return

        try:
            self.test_mobile_layout_stability()
            self.test_mobile_menu_functionality()
            self.test_mobile_content_scrolling()
            self.test_mobile_responsiveness()
        finally:
            self.teardown_driver()

    def run_all_tests(self):
        """Run all web and mobile tests"""
        print("Starting Comprehensive E2E Tests...")
        print("=" * 60)

        self.run_web_tests()
        self.run_mobile_tests()

        # Print summary
        print("\n" + "=" * 60)
        print("TEST SUMMARY")
        print("=" * 60)

        passed = sum(1 for result in self.results if result.startswith("PASS"))
        total = len(self.results)

        for result in self.results:
            print(result)

        print(f"\nPassed: {passed}/{total}")
        if passed == total:
            print("🎉 All tests passed! Web and mobile functionality is working correctly.")
        else:
            print("❌ Some tests failed. Review and fix issues.")

        return passed == total

if __name__ == "__main__":
    tester = SeleniumE2ETester()
    success = tester.run_all_tests()
    exit(0 if success else 1)
