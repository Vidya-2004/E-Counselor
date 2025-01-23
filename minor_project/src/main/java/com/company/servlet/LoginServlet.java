package com.company.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;

import com.company.dao.UserDao;
import com.company.dao.UserDaoImp;

/**
 *
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static UserDao userDao = new UserDaoImp();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }


	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		    String username = request.getParameter("username");
		    String password = request.getParameter("password");

		    // Check admin credentials first
		    if (username.equals("admin") && password.equals("admin123")) {
		        HttpSession session = request.getSession();
		        session.setAttribute("username", username);
		        response.sendRedirect("adminDashboard.jsp");
		    } 
		    // Check regular user credentials
		    else if (userDao.isValidUser(username, password)) {
		        HttpSession session = request.getSession();
		        session.setAttribute("username", username);
		        response.sendRedirect("index.jsp");
		    } 
		    // Invalid credentials
		    else {
		        response.sendRedirect("login_page.jsp?error=1");
		        System.out.println("Error: Invalid username or password.");
		    }
		}
}


