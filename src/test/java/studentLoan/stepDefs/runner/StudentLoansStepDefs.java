package studentLoan.stepDefs.runner;

import java.io.FileNotFoundException;
import org.json.JSONException;

import studentLoan.utils.Hooks;

import studentLoans.pageActions.PageNavigation;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class StudentLoansStepDefs {
	
	@Given("I navigate to Credible Loan Rates Page")
	public void i_navigate_to_Credible_Loan_Rates_Page() throws FileNotFoundException, Exception {
	     PageNavigation.LaunchPage().navigateURL();
	}

	@When("I click on {string} tile")
	public void i_click_on_tile(String strTile) throws Exception {
	     PageNavigation.LaunchPage().selectTile(strTile);
	}

	@Then("I click on Get My Loan Rates button")
	public void i_click_on_Get_My_Loan_Rates_button() {
	     PageNavigation.LaunchPage().clickLoanRatesBtn();
	}

	@Then("I select {string} option")
	public void i_select_option(String strFormSelector) throws Exception {
	     PageNavigation.LaunchPage().clickFormSelectorBtn(strFormSelector);
	}

	@Then("I should be on {string}")
	public void i_should_be_on(String url) {
	     PageNavigation.EducationPage().urlCheck(url);
	}

	@Then("I select {string} for checked rates before on credible")
	public void i_select_for_checked_rates_before_on_credible(String option) throws Exception {
	     PageNavigation.EducationPage().CheckedRatesBeforeOnCredible(option);
	}

	@Then("I select {string} for check rates with parent or co-signer")
	public void i_select_for_check_rates_with_parent_or_co_signer(String option) throws Exception {
	     PageNavigation.EducationPage().OtherCheckRates(option);
	}

	@Then("I provide {string},{string},{string},{string},{string},{string},{string} in the Education page")
	public void i_provide_in_the_Education_page(String institutionName, String degree, String fieldOfStudy, String yearOfStudy, String monthYear, String periodOfLoan, String amount) {
	     PageNavigation.EducationPage().EducationName(institutionName);
	     PageNavigation.EducationPage().DegreeType(degree, fieldOfStudy);
	     PageNavigation.EducationPage().YearOfStudy(yearOfStudy);
	     PageNavigation.EducationPage().CompletionDate(monthYear);
	     PageNavigation.EducationPage().PeriodOfLoan(periodOfLoan);
	     PageNavigation.EducationPage().LoanAmount(amount);
	}

	@Then("I click on Continue button")
	public void i_click_on_Continue_button() {
	     PageNavigation.EducationPage().ClickContinueBtn();
	}

	@Then("I provide education details in the Education page")
	public void i_provide_education_details_in_the_Education_page() throws JSONException, FileNotFoundException, Exception {
		PageNavigation.EducationPage().EducationName(Hooks.properties().getJSONObject("education").getString("schoolName"));
	    PageNavigation.EducationPage().DegreeType(Hooks.properties().getJSONObject("education").getString("degreeType"), Hooks.properties().getJSONObject("education").getString("fieldOfStudy"));
	    PageNavigation.EducationPage().YearOfStudy(Hooks.properties().getJSONObject("education").getString("yearOfStudy"));
	    PageNavigation.EducationPage().PeriodOfLoan(Hooks.properties().getJSONObject("education").getString("academicPeriod"));
	    PageNavigation.EducationPage().CompletionDate(Hooks.properties().getJSONObject("education").getString("graduationDate"));
	    PageNavigation.EducationPage().LoanAmount(Hooks.properties().getJSONObject("education").getString("loanAmount"));
	}

	@Then("I provide {string}, {string},{string},{string},{string},{string},{string},{string} in the Financial page")
	public void i_provide_in_the_Financial_page(String income, String otherIncome, String otherIncomeFrequency, String familyIncome, String familyIncomeFrequency, String housingPayment, String status, String alienID) {
	    PageNavigation.FinancialPage().provideEmploymentIncome(income);
	    PageNavigation.FinancialPage().provideOtherIncome(otherIncome, otherIncomeFrequency);
	    PageNavigation.FinancialPage().provideFamilyIncome(familyIncome, familyIncomeFrequency);
	    PageNavigation.FinancialPage().provideHousingPayment(housingPayment);
	    PageNavigation.FinancialPage().provideCitizenshipStatus(status, alienID);
	}

	@Then("I click on Continue button in Financial Page")
	public void i_click_on_Continue_button_in_Financial_Page() {
	    PageNavigation.FinancialPage().ClickContinueBtn();
	}

	@Then("I provide financial details in the Financial page")
	public void i_provide_financial_details_in_the_Financial_page() throws JSONException, FileNotFoundException, Exception {
		PageNavigation.FinancialPage().provideEmploymentIncome(Hooks.properties().getJSONObject("financial").getString("employmentIncome"));
	    PageNavigation.FinancialPage().provideOtherIncome(Hooks.properties().getJSONObject("financial").getString("otherIncome"), Hooks.properties().getJSONObject("financial").getString("otherIncomeFrequency"));
	    PageNavigation.FinancialPage().provideFamilyIncome(Hooks.properties().getJSONObject("financial").getString("householdIncome"), Hooks.properties().getJSONObject("financial").getString("householdIncomeFrequency"));
	    PageNavigation.FinancialPage().provideHousingPayment(Hooks.properties().getJSONObject("financial").getString("houseRent"));
	    PageNavigation.FinancialPage().provideCitizenshipStatus(Hooks.properties().getJSONObject("financial").getString("citizenzipStatus"), Hooks.properties().getJSONObject("financial").getString("alienID"));
	}

	@When("I provide {string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string} in the Profile Page")
	public void i_provide_in_the_Profile_Page(String firstName, String middleName, String lastName, String suffix, String dateOfBirth, String phoneNumber, String address, String unit, String city, String state, String zipCode) {
	    PageNavigation.ProfilePage().provideName(firstName, middleName, lastName, suffix);
	    PageNavigation.ProfilePage().provideDOB(dateOfBirth);
	    PageNavigation.ProfilePage().providePhoneDetails(phoneNumber);
	    PageNavigation.ProfilePage().provideFullAddress(address, unit, city, state, zipCode);
	}

	@When("I provide Email and Password details in Log in or Create an Account Tile")
	public void i_provide_Email_and_Password_details_in_Log_in_or_Create_an_Account_Tile() throws JSONException, FileNotFoundException, Exception {
	    PageNavigation.ProfilePage().provideLoginDetails();
	}
	
	@When("I provide profile details in the Profile Page")
	public void i_provide_profile_details_in_the_Profile_Page() throws JSONException, FileNotFoundException, Exception {
		PageNavigation.ProfilePage().provideName(Hooks.properties().getJSONObject("profile").getString("firstName"), Hooks.properties().getJSONObject("profile").getString("middleName"), Hooks.properties().getJSONObject("profile").getString("lastName"), Hooks.properties().getJSONObject("profile").getString("suffix"));
	    PageNavigation.ProfilePage().provideDOB(Hooks.properties().getJSONObject("profile").getString("dateOfBirth"));
	    PageNavigation.ProfilePage().providePhoneDetails(Hooks.properties().getJSONObject("profile").getString("phoneNumber"));
	    PageNavigation.ProfilePage().provideFullAddress(Hooks.properties().getJSONObject("profile").getString("address"), Hooks.properties().getJSONObject("profile").getString("unit"), Hooks.properties().getJSONObject("profile").getString("city"), Hooks.properties().getJSONObject("profile").getString("state"), Hooks.properties().getJSONObject("profile").getString("zipCode"));
	}

	@Then("I provide invalid mail address and validate tooltip")
	public void i_provide_invalid_mail_address_and_validate_tooltip() {
		PageNavigation.ProfilePage().emailValidation();
	}
	
	@Then("I provide invalid password and validate tooltip")
	public void i_provide_invalid_password_and_validate_tooltip() throws JSONException, FileNotFoundException, Exception {
		PageNavigation.ProfilePage().passwordValidation();
	}

}
