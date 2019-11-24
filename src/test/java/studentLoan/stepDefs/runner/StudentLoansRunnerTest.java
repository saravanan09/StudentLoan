package studentLoan.stepDefs.runner;

import org.junit.runner.RunWith;
import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "classpath:features/",
		glue = {"classpath:studentLoan.utils","classpath:studentLoan.stepDefs.runner"},
		plugin = {"pretty", "html:target/cucumber-html-report","json:target/report.json", "de.monochromata.cucumber.report.PrettyReports:target/pretty-cucumber",
                "junit:target/cucumber.xml"},
		tags = {"@test"}
		)

public class StudentLoansRunnerTest {

}
