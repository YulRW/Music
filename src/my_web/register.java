package my_web;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class register extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");  
	    PrintWriter out = response.getWriter();  
	    Connection con;
        String username = request.getParameter("username_register");  
        String password = request.getParameter("password_register");
        username = new String(request.getParameter("username_register").getBytes("iso8859-1"),"utf-8");
        try {
        	Class.forName("com.mysql.cj.jdbc.Driver");               
            con =  DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/qg_data?useSSL=false&serverTimezone=UTC","root","19980906");                                       
	        String sql = "SELECT * FROM user where username=?"; 
	        PreparedStatement pstmt = con.prepareStatement(sql);
	        pstmt.setString(1, username);
	        ResultSet rs1 = pstmt.executeQuery();
	        if(!rs1.next()){
	        	sql="insert into user(username,password) values(?,?)";
		        pstmt=con.prepareStatement(sql);
		        pstmt.setString(1, username);
		        pstmt.setString(2, password);
		        pstmt.executeUpdate();
		        out.print("success");
	        }else {
	        	out.print("error");
	        }
	        
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }

        out.close();  

	}

}
