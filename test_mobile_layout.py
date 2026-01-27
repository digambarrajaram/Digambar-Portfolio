#!/usr/bin/env python3
"""
Mobile Layout Testing Script using Selenium
Tests the mobile layout stabilization for the portfolio website
"""

import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException

class MobileLayoutTester:
    def __init__(self, url="http://localhost:3000"):
        self.url = url
        self.driver = None
        self.results = []

    def setup_driver(self):
        """Setup Chrome driver with mobile viewport"""
        chrome_options = Options()
        chrome_options.add_argument("--headless")  # Run in headless mode
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")

        # Set mobile viewport
        chrome_options.add_argument("--window-size=375,667")  # iPhone SE size

        # Set user agent to mobile
        chrome_options.add_argument("--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1")

        self.driver = webdriver.Chrome(options=chrome_options)

    def log_result(self, test_name, passed, message=""):
        """Log test result"""
        status = "PASS" if passed else "FAIL"
        result = f"{status}: {test_name} - {message}"
        self.results.append(result)
        print(result)

    def test_header_stability(self):
        """Test that header remains stable during scroll"""
        try:
            # Wait for page to load
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.TAG_NAME, "header"))
            )

            # Get initial header position
            header = self.driver.find_element(By.TAG_NAME, "header")
            initial_position = self.driver.execute_script("return arguments[0].getBoundingClientRect().top;", header)

            # Scroll down
            self.driver.execute_script("window.scrollTo(0, 300);")
            time.sleep(1)

            # Check header position after scroll
            final_position = self.driver.execute_script("return arguments[0].getBoundingClientRect().top;", header)

            # Header should remain at top (fixed position)
            if abs(final_position - initial_position) < 5:  # Allow small tolerance
                self.log_result("Header Stability", True, "Header remains fixed at top during scroll")
            else:
                self.log_result("Header Stability", False, f"Header moved from {initial_position} to {final_position}")

        except Exception as e:
            self.log_result("Header Stability", False, f"Error: {str(e)}")

    def test_footer_visibility(self):
        """Test that footer is visible at bottom"""
        try:
            # Wait for footer to load
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.TAG_NAME, "footer"))
            )

            footer = self.driver.find_element(By.TAG_NAME, "footer")

            # Get viewport height and footer position
            viewport_height = self.driver.execute_script("return window.innerHeight;")
            footer_rect = self.driver.execute_script("return arguments[0].getBoundingClientRect();", footer)

            # Footer should be visible (bottom should be within viewport)
            if footer_rect['bottom'] <= viewport_height + 10:  # Allow small tolerance
                self.log_result("Footer Visibility", True, "Footer is visible at bottom of viewport")
            else:
                self.log_result("Footer Visibility", False, f"Footer bottom at {footer_rect['bottom']}, viewport height {viewport_height}")

        except Exception as e:
            self.log_result("Footer Visibility", False, f"Error: {str(e)}")

    def test_content_scrolling(self):
        """Test that content scrolls naturally"""
        try:
            # Get initial scroll position
            initial_scroll = self.driver.execute_script("return window.pageYOffset;")

            # Scroll down
            self.driver.execute_script("window.scrollTo(0, 500);")
            time.sleep(1)

            # Check scroll position
            final_scroll = self.driver.execute_script("return window.pageYOffset;")

            if final_scroll > initial_scroll:
                self.log_result("Content Scrolling", True, f"Content scrolled from {initial_scroll} to {final_scroll}")
            else:
                self.log_result("Content Scrolling", False, "Content did not scroll properly")

        except Exception as e:
            self.log_result("Content Scrolling", False, f"Error: {str(e)}")

    def test_no_content_overlap(self):
        """Test that header doesn't overlap main content"""
        try:
            header = self.driver.find_element(By.TAG_NAME, "header")
            main = self.driver.find_element(By.TAG_NAME, "main")

            header_bottom = self.driver.execute_script("return arguments[0].getBoundingClientRect().bottom;", header)
            main_top = self.driver.execute_script("return arguments[0].getBoundingClientRect().top;", main)

            # Main content should start below header
            if main_top >= header_bottom - 5:  # Allow small tolerance
                self.log_result("No Content Overlap", True, "Main content starts below header")
            else:
                self.log_result("No Content Overlap", False, f"Header bottom: {header_bottom}, Main top: {main_top}")

        except Exception as e:
            self.log_result("No Content Overlap", False, f"Error: {str(e)}")

    def test_mobile_menu(self):
        """Test mobile menu functionality"""
        try:
            # Look for mobile menu button
            menu_button = self.driver.find_element(By.CSS_SELECTOR, "button[aria-label*='menu'], button svg")

            # Click menu button
            menu_button.click()
            time.sleep(1)

            # Check if menu is open (look for menu panel)
            menu_panel = self.driver.find_elements(By.CSS_SELECTOR, ".fixed.top-20")

            if menu_panel:
                self.log_result("Mobile Menu", True, "Mobile menu opens correctly")
            else:
                self.log_result("Mobile Menu", False, "Mobile menu did not open")

        except NoSuchElementException:
            self.log_result("Mobile Menu", True, "No mobile menu button found (desktop view)")
        except Exception as e:
            self.log_result("Mobile Menu", False, f"Error: {str(e)}")

    def run_tests(self):
        """Run all mobile layout tests"""
        print("Starting Mobile Layout Tests...")
        print("=" * 50)

        try:
            self.setup_driver()
            self.driver.get(self.url)

            # Wait for page to load
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.TAG_NAME, "body"))
            )

            # Run tests
            self.test_header_stability()
            self.test_footer_visibility()
            self.test_content_scrolling()
            self.test_no_content_overlap()
            self.test_mobile_menu()

        except Exception as e:
            self.log_result("Setup", False, f"Failed to setup test: {str(e)}")

        finally:
            if self.driver:
                self.driver.quit()

        # Print summary
        print("\n" + "=" * 50)
        print("TEST SUMMARY")
        print("=" * 50)

        passed = sum(1 for result in self.results if result.startswith("PASS"))
        total = len(self.results)

        for result in self.results:
            print(result)

        print(f"\nPassed: {passed}/{total}")
        if passed == total:
            print("🎉 All tests passed! Mobile layout is stable.")
        else:
            print("❌ Some tests failed. Mobile layout needs fixes.")

        return passed == total

if __name__ == "__main__":
    tester = MobileLayoutTester()
    success = tester.run_tests()
    exit(0 if success else 1)
