/**
 * ==========================================================
 * Dynamic Include Script
 * ----------------------------------------------------------
 * Author: YoHaiYo
 * GitHub : https://github.com/YoHaiYo/
 * License: MIT
 * ----------------------------------------------------------
 * Description:
 * This script enables dynamic inclusion of external HTML like Django.
 * components using a custom <include> tag. Specify the
 * file path with the "src" attribute, and this script will
 * load the file's content and replace the tag in the DOM.
 *
 * Copyright 2024 YoHaiYo. All rights reserved.
 * Unauthorized reproduction or distribution of this code
 * without express written permission is strictly prohibited.
 * ----------------------------------------------------------
 * Example Usage:
 * <include src="./header.html"></include>
 * ==========================================================
 */
document.querySelectorAll("include").forEach(async (el) => {
  const src = el.getAttribute("src");
  if (src) {
    try {
      const response = await fetch(src);
      if (response.ok) {
        const content = await response.text();
        el.outerHTML = content;
      } else {
        console.error(`Failed to load ${src}: ${response.statusText}`);
      }
    } catch (error) {
      console.error(`Error loading include file: ${error.message}`);
    }
  }
});
