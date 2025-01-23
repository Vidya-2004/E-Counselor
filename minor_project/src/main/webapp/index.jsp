<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script src="https://cdn.tailwindcss.com"></script>
<title>E-Counselor</title>
</head>

<body class="bg-gray-100">
	<div>
		<!-- Header -->
		<header
			class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
			<div
				class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<!-- Logo and Brand Name -->
				<a class="flex title-font font-medium items-center mb-4 md:mb-0">
					<!-- Logo Image --> <img
					src="<%=request.getContextPath()%>/images/img10.JPG"
					alt="E-Counselor Logo" class="w-12 h-12 mr-3 rounded-full"> <span
					class="ml-3 text-xl font-bold">E-Counselor</span>
				</a>

			<!-- Navigation Links -->
<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <a href="<%=request.getContextPath()%>/index.jsp" class="mr-5 hover:text-gray-300">HOME</a>
    <a href="<%=request.getContextPath()%>/courses.jsp" class="mr-5 hover:text-gray-300">COURSES</a>
    <a href="<%=request.getContextPath()%>/contact_us.jsp" class="mr-5 hover:text-gray-300">CONTACT US</a>
    
       <%
        // Retrieve the session object
        HttpSession currentsession = request.getSession(false);

        // Check if the session is not null and the username attribute is set
        if (session != null && session.getAttribute("username") != null) {
            // Get the username from the session
            String username = (String) session.getAttribute("username");
    %>

        <!-- Logout Button -->
        <a href="login_page.jsp" 
           class="bg-white text-indigo-500 px-4 py-2 rounded-lg hover:bg-gray-200">
            Logout (<%=username%>)
        </a>
    <%
        } else {
        	
    %>
        <!-- Login Button -->
       
        <a href="login_page.jsp" 
           class="bg-white text-indigo-500 px-4 py-2 rounded-lg hover:bg-gray-200">
            Login
        </a>
    <%
        }
    %>
</nav>

			</div>
		</header>

		<!-- Section with Background -->
		<section class="relative h-screen">
			<!-- Fully Stretched Background without Blur -->
			<div class="absolute inset-0 w-full h-full bg-cover bg-center"
				style="background-image: url('<%=request.getContextPath()%>/images/IMG_1162.JPG');"></div>

			<!-- Overlay for Dim Effect -->
			<div class="absolute inset-0 bg-black bg-opacity-40"></div>

			<!-- Content -->
			<div
				class="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center justify-end relative z-10">
				<div class="lg:w-1/2 md:w-2/3 text-right">
    <!-- Big Heading -->
    <h1
        class="title-font text-6xl sm:text-6xl font-extrabold text-white mb-6 leading-tight text-center">
        Welcome to <br> <span
            class="text-purple-300 block text-right mt-2">E-Counselor</span>
    </h1>
    <!-- Compact Text -->
    <div class="text-right">
        <h2
            class="text-gray-200 text-lg font-bold inline-block mb-2 text-right">
            Why Choose Us?</h2>
    </div>
    <p
        class="leading-relaxed text-gray-200 text-lg mb-10 max-w-full text-left">
        We understand that student life can be both exciting and
        challenging. Our platform provides the support you need to
        navigate academic pressures, personal challenges, and more. Our
        counselors are here to guide you every step of the way.</p>

    <!-- Button -->
    <a href="<%=request.getContextPath()%>/courses.jsp"
       class="inline-block text-white text-lg bg-gradient-to-r from-indigo-500 to-purple-600 border-0 py-6 px-12 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all mt-12">
       Explore Courses
    </a>

    <!-- New Counseling Button -->
    <a href="<%=request.getContextPath()%>/coun.html"
       class="inline-block text-white text-lg bg-gradient-to-r from-indigo-500 to-purple-600 border-0 py-6 px-12 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all mt-6">
       Counseling
    </a>
</div>

			</div>
		</section>

		<!-- Footer -->
		<footer class="text-gray-600 body-font bg-gray-800">
			<div
				class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
				<!-- Logo and Footer Brand -->
				<a
					class="flex title-font font-medium items-center md:justify-start text-white">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none"
						stroke="currentColor" stroke-linecap="round"
						stroke-linejoin="round" stroke-width="2"
						class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
						viewBox="0 0 24 24">
            <path
							d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> <span class="ml-3 text-xl">E-Counselor</span>
				</a>
				<p class="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
					© 2024 E-Counselor — <a href="https://twitter.com/ecounselor"
						rel="noopener noreferrer"
						class="text-gray-500 ml-1 hover:text-white" target="_blank">@ecounselor</a>
				</p>
				<span
					class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
					style="border-color: red;"> <a
					class="[&>svg]:h-5 [&>svg]:w-5" id="facebook"> <svg
							fill="currentColor" stroke-linecap="round"
							stroke-linejoin="round" stroke-width="2" class="w-6 h-5"
							viewBox="0 0 320 512">
              <path
								d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z">
              </path>
            </svg>
				</a> <a class="[&>svg]:h-5 [&>svg]:w-5" id="twitter"> <svg
							fill="currentColor" stroke-linecap="round"
							stroke-linejoin="round" stroke-width="2" class="w-6 h-5"
							viewBox="0 0 512 512">
              <path
								d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
              </path>
            </svg>
				</a> <a class="[&>svg]:h-5 [&>svg]:w-5" id="instagram"> <svg
							fill="currentColor" stroke="currentColor" stroke-linecap="round"
							stroke-linejoin="round" stroke-width="2" class="w-5 h-5"
							viewBox="0 0 448 512">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path
								d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
              </path>
            </svg>
				</a> <a class="[&>svg]:h-5 [&>svg]:w-5" id="linkedin"
					style="margin: 0% 5%;"> <svg fill="currentColor"
							stroke="currentColor" stroke-linecap="round"
							stroke-linejoin="round" stroke-width="0" class="w-5 h-5"
							viewBox="0 0 448 512">
              <path stroke="none"
								d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z">
              </path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
				</a>
				</span>
			</div>
		</footer>


	</div>

</body>

</html>