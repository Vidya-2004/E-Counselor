<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>UG Courses</title>
  <link rel="stylesheet" href="<%= request.getContextPath() %>/css/all_ug_courses.css">

</head>

<body class="bg-gray-100">

  <!-- Header -->
    <header class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <!-- Logo and Brand Name -->
        <a class="flex title-font font-medium items-center mb-4 md:mb-0">
          <!-- Logo Image -->
        <img src="<%= request.getContextPath() %>/images/img10.JPG" alt="E-Counselor Logo" class="w-12 h-12 mr-3 rounded-full">
        <span class="ml-3 text-xl font-bold">E-Counselor</span>
      </a>

      <!-- Navigation Links -->
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="<%= request.getContextPath() %>/index.jsp" class="mr-5 hover:text-gray-300">HOME</a>
          <a href="<%= request.getContextPath() %>/courses.jsp" class="mr-5 hover:text-gray-300">COURSES</a>
          <a href="<%= request.getContextPath() %>/contact_us.jsp" class="mr-5 hover:text-gray-300">CONTACT US</a>
          <a href="<%= request.getContextPath() %>/login_page.jsp"
            class="bg-white text-indigo-500 px-4 py-2 rounded-lg hover:bg-gray-200">Login</a>
        </nav>
      </div>
    </header>

  <section class="max-w-6xl mx-auto my-8 p-6 bg-white shadow-md rounded-lg" id="criteria_list">
    
    <h1 class="text-3xl font-bold text-gray-800 mb-4 text-center">Eligibility Criteria</h1>
    <!--  -->
    <ul id="criteria_eligibility"></ul>
  </section>

  <nav class="bottom_navigation">
    <a href="<%= request.getContextPath() %>/login_page.jsp">
      <button type="button"
        class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg animate-bounce rounded-full opacity-80"
        viewbox="0 0 24 24">Need Counselling?</button></a>
  </nav>

  <script src="<%= request.getContextPath() %>/JS/all_ug_courses.js"></script>
</body>

</html>