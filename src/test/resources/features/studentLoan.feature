Feature: Student Loan
  As a student or co-signer, I should be able check on the loan rates in credible by providing my educational, financial and profile details

Background: 
	Given I navigate to Credible Loan Rates Page
    When I click on "Student Loans" tile
    Then I click on Get My Loan Rates button
    And I select "I am the student" option
    Then I should be on "/student-loans/prequal/step/education"

  @student @e2e @priority-1
  @PROD @QA
  @test @regression
  Scenario: End to End Test

    Then I select "No" for checked rates before on credible
    Then I select "No" for check rates with parent or co-signer
   	And I provide education details in the Education page
   	Then I click on Continue button
   	Then I should be on "/student-loans/prequal/step/financial"   	
   	Then I provide financial details in the Financial page
   	Then I click on Continue button in Financial Page
   	Then I should be on "/student-loans/prequal/step/profile"
   	When I provide profile details in the Profile Page
   	And I provide Email and Password details in Log in or Create an Account Tile

  @student @education @priority-2
  @PROD @QA
  @test
  Scenario Outline: Education Page

    Then I select "No" for checked rates before on credible
    Then I select "No" for check rates with parent or co-signer
   	And I provide "<School Name>","<Degree Type>","<Field Of Study>","<Year Of Study>","<Graduation Date>","<Academic Period>","<Loan Amount>" in the Education page
   	Then I click on Continue button
   	Then I should be on "/student-loans/prequal/step/financial"
   	
   	Examples: 
   	| School Name                            | Degree Type            | Field Of Study | Year Of Study                | Graduation Date | Academic Period       | Loan Amount |
   	| University of California - Los Angeles | Bachelors              |                | Junior                       | 12/2021         | Spring only 2019      | 10000       |
   	| University of Southern California      | Certificate            |                | Freshman                     | 11/2019         | Summer only 2020      | 1000        |
   	| University of Illinois at Chicago      | Associates             |                | 5th year                     | 11/2029         | Winter only 2019      | 9000000     |
   	| Arizona State University               | Masters (including MBA)| MBA            | 1st year Grad                | 05/2025         | Fall 2019             | 5000        |
   	| Arizona State University               | Doctorate              | Medicine       | 3rd year Grad                | 01/2022         | Fall-Spring 2019-2020 | 1000000     |
   	| Arizona State University               | Post-Doctorate         | Dentistry      | 4th year Grad / Professional | 05/2025         | Spring only 2020      | 5000000     |
   	
  @student @financial @priority-2
  @PROD @QA
  @test @regression
  Scenario Outline: Financial Page

    Then I select "No" for checked rates before on credible
    Then I select "No" for check rates with parent or co-signer
   	And I provide education details in the Education page
   	Then I click on Continue button
   	Then I should be on "/student-loans/prequal/step/financial"   	
   	Then I provide "<Employment Income>", "<Other Income>","<Other Income Frequency>","<Household Income>","<Household Income Frequency>","<House Rent>","<Citizenship Status>","<Alien ID>" in the Financial page
   	Then I click on Continue button in Financial Page
   	Then I should be on "/student-loans/prequal/step/profile"
   	
   	Examples: 
   	| Employment Income | Other Income | Other Income Frequency | Household Income | Household Income Frequency | House Rent | Citizenship Status       | Alien ID  |
   	| 50000             | 10000        | Annually               | 500              | Monthly                    | 800        | US Citizen               |           |
   	| 9000000           | 9000000      | Annually               | 9000000          | Monthly                    | 9000000    | Permanent Resident Alien | 1234      |
   	| 1                 | 1            | Monthly                | 1                | Annually                   | 3          | Non-resident Alien       | ABCDEF    |
   	| 0                 | 0            | Annually               | 0                | Annually                   | 0          | H1 Visa Holder           | AB-(*)123 |
   	| 3000              | 3000         | Monthly                | 500              | Monthly                    | 800        | Other                    | ab/-32    |
   	
  @student @profile @priority-2
  @PROD @QA
  @test @regression
  Scenario Outline: Profile Page

    Then I select "No" for checked rates before on credible
    Then I select "No" for check rates with parent or co-signer
   	And I provide education details in the Education page
   	Then I click on Continue button
   	Then I should be on "/student-loans/prequal/step/financial"   	
   	Then I provide financial details in the Financial page
   	Then I click on Continue button in Financial Page
   	Then I should be on "/student-loans/prequal/step/profile"
   	When I provide "<First Name>","<Middle Name>","<Last Name>","<Suffix>","<Date of Birth>","<Phone Number>","<Street Address>","<Unit>","<City>","<State>","<ZipCode>" in the Profile Page
   	And I provide Email and Password details in Log in or Create an Account Tile
   	
   	Examples: 
   	| First Name | Middle Name | Last Name | Suffix | Date of Birth | Phone Number | Street Address     | Unit    | City       | State      | ZipCode |
   	| Great      |        | CredibleProd   |        | 12/12/1991    | 1234567890   | 1550 Scenic Avenue | Block 1 | Costa Mesa | California | 92626   |
   	| Great      | M      | CredibleProd   | Jr.    | 11/30/1899    | 9876543210   | Prairie Shores     | 1350    | Chicago    | Illinois   | 60616   |
   	| Great      |        | CredibleProd   | Sr.    | 11/30/2009    | 4569872012   | Deerwood           | Apt 2   | Tampa      | Florida    | 33601   |
   	| Great      |        | CredibleProd   | IV     | 11/30/1960    | 4566631351   | Ceasers Palace     |         | Las Vegas  | Nevada     | 89116   |
   	   	
  @student @priority-3
  @PROD @QA
  @test @email @tooltip
  Scenario: Mail Tooltip Validation

    Then I select "No" for checked rates before on credible
    Then I select "No" for check rates with parent or co-signer
   	And I provide education details in the Education page
   	Then I click on Continue button
   	Then I should be on "/student-loans/prequal/step/financial"   	
   	Then I provide financial details in the Financial page
   	Then I click on Continue button in Financial Page
   	Then I should be on "/student-loans/prequal/step/profile"
   	When I provide profile details in the Profile Page
   	Then I provide invalid mail address and validate tooltip
   	
  @student @priority-3
  @PROD @QA
  @test @password @tooltip
  Scenario: Password Tooltip Validation

    Then I select "No" for checked rates before on credible
    Then I select "No" for check rates with parent or co-signer
   	And I provide education details in the Education page
   	Then I click on Continue button
   	Then I should be on "/student-loans/prequal/step/financial"   	
   	Then I provide financial details in the Financial page
   	Then I click on Continue button in Financial Page
   	Then I should be on "/student-loans/prequal/step/profile"
   	When I provide profile details in the Profile Page
   	Then I provide invalid password and validate tooltip
   	
  @student @priority-3
  @PROD @QA
  @test @dobTooltip @tooltip
  Scenario Outline: DOB Tooltip Validation

    Then I select "No" for checked rates before on credible
    Then I select "No" for check rates with parent or co-signer
   	And I provide education details in the Education page
   	Then I click on Continue button
   	Then I should be on "/student-loans/prequal/step/financial"   	
   	Then I provide financial details in the Financial page
   	Then I click on Continue button in Financial Page
   	Then I should be on "/student-loans/prequal/step/profile"
   	Then I provide invalid dob "<DOB>"

	Examples:
   	| DOB |
   	| 11/23/1890    |
   	| 05/12/2050    |
   	
  @student @priority-3
  @PROD @QA
  @test @Date @tooltip
  Scenario Outline: Date Tooltip Validation

    Then I select "No" for checked rates before on credible
    Then I select "No" for check rates with parent or co-signer
   	And I provide invalid completion year "<month/year>"
   	
   	Examples:
   	| month/year |
   	| 11/1991    |
   	| 05/2050    |
   	
  @student @priority-3
  @PROD @QA
  @test @LoanAmount @tooltip
  Scenario Outline: Loan Amount Tooltip Validation

    Then I select "No" for checked rates before on credible
    Then I select "No" for check rates with parent or co-signer
   	And I provide invalid loan amount "<amount>"
   	
   	Examples:
   	| amount |
   	| 100    |
   	| 999    |
   	
  @student @priority-3
  @PROD @QA
  @test @financeTooltip @tooltip
  Scenario: Financial Page Tooltip Validation

    Then I select "No" for checked rates before on credible
    Then I select "No" for check rates with parent or co-signer
    And I provide education details in the Education page
   	Then I click on Continue button
   	Then I should be on "/student-loans/prequal/step/financial"
   	And I validate employment income and housing payment field