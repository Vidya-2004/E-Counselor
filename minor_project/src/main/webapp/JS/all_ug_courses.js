function getQueryParameter(courseName) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(courseName);
}

const courseItem = getQueryParameter("text");
console.log(courseItem);


const courses = {
	"BCA": ["Educational Qualification: Candidates should have completed their 10+2 or equivalent from a recognized board, often requiring a minimum aggregate of 50%, with Mathematics or Computer Science as a preferred subject.",
		"Age Limit: Most institutions require candidates to be between 17 to 25 years old at the time of application, though this may vary.",
		"English Proficiency: Proficiency in English is typically required as BCA programs are conducted in English, with English preferred as a subject in 10+2.",
		"Entrance Exam Requirement: Many institutions require candidates to pass a relevant entrance exam, such as IPU CET, SET, or university-specific exams, to assess their aptitude and knowledge in computer applications.",
		"Minimum Cut-off Score: Some colleges specify a minimum cut-off score or rank in entrance exams that candidates must meet to qualify for admission.",
		"Interview/Group Discussion: Certain universities may conduct interviews or personal interactions to evaluate the candidate’s interest, communication skills, and readiness for the BCA program.",
		"Reservation Policies: Reserved seats for SC, ST, OBC, and PwD candidates may be available as per government guidelines and institutional policies.",
		"Eligibility for International/NRI Candidates: International or NRI candidates may have separate eligibility criteria, including standardized tests like IELTS or TOEFL to demonstrate English proficiency.",
		"Top Colleges",
		"In India: Christ University Bangalore", "Amity University Noida", "Delhi University", "Jain University Bangalore", "Lovely Professional University (LPU)", "SRM Institute of Science and Technology", "St. Xavier’s College Kolkata",
		"In Abroad: University of Oxford", "University of Toronto", "Carnegie Mellon University", "Harvard University", "University of California"],

	"BBA": ["Educational Qualification: Candidates must have completed their 10+2 or an equivalent qualification from a recognized board, such as CBSE, ICSE, or a state board, typically requiring a minimum aggregate of 50%.",
		"Age Limit: Most institutions set an age range, generally requiring candidates to be between 17 to 25 years old at the time of admission.",
		"English Proficiency: Since BBA programs are conducted in English, proficiency in the language is essential, often requiring candidates to have studied English as a compulsory subject in 10+2.",
		"Entrance Exam Requirement:</strong> Many institutions require candidates to clear a specific entrance exam, such as IPU CET, DU JAT, or SET, to assess their aptitude and knowledge for BBA studies.",
		"Minimum Cut-off Score: Certain institutions set a minimum score or rank threshold in entrance exams, which candidates must meet to qualify for admission.",
		"Interview/Group Discussion: Some colleges conduct an interview or group discussion round to evaluate candidates’ communication skills, confidence, and general aptitude.",
		"Reservation Policies: Reserved seats for SC, ST, OBC, and PwD categories are often available in accordance with government regulations and institutional policies.",
		"Eligibility for International/NRI Candidates: Non-resident and international candidates may have distinct eligibility requirements, including standardized language tests like IELTS or TOEFL.",
		"Top Colleges",
		"In India: Shaheed Sukhdev College of Business Studies (SSCBS)", "Christ University Bangalore", "Symbiosis Centre for Management Studies Pune", "Amity University Noida", "Jain University Bangalore", "Presidency College Bangalore", "St. Xavier’s College Kolkata", "Alliance University Bangalore",
		"In Abroad: University of Pennsylvania (Wharton)", "London Business School", "University of Toronto", "Harvard University", "University of Sydney"],

	"B.TECH": ["Educational Qualification: Candidates must have completed 10+2 or an equivalent qualification with Physics, Chemistry, and Mathematics as core subjects from a recognized board, generally requiring a minimum of 50% aggregate marks.",
		"Age Limit: Most institutions have an age limit, with candidates generally required to be at least 17 years old at the time of admission.",
		"Entrance Exam Requirement: Many institutions require candidates to clear specific entrance exams like JEE Main, JEE Advanced, or state-level engineering entrance exams.",
		"Minimum Cut-off Score: Candidates must meet the minimum score or rank criteria set by the institution in entrance exams like JEE Main or Advanced, as applicable.",
		"English Proficiency: Proficiency in English is often required, with some institutions preferring candidates who have studied English as a compulsory subject in 10+2.",
		"Interview/Group Discussion: Some institutions require candidates to participate in counseling sessions or interviews to confirm eligibility and select their engineering branch.",
		"Reservation Policies: Reserved seats for categories like SC, ST, OBC, and PwD are available as per government regulations and institutional policies.",
		"Eligibility for International/NRI Candidates: Non-resident and international candidates may need to meet separate eligibility criteria, including standardized language tests like IELTS or TOEFL.",
		"Top Colleges",
		"In India: Indian Institute of Technology (IIT) Bombay", "National Institute of Technology (NIT) Trichy", "BITS Pilani", "VIT Vellore", "Delhi Technological University (DTU)", "Chandigarh University", "SRM Institute of Science and Technology", "Lovely Professional University (LPU)", "KIIT Bhubaneswar",
		"In Abroad: Massachusetts Institute of Technology (MIT)", "Stanford University", "University of California, Berkeley", "University of Cambridge", "ETH Zurich"],

	"BHM": ["Educational Qualification: Candidates must have completed their 10+2 or equivalent from a recognized board, typically requiring a minimum of 50% aggregate marks.",
		"Age Limit: Most institutions require candidates to be between 17 to 25 years old at the time of application.",
		"English Proficiency: Proficiency in English is essential, with some institutions requiring English as a compulsory subject in 10+2.",
		"Entrance Exam Requirement: Many colleges conduct entrance exams, such as NCHMCT JEE, to assess suitability for BHM programs.",
		"Minimum Cut-off Score: Institutions may set a minimum entrance exam score or rank that candidates must meet for eligibility.",
		"Interview/Group Discussion: Some colleges include an interview or group discussion round to evaluate candidates’ communication and interpersonal skills.",
		"Reservation Policies: As per government norms, reservations are available for SC, ST, OBC, and PwD categories.",
		"Eligibility for International/NRI Candidates: International and NRI applicants may have additional requirements, often including tests like IELTS or TOEFL.",
		"Top Colleges",
		"In India: Christ University Bangalore", "Oberoi Centre of Learning and Development", "Amity School of Hospitality", "Jain University Bangalore", "AIHM Noida", "Guru Nanak Institute of Hotel Management Kolkata",
		"In Abroad: Cornell University", "University of Nevada, Las Vegas (UNLV)", "Glion Institute of Higher Education"],

	"BSc": ["Educational Qualification: Candidates must have completed their 10+2 or an equivalent qualification from a recognized board with Physics, Chemistry, and Mathematics/Biology, typically requiring a minimum aggregate of 50%.",
		"Age Limit: Generally, candidates should be at least 17 years old at the time of admission.",
		"Subject Requirements: Completion of 10+2 with mandatory subjects, which may vary based on the specialization, but usually includes science subjects like Physics, Chemistry, and Mathematics/Biology.",
		"Entrance Exam Requirement: Some institutions require candidates to clear specific entrance exams to assess their aptitude for BSc studies.",
		"Minimum Cut-off Score: Certain colleges or universities may set a minimum cut-off percentage or score in 10+2 or entrance exams for admission.",
		"Interview/Group Discussion: In certain cases, an interview or group discussion may be conducted as part of the selection process.",
		"Reservation Policies: Reserved seats for SC, ST, OBC, and PwD categories are provided in line with government regulations.",
		"Eligibility for International/NRI Candidates: International candidates may need to meet specific eligibility requirements, such as language proficiency tests like IELTS or TOEFL, depending on the institution.",
		"Top Colleges",
		"In India: St. Stephen’s College Delhi", "Presidency College Kolkata", "Lovely Professional University (LPU)", "Jain University Bangalore", "SRM Institute of Science and Technology Chennai", "Banaras Hindu University (BHU)", "Amity University Noida",
		"In Abroad: University of Oxford", "University of Cambridge", "University of California, Los Angeles (UCLA)"],

	"B.Com": ["Educational Qualification: Candidates must have completed their 10+2 or an equivalent qualification from a recognized board, typically requiring a minimum aggregate of 50% marks in commerce or related subjects.",
		"Age Limit: Most institutions generally require candidates to be between 17 to 25 years old at the time of admission, although this age range can vary by institution.",
		"English Proficiency: Proficiency in English is essential, as many institutions require candidates to have studied English as a compulsory subject in their 10+2 curriculum.",
		"Entrance Exam Requirement: Some institutions mandate candidates to clear a specific entrance exam, such as DU JAT or other university-specific tests, to assess their aptitude for B.Com studies.",
		"Minimum Cut-off Score: Institutions may set a minimum score or rank threshold in entrance exams, which candidates must meet to qualify for admission.",
		"Interview/Group Discussion: Certain colleges conduct an interview or group discussion round to evaluate candidates' communication skills, confidence, and overall suitability for the program.",
		"Reservation Policies: Institutions often reserve seats for specific categories such as SC, ST, OBC, and PwD, following government regulations and policies.",
		"Eligibility for International/NRI Candidates: Non-resident and international candidates may have different eligibility criteria, often requiring standardized English language tests like IELTS or TOEFL.",
		"Top Colleges",
		"In India: Shri Ram College of Commerce (SRCC)", "St. Xavier’s College Mumbai", "Loyola College Chennai", "Christ University Bangalore", "Delhi University", "Lovely Professional University (LPU)", "Amity University Noida", "Jain University Bangalore",
		"In Abroad: University of Toronto", "University of Melbourne", "University of California, Berkeley", "University of Cambridge"],

	"L.L.B.": ["Educational Qualification: Candidates must have completed their 10+2 or an equivalent qualification from a recognized board, typically requiring a minimum of 45-50% aggregate marks.",
		"Age Limit: Most institutions set an age limit, often requiring candidates to be below 20-22 years at the time of application, though this can vary by institution.",
		"English Proficiency: Proficiency in English is essential, with many institutions requiring candidates to have studied English as a compulsory subject in their previous education.",
		"Entrance Exam Requirement: Many law schools require candidates to clear specific entrance exams, such as CLAT, LSAT, or other university-level tests, to assess their aptitude for law studies.",
		"Minimum Cut-off Score: Institutions may set a minimum cut-off score in entrance exams, which candidates must meet to qualify for admission.",
		"Interview/Group Discussion: Some colleges may conduct interviews or group discussions as part of their admission process to evaluate candidates’ critical thinking and communication skills.",
		"Reservation Policies: Reserved seats for SC, ST, OBC, and PwD categories are often provided as per government regulations and institutional guidelines.",
		"Eligibility for International/NRI Candidates: Non-resident and international candidates may have distinct eligibility criteria, often including standardized English language proficiency tests like IELTS or TOEFL.",
		"Top Colleges",
		"In India: National Law University Delhi", "Jindal Global Law School Sonipat", "Amity Law School Noida", "Banaras Hindu University (BHU)", "KIIT School of Law Bhubaneswar",
		"In Abroad: Harvard University", "University of Oxford", "Stanford University", "University of Cambridge"],

	"B.M.S.": ["Educational Qualification: Candidates must have completed their 10+2 or an equivalent examination from a recognized board, typically requiring a minimum aggregate of 50%.",
		"Age Limit: Most institutions require candidates to be between 17 to 25 years of age at the time of admission, although this may vary by institution.",
		"English Proficiency: Proficiency in English is essential, often requiring candidates to have studied it as a compulsory subject in their 10+2 curriculum.",
		"Entrance Exam Requirement: Many colleges conduct entrance exams such as CET or specific university tests to assess candidates' aptitude for the BMS program.",
		"Minimum Cut-off Score: Institutions may set a minimum cut-off score or rank in entrance exams, which candidates must meet for admission.",
		"Interview/Group Discussion: Some institutions include a personal interview or group discussion as part of the admission process to evaluate candidates' communication skills and overall fit.",
		"Reservation Policies: Seats are reserved for SC, ST, OBC, and PwD categories as per government regulations, ensuring diversity and inclusion in the program.",
		"Eligibility for International/NRI Candidates: International and NRI candidates may have distinct eligibility criteria, often including standardized tests like IELTS or TOEFL to demonstrate English proficiency.",
		"Top Colleges",
		"In India: Jai Hind College Mumbai", "St. Xavier’s College Mumbai", "Sharda University Greater Noida", "Amity University Noida", "Jain University Bangalore", "Institute of Management Studies Noida",
		"In Abroad: University of Pennsylvania (Wharton)", "Harvard University", "London Business School", "INSEAD France", "University of Toronto"],

	"B.A.": ["Educational Qualification: Candidates must have completed their 10+2 or an equivalent qualification from a recognized board, with a focus on arts or related subjects.",
		"Age Limit: Most institutions require candidates to be between 17 to 25 years of age at the time of admission, although specific age criteria may vary.",
		"English Proficiency: Proficiency in English is essential, often necessitating that candidates studied English as a compulsory subject in their 10+2 curriculum.",
		"Entrance Exam Requirement: Some institutions may require candidates to clear a specific entrance exam to assess their aptitude for arts programs.",
		"Minimum Cut-off Score: Institutions may set a minimum score or rank in entrance exams that candidates must achieve to qualify for admission.",
		"Interview/Group Discussion: Certain colleges conduct interviews or group discussions to evaluate candidates' communication skills and overall suitability for the program.",
		"Reservation Policies: Institutions typically offer reserved seats for SC, ST, OBC, and PwD categories in accordance with government regulations.",
		"Eligibility for International/NRI Candidates: Non-resident and international applicants may have distinct eligibility criteria, including standardized English language tests like IELTS or TOEFL.",
		"Top Colleges",
		"In India: Lady Shri Ram College Delhi", "St. Stephen's College Delhi", "Presidency College Kolkata", "Fergusson College Pune", "Loyola College Chennai", "Amity University Noida", "Christ University Bangalore", "Lovely Professional University (LPU)", "Jain University Bangalore",
		"In Abroad: University of Oxford", "University of Cambridge", "Harvard University", "University of California, Berkeley", "University of Melbourne"],

	"B.M.M.": ["Educational Qualification: Candidates must have completed their 10+2 or an equivalent qualification from a recognized board, typically requiring a minimum aggregate of 50% marks.",
		"Age Limit: Most institutions require candidates to be within the age range of 17 to 25 years at the time of admission, though some may have different age criteria.",
		"English Proficiency: Proficiency in English is essential for B.M.M. programs, often necessitating that candidates have studied English as a compulsory subject in their 10+2 curriculum.",
		"Entrance Exam Requirement: Many colleges conduct specific entrance exams, such as the MUCMET or other university-specific assessments, to evaluate candidates' aptitude for media studies.",
		"Minimum Cut-off Score: Institutions may set a minimum cut-off score in entrance exams or aggregate marks that candidates must achieve to qualify for admission.",
		"Interview/Group Discussion: Some institutions may require candidates to participate in an interview or group discussion as part of the selection process to assess their communication skills and creativity.",
		"Reservation Policies: Reserved seats for SC, ST, OBC, and PwD categories are typically available according to government regulations and the policies of the institution.",
		"Eligibility for International/NRI Candidates: Non-resident and international candidates may have additional eligibility requirements, including standardized tests for English proficiency, such as IELTS or TOEFL.",
		"Top Colleges",
		"In India: Sophia College Mumbai", "St. Xavier’s College Mumbai", "Jai Hind College Mumbai", "University of Delhi", "Guru Nanak College Mumbai",
		"In Abroad:  Columbia University", "New York University", "University of Southern California", "University of London"],

	"B.L.M.": ["Educational Qualification: Candidates should have completed 10+2 or an equivalent qualification from a recognized board, with a focus on subjects relevant to labor management.",
		"Age Limit: Generally, candidates must be between 17 to 25 years of age at the time of admission, although specific institutions may have different criteria.",
		"English Proficiency: Proficiency in English is often required, with many institutions mandating that candidates have studied English as a compulsory subject in their 10+2 education.",
		"Entrance Exam Requirement: Some institutions may require candidates to clear specific entrance exams, which assess their aptitude for labor management studies.",
		"Minimum Cut-off Score: Institutions may set a minimum score or rank in entrance exams that candidates must achieve to be eligible for admission.",
		"Interview/Group Discussion: Many colleges may conduct an interview or group discussion as part of the selection process to evaluate candidates' communication and interpersonal skills.",
		"Reservation Policies: Admission policies often include reserved seats for specific categories such as SC, ST, OBC, and PwD, in line with government regulations.",
		"Eligibility for International/NRI Candidates: International and non-resident Indian candidates may have distinct eligibility requirements, including proficiency in English through standardized tests like IELTS or TOEFL.",
		"Top Colleges",
		"In India: 	Institute of Law, Nirma University Ahmedabad", "Gulbarga University", "National Law University Jodhpur", "Symbiosis Law School Pune",
		"In Abroad: Harvard Law School", "University of Cambridge", "Yale University", "Stanford Law School"],

	"M.B.B.S.": ["Educational Qualification:10+2 with PCB from a recognized board",
		"Age Limit: Typically 17-25 years",
		"English Proficiency: Required for international candidates (TOEFL/IELTS)",
		"Entrance Exam Requirement: NEET or state-specific exams",
		"Minimum Cut-off Score: Institutions may set a minimum score or rank in entrance exams that candidates must achieve to be eligible for admission.",
		"Interview/Group Discussion: Many colleges may conduct an interview or group discussion as part of the selection process to evaluate candidates' communication and interpersonal skills.",
		"Reservation Policies: As per government norms (SC/ST/OBC/EWS)",
		"Eligibility for International/NRI Candidates: International and non-resident Indian candidates may have distinct eligibility requirements, including proficiency in English through standardized tests like IELTS or TOEFL.",
		"Top Colleges",
		"In India: 	Amity University Noida", "SRM University Chennai", "Lovely Professional University (LPU)", "Sharda University Greater Noida", "Chennai Veterinary College", "Indian Veterinary Research Institute Bareilly",
		"In Abroad: University of Edinburgh", "Cornell University", "University of Melbourne", "University of Sydney"],

	"B.Pharm": ["Educational Qualification: 10+2 with PCM/PCB from a recognized board",
		"Age Limit: Typically 17-25 years",
		"English Proficiency: Required for international candidates (TOEFL/IELTS)",
		"Entrance Exam Requirement: GPAT, state-level exams, or institute-specific tests",
		"Minimum Cut-off Score: Institutions may set a minimum score or rank in entrance exams that candidates must achieve to be eligible for admission.",
		"Interview/Group Discussion: Many colleges may conduct an interview or group discussion as part of the selection process to evaluate candidates' communication and interpersonal skills.",
		"Reservation Policies: As per government norms (SC/ST/OBC/EWS)",
		"Eligibility for International/NRI Candidates: International and non-resident Indian candidates may have distinct eligibility requirements, including proficiency in English through standardized tests like IELTS or TOEFL.",
		"Top Colleges",
		"In India: 	Jamia Hamdard University Delhi","BITS Pilani","SRM College of Pharmacy","Manipal College of Pharmaceutical Sciences",
		"In Abroad: Monash University", "University of Toronto", "King’s College London", "University of Sydney"],

}


var unordered_list = document.getElementById("criteria_eligibility");

// List of keywords to bold
const keywordsToBold = [
	"Educational Qualification",
	"Age Limit",
	"English Proficiency",
	"Entrance Exam Requirement",
	"Minimum Cut-off Score",
	"Interview/Group Discussion",
	"Reservation Policies",
	"Eligibility for International/NRI Candidates",
	"Top Colleges",
	"In India:",
	"In Abroad:"
];

for (key in courses) {
	if (key == courseItem) {
		console.log("Key is: ", key, " Course Item is: ", courseItem);

		var criteria_list = courses[key]
		console.log("Criteria list is:", criteria_list);

		criteria_list.forEach(element => {
			var node = document.createElement("LI");

			// Check if the string contains any keywords
			keywordsToBold.forEach((keyword) => {
				const regex = new RegExp(`(${keyword})`, "gi"); // Case-insensitive match
				element = element.replace(regex, "<b>$1</b>");
			});

			node.innerHTML = element; // Use innerHTML to apply bold tags
			unordered_list.appendChild(node);
		});

	}
}





