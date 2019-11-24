package studentLoans.pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ProfilePageObjects {
	@FindBy(how = How.NAME, using = "borrower_first_name")
    public WebElement FirstName;
	
	@FindBy(how = How.NAME, using = "borrower_middle_name")
    public WebElement MiddleName;
	
	@FindBy(how = How.NAME, using = "borrower_last_name")
    public WebElement LastName;
	
	@FindBy(how = How.CSS, using = "div[id$=borrower_suffix_name]")
    public WebElement Suffix;
	
	@FindBy(how = How.ID, using = "select2-results-8")
    public WebElement SuffixDropDown;
	
	@FindBy(how = How.NAME, using = "borrower_dob")
    public WebElement DOB;
	
	@FindBy(how = How.NAME, using = "borrower_phone")
    public WebElement PhoneNumber;
	
	@FindBy(how = How.LINK_TEXT, using = "Enter it manually")
    public WebElement AddressLink;
	
	@FindBy(how = How.NAME, using = "current_address_full_address")
    public WebElement FullAddress;
	
	@FindBy(how = How.NAME, using = "current_address_unit")
    public WebElement Unit;
	
	@FindBy(how = How.ID, using = "c237_email")
    public WebElement Email;
	
	@FindBy(how = How.ID, using = "c237_password")
    public WebElement Password;
	
	@FindBy(how = How.NAME, using = "current_address_street")
    public WebElement StreetAddress;
	
	@FindBy(how = How.NAME, using = "current_address_unit")
    public WebElement AddressUnit;
	
	@FindBy(how = How.NAME, using = "current_address_city")
    public WebElement AddressCity;
	
	@FindBy(how = How.CSS, using = "div[id$=current_address_state]")
    public WebElement State;
	
	@FindBy(how = How.ID, using = "select2-results-9")
    public WebElement StateOption;
	
	@FindBy(how = How.NAME, using = "current_address_zipcode")
    public WebElement ZipCode;
	
	@FindBy(how = How.XPATH, using = "//*[contains(text(),'Please enter a valid email address.')]")
    public WebElement emailErrorText;
	
	@FindBy(how = How.XPATH, using = "//*[@id='c237_email']//following-sibling::div")
    public WebElement EmailToolTip;
	
	@FindBy(how = How.XPATH, using = "//*[@class='password-validation-tooltip']//following::li[contains(@class,'uppercase-requirement invalid')]")
    public WebElement PasswordToolTipUpperCase;
	
	@FindBy(how = How.XPATH, using = "//*[@class='password-validation-tooltip']//following::li[contains(@class,'lowercase-requirement invalid')]")
    public WebElement PasswordToolTipLowerCase;
	
	@FindBy(how = How.XPATH, using = "//*[@class='password-validation-tooltip']//following::li[contains(@class,'number-requirement invalid')]")
    public WebElement PasswordToolTipNumber;
	
	@FindBy(how = How.XPATH, using = "//*[@class='password-validation-tooltip']//following::li[contains(@class,'min-eight-chars-requirement invalid')]")
    public WebElement PasswordToolTipMinChar;

	@FindBy(how = How.XPATH, using = "//*[@class='password-validation-tooltip']//following::li[contains(@class,'uppercase-requirement valid')]")
    public WebElement PasswordToolTipUpperCaseValid;
	
	@FindBy(how = How.XPATH, using = "//*[@class='password-validation-tooltip']//following::li[contains(@class,'lowercase-requirement valid')]")
    public WebElement PasswordToolTipLowerCaseValid;
	
	@FindBy(how = How.XPATH, using = "//*[@class='password-validation-tooltip']//following::li[contains(@class,'number-requirement valid')]")
    public WebElement PasswordToolTipNumberValid;
	
	@FindBy(how = How.XPATH, using = "//*[@class='password-validation-tooltip']//following::li[contains(@class,'min-eight-chars-requirement valid')]")
    public WebElement PasswordToolTipMinCharValid;
	
	@FindBy(how = How.XPATH, using = "//*[@name='borrower_dob']//following-sibling::div")
    public WebElement DOBToolTip;
}
