const {By, Key, until} = require("selenium-webdriver");
const BasePage = require("./page.base");

module.exports = class CartPage extends BasePage {
#driver;
    
    constructor(driver){
    super(driver);
    this.#driver = driver;
    }

    quantitySelectDiv = By.className("wt-grid__item-xs-5 wt-hide-xs wt-show-lg wt-pl-xs-3");
    quantitySelectButton = By.name("listing-quantity");
    quantityOptions = By.css("option");
    payPalButton = By.className("proceed-to-checkout wt-btn wt-btn--filled wt-mt-xs-2 wt-width-full");

    //Waiting for quantity div so selenium can locate select and options
    waitForQuantitySelectDiv(){
    return this.#driver.wait(until.elementLocated(this.quantitySelectDiv));
    }

    //Selecting quantity div
    getQuantitySelectDiv(){
    return this.#driver.findElement(this.quantitySelectDiv);
    }

    //Waiting for Select menu on quantity div to be located
    waitForQuantitySelectButton(){
    return this.#driver.wait(until.elementLocated(this.quantitySelectButton));
    }

    //Selecting Select menu on quantity div
    getQuantitySelect(quantitySelectDiv){
    return quantitySelectDiv.findElement(this.quantitySelectButton);
    }    

    //waiting for Options in Select menu to be located
    waitForQuantityOptions(){
    return this.#driver.wait(until.elementLocated(this.quantityOptions));
    }

    //Selecting all options inside select menu so they can be used in .map() function
    getQuantityOptions(quantitySelect){
    return quantitySelect.findElements(this.quantityOptions);
    }

    //Waiting for payPal button to be located
    waitForPayPalButton(){
    return this.#driver.wait(until.elementLocated(this.payPalButton));
    }   

    //Clicking on PayPal button
    async clicksOnPayPalButton(){
    const payPalButton = await this.#driver.findElement(this.payPalButton);
    await payPalButton.click();
    }
}