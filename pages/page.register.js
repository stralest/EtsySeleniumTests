const {By, Key, until} = require("selenium-webdriver");
const BasePage = require("./page.base");

module.exports = class RegisterPage extends BasePage {
#driver;
    
    constructor(driver){
    super(driver);
    this.#driver = driver;
    }

    emailField = By.id("join_neu_email_field");
    firstNameField = By.id("join_neu_first_name_field");
    passwordField = By.id("join_neu_password_field");
    registerButton = By.name("submit_attempt");

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
    return this.#driver.wait(until.elementLocated(this.emailField));
    }
    
    //Filling up email field with random string of 10 diffrent characters
    FilloutEmailField(){
    const emailField = this.#driver.findElement(this.emailField);
    return emailField.sendKeys(this.getRandomString(10) + "@example.local");
    }

    //Waiting for firstname field to be located
    waitForFirstnameField(){
    return this.#driver.wait(until.elementLocated(this.firstNameField));
    }

    //Filling up firstname field with random string of 10 diffrent characters
    FilloutFirstnameField(){
    const firstnameField = this.#driver.findElement(this.firstNameField);
    return firstnameField.sendKeys(this.getRandomString(10));
    }

    //Waiting for password field to be located
    waitForPasswordField(){
    return this.#driver.wait(until.elementLocated(this.passwordField));
    }

    //Filling up password field with random string of 10 diffrent characters
    FilloutPasswordField(){
    const passwordField = this.#driver.findElement(this.passwordField);
    return passwordField.sendKeys(this.getRandomString(10) + "123!Test");
    }

    //Waiting for register button to be located
    waitForRegisterButton(){
    return this.#driver.wait(until.elementLocated(this.registerButton));
    }

    //Clicking on register button
    async clickOnRegisterButton(){
    const registerButton = await this.#driver.findElement(this.registerButton);
    await registerButton.click();
    }
}

