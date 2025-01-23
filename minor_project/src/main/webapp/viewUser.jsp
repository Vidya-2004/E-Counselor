<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>View Users</title>
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

<body class="bg-gradient-to-r from-blue-300 via-teal-300 to-indigo-200 text-black font-bold">
	<div class="flex flex-col md:flex-row min-h-screen">
		<!-- Sidebar -->
		<aside class="w-full md:w-64 bg-slate-700 text-white flex-shrink-0 shadow-xl rounded-l-lg">
			<div class="p-4">
				<h2 class="text-xl font-bold">Admin Dashboard</h2>
			</div>
			<ul class="space-y-2 p-4">
				<li><a href="<%=request.getContextPath()%>/adminDashboard.jsp"
					class="flex block items-center py-2 px-4 rounded sidebar-menu-item hover:bg-white hover:text-black hover:bg-blue-400"
					onmouseover="changeBackgroundColor(true)"
					onmouseout="changeBackgroundColor(false)"
					onclick="setClickEffect(this)"><i class="fas fa-home mr-3"></i>Home</a></li>
				<li><a href="<%=request.getContextPath()%>/addCourse.jsp"
					class="flex block items-center py-2 px-4 rounded sidebar-menu-item hover:bg-white hover:text-black hover:bg-blue-400"
					onmouseover="changeBackgroundColor(true)"
					onmouseout="changeBackgroundColor(false)"
					onclick="setClickEffect(this)"><i
						class="fas fa-plus-circle mr-3"></i>Add Course</a></li>
				<li><a href="<%=request.getContextPath()%>/viewUser.jsp"
					class="flex block items-center py-2 px-4 rounded sidebar-menu-item hover:bg-white hover:text-black hover:bg-blue-400"
					onmouseover="changeBackgroundColor(true)"
					onmouseout="changeBackgroundColor(false)"
					onclick="setClickEffect(this)"><i class="fas fa-users mr-3"></i>View
						User</a></li>
				<li><a
					href="<%=request.getContextPath()%>/viewFeedback.jsp"
					class="flex block items-center py-2 px-4 rounded sidebar-menu-item hover:bg-white hover:text-black hover:bg-blue-400"
					onmouseover="changeBackgroundColor(true)"
					onmouseout="changeBackgroundColor(false)"
					onclick="setClickEffect(this)"><i class="fas fa-comments mr-3"></i>View
						Feedback</a></li>
				<li><a href="<%=request.getContextPath()%>/logout.jsp"
					class="flex block items-center py-2 px-4 rounded sidebar-menu-item hover:bg-white hover:text-black hover:bg-blue-400"
					onmouseover="changeBackgroundColor(true)"
					onmouseout="changeBackgroundColor(false)"
					onclick="setClickEffect(this)"><i
						class="fas fa-sign-out-alt mr-3"></i>Log Out</a></li>
			</ul>
		</aside>

		<!-- Main Content -->
		<main class="flex-1 p-6 bg-gradient-to-br from-teal-400 to-blue-300 rounded-l-lg shadow-2xl">
			<!-- Header -->
			<header
				class="flex items-center justify-between bg-white p-4 rounded shadow mb-6">
				<div class="text-lg font-bold">View Users</div>
				<div class="flex items-center space-x-4">
					<div>
						<i class="fas fa-users text-2xl"></i>
					</div>
					<div>
						<i class="fas fa-bell text-blue-600 text-2xl"></i>
					</div>
				</div>
			</header>

			<!-- User Table -->
			<section class="mt-6">
				<h2 class="text-xl font-bold mb-4">User List</h2>
				<div class="overflow-x-auto">
					<table class="min-w-full bg-white rounded shadow">
						<thead class="bg-teal-800 text-white">
							<tr>
								<th class="py-2 px-4">#</th>
								<th class="py-2 px-4">Name</th>
								<th class="py-2 px-4">Username</th>
								<th class="py-2 px-4">Course</th>
								<th class="py-2 px-4">Actions</th>
							</tr>
						</thead>
						<tbody>
							<!-- Example Row: Replace with dynamic content -->
							<tr class="hover:bg-gray-100">
								<td class="py-2 px-4"></td>
								<td class="py-2 px-4"></td>
								<td class="py-2 px-4"></td>
								<td class="py-2 px-4"></td>
								<td class="py-2 px-4">
									<button
										class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">Edit</button>
									<button
										class="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Delete</button>
								</td>
							</tr>

						</tbody>
					</table>
				</div>
			</section>
		</main>
	</div>

	<script>
        // Example JavaScript for interactivity
        document.addEventListener('DOMContentLoaded', () => {
            console.log('View Users Page Loaded');
        });
    </script>
</body>

</html>
