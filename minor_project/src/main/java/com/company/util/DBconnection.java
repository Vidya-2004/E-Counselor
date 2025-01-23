package com.company.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBconnection {

    private static final String URL = "jdbc:mysql://localhost:3306/minor_project";
    private static final String USER = "root"; // Replace with your username
    private static final String PASSWORD = "mysql@bid#12"; // Replace with your password


	    public static Connection getConnection() throws SQLException {
	    	System.out.println("Form Submit Hogyi");	
	        return DriverManager.getConnection(URL, USER, PASSWORD);
	    }
}
