<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>Courses</title>
  <style>
    /* Ensure images fill the container fully without distortion */
    .course-image {
      object-fit: cover; /* Makes the image cover the entire container */
      object-position: center; /* Centers the image */
      width: 100%;
      height: 100%;
    }
  </style>
</head>

<body class="bg-gray-100">

  <!-- Header Section -->
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

  <!-- Main Section for Courses -->
  <section class="text-gray-600 body-font py-24">
    <div class="container px-5 mx-auto">
      <h1 class="text-4xl font-bold text-center mb-12 text-gray-800">Explore Our Courses</h1>
      <div class="grid md:grid-cols-3 sm:grid-cols-1 gap-12">

        <!-- 10th Grade Course Card -->
        <div class="rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 duration-300 flex flex-col">
          <div class="w-full aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden"> 
            <img alt="10th Grade" class="course-image" src="<%= request.getContextPath() %>/images/img8.JPG">
          </div>
          <div class="p-6 bg-white rounded-b-lg flex flex-col justify-between">
            <h2 class="text-2xl font-medium text-gray-900 mb-3">Intermediate</h2>
            <p class="leading-relaxed text-base text-gray-700 mb-4">
              After completing 10th, you can pursue a variety of academic or vocational programs to continue your educational journey or enter the workforce.
            </p>
            <a href="<%= request.getContextPath() %>/10th.jsp" class="inline-flex items-center justify-center text-white bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-lg text-lg">Proceed for 10th</a>
          </div>
        </div>

        <!-- UG Course Card -->
        <div class="rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 duration-300 flex flex-col">
          <div class="w-full aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden"> 
            <img alt="UG Courses" class="course-image" src="<%= request.getContextPath() %>/images/img9.JPG">
          </div>
          <div class="p-6 bg-white rounded-b-lg flex flex-col justify-between">
            <h2 class="text-2xl font-medium text-gray-900 mb-3">Under Graduate Courses</h2>
            <p class="leading-relaxed text-base text-gray-700 mb-4">
              Undergraduate degrees open up various career opportunities, helping you specialize in fields that align with your academic strengths and passions.
            </p>
            <a href="<%= request.getContextPath() %>/ugc.jsp" class="inline-flex items-center justify-center text-white bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-lg text-lg">Proceed for UG Courses</a>
          </div>
        </div>

        <!-- PG Course Card -->
        <div class="rounded-lg overflow-hidden shadow-lg transform transition-all hover:scale-105 duration-300 flex flex-col">
          <div class="w-full aspect-w-16 aspect-h-9 bg-gray-200 overflow-hidden"> 
            <img alt="PG Courses" class="course-image" src="<%= request.getContextPath() %>/images/img7.JPG">
          </div>
          <div class="p-6 bg-white rounded-b-lg flex flex-col justify-between">
            <h2 class="text-2xl font-medium text-gray-900 mb-3">Post Graduate Courses</h2>
            <p class="leading-relaxed text-base text-gray-700 mb-4">
              Postgraduate courses enhance your academic and professional knowledge, providing opportunities for specialization in your chosen field.
            </p>
            <a href="<%= request.getContextPath() %>/pgc.jsp" class="inline-flex items-center justify-center text-white bg-indigo-500 hover:bg-indigo-600 px-6 py-2 rounded-lg text-lg">
              Proceed for PG Courses
            </a>
            
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- Footer Section -->
  <footer class="bg-gray-800 text-gray-200 py-6">
    <div class="container mx-auto text-center">
      <p class="text-sm mb-4">© 2024 E-Counselor. All Rights Reserved.</p>
      <p class="text-sm">
        <a href="https://twitter.com/ecounselor" class="text-indigo-400 hover:text-indigo-600">Follow us on Twitter</a> |
        <a href="/privacy-policy" class="text-indigo-400 hover:text-indigo-600">Privacy Policy</a>
      </p>
    </div>
  </footer>

  </body>
</html>