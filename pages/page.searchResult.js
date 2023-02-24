const {By, Key, until} = require("selenium-webdriver");
const BasePage = require("./page.base");

module.exports = class SearchResultPage extends BasePage {
#driver;
    
    constructor(driver){
    super(driver);
    this.#driver = driver;
    }   

    filterButton = By.id("search-filter-button");
    spesificPen = By.xpath("//img[@src='https://i.etsystatic.com/11959465/r/il/c582b4/3662906860/il_340x270.3662906860_i7s4.jpg']");
    
    //Waiting for filter button to be located
    waitForFilterButton(){
    return this.#driver.wait(until.elementLocated(this.filterButton));
    }

    //Clicking filter button
    async ClickOnFilterButton(){
    const filterButton = await this.#driver.findElement(this.filterButton);
    await filterButton.click();
    } 

    //Waiting for item to be located - pen
    waitForSpecificPen(){
    return this.#driver.wait(until.elementLocated(this.spesificPen));
    }

    //Click on item - pen
    async clicksOnSpecificPen(){
    const penPhoto = await this.#driver.findElement(this.spesificPen);
    await penPhoto.click();
    }
}