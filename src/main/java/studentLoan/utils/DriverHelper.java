package studentLoan.utils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.UnreachableBrowserException;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class DriverHelper {

private static WebDriver driver;
	
public static WebDriver currentDriver() {
	if (driver == null) {
		try {
			driver = BrowserFactory.getDriver();
		} catch (UnreachableBrowserException e) {
			driver = BrowserFactory.getDriver();
		} finally {
			Runtime.getRuntime().addShutdownHook(new Thread(new CloseBrowser()));
		}
	}
	return driver;
}
	public static void click(String elementToClick)
	{
		currentDriver().findElement(By.id(elementToClick)).click();
	}
	
	public static void sendKeys(String element,String elementValue)
	{
		currentDriver().findElement(By.id(element)).sendKeys(elementValue);
	}

	public static void loadURL(String url){
		currentDriver().get(url);
	}
	
	public static WebElement waitForElement(WebElement elementToWaitFor){
		return waitForElement(elementToWaitFor, null);
	}
	
	public static WebElement waitForElement(WebElement elementToWaitFor, Integer waitTimeInSeconds) {
	    if (waitTimeInSeconds == null) {
	    	waitTimeInSeconds = 10;
	    }
	    
	    WebDriverWait wait = new WebDriverWait(currentDriver(), waitTimeInSeconds);
	    return wait.until(ExpectedConditions.visibilityOf(elementToWaitFor));
	}
	public static WebElement waitForElementToClickable(WebElement elementToWaitFor, Integer waitTimeInSeconds) {
	    if (waitTimeInSeconds == null) {
	    	waitTimeInSeconds = 10;
	    }
	    
	    WebDriverWait wait = new WebDriverWait(currentDriver(), waitTimeInSeconds);
	    return wait.until(ExpectedConditions.elementToBeClickable(elementToWaitFor));
	}
	public static Boolean URLCheck(String url, Integer waitTimeInSeconds) {
	    if (waitTimeInSeconds == null) {
	    	waitTimeInSeconds = 10;
	    }
	    
	    WebDriverWait wait = new WebDriverWait(currentDriver(), waitTimeInSeconds);
	    return wait.until(ExpectedConditions.urlContains(url));
	}
	public static void WebPageLoader(int seconds){
		try {
			Thread.sleep(seconds);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	private static class CloseBrowser implements Runnable {
        public void run() {
        	try {
        		currentDriver().quit();
                driver = null;
            } catch (UnreachableBrowserException e) {
                
            }
        }

	}

}
