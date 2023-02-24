const {By, Key, until} = require("selenium-webdriver");
const BasePage = require("./page.base");

module.exports = class HomePage extends BasePage {
#driver;
    
    constructor(driver){
    super(driver);
    this.#driver = driver;
    }
    
    welcomeHeader = By.className("welcome-message-text wt-hide-xs wt-show-lg wt-position-relative wt-text-center-xs wt-text-heading-01 wt-p-xs-3 wt-p-md-3");
    searchBarField = By.xpath("//input[@data-id = 'search-query']");

    //Waiting for welcome header to be located after successfully registration
    waitForWelcomeHeader(){
    return this.#driver.wait(until.elementLocated(this.welcomeHeader));
    }    

    //Selecting welcome header 
    getWelcomeHeader(){
    return this.#driver.findElement(this.welcomeHeader);
    }

    //Waiting for search field to be located
    waitForSerchBarField(){
    return this.#driver.wait(until.elementLocated(this.searchBarField));
    }

    //Selecting search field
    getSearchBarField(){
    return this.#driver.findElement(this.searchBarField);
    }
}