<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.tailwindcss.com"></script>
  <title>PG Courses</title>
  <link rel="stylesheet"
	href="<%=request.getContextPath()%>/css/allcss.css">
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

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Post Graduate Courses</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Eligibility Criteria and Requirements</p>
    </div>
    <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
    
    
      <div class="p-2 sm:w-1/2 w-full animate-fade-slide" style="animation-delay: 0.1s">
        <div class="bg-gray-100 rounded-2xl border-2 border-indigo-500 hover:bg-indigo-100 shadow-lg transition-transform transform hover:scale-105 flex p-4 h-full items-center ">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 animate-pulse" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <a href="<%= request.getContextPath() %>/all_pg_courses.jsp" class="myLink"><span class="title-font font-medium text-lg text-gray-800">M.TECH</span></a>
        </div>
      </div>

      <div class="p-2 sm:w-1/2 w-full animate-fade-slide" style="animation-delay: 0.1s">
        <div class="bg-gray-100 rounded-2xl border-2 border-indigo-500 hover:bg-indigo-100 shadow-lg transition-transform transform hover:scale-105 flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 animate-pulse" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <a href="<%= request.getContextPath() %>/all_pg_courses.jsp" class="myLink"><span class="title-font font-medium text-lg text-gray-800">MCA</span></a>
        </div>
      </div>

      <div class="p-2 sm:w-1/2 w-full animate-fade-slide" style="animation-delay: 0.1s">
        <div class="bg-gray-100 rounded-2xl border-2 border-indigo-500 hover:bg-indigo-100 shadow-lg transition-transform transform hover:scale-105 flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 animate-pulse" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <a href="<%= request.getContextPath() %>/all_pg_courses.jsp" class="myLink"><span class="title-font font-medium text-lg text-gray-800">MBA</span></a>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full animate-fade-slide" style="animation-delay: 0.1s">
        <div class="bg-gray-100 rounded-2xl border-2 border-indigo-500 hover:bg-indigo-100 shadow-lg transition-transform transform hover:scale-105 flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 animate-pulse" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <a href="<%= request.getContextPath() %>/all_pg_courses.jsp" class="myLink"><span class="title-font font-medium text-lg text-gray-800">MHM</span></a>
        </div>
      </div>

      <div class="p-2 sm:w-1/2 w-full animate-fade-slide" style="animation-delay: 0.1s">
        <div class="bg-gray-100 rounded-2xl border-2 border-indigo-500 hover:bg-indigo-100 shadow-lg transition-transform transform hover:scale-105 flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 animate-pulse" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
         <a href="<%= request.getContextPath() %>/all_pg_courses.jsp" class="myLink"><span class="title-font font-medium text-lg text-gray-800">M.SC</span></a>
        </div>
      </div>

      <div class="p-2 sm:w-1/2 w-full animate-fade-slide" style="animation-delay: 0.1s">
        <div class="bg-gray-100 rounded-2xl border-2 border-indigo-500 hover:bg-indigo-100 shadow-lg transition-transform transform hover:scale-105 flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 animate-pulse" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <a href="<%= request.getContextPath() %>/all_pg_courses.jsp" class="myLink"><span class="title-font font-medium text-lg text-gray-800">M.IM</span></a>
        </div>
      </div>

      <div class="p-2 sm:w-1/2 w-full animate-fade-slide" style="animation-delay: 0.1s">
        <div class="bg-gray-100 rounded-2xl border-2 border-indigo-500 hover:bg-indigo-100 shadow-lg transition-transform transform hover:scale-105 flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 animate-pulse" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <a href="<%= request.getContextPath() %>/all_pg_courses.jsp" class="myLink"><span class="title-font font-medium text-lg text-gray-800">M.A.</span></a>
        </div>
      </div>
      <div class="p-2 sm:w-1/2 w-full animate-fade-slide" style="animation-delay: 0.1s">
        <div class="bg-gray-100 rounded-2xl border-2 border-indigo-500 hover:bg-indigo-100 shadow-lg transition-transform transform hover:scale-105 flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 animate-pulse" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <a href="<%= request.getContextPath() %>/all_pg_courses.jsp" class="myLink"><span class="title-font font-medium text-lg text-gray-800">M.Ed</span></a>
        </div>
      </div>

      <div class="p-2 sm:w-1/2 w-full animate-fade-slide" style="animation-delay: 0.1s">
        <div class="bg-gray-100 rounded-2xl border-2 border-indigo-500 hover:bg-indigo-100 shadow-lg transition-transform transform hover:scale-105 flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 animate-pulse" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <a href="<%= request.getContextPath() %>/all_pg_courses.jsp" class="myLink"><span class="title-font font-medium text-lg text-gray-800">L.L.M.</span></a>
        </div>
      </div>

      <div class="p-2 sm:w-1/2 w-full animate-fade-slide" style="animation-delay: 0.1s">
        <div class="bg-gray-100 rounded-2xl border-2 border-indigo-500 hover:bg-indigo-100 shadow-lg transition-transform transform hover:scale-105 flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 animate-pulse" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
         <a href="<%= request.getContextPath() %>/all_pg_courses.jsp" class="myLink"><span class="title-font font-medium text-lg text-gray-800">M.COM</span></a>
        </div>
      </div>
    </div>
  </div>
</section>

<script>

  const links = document.querySelectorAll(".myLink");
  links.forEach(function (link) {
    link.onclick = function (event) {
      event.preventDefault();
      var courseName = this.innerText;

      window.location.href = "all_pg_courses.jsp?text=" + encodeURIComponent(courseName);

      console.log(courseName);
      console.log(window.location.href);
    };
  });

</script>
</body>
</html>