package studentLoans.pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class FinancePageObjects {

	@FindBy(how = How.NAME, using = "borrower_income_yearly")
    public WebElement EmploymentIncome;
	
	@FindBy(how = How.NAME, using = "borrower_additional_income")
    public WebElement OtherIncome;
	
	@FindBy(how = How.CSS, using = "div[id$='borrower_additional_income_frequency']")
    public WebElement OtherIncomeFrequency;
	
	@FindBy(how = How.ID, using = "select2-results-5")
    public WebElement OtherIncomeFrequencyDropdown;
	
	@FindBy(how = How.NAME, using = "borrower_other_household_members_income")
    public WebElement FamilyIncome;
	
	@FindBy(how = How.CSS, using = "div[id$='borrower_other_household_members_income_frequency']")
    public WebElement FamilyIncomeFrequency;
	
	@FindBy(how = How.ID, using = "select2-results-6")
    public WebElement FamilyIncomeFrequencyDropdown;
	
	@FindBy(how = How.NAME, using = "borrower_housing_payment")
    public WebElement HousingPayment;
	
	@FindBy(how = How.CSS, using = "div[id$='borrower_citizenship_status']")
    public WebElement CitizenshipStatus;
	
	@FindBy(how = How.ID, using = "select2-results-7")
    public WebElement CitizenshipStatusDropdown;
	
	@FindBy(how = How.XPATH, using = "(//button[@data-ga-action='Continue'])[2]")
    public WebElement ContinueBtn;
	
	@FindBy(how = How.NAME, using = "borrower_alien_id")
    public WebElement AlienID;
}
