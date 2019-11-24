$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/studentLoan.feature");
formatter.feature({
  "name": "Student Loan",
  "description": "  As a student or co-signer, I should be able check on the loan rates in credible by providing my educational, financial and profile details",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Profile Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@profile"
    },
    {
      "name": "@priority-2"
    },
    {
      "name": "@PROD"
    },
    {
      "name": "@QA"
    },
    {
      "name": "@test"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I select \"No\" for checked rates before on credible",
  "keyword": "Then "
});
formatter.step({
  "name": "I select \"No\" for check rates with parent or co-signer",
  "keyword": "Then "
});
formatter.step({
  "name": "I provide education details in the Education page",
  "keyword": "And "
});
formatter.step({
  "name": "I click on Continue button",
  "keyword": "Then "
});
formatter.step({
  "name": "I should be on \"/student-loans/prequal/step/financial\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I provide financial details in the Financial page",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on Continue button in Financial Page",
  "keyword": "Then "
});
formatter.step({
  "name": "I should be on \"/student-loans/prequal/step/profile\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I provide \"\u003cFirst Name\u003e\",\"\u003cMiddle Name\u003e\",\"\u003cLast Name\u003e\",\"\u003cSuffix\u003e\",\"\u003cDate of Birth\u003e\",\"\u003cPhone Number\u003e\",\"\u003cStreet Address\u003e\",\"\u003cUnit\u003e\",\"\u003cCity\u003e\",\"\u003cState\u003e\",\"\u003cZipCode\u003e\" in the Profile Page",
  "keyword": "When "
});
formatter.step({
  "name": "I provide Email and Password details in Log in or Create an Account Tile",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "First Name",
        "Middle Name",
        "Last Name",
        "Suffix",
        "Date of Birth",
        "Phone Number",
        "Street Address",
        "Unit",
        "City",
        "State",
        "ZipCode"
      ]
    },
    {
      "cells": [
        "Great",
        "",
        "CredibleProd",
        "",
        "12/12/1991",
        "1234567890",
        "1550 Scenic Avenue",
        "Block 1",
        "Costa Mesa",
        "California",
        "92626"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Credible Loan Rates Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_navigate_to_Credible_Loan_Rates_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Student Loans\" tile",
  "keyword": "When "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_click_on_tile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Get My Loan Rates button",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_click_on_Get_My_Loan_Rates_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"I am the student\" option",
  "keyword": "And "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_select_option(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be on \"/student-loans/prequal/step/education\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_should_be_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Profile Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@profile"
    },
    {
      "name": "@priority-2"
    },
    {
      "name": "@PROD"
    },
    {
      "name": "@QA"
    },
    {
      "name": "@test"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I select \"No\" for checked rates before on credible",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_select_for_checked_rates_before_on_credible(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select \"No\" for check rates with parent or co-signer",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_select_for_check_rates_with_parent_or_co_signer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide education details in the Education page",
  "keyword": "And "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_education_details_in_the_Education_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_click_on_Continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be on \"/student-loans/prequal/step/financial\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_should_be_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide financial details in the Financial page",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_financial_details_in_the_Financial_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Continue button in Financial Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_click_on_Continue_button_in_Financial_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be on \"/student-loans/prequal/step/profile\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_should_be_on(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide \"Great\",\"\",\"CredibleProd\",\"\",\"12/12/1991\",\"1234567890\",\"1550 Scenic Avenue\",\"Block 1\",\"Costa Mesa\",\"California\",\"92626\" in the Profile Page",
  "keyword": "When "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_in_the_Profile_Page(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide Email and Password details in Log in or Create an Account Tile",
  "keyword": "And "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_Email_and_Password_details_in_Log_in_or_Create_an_Account_Tile()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});