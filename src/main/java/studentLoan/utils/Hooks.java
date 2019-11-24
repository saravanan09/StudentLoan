package studentLoan.utils;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.PropertyConfigurator;
import org.json.JSONObject;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks {
	public static String userdir = System.getProperty("user.dir");

	@Before
	public void before() {
		PropertyConfigurator.configure(userdir+ "/src/main/resources/config/log4j.properties");
		Log.startLog("Test is starting");
	}

	public static JSONObject properties() throws FileNotFoundException,Exception {

		String file = new String(Files.readAllBytes(Paths.get(userdir+ "/src/main/resources/config/config.json")));
		JSONObject jsonObject = new JSONObject(file);
		Log.info("Static variables Initialized");
		return jsonObject;
	}

	@After
	public void after(Scenario scenario) {
		if (scenario.isFailed()) {
			String screenshotName = scenario.getName().replaceAll(" ", "_");
			try {
				final byte[] screenshot = ((TakesScreenshot) DriverHelper.currentDriver()).getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, "image/png");
				File scrFile = ((TakesScreenshot) DriverHelper.currentDriver()).getScreenshotAs(OutputType.FILE);
				FileUtils.copyFile(scrFile, new File(userdir+ "\\screenshots\\" + screenshotName + ".png"));
				Log.info("Screenshot captured for Failed Scenario");
			} catch (WebDriverException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
			Log.endLog("Ending Test");
		}
	}
}
