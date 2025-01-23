<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Add Course</title>
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
		<main class="flex-1 p-6 bg-gradient-to-br from-teal-400 to-blue-300 rounded-l-2xl shadow-4xl">
			<!-- Header -->
			<header
				class="flex items-center justify-between bg-white p-4 rounded-lg shadow-xl mb-6">
				<div class="text-lg font-bold">Add Course</div>
				<div class="flex items-center space-x-4">
					<div>
						<i class="fas fa-chalkboard-teacher text-2xl"></i>
					</div>
					<div>
						<i class="fas fa-bell text-blue-600 text-2xl"></i>
					</div>
				</div>
			</header>

			<!-- Add Course Form -->
			<section class="mt-6 bg-white p-6 rounded-lg shadow-lg">
				<h2 class="text-xl font-bold mb-4">Course Details</h2>
				<form action="<%=request.getContextPath()%>/AddCourseServlet"
					method="POST" enctype="multipart/form-data">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<!-- Course Name -->
						<div>
							<label for="courseName"
								class="block text-gray-700 font-semibold mb-2">Course
								Name</label> <input type="text" id="courseName" name="courseName"
								class="w-full p-2 border rounded"
								placeholder="Enter course name" required>
						</div>

						<!-- Stream Name -->
						<div>
							<label for="streamName"
								class="block text-gray-700 font-semibold mb-2">Stream
								Name</label> <select id="streamName" name="streamName"
								class="w-full p-2 border rounded" required>
								<option value="">Select Stream</option>
								<option value="Science">Science</option>
								<option value="Commerce">Commerce</option>
								<option value="Arts">Arts</option>
							</select>
						</div>

						<!-- Course File Upload -->
						<div>
							<label for="courseFile"
								class="block text-gray-700 font-semibold mb-2">Upload
								Course File</label> <input type="file" id="courseFile" name="courseFile"
								class="w-full p-2 border rounded" required>
						</div>
					</div>

					<!-- Course Description -->
					<div class="mt-6">
						<label for="courseDescription"
							class="block text-gray-700 font-semibold mb-2">Course
							Description</label>
						<textarea id="courseDescription" name="courseDescription" rows="4"
							class="w-full p-2 border rounded"
							placeholder="Enter a brief course description" required></textarea>
					</div>

					<!-- Submit and Clear Buttons -->
					<div class="mt-6 flex justify-end space-x-4">
						<button type="reset"
							class="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400">Clear</button>
						<button type="submit"
							class="bg-teal-700 text-white px-6 py-2 rounded hover:bg-teal-800">Submit</button>
					</div>
				</form>
			</section>
		</main>
	</div>

	<script>
        // Example JavaScript for interactivity
        document.addEventListener('DOMContentLoaded', () => {
            console.log('Add Course Page Loaded');
        });
    </script>
</body>

</html>
