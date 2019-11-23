package studentLoans.pageActions;


public class PageNavigation {

	public static LaunchPageActions LaunchPage() {
		LaunchPageActions launchPageNav = new LaunchPageActions();
		return launchPageNav;
	}
	
	public static EducationPageActions EducationPage() {
		EducationPageActions EducationPageNav = new EducationPageActions();
		return EducationPageNav;
	}
	
	public static FinancePageActions FinancialPage() {
		FinancePageActions FinancialPageNav = new FinancePageActions();
		return FinancialPageNav;
	}
	
	public static ProfilePageActions ProfilePage() {
		ProfilePageActions ProfilePageNav = new ProfilePageActions();
		return ProfilePageNav;
	}
}
