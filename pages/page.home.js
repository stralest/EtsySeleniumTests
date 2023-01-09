const {By, Key, until} = require("selenium-webdriver");

module.exports = class HomePage {
#driver;
    
    constructor(driver){
    this.#driver = driver;
    }

    //Waiting for welcome header to be located after successfully registration
    waitForWelcomeHeader(){
    return this.#driver.wait(until.elementLocated(By.className("welcome-message-text wt-hide-xs wt-show-lg wt-position-relative wt-text-center-xs wt-text-heading-01 wt-p-xs-3 wt-p-md-3")));
    }    

    //Selecting welcome header 
    getWelcomeHeader(){
    return this.#driver.findElement(By.className("welcome-message-text wt-hide-xs wt-show-lg wt-position-relative wt-text-center-xs wt-text-heading-01 wt-p-xs-3 wt-p-md-3"));
    }

    //Waiting for search field to be located
    waitForSerchBarField(){
    return this.#driver.wait(until.elementLocated(By.xpath("//input[@data-id = 'search-query']")));
    }

    //Selecting search field
    getSearchBarField(){
    return this.#driver.findElement(By.xpath("//input[@data-id = 'search-query']"));
    }
}