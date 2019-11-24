package studentLoans.pageObjects;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class EducationPageObjects {

	@FindBy(how = How.CSS, using = "label[for$='checked_rates-0'] span[class='radio-icon']")
    public WebElement CredibleBeforeRadioYesBtn;
	
	@FindBy(how = How.CSS, using = "label[for$='checked_rates-1'] span[class='radio-icon']")
    public WebElement CredibleBeforeRadioNoBtn;
	
	@FindBy(how = How.CSS, using = "label[for$='checked_rates-2'] span[class='radio-icon']")
    public WebElement CredibleBeforeRadioNotSureBtn;
	
	@FindBy(how = How.CSS, using = "label[for$='borrower_has_cosigner-0'] span[class='radio-icon']")
    public WebElement OtherRadioYesBtn;
	
	@FindBy(how = How.CSS, using = "label[for$='borrower_has_cosigner-1'] span[class='radio-icon']")
    public WebElement OtherRadioNoBtn;
	
	@FindBy(how = How.CSS, using = "label[for$='borrower_has_cosigner-2'] span[class='radio-icon']")
    public WebElement OtherRadioNotSureBtn;
	
	@FindBy(how = How.NAME, using = "education_name")
    public WebElement EducationName;
	
	@FindBy(how = How.CSS, using = "div[role='option']")
    public List<WebElement> EducationNameDropDown;
	
	@FindBy(how = How.CSS, using = "div[id$=education_degree_type]")
    public WebElement DegreeType;
	
	@FindBy(how = How.ID, using = "select2-results-1")
    public WebElement DegreeTypeDropDown;
	
	@FindBy(how = How.CSS, using = "div[id$=education_field_name]")
    public WebElement FieldOfStudy;
	
	@FindBy(how = How.ID, using = "select2-results-2")
    public WebElement FieldOfStudyDropDown;
	
	@FindBy(how = How.CSS, using = "div[id$=education_current_year]")
    public WebElement YearOfStudy;
	
	@FindBy(how = How.ID, using = "select2-results-3")
    public WebElement YearOfStudyDropDown;
	
	@FindBy(how = How.NAME, using = "education_completion_date")
    public WebElement CompletionDate;
	
	@FindBy(how = How.CSS, using = "div[id$=education_academic_period_loan]")
    public WebElement PeriodOfLoan;
	
	@FindBy(how = How.ID, using = "select2-results-4")
    public WebElement PeriodOfLoanDropDown;
	
	@FindBy(how = How.NAME, using = "education_requested_loan_amount")
    public WebElement LoanAmount;
	
	@FindBy(how = How.CSS, using = "button[data-ga-action='Continue']:not([disabled='disabled'])")
    public WebElement ContinueBtn;
	
	@FindBy(how = How.ID, using = "c145_email")
    public WebElement Email;
	
	@FindBy(how = How.XPATH, using = "//*[contains(text(),'How do I calculate?')]")
    public WebElement LoanAmountLink;
	
	@FindBy(how = How.XPATH, using = "//*[contains(text(),\"What if I'm not sure?\")]")
    public WebElement DateLink;
	
	@FindBy(how = How.XPATH, using = "//*[@name='education_completion_date']//following-sibling::div")
    public WebElement DateToolTip;
	
	@FindBy(how = How.XPATH, using = "//*[@name='education_requested_loan_amount']//following-sibling::div")
    public WebElement AmountToolTip;
}
