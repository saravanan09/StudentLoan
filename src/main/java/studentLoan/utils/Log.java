package studentLoan.utils;

import org.apache.log4j.Logger;

public class Log {

	private static Logger logger = Logger.getLogger(Log.class.getName());
	 
    public static void startLog (String testClassName){
    	logger.info("Test is Starting...");
    }

    public static void endLog (String testClassName){
    	logger.info("Test is Ending...");
    }
 
    public static void info (String message) {
    	logger.info(message);
    }
 
    public static void warn (String message) {
    	logger.warn(message);
    }
 
    public static void error (String message) {
    	logger.error(message);
    }
 
    public static void fatal (String message) {
    	logger.fatal(message);
    }
 
    public static void debug (String message) {
    	logger.debug(message);
    }
}
