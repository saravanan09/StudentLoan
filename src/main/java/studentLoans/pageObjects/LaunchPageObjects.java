package studentLoans.pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LaunchPageObjects {

	@FindBy(how = How.CSS, using = "div[data-test-id='product-card-SL']")
    public WebElement SLTile;
	
	@FindBy(how = How.CSS, using = "div[data-test-id='product-card-RL']")
    public WebElement RLTile;
	
	@FindBy(how = How.CSS, using = "div[data-test-id='product-card-PL']")
    public WebElement PLTile;
	
	@FindBy(how = How.XPATH, using = "//div[@data-test-id='product-card-SL']//descendant::button[text()='Get My Loan Rates']")
    public WebElement LoanRateBtn;
	
	@FindBy(how = How.XPATH, using = "//div[@data-test-id='product-card-SL']//descendant::button[text()='I am the student']")
    public WebElement StudentBtn;
	
	@FindBy(how = How.XPATH, using = "//div[@data-test-id='product-card-SL']//descendant::button[text()='I am the co-signer']")
    public WebElement CoSignerBtn;
	
}
