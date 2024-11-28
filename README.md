# includeHTML : html library

## **Overview**

The Dynamic Include Script enables you to load external HTML components into your web pages effortlessly. By using a custom `<include>` tag, you can dynamically insert reusable HTML elements such as headers, footers, or any other components. This script is lightweight, dependency-free, and designed for modern web development.

---

## **Getting Started**

### **Include the Script**

To use this script, simply include the following CDN in the `<head>` of your HTML file:

```html
<script
  src="https://cdn.jsdelivr.net/gh/YoHaiYo/includeHTML@main/v1/includeHTML.js"
  defer
></script>
```

### **Usage Example**

Here’s how you can use the `<include>` tag to dynamically insert external HTML components:

### **Example HTML Structure**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dynamic Include Example</title>
    <script
      src="https://cdn.jsdelivr.net/gh/YoHaiYo/includeHTML@main/v1/includeHTML.js"
      defer
    ></script>
  </head>
  <body>
    <!-- Include a header component -->
    <include src="./header.html"></include>

    <!-- Main content -->
    <div id="content">
      <h2>Welcome to My Website</h2>
      <p>This is the main content area.</p>
    </div>

    <!-- Include a footer component -->
    <include src="./footer.html"></include>
  </body>
</html>
```

### **header.html**

```html
<header>
  <h1>Welcome to the Website</h1>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

### **footer.html**

```html
<footer>
  <p>© 2024 YoHaiYo. All rights reserved.</p>
</footer>
```

---

## **How It Works**

1. The `<include>` tag identifies the external file to load via the `src` attribute.
2. The script fetches the specified file and replaces the `<include>` tag with the content of the file.
3. This allows seamless integration of reusable components across multiple HTML files.

---

## **Features**

- **Dynamic HTML Inclusion**: Load external HTML files and inject them into your web page.
- **Reusable Components**: Manage headers, footers, or other shared components in separate files.
- **Simple & Lightweight**: No dependencies required, works with plain JavaScript.

---

## **Copyright and License**

```
 ==========================================================
 Dynamic Include Script
 ----------------------------------------------------------
 Author: YoHaiYo
 GitHub : https://github.com/YoHaiYo/includeHTML/
 License: MIT
 ----------------------------------------------------------
 Description:
 This script enables dynamic inclusion of external HTML like Django.
 components using a custom <include> tag. Specify the
 file path with the "src" attribute, and this script will
 load the file's content and replace the tag in the DOM.

 Copyright 2024 YoHaiYo. All rights reserved.
 Unauthorized reproduction or distribution of this code
 without express written permission is strictly prohibited.
 ----------------------------------------------------------
 Example Usage:
 <include src="./header.html"></include>
 ==========================================================
```

---

Feel free to tweak this README to match your exact preferences! Let me know if you’d like to adjust any section. 😊
