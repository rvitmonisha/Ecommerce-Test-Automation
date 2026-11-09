# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cart.spec.ts >> Add two products and verify shopping cart
- Location: tests\cart.spec.ts:5:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#cartModal')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" locator('#cartModal') with timeout 5000ms
  - waiting for locator('#cartModal')
    12 × locator resolved to <div id="cartModal" class="modal fade">…</div>
       - unexpected value "hidden"

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- img "Website for practice"
- textbox "Search Product"
- button ""
- heading "Category" [level=2]
- heading " Women" [level=4]:
  - link " Women":
    - /url: "#Women"
- heading " Men" [level=4]:
  - link " Men":
    - /url: "#Men"
- heading " Kids" [level=4]:
  - link " Kids":
    - /url: "#Kids"
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Website Hosting Services"
  - link "Domain Registration"
  - link "Email Hosting Solutions"
  - link "SSL Certificates"
  - link "Website Builder Tools"
  - link "Managed WordPress Hosting"
  - link "T-Shirts"
  - link "T SHIRT"
- heading "Brands" [level=2]
- list:
  - listitem:
    - link "(6) Polo":
      - /url: /brand_products/Polo
  - listitem:
    - link "(5) H&M":
      - /url: /brand_products/H&M
  - listitem:
    - link "(5) Madame":
      - /url: /brand_products/Madame
  - listitem:
    - link "(3) Mast & Harbour":
      - /url: /brand_products/Mast & Harbour
  - listitem:
    - link "(4) Babyhug":
      - /url: /brand_products/Babyhug
  - listitem:
    - link "(3) Allen Solly Junior":
      - /url: /brand_products/Allen Solly Junior
  - listitem:
    - link "(3) Kookie Kids":
      - /url: /brand_products/Kookie Kids
  - listitem:
    - link "(5) Biba":
      - /url: /brand_products/Biba
- heading "All Products" [level=2]
- img "ecommerce website products"
- heading "Rs. 500" [level=2]
- paragraph: Blue Top
- text:  Add to cart
- heading "Rs. 500" [level=2]
- paragraph: Blue Top
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/1
- img "ecommerce website products"
- heading "Rs. 400" [level=2]
- paragraph:
  - link "Men":
    - /url: "#"
    - img
    - text: Men
  - link "Tshirt":
    - /url: "#"
    - img
    - text: Tshirt
  - link "T-Shirts":
    - img
    - text: T-Shirts
- text:  Add to cart
- heading "Rs. 400" [level=2]
- paragraph: Men Tshirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/2
- img "ecommerce website products"
- heading "Rs. 1000" [level=2]
- paragraph:
  - text: Sleeveless
  - link "Dress":
    - /url: "#"
    - img
    - text: Dress
- text:  Add to cart
- heading "Rs. 1000" [level=2]
- paragraph: Sleeveless Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/3
- img "ecommerce website products"
- heading "Rs. 1500" [level=2]
- paragraph:
  - text: Stylish Dress
  - link "Browse Clothing":
    - img
    - text: Browse Clothing
- text:  Add to cart
- heading "Rs. 1500" [level=2]
- paragraph: Stylish Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/4
- img "ecommerce website products"
- heading "Rs. 600" [level=2]
- paragraph: Winter Top
- text:  Add to cart
- heading "Rs. 600" [level=2]
- paragraph: Winter Top
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/5
- img "ecommerce website products"
- heading "Rs. 400" [level=2]
- paragraph: Summer White Top
- text:  Add to cart
- heading "Rs. 400" [level=2]
- paragraph: Summer White Top
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/6
- img "ecommerce website products"
- heading "Rs. 1000" [level=2]
- paragraph: Madame Top For Women
- text:  Add to cart
- heading "Rs. 1000" [level=2]
- paragraph: Madame Top For Women
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/7
- img "ecommerce website products"
- heading "Rs. 700" [level=2]
- paragraph: Fancy Green Top
- text:  Add to cart
- heading "Rs. 700" [level=2]
- paragraph: Fancy Green Top
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/8
- img "ecommerce website products"
- heading "Rs. 499" [level=2]
- paragraph:
  - text: Sleeves Printed Top - White
  - link "Browse Clothing":
    - img
    - text: Browse Clothing
- text:  Add to cart
- heading "Rs. 499" [level=2]
- paragraph: Sleeves Printed Top - White
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/11
- img "ecommerce website products"
- heading "Rs. 359" [level=2]
- paragraph:
  - text: Half Sleeves Top Schiffli Detailing - Pink
  - link "Browse Clothing":
    - img
    - text: Browse Clothing
- text:  Add to cart
- heading "Rs. 359" [level=2]
- paragraph: Half Sleeves Top Schiffli Detailing - Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/12
- img "ecommerce website products"
- heading "Rs. 278" [level=2]
- paragraph: Frozen Tops For Kids
- text:  Add to cart
- heading "Rs. 278" [level=2]
- paragraph: Frozen Tops For Kids
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/13
- img "ecommerce website products"
- heading "Rs. 679" [level=2]
- paragraph:
  - text: Full Sleeves Top Cherry - Pink
  - link "Browse Clothing":
    - img
    - text: Browse Clothing
- text:  Add to cart
- heading "Rs. 679" [level=2]
- paragraph: Full Sleeves Top Cherry - Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/14
- img "ecommerce website products"
- heading "Rs. 315" [level=2]
- paragraph: Printed Off Shoulder Top - White
- text:  Add to cart
- heading "Rs. 315" [level=2]
- paragraph: Printed Off Shoulder Top - White
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/15
- img "ecommerce website products"
- heading "Rs. 478" [level=2]
- paragraph: Sleeves Top and Short - Blue & Pink
- text:  Add to cart
- heading "Rs. 478" [level=2]
- paragraph: Sleeves Top and Short - Blue & Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/16
- img "ecommerce website products"
- heading "Rs. 1200" [level=2]
- paragraph: Little Girls Mr. Panda Shirt
- text:  Add to cart
- heading "Rs. 1200" [level=2]
- paragraph: Little Girls Mr. Panda Shirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/18
- img "ecommerce website products"
- heading "Rs. 1050" [level=2]
- paragraph: Sleeveless Unicorn Patch Gown - Pink
- text:  Add to cart
- heading "Rs. 1050" [level=2]
- paragraph: Sleeveless Unicorn Patch Gown - Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/19
- img "ecommerce website products"
- heading "Rs. 1190" [level=2]
- paragraph: Cotton Mull Embroidered Dress
- text:  Add to cart
- heading "Rs. 1190" [level=2]
- paragraph: Cotton Mull Embroidered Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/20
- img "ecommerce website products"
- heading "Rs. 1530" [level=2]
- paragraph: Blue Cotton Indie Mickey Dress
- text:  Add to cart
- heading "Rs. 1530" [level=2]
- paragraph: Blue Cotton Indie Mickey Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/21
- img "ecommerce website products"
- heading "Rs. 1600" [level=2]
- paragraph: Long Maxi Tulle Fancy Dress Up Outfits -Pink
- text:  Add to cart
- heading "Rs. 1600" [level=2]
- paragraph: Long Maxi Tulle Fancy Dress Up Outfits -Pink
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/22
- img "ecommerce website products"
- heading "Rs. 1100" [level=2]
- paragraph: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
- text:  Add to cart
- heading "Rs. 1100" [level=2]
- paragraph: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/23
- img "ecommerce website products"
- heading "Rs. 849" [level=2]
- paragraph: Colour Blocked Shirt – Sky Blue
- text:  Add to cart
- heading "Rs. 849" [level=2]
- paragraph: Colour Blocked Shirt – Sky Blue
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/24
- img "ecommerce website products"
- heading "Rs. 1299" [level=2]
- paragraph: Pure Cotton V-Neck T-Shirt
- text:  Add to cart
- heading "Rs. 1299" [level=2]
- paragraph: Pure Cotton V-Neck T-Shirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/28
- img "ecommerce website products"
- heading "Rs. 1000" [level=2]
- paragraph: Green Side Placket Detail T-Shirt
- text:  Add to cart
- heading "Rs. 1000" [level=2]
- paragraph: Green Side Placket Detail T-Shirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/29
- img "ecommerce website products"
- heading "Rs. 1500" [level=2]
- paragraph: Premium Polo T-Shirts
- text:  Add to cart
- heading "Rs. 1500" [level=2]
- paragraph: Premium Polo T-Shirts
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/30
- img "ecommerce website products"
- heading "Rs. 850" [level=2]
- paragraph: Pure Cotton Neon Green Tshirt
- text:  Add to cart
- heading "Rs. 850" [level=2]
- paragraph: Pure Cotton Neon Green Tshirt
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/31
- img "ecommerce website products"
- heading "Rs. 799" [level=2]
- paragraph: Soft Stretch Jeans
- text:  Add to cart
- heading "Rs. 799" [level=2]
- paragraph: Soft Stretch Jeans
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/33
- img "ecommerce website products"
- heading "Rs. 1200" [level=2]
- paragraph: Regular Fit Straight Jeans
- text:  Add to cart
- heading "Rs. 1200" [level=2]
- paragraph: Regular Fit Straight Jeans
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/35
- img "ecommerce website products"
- heading "Rs. 1400" [level=2]
- paragraph: Grunt Blue Slim Fit Jeans
- text:  Add to cart
- heading "Rs. 1400" [level=2]
- paragraph: Grunt Blue Slim Fit Jeans
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/37
- img "ecommerce website products"
- heading "Rs. 2300" [level=2]
- paragraph: Rose Pink Embroidered Maxi Dress
- text:  Add to cart
- heading "Rs. 2300" [level=2]
- paragraph: Rose Pink Embroidered Maxi Dress
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/38
- img "ecommerce website products"
- heading "Rs. 3000" [level=2]
- paragraph: Cotton Silk Hand Block Print Saree
- text:  Add to cart
- heading "Rs. 3000" [level=2]
- paragraph: Cotton Silk Hand Block Print Saree
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/39
- img "ecommerce website products"
- heading "Rs. 3500" [level=2]
- paragraph: Rust Red Linen Saree
- text:  Add to cart
- heading "Rs. 3500" [level=2]
- paragraph: Rust Red Linen Saree
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/40
- img "ecommerce website products"
- heading "Rs. 5000" [level=2]
- paragraph: Beautiful Peacock Blue Cotton Linen Saree
- text:  Add to cart
- heading "Rs. 5000" [level=2]
- paragraph: Beautiful Peacock Blue Cotton Linen Saree
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/41
- img "ecommerce website products"
- heading "Rs. 1400" [level=2]
- paragraph: Lace Top For Women
- text:  Add to cart
- heading "Rs. 1400" [level=2]
- paragraph: Lace Top For Women
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/42
- img "ecommerce website products"
- heading "Rs. 1389" [level=2]
- paragraph: GRAPHIC DESIGN MEN T SHIRT - BLUE
- text:  Add to cart
- heading "Rs. 1389" [level=2]
- paragraph: GRAPHIC DESIGN MEN T SHIRT - BLUE
- text:  Add to cart
- list:
  - listitem:
    - link " View Product":
      - /url: /product_details/43
- insertion
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- link "":
  - /url: "#top"
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | import { CartPage } from '../pages/CartPage';
  4  | 
  5  | test('Add two products and verify shopping cart', async ({ page }) => {
  6  | 
  7  |     const cart = new CartPage(page);
  8  | 
  9  |     // Open products page directly
  10 |     await page.goto('https://automationexercise.com/products');
  11 | 
  12 |     // Verify products are loaded
  13 |     const products = page.locator('.product-image-wrapper');
  14 | 
  15 |     await expect(products.first()).toBeVisible();
  16 | 
  17 |     // Add first product
  18 |     await page.locator('.product-image-wrapper')
  19 |         .nth(0)
  20 |         .locator('.add-to-cart')
  21 |         .first()
  22 |         .click();
  23 | 
  24 |     // Continue shopping
  25 |     const modal = page.locator('#cartModal');
  26 | 
> 27 |     await expect(modal).toBeVisible();
     |                         ^ Error: expect(locator).toBeVisible() failed
  28 | 
  29 |     await modal.getByRole('button', {
  30 |         name: 'Continue Shopping'
  31 |     }).click();
  32 | 
  33 |     // Add second product
  34 |     await page.locator('.product-image-wrapper')
  35 |         .nth(1)
  36 |         .locator('.add-to-cart')
  37 |         .first()
  38 |         .click();
  39 | 
  40 |     await expect(modal).toBeVisible();
  41 | 
  42 |     // Open cart
  43 |     await modal.getByRole('link', {
  44 |         name: 'View Cart'
  45 |     }).click();
  46 | 
  47 |     // Verify cart URL
  48 |     await expect(page).toHaveURL(/view_cart/);
  49 | 
  50 |     // Verify two products
  51 |     await expect(cart.cartRows).toHaveCount(2);
  52 | 
  53 |     // Verify product details
  54 |     for (const row of await cart.cartRows.all()) {
  55 |         await expect(row.locator('.cart_description h4 a'))
  56 |             .toBeVisible();
  57 | 
  58 |         await expect(row.locator('.cart_price p'))
  59 |             .toBeVisible();
  60 | 
  61 |         await expect(row.locator('.cart_quantity button'))
  62 |             .toHaveText('1');
  63 | 
  64 |         await expect(row.locator('.cart_total p'))
  65 |             .toBeVisible();
  66 |     }
  67 | });
  68 | 
```