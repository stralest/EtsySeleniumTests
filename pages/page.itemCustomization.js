const {By, Key, until} = require("selenium-webdriver");
const BasePage = require("./page.base");

module.exports = class ItemCustomizationPage extends BasePage {
#driver;
    
    constructor(driver){
    super(driver);
    this.#driver = driver;
    }
     
    tipSelect = By.id('variation-selector-0');
    options = By.css("option");
    addToCartButton = By.className("wt-btn wt-btn--filled wt-width-full");
    viewCartButton = By.xpath("//a[@data-selector='post-atc-overlay-go-to-cart-button']");
    addToCartDiv = By.id('atc-overlay-content');
    penTitleDiv = By.xpath('//h1[@class="wt-text-body-01 wt-line-height-tight wt-break-word wt-mt-xs-1"]');

    //Waiting for select menu to be located
    waitForTipSelect(){
    return this.#driver.wait(until.elementLocated(this.tipSelect));
    }

    //Selecting select menu
    getTipSelect(){
    return this.#driver.findElement(this.tipSelect);
    }

    //Waiting for options in select menu to be located
    waitForOptions(){
    return this.#driver.wait(until.elementLocated(this.options));
    }

    //Selecting options in select menu and using it in .map function
    getOptions(tipSelect){
    return tipSelect.findElements(this.options);
    }

    //Waiting for add to cart button to be located
    waitForAddToCartButton(){
    return this.#driver.wait(until.elementLocated(this.addToCartButton));
    }

    //Clicking on add to cart button
    async clicksOnAddToCartButton(){
    const addToCart = await this.#driver.findElement(this.addToCartButton);
    await addToCart.click();
    }

    //Waiting for view cart button to be located
    waitForViewCartButton(){
    return this.#driver.wait(until.elementLocated(this.viewCartButton));
    }

    //Clicking on view cart button
    async clickOnViewCartButton(){
    const viewCart = await this.#driver.findElement(this.viewCartButton);
    await viewCart.click();
    }

    getAddToCartDiv(){
        return this.#driver.findElement(this.addToCartDiv);
    }

    getAddToCartHeader(addToCartDiv){
        return addToCartDiv.findElement(By.xpath('//h3[@class="wt-text-title-02 wt-ml-xs-3 wt-display-inline-flex-xs"]'));
    }

    getPenTitleDiv(){
        return this.#driver.findElement(this.penTitleDiv);
    }
}