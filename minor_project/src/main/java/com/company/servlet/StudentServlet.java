package com.company.servlet;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;
@WebServlet("/submitStudentDetails")

public class StudentServlet extends HttpServlet {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Retrieve form parameters
        String name = request.getParameter("name");
        String gender = request.getParameter("gender");
        String age = request.getParameter("age");
        String interest = request.getParameter("interest");
        String hobby = request.getParameter("hobby");
        String education = request.getParameter("education");
        String sports = request.getParameter("sports");
        String about = request.getParameter("about");

        // Print form data to console
        System.out.println("Name: " + name);
        System.out.println("Gender: " + gender);
        System.out.println("Age: " + age);
        System.out.println("Interest: " + interest);
        System.out.println("Hobby: " + hobby);
        System.out.println("Educational Details: " + education);
        System.out.println("Sports Achievement: " + sports);
        System.out.println("About Yourself: " + about);

        // Optionally, insert data into the database here (as shown in the previous example)

        // Forward the response to a JSP page with a success message
        String message = "Form submitted successfully!";
        request.setAttribute("message", message);
        RequestDispatcher dispatcher = request.getRequestDispatcher("index.jsp"); // Assuming your JSP is named "index.jsp"
        dispatcher.forward(request, response);
    }
}
