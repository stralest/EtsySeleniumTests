const {By, Key, until} = require("selenium-webdriver");

module.exports = class ItemCustomizationPage {
#driver;
    
    constructor(driver){
    this.#driver = driver;
    }

    //Waiting for select menu to be located
    waitForTipSelect(){
    return this.#driver.wait(until.elementLocated(By.id('variation-selector-0')));
    }

    //Selecting select menu
    getTipSelect(){
    return this.#driver.findElement(By.id('variation-selector-0'));
    }

    //Waiting for options in select menu to be located
    waitForOptions(){
    return this.#driver.wait(until.elementLocated(By.css("option")));
    }

    //Selecting options in select menu and using it in .map function
    getOptions(tipSelect){
    return tipSelect.findElements(By.css("option"));
    }

    //Waiting for add to cart button to be located
    waitForAddToCartButton(){
    return this.#driver.wait(until.elementLocated(By.className("wt-btn wt-btn--filled wt-width-full")));
    }

    //Clicking on add to cart button
    async clicksOnAddToCartButton(){
    const addToCart = await this.#driver.findElement(By.className("wt-btn wt-btn--filled wt-width-full"));
    await addToCart.click();
    }

    //Waiting for view cart button to be located
    waitForViewCartButton(){
    return this.#driver.wait(until.elementLocated(By.xpath("//a[@data-selector='post-atc-overlay-go-to-cart-button']")));
    }

    //Clicking on view cart button
    async clickOnViewCartButton(){
    const viewCart = await this.#driver.findElement(By.xpath("//a[@data-selector='post-atc-overlay-go-to-cart-button']"));
    await viewCart.click();
    }
}