const {By, Key, until} = require("selenium-webdriver");

module.exports = class SearchResultPage {
#driver;
    
    constructor(driver){
    this.#driver = driver;
    }   
    
    //Waiting for filter button to be located
    waitForFilterButton(){
    return this.#driver.wait(until.elementLocated(By.id("search-filter-button")));
    }

    //Clicking filter button
    async ClickOnFilterButton(){
    const filterButton = await this.#driver.findElement(By.id("search-filter-button"));
    await filterButton.click();
    } 

    //Waiting for item to be located - pen
    waitForSpecificPen(){
    return this.#driver.wait(until.elementLocated(By.xpath("//img[@src='https://i.etsystatic.com/11959465/r/il/c582b4/3662906860/il_340x270.3662906860_i7s4.jpg']")));
    }

    //Click on item - pen
    async clicksOnSpecificPen(){
    const penPhoto = await this.#driver.findElement(By.xpath("//img[@src='https://i.etsystatic.com/11959465/r/il/c582b4/3662906860/il_340x270.3662906860_i7s4.jpg']"));
    await penPhoto.click();
    }
}