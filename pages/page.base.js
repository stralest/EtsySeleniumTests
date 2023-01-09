const {By, Key, until} = require("selenium-webdriver");

module.exports = class BasePage {
#driver;
    
    constructor(driver){
    this.#driver = driver;
    }

    //Going to specific URL
    goToPage(url){
    return this.#driver.get(url);
    }

    //Getting url in real time
    getCurrentUrl(){
    return this.#driver.getCurrentUrl();
    }

    //Getting Title in real time
    getTitle(){
    return this.#driver.getTitle();
    }

    //Refresh page
    refreshPage(){
    return this.#driver.navigate().refresh();
    }
}