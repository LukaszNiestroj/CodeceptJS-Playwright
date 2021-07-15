Feature('Demo Feature');

Scenario('1.amOnPage-Test1', ({ I }) => {
    I.amOnPage('/');
    I.wait(2);
    I.amOnPage('https://www.youtube.com');
    I.wait(1);
    I.amOnPage('https://www.wp.pl');
    I.wait(1);


});

Scenario('2.TastCase2-Test', ({ I }) => {
    I.amOnPage('https://opensource-demo.orangehrmlive.com/');
    I.see("LOGIN Panel"); //rel XPath
    I.fillField("//input[@id='txtUsername']", "Admin"); // rel XPath
    I.fillField("//input[@id='txtPassword']", "admin123");
    I.click("#btnLogin"); // CSS
    I.see("Dashboard");
    I.dontSee("LOGIN Panel");
    I.click("//b[contains(text(),'Directory')]");
    I.see("Search Directory");
    I.fillField("//input[@id='searchDirectory_emp_name_empName']", "Peter Mac Anderson");
    I.click("#searchBtn"),
    I.see("Peter Mac Anderson");
    I.click("Dashboard");
    I.click("#welcome");
    I.click("//a[contains(text(),'Logout')]");

}); 

Scenario('3.GrabText-Test', async({ I }) => {
    I.amOnPage('https://the-internet.herokuapp.com/checkboxes');
    let a = await I.grabTextFrom("#checkboxes");
    console.log(a);

});

Scenario('4.SelectOptions-Test',({ I }) => {
    I.amOnPage('https://the-internet.herokuapp.com/dropdown');
    I.selectOption("#dropdown", "Option 1");
    I.wait(1);

});

Scenario('5.Wait-Test',({ I }) => {
    I.amOnPage('https://the-internet.herokuapp.com/dynamic_loading/1');
    I.click("//button[contains(text(),'Start')]");
    I.waitForText("Hello World!", 20);

});
