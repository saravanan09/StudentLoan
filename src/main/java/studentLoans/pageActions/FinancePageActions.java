package studentLoans.pageActions;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.FileNotFoundException;
import java.util.List;

import org.json.JSONException;
import org.openqa.selenium.By;
import org.openqa.selenium.InvalidArgumentException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import studentLoan.utils.DriverHelper;
import studentLoan.utils.Hooks;
import studentLoan.utils.Log;
import studentLoans.pageObjects.FinancePageObjects;

public class FinancePageActions {

	private static final FinancePageObjects financePage = PageFactory.initElements(DriverHelper.currentDriver(), FinancePageObjects.class);
	
	public void urlCheck(String url){
		DriverHelper.URLCheck(url, 30);
	}
	
	public void provideEmploymentIncome(String income){
		DriverHelper.waitForElement(financePage.EmploymentIncome,30);
		financePage.EmploymentIncome.sendKeys(income);
		Log.info("Employment Income submitted");
	}
	
	public void provideOtherIncome(String otherIncome, String frequency){
		financePage.OtherIncome.sendKeys(otherIncome);
		Log.info("Other Income Provided");
		financePage.OtherIncomeFrequency.click();
		DriverHelper.waitForElement(financePage.OtherIncomeFrequencyDropdown,30);
		List<WebElement> options = financePage.OtherIncomeFrequencyDropdown.findElements(By.tagName("li"));
		boolean isFrequencySelected=false;
		for (WebElement option : options)
		{
		    if (option.getText().equals(frequency))
		    {
		        option.click();
		        isFrequencySelected=true;
		        Log.info("Other Income Frequency selected");
		        break;
		    }
		}
		if(!isFrequencySelected){
			Log.error("Invalid Other Income frequency");
			throw new InvalidArgumentException("Invalid Other Income frequency");
		}
	}
	
	public void provideFamilyIncome(String familyIncome, String frequency){
		financePage.FamilyIncome.sendKeys(familyIncome);
		Log.info("Family Income submitted");
		financePage.FamilyIncomeFrequency.click();
		DriverHelper.waitForElement(financePage.FamilyIncomeFrequencyDropdown,30);
		List<WebElement> options = financePage.FamilyIncomeFrequencyDropdown.findElements(By.tagName("li"));
		boolean isFamilyIncomeFreqSelected=false;
		for (WebElement option : options)
		{
		    if (option.getText().equals(frequency))
		    {
		        option.click();
		        isFamilyIncomeFreqSelected=true;
		        Log.info("Family Income Frequency selected");
		        break;
		    }
		}
		if(!isFamilyIncomeFreqSelected){
			Log.error("Invalid Family Income frequency");
			throw new InvalidArgumentException("Invalid Family Income frequency");
		}
	}
	
	public void provideHousingPayment(String housingPayment){
		financePage.HousingPayment.sendKeys(housingPayment);
		Log.info("Housing Payment submitted");
	}
	
	public void provideCitizenshipStatus(String status, String alienID){
		financePage.CitizenshipStatus.click();
		DriverHelper.waitForElement(financePage.CitizenshipStatusDropdown,30);
		List<WebElement> options = financePage.CitizenshipStatusDropdown.findElements(By.tagName("li"));
		boolean isCitizenshipStatus = false;
		for (WebElement option : options)
		{
		    if (option.getText().equals(status))
		    {
		        option.click();
		        isCitizenshipStatus = true;
		        Log.info("Citizenship status selected");
		        break;
		    }
		}
		if(!isCitizenshipStatus){
			Log.error("Invalid Citizenship Status");
			throw new InvalidArgumentException("Invalid Citizenship Status");
		}
		if(!status.equals("US Citizen")){
			DriverHelper.waitForElement(financePage.AlienID, 30);
			financePage.AlienID.sendKeys(alienID);
			Log.info("Alien ID submitted");
		}
	}
	
	public void ClickContinueBtn(){
		DriverHelper.waitForElementToClickable(financePage.ContinueBtn, 30);
		financePage.ContinueBtn.click();
	}
	
	public void financeFieldValidation() throws JSONException, FileNotFoundException, Exception{
		financePage.EmploymentIncome.sendKeys(Hooks.properties().getJSONObject("financial").getString("employmentIncome"));
		financePage.EmploymentIncome.clear();
		financePage.HousingLink.click();
		financePage.EmploymentIncome.click();
		DriverHelper.waitForElement(financePage.IncomeToolTip, 30);
		assertThat(financePage.IncomeToolTip.getText()).isEqualTo("Please complete this field");
		
		financePage.HousingPayment.sendKeys(Hooks.properties().getJSONObject("financial").getString("houseRent"));
		financePage.HousingPayment.clear();
		financePage.IncomeLink.click();
		financePage.HousingPayment.click();
		DriverHelper.waitForElement(financePage.HousingToolTip, 30);
		assertThat(financePage.HousingToolTip.getText()).isEqualTo("This is required by lenders to assess your credit-worthiness");
		
	}
}
