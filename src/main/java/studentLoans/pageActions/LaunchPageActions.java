package studentLoans.pageActions;

import java.io.FileNotFoundException;

import org.openqa.selenium.Alert;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.UnhandledAlertException;
import org.openqa.selenium.support.PageFactory;

import studentLoan.utils.DriverHelper;
import studentLoan.utils.Hooks;
import studentLoan.utils.Log;
import studentLoans.pageObjects.LaunchPageObjects;

public class LaunchPageActions {

	private static final LaunchPageObjects launchPage = PageFactory.initElements(DriverHelper.currentDriver(), LaunchPageObjects.class);

	public void navigateURL() throws FileNotFoundException, Exception {
		try {
			DriverHelper.loadURL((String) Hooks.properties().get("url"));
			Log.info("Web URL Launched");
			DriverHelper.waitForElement(launchPage.SLTile, 30);
		} catch (UnhandledAlertException ex) {
			try {
				Alert alert = DriverHelper.currentDriver().switchTo().alert();
				alert.accept();
				DriverHelper.loadURL((String) Hooks.properties().get("url"));
				DriverHelper.waitForElement(launchPage.SLTile, 30);
			} catch (NoAlertPresentException e) {
				e.printStackTrace();
			}
		}
	}

	public void selectTile(String tile) throws Exception {
		switch (tile) {
		case "Student Loans":
			launchPage.SLTile.click();
			Log.info("Student Loan Tile Selected");
			break;
		case "Student Loan Refinancing":
			launchPage.RLTile.click();
			Log.info("Student Loan Refinancing Tile Selected");
			break;
		case "Personal Loans":
			launchPage.PLTile.click();
			Log.info("Personal Loan Tile Selected");
			break;
		default:
			Log.error("Invalid Tile Type");
			throw new Exception("Invalid Tile");
		}
	}

	public void clickLoanRatesBtn() {
		launchPage.LoanRateBtn.click();
		DriverHelper.WebPageLoader(2000);
		DriverHelper.waitForElementToClickable(launchPage.StudentBtn, 30);
		Log.info("Check Rates Selected");
	}

	public void clickFormSelectorBtn(String formSelector) throws Exception {
		switch (formSelector) {
		case "I am the co-signer":
			launchPage.CoSignerBtn.click();
			Log.info("Co-Signer opted");
			break;
		case "I am the student":
			launchPage.StudentBtn.click();
			Log.info("Student opted");
			break;
		default:
			Log.error("Invalid form Selector");
			throw new Exception("Invalid form selector");
		}
	}
}
