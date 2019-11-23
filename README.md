# StudentLoan

This automation was scripted on page object model custom framework with Java/WebDriver/cucumber BDD feature file. You will be able to execute the test, by importing into Eclipse IDE and run it from feature file or Runner class - RunnerTest.java.

I have used maven dependencies for the required dependencies and webdriver manager dependency for the the chrome driver.

The folder structure is as follows,

The folder structure is as follows,
- src/main/java
  - studentLoan.utils
    - BrowserFactory.java - Contains the Browser Capabilities and Initialization
    - DriverHelper.java - Contains re-usable/common functions
    - Hooks.java - Contains Cucumber @Before/@After functions
    - Log.java - Contains Logger functions
  - studentLoans.pageActions
    - Contains classes functions of the actions performed in the pages
  - studentLoans.pageObjects
    - Contains classes page objects of the each page
- src/main/resources
  - config
    - config.json - Contains the static variable values
    - log4j.properties - Contains properties to log information

- src/test/resources
  - features
    - studentLoan.feature - Contains the cucumber test scenario in gherkins
- src/test/java
  - studentLoan.stepDefs.runner
    - StudentLoansRunnerTest.java - Contains Runner Class to execute the test in the feature file
    - StudentLoansStepDefs.java - Contains the step definitions for the corresponding feature file
- target
  - pretty-cucumber/cucumber-html-reports
     - Reports generated in html and json formats
- Log4j
   - log4j-application.log - contains log reports
- screenshots - Contains failure screenshots
  
