// @ts-check
import { test, expect } from '@playwright/test';
// Verifing the login functionality with valid credentials
test('Verifing the login functionality with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.screenshot({path:'Swag_Labs3.png'});
}   );
// Verifing the login functionality with invalid credentials
test('Verifing the login functionality with invalid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');        
  await page.locator('#user-name').fill('standard_user1');  
    await page.locator('#password').fill('secret_sauce1');
    await page.locator('#login-button').click();
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    await page.screenshot({path:'Swag_Labs4.png'});
}   );
// Verifing the login functionality with blank credentials
test('Verifing the login functionality with blank credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');        
    await page.locator('#user-name').fill('');
    await page.locator('#password').fill('');   
    await page.locator('#login-button').click();
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Username is required');
    await page.screenshot({path:'Swag_Labs5.png'});
}   );
// Verifing the login functionality with blank username
test('Verifing the login functionality with blank username', async ({ page }) => {  
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('');
    await page.locator('#password').fill('secret sauce');   
    await page.locator('#login-button').click();
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Username is required');
    await page.screenshot({path:'Swag_Labs6.png'});
}   );
// Verifing the login functionality with blank password
test('Verifing the login functionality with blank password', async ({ page }) => {  
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('');   
    await page.locator('#login-button').click();
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Password is required');
    await page.screenshot({path:'Swag_Labs7.png'});
}   );
// Verifing the login functionality with locked out user
test('Verifing the login functionality with locked out user', async ({ page }) => {  
    await page.goto('https://www.saucedemo.com/');  
    await page.locator('#user-name').fill('locked_out_user');
    await page.locator('#password').fill('secret_sauce');   
    await page.locator('#login-button').click();
    await expect(page.locator('h3[data-test="error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    await page.screenshot({path:'Swag_Labs8.png'});
}   );
// Verifing the login functionality with problem user
test('Verifing the login functionality with problem user', async ({ page }) => {  
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('problem_user');
    await page.locator('#password').fill('secret_sauce');   
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.screenshot({path:'Swag_Labs9.png'});
}   );
// Verifing the login functionality with performance glitch user
test('Verifing the login functionality with performance glitch user', async ({ page }) => {             

    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('performance_glitch_user');
    await page.locator('#password').fill('secret_sauce');   
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.screenshot({path:'Swag_Labs10.png'});
}   );  
// Verifing the reset app state functionality
test('Verifing the reset app state functionality', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('button[id="react-burger-menu-btn"]').click();
    await page.locator('#reset_sidebar_link').click();
    await page.screenshot({path:'Swag_Labs11.png'});
}   );
// Verifing the logout functionality
test('Verifing the logout functionality', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');      
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');       
    await page.locator('button[id="react-burger-menu-btn"]').click();
    await page.locator('#logout_sidebar_link').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await page.screenshot({path:'Swag_Labs12.png'});
}   );