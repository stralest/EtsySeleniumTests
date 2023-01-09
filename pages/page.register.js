const {By, Key, until} = require("selenium-webdriver");

module.exports = class RegisterPage {
#driver;
    
    constructor(driver){
    this.#driver = driver;
    }

    //Getting random string
    getRandomString(length) {
        var chars = 'abcdefghijklABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for ( var i = 0; i < length; i++ ) {
           result += chars[(Math.floor(Math.random() * chars.length))];
        }
        return result;
     }
      
    //Waiting for Email field to be located
    waitForEmailField(){
    return this.#driver.wait(until.elementLocated(By.id("join_neu_email_field")));
    }
    
    //Filling up email field with random string of 10 diffrent characters
    FilloutEmailField(){
    const emailField = this.#driver.findElement(By.id("join_neu_email_field"));
    return emailField.sendKeys(this.getRandomString(10) + "@example.local");
    }

    //Waiting for firstname field to be located
    waitForFirstnameField(){
    return this.#driver.wait(until.elementLocated(By.id("join_neu_first_name_field")));
    }

    //Filling up firstname field with random string of 10 diffrent characters
    FilloutFirstnameField(){
    const firstnameField = this.#driver.findElement(By.id("join_neu_first_name_field"));
    return firstnameField.sendKeys(this.getRandomString(10));
    }

    //Waiting for password field to be located
    waitForPasswordField(){
    return this.#driver.wait(until.elementLocated(By.id("join_neu_password_field")));
    }

    //Filling up password field with random string of 10 diffrent characters
    FilloutPasswordField(){
    const passwordField = this.#driver.findElement(By.id("join_neu_password_field"));
    return passwordField.sendKeys(this.getRandomString(10) + "123!Test");
    }

    //Waiting for register button to be located
    waitForRegisterButton(){
    return this.#driver.wait(until.elementLocated(By.name("submit_attempt")));
    }

    //Clicking on register button
    async clickOnRegisterButton(){
    const registerButton = await this.#driver.findElement(By.name("submit_attempt"));
    await registerButton.click();
    }
}

