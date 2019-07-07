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

public class initializeMusic extends HttpServlet {
	private static final long serialVersionUID = 1L;
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");  
	    PrintWriter out = response.getWriter();  
	    Connection con;
        try {
        	Class.forName("com.mysql.cj.jdbc.Driver");               
            con =  DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/qg_data?useSSL=false&serverTimezone=UTC","root","19980906");                                       
            String sql = "SELECT * FROM songData ";
	        PreparedStatement pstmt = con.prepareStatement(sql);

	        ResultSet rs1 = pstmt.executeQuery();
	        
	        //获取查询后的结果
	        while (rs1.next()) {
	        	out.print(rs1.getString(1)+"**"+rs1.getString(2)+"**"+rs1.getString(3)+"**"+rs1.getString(4)+"**"+rs1.getString(5)+"**"+rs1.getString(6)+"**"+rs1.getString(7)+"**");
	        }

        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        }

        out.close();  
	}
}
