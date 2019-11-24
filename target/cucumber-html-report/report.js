$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/studentLoan.feature");
formatter.feature({
  "name": "Student Loan",
  "description": "  As a student or co-signer, I should be able check on the loan rates in credible by providing my educational, financial and profile details",
  "keyword": "Feature"
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
  "name": "End to End Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@e2e"
    },
    {
      "name": "@priority-1"
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
  "name": "I provide profile details in the Profile Page",
  "keyword": "When "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_profile_details_in_the_Profile_Page()"
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
formatter.scenarioOutline({
  "name": "Education Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@education"
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
  "name": "I provide \"\u003cSchool Name\u003e\",\"\u003cDegree Type\u003e\",\"\u003cField Of Study\u003e\",\"\u003cYear Of Study\u003e\",\"\u003cGraduation Date\u003e\",\"\u003cAcademic Period\u003e\",\"\u003cLoan Amount\u003e\" in the Education page",
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
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "School Name",
        "Degree Type",
        "Field Of Study",
        "Year Of Study",
        "Graduation Date",
        "Academic Period",
        "Loan Amount"
      ]
    },
    {
      "cells": [
        "University of California - Los Angeles",
        "Bachelors",
        "",
        "Junior",
        "12/2021",
        "Spring only 2019",
        "10000"
      ]
    },
    {
      "cells": [
        "University of Southern California",
        "Certificate",
        "",
        "Freshman",
        "11/2019",
        "Summer only 2020",
        "1000"
      ]
    },
    {
      "cells": [
        "University of Illinois at Chicago",
        "Associates",
        "",
        "5th year",
        "11/2029",
        "Winter only 2019",
        "9000000"
      ]
    },
    {
      "cells": [
        "Arizona State University",
        "Masters (including MBA)",
        "MBA",
        "1st year Grad",
        "05/2025",
        "Fall 2019",
        "5000"
      ]
    },
    {
      "cells": [
        "Arizona State University",
        "Doctorate",
        "Medicine",
        "3rd year Grad",
        "01/2022",
        "Fall-Spring 2019-2020",
        "1000000"
      ]
    },
    {
      "cells": [
        "Arizona State University",
        "Post-Doctorate",
        "Dentistry",
        "4th year Grad / Professional",
        "05/2025",
        "Spring only 2020",
        "5000000"
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
  "name": "Education Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@education"
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
  "name": "I provide \"University of California - Los Angeles\",\"Bachelors\",\"\",\"Junior\",\"12/2021\",\"Spring only 2019\",\"10000\" in the Education page",
  "keyword": "And "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_in_the_Education_page(String,String,String,String,String,String,String)"
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
formatter.after({
  "status": "passed"
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
  "name": "Education Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@education"
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
  "name": "I provide \"University of Southern California\",\"Certificate\",\"\",\"Freshman\",\"11/2019\",\"Summer only 2020\",\"1000\" in the Education page",
  "keyword": "And "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_in_the_Education_page(String,String,String,String,String,String,String)"
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
formatter.after({
  "status": "passed"
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
  "name": "Education Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@education"
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
  "name": "I provide \"University of Illinois at Chicago\",\"Associates\",\"\",\"5th year\",\"11/2029\",\"Winter only 2019\",\"9000000\" in the Education page",
  "keyword": "And "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_in_the_Education_page(String,String,String,String,String,String,String)"
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
formatter.after({
  "status": "passed"
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
  "name": "Education Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@education"
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
  "name": "I provide \"Arizona State University\",\"Masters (including MBA)\",\"MBA\",\"1st year Grad\",\"05/2025\",\"Fall 2019\",\"5000\" in the Education page",
  "keyword": "And "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_in_the_Education_page(String,String,String,String,String,String,String)"
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
formatter.after({
  "status": "passed"
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
  "name": "Education Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@education"
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
  "name": "I provide \"Arizona State University\",\"Doctorate\",\"Medicine\",\"3rd year Grad\",\"01/2022\",\"Fall-Spring 2019-2020\",\"1000000\" in the Education page",
  "keyword": "And "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_in_the_Education_page(String,String,String,String,String,String,String)"
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
formatter.after({
  "status": "passed"
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
  "name": "Education Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@education"
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
  "name": "I provide \"Arizona State University\",\"Post-Doctorate\",\"Dentistry\",\"4th year Grad / Professional\",\"05/2025\",\"Spring only 2020\",\"5000000\" in the Education page",
  "keyword": "And "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_in_the_Education_page(String,String,String,String,String,String,String)"
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
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Financial Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@financial"
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
  "name": "I provide \"\u003cEmployment Income\u003e\", \"\u003cOther Income\u003e\",\"\u003cOther Income Frequency\u003e\",\"\u003cHousehold Income\u003e\",\"\u003cHousehold Income Frequency\u003e\",\"\u003cHouse Rent\u003e\",\"\u003cCitizenship Status\u003e\",\"\u003cAlien ID\u003e\" in the Financial page",
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
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Employment Income",
        "Other Income",
        "Other Income Frequency",
        "Household Income",
        "Household Income Frequency",
        "House Rent",
        "Citizenship Status",
        "Alien ID"
      ]
    },
    {
      "cells": [
        "50000",
        "10000",
        "Annually",
        "500",
        "Monthly",
        "800",
        "US Citizen",
        ""
      ]
    },
    {
      "cells": [
        "9000000",
        "9000000",
        "Annually",
        "9000000",
        "Monthly",
        "9000000",
        "Permanent Resident Alien",
        "1234"
      ]
    },
    {
      "cells": [
        "1",
        "1",
        "Monthly",
        "1",
        "Annually",
        "3",
        "Non-resident Alien",
        "ABCDEF"
      ]
    },
    {
      "cells": [
        "0",
        "0",
        "Annually",
        "0",
        "Annually",
        "0",
        "H1 Visa Holder",
        "AB-(*)123"
      ]
    },
    {
      "cells": [
        "3000",
        "3000",
        "Monthly",
        "500",
        "Monthly",
        "800",
        "Other",
        "ab/-32"
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
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : }\n  (Session info: chrome\u003d78.0.3904.97): \nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027SARAVANAN\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 78.0.3904.97, chrome: {chromedriverVersion: 77.0.3865.40 (f484704e052e0..., userDataDir: C:\\Users\\SARAVA~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:61210}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: ignore}\nSession ID: 458e2b3a7be00ff3738d56a8949cbd80\n*** Element info: {Using\u003dcss selector, value\u003ddiv[data-test-id\u003d\u0027product-card-SL\u0027]}\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat studentLoan.utils.DriverHelper.waitForElement(DriverHelper.java:51)\r\n\tat studentLoans.pageActions.LaunchPageActions.navigateURL(LaunchPageActions.java:31)\r\n\tat studentLoan.stepDefs.runner.StudentLoansStepDefs.i_navigate_to_Credible_Loan_Rates_Page(StudentLoansStepDefs.java:18)\r\n\tat ✽.I navigate to Credible Loan Rates Page(classpath:features/studentLoan.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on \"Student Loans\" tile",
  "keyword": "When "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_click_on_tile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Get My Loan Rates button",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_click_on_Get_My_Loan_Rates_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I select \"I am the student\" option",
  "keyword": "And "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_select_option(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be on \"/student-loans/prequal/step/education\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_should_be_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Financial Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@financial"
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
  "status": "skipped"
});
formatter.step({
  "name": "I select \"No\" for check rates with parent or co-signer",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_select_for_check_rates_with_parent_or_co_signer(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I provide education details in the Education page",
  "keyword": "And "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_education_details_in_the_Education_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_click_on_Continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be on \"/student-loans/prequal/step/financial\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_should_be_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I provide \"50000\", \"10000\",\"Annually\",\"500\",\"Monthly\",\"800\",\"US Citizen\",\"\" in the Financial page",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_in_the_Financial_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Continue button in Financial Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_click_on_Continue_button_in_Financial_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be on \"/student-loans/prequal/step/profile\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_should_be_on(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
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
  "name": "Financial Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@financial"
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
  "name": "I provide \"9000000\", \"9000000\",\"Annually\",\"9000000\",\"Monthly\",\"9000000\",\"Permanent Resident Alien\",\"1234\" in the Financial page",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_in_the_Financial_page(String,String,String,String,String,String,String,String)"
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
formatter.after({
  "status": "passed"
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
  "name": "Financial Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@financial"
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
  "name": "I provide \"1\", \"1\",\"Monthly\",\"1\",\"Annually\",\"3\",\"Non-resident Alien\",\"ABCDEF\" in the Financial page",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_in_the_Financial_page(String,String,String,String,String,String,String,String)"
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
formatter.after({
  "status": "passed"
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
  "name": "Financial Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@financial"
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
  "name": "I provide \"0\", \"0\",\"Annually\",\"0\",\"Annually\",\"0\",\"H1 Visa Holder\",\"AB-(*)123\" in the Financial page",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_in_the_Financial_page(String,String,String,String,String,String,String,String)"
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
formatter.after({
  "status": "passed"
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
  "name": "Financial Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@financial"
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
  "name": "I provide \"3000\", \"3000\",\"Monthly\",\"500\",\"Monthly\",\"800\",\"Other\",\"ab/-32\" in the Financial page",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_in_the_Financial_page(String,String,String,String,String,String,String,String)"
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
formatter.after({
  "status": "passed"
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
    },
    {
      "cells": [
        "Great",
        "M",
        "CredibleProd",
        "Jr.",
        "11/30/1899",
        "9876543210",
        "Prairie Shores",
        "1350",
        "Chicago",
        "Illinois",
        "60616"
      ]
    },
    {
      "cells": [
        "Great",
        "",
        "CredibleProd",
        "Sr.",
        "11/30/2009",
        "4569872012",
        "Deerwood",
        "Apt 2",
        "Tampa",
        "Florida",
        "33601"
      ]
    },
    {
      "cells": [
        "Great",
        "",
        "CredibleProd",
        "IV",
        "11/30/1960",
        "4566631351",
        "Ceasers Palace",
        "",
        "Las Vegas",
        "Nevada",
        "89116"
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
  "name": "I provide \"Great\",\"M\",\"CredibleProd\",\"Jr.\",\"11/30/1899\",\"9876543210\",\"Prairie Shores\",\"1350\",\"Chicago\",\"Illinois\",\"60616\" in the Profile Page",
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
  "name": "I provide \"Great\",\"\",\"CredibleProd\",\"Sr.\",\"11/30/2009\",\"4569872012\",\"Deerwood\",\"Apt 2\",\"Tampa\",\"Florida\",\"33601\" in the Profile Page",
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
  "name": "I provide \"Great\",\"\",\"CredibleProd\",\"IV\",\"11/30/1960\",\"4566631351\",\"Ceasers Palace\",\"\",\"Las Vegas\",\"Nevada\",\"89116\" in the Profile Page",
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
  "name": "Mail Tooltip Validation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@priority-3"
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
      "name": "@email"
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
  "name": "I provide profile details in the Profile Page",
  "keyword": "When "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_profile_details_in_the_Profile_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide invalid mail address and validate tooltip",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_invalid_mail_address_and_validate_tooltip()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "Password Tooltip Validation",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@student"
    },
    {
      "name": "@priority-3"
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
      "name": "@password"
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
  "name": "I provide profile details in the Profile Page",
  "keyword": "When "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_profile_details_in_the_Profile_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I provide invalid password and validate tooltip",
  "keyword": "Then "
});
formatter.match({
  "location": "StudentLoansStepDefs.i_provide_invalid_password_and_validate_tooltip()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});