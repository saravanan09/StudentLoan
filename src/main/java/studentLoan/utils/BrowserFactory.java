package studentLoan.utils;

import io.github.bonigarcia.wdm.WebDriverManager;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.UnexpectedAlertBehaviour;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.CapabilityType;

public class BrowserFactory {

	public static WebDriver getDriver() {

		ChromeOptions options = new ChromeOptions();
		WebDriverManager.chromedriver().version("77.0.3865.40").setup();
		options.addArguments("--start-maximized");
		options.setCapability(CapabilityType.UNEXPECTED_ALERT_BEHAVIOUR,UnexpectedAlertBehaviour.IGNORE);
		ChromeDriver driver = new ChromeDriver(options);
		Log.info("Driver Intialized");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

		return driver;
	}

}
