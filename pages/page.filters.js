const {By, Key, until} = require("selenium-webdriver");

module.exports = class FiltersPage {
#driver;
    
    constructor(driver){
    this.#driver = driver;
    }   

    //Waiting for Free shipping option in filtering menu to be located
    waitForFreeShippingInput(){
    return this.#driver.wait(until.elementLocated(By.xpath("//label[@for='special-offers-free-shipping']")));
    }

    //Clicking on Free shipping option in filtering menu
    async ClickOnFreeShippingInput(){
    const freeShippingInput = await this.#driver.findElement(By.xpath("//label[@for='special-offers-free-shipping']"));
    await freeShippingInput.click();
    }
    
    //waiting for shop location option in filtering menu to be located
    waitForShopLocationInput(){
    return this.#driver.wait(until.elementLocated(By.xpath("//label[@for='shop-location-input-2']")));
    }

    //clickling on shop location option in filtering menu
    async ClickOnShopLocationInput(){
    const shopLocationInput = await this.#driver.findElement(By.xpath("//label[@for='shop-location-input-2']"));
    await shopLocationInput.click();
    }

    //Waiting for apply button in filtering menu to be located
    waitForApplyButton(){
    return this.#driver.wait(until.elementLocated(By.className("wt-btn wt-btn--primary wt-width-full wt-mt-xs-3 wt-mb-xs-3 wt-mr-xs-3")));
    }

    //Clicking on apply button in filtering menu
    async clicksOnApplyButton(){
    const applyButton = await this.#driver.findElement(By.className("wt-btn wt-btn--primary wt-width-full wt-mt-xs-3 wt-mb-xs-3 wt-mr-xs-3"));
    await applyButton.click();
    }
}