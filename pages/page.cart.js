const {By, Key, until} = require("selenium-webdriver");

module.exports = class CartPage {
#driver;
    
    constructor(driver){
    this.#driver = driver;
    }

    //Waiting for quantity div so selenium can locate select and options
    waitForQuantitySelectDiv(){
    return this.#driver.wait(until.elementLocated(By.className("wt-grid__item-xs-5 wt-hide-xs wt-show-lg wt-pl-xs-3")));
    }

    //Selecting quantity div
    getQuantitySelectDiv(){
    return this.#driver.findElement(By.className("wt-grid__item-xs-5 wt-hide-xs wt-show-lg wt-pl-xs-3"));
    }

    //Waiting for Select menu on quantity div to be located
    waitForQuantitySelectButton(){
    return this.#driver.wait(until.elementLocated(By.name("listing-quantity")));
    }

    //Selecting Select menu on quantity div
    getQuantitySelect(quantitySelectDiv){
    return quantitySelectDiv.findElement(By.name("listing-quantity"));
    }    

    //waiting for Options in Select menu to be located
    waitForQuantityOptions(){
    return this.#driver.wait(until.elementLocated(By.css("option")));
    }

    //Selecting all options inside select menu so they can be used in .map() function
    getQuantityOptions(quantitySelect){
    return quantitySelect.findElements(By.css("option"));
    }

    //Waiting for payPal button to be located
    waitForPayPalButton(){
    return this.#driver.wait(until.elementLocated(By.className("proceed-to-checkout wt-btn wt-btn--filled wt-mt-xs-2 wt-width-full")));
    }   

    //Clicking on PayPal button
    async clicksOnPayPalButton(){
    const payPalButton = await this.#driver.findElement(By.className("proceed-to-checkout wt-btn wt-btn--filled wt-mt-xs-2 wt-width-full"));
    await payPalButton.click();
    }
}