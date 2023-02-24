require('selenium-webdriver/chrome');
require('selenium-webdriver/edge');
const {Builder, By, Key, until} = require("selenium-webdriver");
const {expect, assert} = require("chai");
const RegisterPage = require("../pages/page.register");
const BasePage = require("../pages/page.base");
const HomePage = require("../pages/page.home");
const SearchResultPage = require("../pages/page.searchResult");
const FiltersPage = require("../pages/page.filters");
const ItemCustomizationPage = require("../pages/page.itemCustomization");
const CartPage = require("../pages/page.cart");

//Tests are hold inside describe block
describe("Etsy selenium tests", () => {
let driver;
let pageRegister;
let pageBase;
let pageHome;
let pageSearhcResult;
let pageFilters;
let pageItemCustomization;

const browsers = {
    chrome: 'chrome',
    microsoftEdge: 'MicrosoftEdge',
};

//Before block will execute before start of the tests
//Initializing driver, creating POM pattern and setuping tests in maximized mode
before(async() => {
    driver = await new Builder().forBrowser(browsers.chrome).build();
    await driver.manage().window().maximize();
    pageRegister = new RegisterPage(driver);
    pageBase = new BasePage(driver);
    pageHome = new HomePage(driver);
    pageSearhcResult = new SearchResultPage(driver);
    pageFilters = new FiltersPage(driver); 
    pageItemCustomization = new ItemCustomizationPage(driver);
    pageCart = new CartPage(driver);
})

//After block will execute after last test
//Closing browser after last test
after(async () => {
    await driver.quit();
})

//Opening registration page and asserting that url is correct.
it("Verifies that registration page is opened", async () => {
    await pageBase.goToPage("https://www.etsy.com/join");
    const registerUrl = await pageBase.getCurrentUrl();
    expect(await registerUrl).to.eql("https://www.etsy.com/join");
})

//TC 002.001 REGISTRATION
//Fillout email,firstname and password fields and clicks on register button.
it("Fillout register form", async () => {
    await pageRegister.waitForEmailField();
    await pageRegister.FilloutEmailField();

    await pageRegister.waitForFirstnameField();
    await pageRegister.FilloutFirstnameField();

    await pageRegister.waitForPasswordField();
    await pageRegister.FilloutPasswordField();

    await pageRegister.waitForRegisterButton();
    await pageRegister.clickOnRegisterButton();

    await pageHome.waitForWelcomeHeader();
    const welcomeTitle = await pageHome.getWelcomeHeader();
    expect(await welcomeTitle.getText()).to.contain("Welcome to Etsy,");

    const homepageUrl = await pageBase.getCurrentUrl();
    expect(await homepageUrl).to.eql("https://www.etsy.com/");

    await pageBase.refreshPage();
})

//TC 002.001 BROWSING AND SEARCHING
//Searching for a pen item in the search bar and clicking enter button on keyboard
it("Search for an item in the search bar field", async() => {
    await pageHome.waitForSerchBarField();
    const searchField = await pageHome.getSearchBarField();
    await searchField.sendKeys("pen", Key.ENTER);
})

//Asserting that right page is opened after searching for an item
it("Verifies that right seach page is opened", async() => {
    const searchResultUrl = await pageBase.getCurrentUrl();
    expect(await searchResultUrl).to.eql("https://www.etsy.com/search?q=pen&ref=search_bar");
})

//Clicking on filtering button
it("Clicks on filtering button", async() => {
    await pageSearhcResult.waitForFilterButton();
    await pageSearhcResult.ClickOnFilterButton();
})

//TC 001.001 FILTERING AND ADDING TO CART
//Filtering item with options - FREE shipping, Serbia
it("Filtering options - FREE shipping, Serbia", async() => {
    await pageFilters.waitForFreeShippingInput();
    await pageFilters.ClickOnFreeShippingInput();
    
    await pageFilters.waitForShopLocationInput();
    await pageFilters.ClickOnShopLocationInput();
    
    await pageFilters.waitForApplyButton();
    await pageFilters.clicksOnApplyButton();
})

//Clicking on the specific pen that is showed by filtering
it("Clicks on specific pen on the page", async() => {
    await driver.sleep(1200);
    await pageSearhcResult.waitForSpecificPen();
    await pageSearhcResult.clicksOnSpecificPen();
})

//TC 002.001 FILTERING AND ADDING TO CART
//Switching to new Tab, Going throught every single option with map function in the tip select, choosing 0.6 mm and addinng to Cart
it("Choosing tip of a pen and adding to cart", async() => {
    (await driver.getAllWindowHandles()).forEach(tab => driver.switchTo().window(tab));
    
    const tip = '1.2 mm';
     
    await pageItemCustomization.waitForTipSelect();
    const select = await pageItemCustomization.getTipSelect();
    
    await pageItemCustomization.waitForOptions();
    const options = await pageItemCustomization.getOptions(select);

    await Promise.all(options.map(async(option) => {
    const text = await option.getText();

    if(text === tip){
    await option.click();
    }

    }))
    
    await driver.sleep(1000);

    await pageItemCustomization.waitForAddToCartButton();
    await pageItemCustomization.clicksOnAddToCartButton();
})

//Asserting that shopping cart is successfully opened
it("Verify that shopping cart page is opened", async() => {
    await pageItemCustomization.waitForViewCartButton();
    await pageItemCustomization.clickOnViewCartButton();

    const cartUrl = await pageBase.getCurrentUrl();
    expect(await cartUrl).to.contain("https://www.etsy.com/cart");
})

//TC 001.001 MANAGING CART
//Customazing item quantity, choosing number 7, asserting that right amount is selected and proceeding to paypal page
it("Customazing quantity of an item and proceeding to PayPal", async() => {
    const quantity = "4";
     
    await pageCart.waitForQuantitySelectDiv();
    const quantitySelectDiv = await pageCart.getQuantitySelectDiv();

    await pageCart.waitForQuantitySelectButton();
    const quantitySelect = await pageCart.getQuantitySelect(quantitySelectDiv);

    await pageCart.waitForQuantityOptions();
    const quantityOptions = await pageCart.getQuantityOptions(quantitySelect);

    await Promise.all(quantityOptions.map(async (option) => {
    const text = await option.getText();

    if(text === quantity){
    await option.click();
    }

    }))

    const selectedItem = await quantitySelect.getAttribute("value");
    expect(await selectedItem).to.eql(quantity);

    await driver.sleep(1000);
    await pageCart.waitForPayPalButton();
    await pageCart.clicksOnPayPalButton();

    const payPalUrl = await pageBase.getCurrentUrl();
    expect(await payPalUrl).to.contain("https://www.paypal.com");
    })
})

