package studentLoans.pageActions;

import java.io.FileNotFoundException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

import org.json.JSONException;
import org.openqa.selenium.By;
import org.openqa.selenium.InvalidArgumentException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import studentLoan.utils.DriverHelper;
import studentLoan.utils.Hooks;
import studentLoan.utils.Log;
import studentLoans.pageObjects.ProfilePageObjects;

public class ProfilePageActions {

private static final ProfilePageObjects profilePage = PageFactory.initElements(DriverHelper.currentDriver(), ProfilePageObjects.class);
	
	public void urlCheck(String url){
		DriverHelper.URLCheck(url, 30);
	}
	
	public void provideName(String firstName, String middleName, String lastName, String suffix){
		DriverHelper.waitForElement(profilePage.FirstName, 30);
		profilePage.FirstName.sendKeys(firstName);
		if(!middleName.isEmpty()){
			profilePage.MiddleName.sendKeys(middleName);
		}
		profilePage.LastName.sendKeys(lastName);
		if(!suffix.isEmpty()){
			profilePage.Suffix.click();
			DriverHelper.waitForElement(profilePage.SuffixDropDown,30);
			List<WebElement> options = profilePage.SuffixDropDown.findElements(By.tagName("li"));
			boolean isSuffixSelected = false;
			for (WebElement option : options)
			{
			    if (option.getText().equals(suffix))
			    {
			    	isSuffixSelected=true;
			        option.click();
			        break;
			    }
			}
			if(!isSuffixSelected){
				Log.error("Invalid Suffix");
				throw new InvalidArgumentException("Invalid Suffix");
			}
		}
		Log.info("Profile Details submitted");
	}
	
	public void provideDOB(String dateOfBirth){
		profilePage.DOB.sendKeys(dateOfBirth);
		Log.info("Date of Birth submitted");
	}
	
	public void providePhoneDetails(String phoneNumber){
		profilePage.PhoneNumber.sendKeys(phoneNumber);
		Log.info("Phone Number Submitted");
	}
	
	public void provideFullAddress(String StreetAddress, String Unit, String city, String state, String zipCode){
		profilePage.AddressLink.click();
		DriverHelper.waitForElement(profilePage.StreetAddress, 30);
		profilePage.StreetAddress.sendKeys(StreetAddress);
		if(!Unit.isEmpty()){
			profilePage.AddressUnit.sendKeys(Unit);
		}
		profilePage.AddressCity.sendKeys(city);
		profilePage.State.click();
		DriverHelper.waitForElement(profilePage.StateOption,30);
		List<WebElement> options = profilePage.StateOption.findElements(By.tagName("li"));
		boolean isStateSelected = false;
		for (WebElement option : options)
		{
		    if (option.getText().equals(state))
		    {
		    	isStateSelected=true;
		        option.click();
		        break;
		    }
		}
		if(!isStateSelected){
			Log.error("Invalid State");
			throw new InvalidArgumentException("Invalid State");
		}
		profilePage.ZipCode.sendKeys(zipCode);
		Log.info("Address Details Submitted");
	}
	
	public void provideLoginDetails() throws JSONException, FileNotFoundException, Exception{
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		String monthdayTimeStamp = new SimpleDateFormat("MMddHHmmss").format(timestamp);
		profilePage.Email.sendKeys(Hooks.properties().getJSONObject("profile").getString("firstName")+monthdayTimeStamp+"@credible.com");
		Log.info("Email validated");
		DriverHelper.waitForElement(profilePage.Password, 30);
		profilePage.Password.sendKeys(Hooks.properties().getJSONObject("profile").getString("password"));
		DriverHelper.waitForElement(profilePage.PasswordToolTipUpperCaseValid, 30);
	    DriverHelper.waitForElement(profilePage.PasswordToolTipLowerCaseValid, 30);
	    DriverHelper.waitForElement(profilePage.PasswordToolTipNumberValid, 30);
	    DriverHelper.waitForElement(profilePage.PasswordToolTipMinCharValid, 30);
	    Log.info("Password validated");
	}
	
	public void emailValidation(){
		profilePage.Email.sendKeys("Great112217103@.com");
		DriverHelper.waitForElement(profilePage.emailErrorText,30);
		assertThat(profilePage.emailErrorText.getText()).isEqualTo("Please enter a valid email address.");
		profilePage.emailErrorText.click();
		profilePage.Email.click();
		assertThat(profilePage.emailErrorText.getText()).isEqualTo("Please enter a valid email address.");
		assertThat(profilePage.EmailToolTip.getText()).isEqualTo("Please enter a valid email");
		Log.info("Email tooltip Validated");
	}
	
	public void passwordValidation() throws JSONException, FileNotFoundException, Exception{
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		String monthdayTimeStamp = new SimpleDateFormat("MMddHHmmss").format(timestamp);
		profilePage.Email.sendKeys(Hooks.properties().getJSONObject("profile").getString("firstName")+monthdayTimeStamp+"@credible.com");
		DriverHelper.waitForElement(profilePage.Password, 30);
		profilePage.Password.sendKeys(Hooks.properties().getJSONObject("profile").getString("password"));
		profilePage.Password.clear();
		profilePage.Password.sendKeys(" ");
	    DriverHelper.waitForElement(profilePage.PasswordToolTipUpperCase, 30);
	    DriverHelper.waitForElement(profilePage.PasswordToolTipLowerCase, 30);
	    DriverHelper.waitForElement(profilePage.PasswordToolTipNumber, 30);
	    DriverHelper.waitForElement(profilePage.PasswordToolTipMinChar, 30);
	    Log.info("Password Tooltip Validated");
	}
}
