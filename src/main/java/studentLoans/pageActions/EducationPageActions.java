package studentLoans.pageActions;


import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.InvalidArgumentException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import studentLoan.utils.DriverHelper;
import studentLoan.utils.Hooks;
import studentLoan.utils.Log;
import studentLoans.pageObjects.EducationPageObjects;

public class EducationPageActions {
	
	private static final EducationPageObjects educationPage = PageFactory.initElements(DriverHelper.currentDriver(), EducationPageObjects.class);
	
	public void urlCheck(String url){
		DriverHelper.URLCheck(url, 30);
	}
	
	public void CheckedRatesBeforeOnCredible(String option) throws Exception{
		
		DriverHelper.waitForElement(educationPage.CredibleBeforeRadioYesBtn,30);
		switch(option){
		case "Yes":
			educationPage.CredibleBeforeRadioYesBtn.click();
			DriverHelper.waitForElement(educationPage.Email, 30);
			educationPage.Email.sendKeys(Hooks.properties().getJSONObject("eduction").getString("email"));
			Log.info("Yes, Rates checked on credible");
			break;
		case "No":
			educationPage.CredibleBeforeRadioNoBtn.click();
			Log.info("No, Rates not checked on credible");
			break;
		case "Not Sure":
			educationPage.CredibleBeforeRadioNotSureBtn.click();
			DriverHelper.waitForElement(educationPage.Email, 30);
			educationPage.Email.sendKeys(Hooks.properties().getJSONObject("eduction").getString("email"));
			Log.info("Not sure whether rates not checked on credible");
			break;
		default:
			Log.error("Invalid Selector Option on Checked Rates on Credible Before");
			throw new Exception("Invalid Selector Option on Checked Rates on Credible Before.");
		}
	}
	
	public void OtherCheckRates(String option) throws Exception{
		switch(option){
		case "Yes":
			educationPage.OtherRadioYesBtn.click();
			Log.info("Yes, checked rates with other");
			break;
		case "No":
			educationPage.OtherRadioNoBtn.click();
			Log.info("Not checked rates with other");
			break;
		case "Not Sure":
			educationPage.OtherRadioNotSureBtn.click();
			Log.info("Not sure whether checked rates with other");
			break;
		default:
			Log.error("Invalid Selector Option on check rates with parent or co-signer.");
			throw new Exception("Invalid Selector Option on check rates with parent or co-signer.");
		}
	}
	
	public void EducationName(String institutionName){
		educationPage.EducationName.sendKeys(institutionName);
		DriverHelper.WebPageLoader(2000);
		for(WebElement option : educationPage.EducationNameDropDown){
			if(option.getText().equals(institutionName)){
				option.click();
				DriverHelper.WebPageLoader(2000);
				Log.info("Institution Name Selected");
				break;
			}
		}
	}
	
	public void DegreeType(String degree, String fieldOfStudy){
		boolean isdegreeTypeSelected=false;
		boolean isfieldOfStudySelected=false;
		educationPage.DegreeType.click();
		DriverHelper.waitForElement(educationPage.DegreeTypeDropDown,30);
		List<WebElement> options = educationPage.DegreeTypeDropDown.findElements(By.tagName("li"));
		for (WebElement option : options)
		{
		    if (option.getText().equals(degree))
		    {
		        option.click();
		        isdegreeTypeSelected=true;
		        Log.info("Degree selected");
		        break;
		    }
		}
		if(!isdegreeTypeSelected){
			Log.error("Invalid Degree Type");
			throw new InvalidArgumentException("Invalid Degree Type");
		}
		
		if(degree.contains("Masters (including MBA)")){
			educationPage.FieldOfStudy.click();
			DriverHelper.waitForElement(educationPage.FieldOfStudyDropDown,30);
			List<WebElement> fosOptions = educationPage.FieldOfStudyDropDown.findElements(By.tagName("li"));
			for (WebElement option : fosOptions)
			{
			    if (option.getText().equals(fieldOfStudy))
			    {
			    	option.click();
			    	isfieldOfStudySelected=true;
			    	Log.info("Field of Study selected");
			        break;
			    }
			}
			if(!isfieldOfStudySelected){
				Log.error("Invalid Field Of Study Type");
				throw new InvalidArgumentException("Invalid Field Of Study Type");
			}
		}
		if(degree.contains("Doctorate") || degree.contains("Post-Doctorate")){
			
			educationPage.FieldOfStudy.click();
			DriverHelper.waitForElement(educationPage.FieldOfStudyDropDown,30);
			List<WebElement> fosOptions = educationPage.FieldOfStudyDropDown.findElements(By.tagName("li"));

			for (WebElement option : fosOptions)
			{
			    if (option.getText().equals(fieldOfStudy))
			    {
			    	option.click();
			    	isfieldOfStudySelected=true;
			    	Log.info("Field Of Study Selected");
			        break;
			    }
			}
			if(!isfieldOfStudySelected){
				Log.error("Invalid Field Of Study Type");
				throw new InvalidArgumentException("Invalid Field Of Study Type");
			}
			}
	}
	
	public void YearOfStudy(String yearOfStudy){
		boolean isyearOfStudySelected=false;
		educationPage.YearOfStudy.click();
		DriverHelper.waitForElement(educationPage.YearOfStudyDropDown,30);
		List<WebElement> options = educationPage.YearOfStudyDropDown.findElements(By.tagName("li"));

		for (WebElement option : options)
		{
		    if (option.getText().equals(yearOfStudy))
		    {
		        option.click();
		        isyearOfStudySelected=true;
		        Log.info("Year Of Study Selected");
		        break;
		    }
		}
		if(!isyearOfStudySelected){
			Log.error("Invalid Year Of Study Type");
			throw new InvalidArgumentException("Invalid Year Of Study Type");
		}
	}
	
	public void CompletionDate(String monthYear){
		educationPage.CompletionDate.sendKeys(monthYear);
		Log.info("Completion Date submitted");
	}
	
	public void PeriodOfLoan(String periodOfLoan){
		boolean isperiodOfLoanSelected=false;
		educationPage.PeriodOfLoan.click();
		DriverHelper.waitForElement(educationPage.PeriodOfLoanDropDown,30);
		List<WebElement> options = educationPage.PeriodOfLoanDropDown.findElements(By.tagName("li"));
		
		for (WebElement option : options)
		{
		    if (option.getText().equals(periodOfLoan))
		    {
		        option.click();
		        isperiodOfLoanSelected=true;
		        Log.info("Period Of Loan Selected");
		        break;
		    }
		}
		if(!isperiodOfLoanSelected){
			Log.error("Invalid Period Of Loan Type");
			throw new InvalidArgumentException("Invalid Period Of Loan Type");
		}
	}
	
	public void LoanAmount(String amount){
		educationPage.LoanAmount.sendKeys(amount);
		Log.info("Loan Amount submitted");
	}
	
	public void ClickContinueBtn(){
		DriverHelper.waitForElementToClickable(educationPage.ContinueBtn, 30);
		educationPage.ContinueBtn.click();
	}
}
