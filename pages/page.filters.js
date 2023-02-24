const {By, Key, until} = require("selenium-webdriver");
const BasePage = require("./page.base");

module.exports = class FiltersPage extends BasePage {
#driver;
    
    constructor(driver){
    super(driver);
    this.#driver = driver;
    }   

    freeShipingInput = By.xpath("//label[@for='special-offers-free-shipping']");
    shopLocationInput = By.xpath("//label[@for='shop-location-input-2']");
    applyButton = By.className("wt-btn wt-btn--primary wt-width-full wt-mt-xs-3 wt-mb-xs-3 wt-mr-xs-3");

    //Waiting for Free shipping option in filtering menu to be located
    waitForFreeShippingInput(){
    return this.#driver.wait(until.elementLocated(this.freeShipingInput));
    }

    //Clicking on Free shipping option in filtering menu
    async ClickOnFreeShippingInput(){
    const freeShippingInput = await this.#driver.findElement(this.freeShipingInput);
    await freeShippingInput.click();
    }
    
    //waiting for shop location option in filtering menu to be located
    waitForShopLocationInput(){
    return this.#driver.wait(until.elementLocated(this.shopLocationInput));
    }

    //clickling on shop location option in filtering menu
    async ClickOnShopLocationInput(){
    const shopLocationInput = await this.#driver.findElement(this.shopLocationInput);
    await shopLocationInput.click();
    }

    //Waiting for apply button in filtering menu to be located
    waitForApplyButton(){
    return this.#driver.wait(until.elementLocated(this.applyButton));
    }

    //Clicking on apply button in filtering menu
    async clicksOnApplyButton(){
    const applyButton = await this.#driver.findElement(this.applyButton);
    await applyButton.click();
    }
}