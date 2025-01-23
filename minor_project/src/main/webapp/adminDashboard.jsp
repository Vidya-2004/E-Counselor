<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Admin Dashboard</title>
<!-- Include Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js"
	defer></script>
<style>
/* Hover effect for changing background color of the entire page */
.sidebar-menu-item:hover {
	background-color: rgba(255, 255, 255, 0.6);
}

.menu-hover-background {
	background-color: rgba(255, 255, 255, 0.1) !important;
}

/* Optional: Custom background on click */
.clicked {
	background-color: rgba(255, 255, 255, 0.3) !important;
}
</style>
</head>

<body
	class="bg-gradient-to-r from-blue-300 via-teal-300 to-indigo-200 text-black font-bold">
	<div class="flex flex-col md:flex-row min-h-screen">
		<!-- Sidebar -->
		<aside
			class="w-full md:w-64 bg-slate-700 text-white flex-shrink-0 shadow-xl rounded-l-lg">
			<div class="p-4">
				<h2 class="text-xl font-bold">Admin Dashboard</h2>
			</div>
			<ul class="space-y-2 p-4">
				<li><a href="<%=request.getContextPath()%>/adminDashboard.jsp"
					class="flex block items-center py-2 px-4 rounded sidebar-menu-item hover:bg-white hover:text-black hover:bg-indigo-400"
					onmouseover="changeBackgroundColor(true)"
					onmouseout="changeBackgroundColor(false)"
					onclick="setClickEffect(this)"><i class="fas fa-home mr-3"></i>Home</a></li>
				<li><a href="<%=request.getContextPath()%>/addCourse.jsp"
					class="flex block items-center py-2 px-4 rounded sidebar-menu-item hover:bg-white hover:text-black hover:bg-indigo-400"
					onmouseover="changeBackgroundColor(true)"
					onmouseout="changeBackgroundColor(false)"
					onclick="setClickEffect(this)"><i
						class="fas fa-plus-circle mr-3"></i>Add Course</a></li>
				<li><a href="<%=request.getContextPath()%>/viewUser.jsp"
					class="flex block items-center py-2 px-4 rounded sidebar-menu-item hover:bg-white hover:text-black hover:bg-indigo-400"
					onmouseover="changeBackgroundColor(true)"
					onmouseout="changeBackgroundColor(false)"
					onclick="setClickEffect(this)"><i class="fas fa-users mr-3"></i>View
						User</a></li>
				<li><a
					href="<%=request.getContextPath()%>/viewFeedback.jsp"
					class="flex block items-center py-2 px-4 rounded sidebar-menu-item hover:bg-white hover:text-black hover:bg-indigo-400"
					onmouseover="changeBackgroundColor(true)"
					onmouseout="changeBackgroundColor(false)"
					onclick="setClickEffect(this)"><i class="fas fa-comments mr-3"></i>View
						Feedback</a></li>
				<li><a href="<%=request.getContextPath()%>/logout.jsp"
					class="flex block items-center py-2 px-4 rounded sidebar-menu-item hover:bg-white hover:text-black hover:bg-indigo-400"
					onmouseover="changeBackgroundColor(true)"
					onmouseout="changeBackgroundColor(false)"
					onclick="setClickEffect(this)"><i
						class="fas fa-sign-out-alt mr-3"></i>Log Out</a></li>
			</ul>
		</aside>

		<!-- Main Content -->
		<main
			class="flex-1 p-6 bg-gradient-to-br from-teal-400 to-blue-300 rounded-l-lg shadow-2xl">
			<!-- Header -->
			<header
				class="flex items-center justify-between bg-white p-4 rounded shadow-lg mb-6">
				<div class="text-lg font-bold ">Welcome Admin</div>
				<div class="flex items-center space-x-4">
					<div>
						<i class="fas fa-graduation-cap  text-2xl"></i>
					</div>
					<div>
						<i class="fas fa-bell text-blue-600 text-2xl"></i>
					</div>
				</div>
			</header>

			<!-- Dashboard Overview -->
			<section
				class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<a href="<%=request.getContextPath()%>/viewUser.jsp"
					class="bg-white p-4 rounded-lg shadow-xl hover:bg-indigo-50 transition-colors flex items-center">
					<i class="fas fa-users text-blue-500 text-3xl mr-4"></i>
					<div>
						<h3 class="text-lg font-bold">Users</h3>
						<p class="text-gray-600">
							<c:if test="${not empty activeUsers}">${activeUsers}</c:if>
							<c:if test="${empty activeUsers}">0</c:if>
							Active Users
						</p>
					</div>
				</a> <a href="<%=request.getContextPath()%>/addCourse.jsp"
					class="bg-white p-4 rounded-lg shadow-xl hover:bg-teal-50 transition-colors flex items-center">
					<i class="fas fa-book text-green-500 text-3xl mr-4"></i>
					<div>
						<h3 class="text-lg font-bold">Courses</h3>
						<p class="text-gray-600">
							<c:if test="${not empty availableCourses}">${availableCourses}</c:if>
							<c:if test="${empty availableCourses}">0</c:if>
							Available Courses
						</p>
					</div>
				</a> <a href="<%=request.getContextPath()%>/viewFeedback.jsp"
					class="bg-white p-4 rounded-lg shadow-xl hover:bg-pink-50 transition-colors flex items-center">
					<i class="fas fa-comments text-yellow-500 text-3xl mr-4"></i>
					<div>
						<h3 class="text-lg font-bold">Feedback</h3>
						<p class="text-gray-600">
							<c:if test="${not empty newFeedback}">${newFeedback}</c:if>
							<c:if test="${empty newFeedback}">0</c:if>
							New Feedback
						</p>
					</div>
				</a>
			</section>

			<!-- Controls Section -->
			<section class="mt-8">
				<h2 class="text-2xl font-bold mb-4">Admin Controls</h2>
				<p>Welcome to the admin dashboard. Use the navigation menu to
					manage users, courses, and feedback efficiently.</p>
			</section>
		</main>
	</div>

	<script>
        // Example JavaScript for dashboard interactivity
        document.addEventListener('DOMContentLoaded', () => {
            console.log('Admin Dashboard Loaded');
        });
    </script>
</body>

</html>
