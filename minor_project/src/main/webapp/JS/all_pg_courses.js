function getQueryParameter(courseName) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(courseName);
}

const courseItem = getQueryParameter("text");
console.log(courseItem);


const courses = {
    "MBA": ["Educational Qualification: Applicants must have completed a bachelor’s degree or equivalent from a recognized university, typically with a minimum of 50% aggregate marks.",
        "Age Limit: While most institutions do not have a strict age limit, candidates are generally expected to be at least 21 years old.",
        "Work Experience: Some MBA programs require prior work experience, typically ranging from 1 to 3 years, especially for executive or specialized MBAs.",
        "Entrance Exam Requirement: Most institutions require a valid entrance exam score, such as CAT, GMAT, XAT, or MAT, to assess candidates’ aptitude for MBA studies.",
        "Minimum Cut-off Score: Institutions may have specific cut-off scores for entrance exams that candidates must meet to qualify for the next stage of admission.",
        "Interview/Group Discussion: Many MBA programs conduct personal interviews or group discussions to evaluate candidates’ communication, problem-solving skills, and leadership potential.",
        "Reservation Policies: Reserved seats may be available for categories like SC, ST, OBC, and PwD in alignment with government policies.",
        "Eligibility for International/NRI Candidates: Non-resident and international candidates may need to meet additional requirements, often including language proficiency tests such as IELTS or TOEFL."],

    "M.TECH": ["Educational Qualification: Candidates must hold a B.Tech or equivalent bachelor's degree in a relevant engineering field, often requiring a minimum aggregate of 60%.",
        "Age Limit: While there’s typically no upper age limit, some institutions may specify age criteria based on program requirements.",
        "Entrance Exam Requirement: Most institutions require candidates to qualify in national or state-level exams like GATE, assessing technical knowledge and aptitude.",
        "Work Experience: Some institutions give preference to candidates with relevant work experience, especially in part-time or executive M.Tech programs.",
        "Minimum Cut-off Score: A minimum cut-off in qualifying exams (like GATE) may be specified, with candidates needing to meet or exceed this score for eligibilit.",
        "Interview or Group Discussion: Certain institutions conduct interviews or group discussions as part of the admission process to evaluate candidates’ subject knowledge and communication skills.",
        "Reservation Policy: Reservations may apply for SC, ST, OBC, and PwD categories in accordance with government policies and institutional guidelines.",
        "Eligibility for Sponsored Candidates: Sponsored candidates from recognized organizations may have different eligibility criteria, often exempting them from entrance exams but requiring a valid sponsorship letter."],

    "MCA": ["Educational Qualification: Candidates must possess a Bachelor’s degree in Computer Applications (BCA) or any relevant field with a minimum aggregate of 50% from a recognized university.",

        "Age Limit: While there is typically no strict age limit for MCA programs, some institutions may prefer candidates within a certain age range.",
        "Mathematics Requirement: Candidates should have studied Mathematics as a subject in their 10+2 or undergraduate course, as it is essential for various MCA subjects.",
        "Entrance Exam Requirement: Many institutions require candidates to clear specific entrance exams, such as NIMCET, to assess their aptitude for MCA studies.",
        "Minimum Cut-off Score: Institutions may set a minimum score or rank in entrance exams that candidates must achieve for eligibility.",
        "Interview/Group Discussion: Some colleges may conduct interviews or group discussions to evaluate candidates’ communication skills and problem-solving abilities.",
        "Reservation Policies: Institutions often adhere to government regulations regarding reservation for SC, ST, OBC, and PwD candidates.",
        "Eligibility for International/NRI Candidates: Non-resident and international candidates may have distinct eligibility criteria, which often include standardized tests like IELTS or TOEFL for English proficiency."],

    "MHM": ["Educational Qualification: Candidates must hold a bachelor's degree in hospitality management or a related field from a recognized university, typically requiring a minimum of 50% aggregate marks.",
        "Age Limit: Many institutions specify an age limit, often requiring candidates to be within the age range of 20 to 30 years at the time of admission.",
        "English Proficiency: Proficiency in English is crucial, with many programs requiring candidates to have studied English as a compulsory subject in their previous qualifications.",
        "Entrance Exam Requirement: Candidates may need to clear specific entrance exams such as NCHM JEE or university-specific assessments designed to evaluate their aptitude for hospitality management.",
        "Minimum Cut-off Score: Some institutions set a minimum score or rank in entrance exams that candidates must achieve to be eligible for admission.",
        "Interview/Group Discussion: Certain programs may conduct interviews or group discussions to assess candidates’ communication skills, interpersonal abilities, and overall suitability for the course.",
        "Reservation Policies: Institutions typically follow government guidelines regarding reservation for SC, ST, OBC, and PwD categories to promote diversity and inclusion.",
        "Eligibility for International/NRI Candidates: Non-resident and international applicants may have separate eligibility criteria, often including standardized language proficiency tests like IELTS or TOEFL."],

    "M.Sc": ["Educational Qualification: A candidate must have completed a relevant bachelor’s degree (B.Sc. or equivalent) with a minimum percentage, typically ranging from 50% to 60%, from a recognized university.",

        "Age Limit: Most institutions do not impose a strict age limit for M.Sc. admissions, but candidates are generally expected to be at least 20 years old.",

        "Entrance Exam Requirement: Many universities require candidates to pass an entrance exam, such as GATE, JAM, or university-specific tests, to qualify for admission to M.Sc. programs.",

        "Minimum Cut-off Score: Institutions may set specific cut-off scores or ranks in entrance exams that candidates must achieve to be eligible for admission.",

        "Interview/Group Discussion: Some programs may require candidates to participate in an interview or group discussion to assess their suitability for the course.",

        "Reservation Policies: Seats are often reserved for candidates belonging to SC, ST, OBC, and PwD categories in accordance with government regulations.",

        "Research Proposal: For certain specializations, candidates may need to submit a research proposal as part of the application process to demonstrate their research interests.",

        "Eligibility for International/NRI Candidates: Non-resident and international candidates may face distinct eligibility requirements, often including standardized tests like GRE or proof of English proficiency."],

    "M.COM": ["Educational Qualification: Candidates must possess a Bachelor’s degree in Commerce or a related field from a recognized university, typically requiring a minimum of 50% aggregate marks.",

        "Age Limit: Most institutions do not impose a strict age limit, but candidates should generally be within a reasonable age range for postgraduate studies.",

        "English Proficiency: Proficiency in English is often necessary, especially if the program is conducted in English, with many institutions requiring English as a medium of instruction in undergraduate studies.",

        "Entrance Exam Requirement: Some universities may require candidates to clear specific entrance exams, such as the university's own entrance test or national-level exams relevant to postgraduate commerce studies.",

        "Minimum Cut-off Score: Candidates may need to meet a specific cut-off score in the entrance exam or undergraduate degree to qualify for admission into the M.Com program.",

        "Interview/Group Discussion: Certain institutions may conduct interviews or group discussions as part of the selection process to assess candidates' communication skills and suitability for the program.",

        "Reservation Policies: Reserved seats are available for SC, ST, OBC, and PwD categories according to government regulations and institutional policies.",

        "Eligibility for International/NRI Candidates: Non-resident and international candidates may have distinct eligibility criteria, including standardized language tests like IELTS or TOEFL to assess English proficiency."],

    "M.A.": ["Educational Qualification: A candidate must hold a bachelor's degree or its equivalent from a recognized university, typically with a minimum aggregate of 50% marks in relevant subjects.",

        " Age Limit: There is generally no specific age limit for admission to M.A. programs, allowing candidates of various ages to apply.",

        "English Proficiency: Proficiency in English is often required, especially if the program is taught in English, with some institutions expecting a minimum score in English language tests.",

        "Entrance Exam Requirement: Many universities conduct their own entrance exams or consider scores from national-level exams for admission to M.A. programs.",

        "Minimum Cut-off Score: Institutions may establish a cut-off score for entrance exams or previous academic performance that candidates must meet to qualify for admission.",

        "Interview/Group Discussion: Some programs may require candidates to participate in an interview or group discussion to assess their suitability and academic interests.",

        "Reservation Policies: As per government regulations, specific quotas are often available for SC, ST, OBC, and PwD candidates to promote inclusivity.",

        "Eligibility for International/NRI Candidates: International and NRI applicants may need to meet additional criteria, including standardized language proficiency tests and equivalent educational qualifications."],

    "M.S.": ["Educational Qualification: Candidates must hold a bachelor's degree or an equivalent qualification in a relevant field from a recognized university, typically requiring a minimum percentage, often around 50% or more.",

        " Age Limit: While there is generally no strict age limit for admission, most institutions prefer candidates in the age range of 21 to 30 years.",

        " English Proficiency: Proficiency in English is essential, and many institutions require candidates to provide scores from standardized tests such as TOEFL or IELTS, especially for non-native speakers.",

        " Entrance Exam Requirement: Many universities require candidates to take standardized entrance exams such as GRE or GMAT to assess their readiness for graduate-level study.",

        " Minimum Cut-off Score: Institutions often set a minimum cut-off score for entrance exams or overall academic performance that candidates must achieve for eligibility.",

        " Interview Process: Some institutions conduct personal interviews to evaluate candidates’ academic background, research interests, and suitability for the program.",

        " Reservation Policies: Admissions may include reserved seats for SC, ST, OBC, and PwD categories in accordance with government regulations.",

        " Research Experience: Some programs may prefer candidates with prior research experience or relevant internships, particularly for research-focused MS degrees."],

    "M.Ed": ["Educational Qualification: Candidates must hold a Bachelor’s degree in Education (B.Ed) or an equivalent degree from a recognized institution, typically requiring a minimum aggregate of 50%.",

        "Age Limit: There may be no specific age limit for admission to the M.Ed. program, but some institutions may have upper age restrictions.",

        "Entrance Exam Requirement: Many universities require candidates to qualify in an entrance examination specific to the M.Ed. program, assessing their knowledge and aptitude in education.",

        " Minimum Cut-off Score: Institutions often establish a minimum cut-off score in entrance exams or previous academic qualifications that candidates must achieve to be eligible for admission.",

        " Work Experience: Some programs may prefer or require candidates to have teaching or relevant professional experience in the field of education.",

        " Interview/Group Discussion: A personal interview or group discussion may be conducted by some colleges to assess the candidates' communication skills, motivation, and suitability for the program.",

        " Reservation Policies: Admission policies may include reservations for candidates from SC, ST, OBC, and other disadvantaged groups in accordance with government regulations.",

        " Eligibility for International Candidates: International candidates may need to meet additional requirements, such as English proficiency tests like IELTS or TOEFL, depending on the institution."],

    "L.L.M.": ["Educational Qualification: Candidates must possess a Bachelor of Laws (LL.B.) degree or an equivalent law degree from a recognized university to be eligible for L.L.M. admission.",

        "Minimum Percentage: Most institutions require candidates to have achieved a minimum aggregate percentage, often around 50-55%, in their LL.B. degree.",

        "Entrance Exam Requirement: Some universities may require candidates to clear specific entrance exams, such as CLAT PG or university-specific tests, to qualify for admission.",

        "Age Limit: While many institutions do not impose an age limit, some may have a maximum age requirement for applicants.",

        "Work Experience: Certain programs may prefer or require candidates to have relevant work experience or internships in the legal field.",

        "Interview Process: Many institutions conduct an interview to assess candidates’ knowledge, motivation, and suitability for advanced legal studies.",

        "Reservation Policies: Seats are reserved for SC, ST, OBC, and PwD categories as per government regulations and institutional policies.",

        "International/NRI Candidate Eligibility: Non-resident and international candidates may need to meet additional eligibility criteria, including proof of English proficiency."],

    "M.Eng.": ["Educational Qualification: Candidates must hold a relevant bachelor's degree in engineering or technology from a recognized university, typically requiring a minimum aggregate of 50% or equivalent CGPA.",

        " Age Limit: There is usually no specific age limit for M.Eng. admissions, but candidates should check individual university requirements.",

        " Entrance Exam Requirement: Many institutions require candidates to take specific entrance exams like GATE or university-level tests to assess their engineering aptitude.",

        " Work Experience: Some M.Eng. programs may prefer or require candidates to have relevant work experience in the engineering field, enhancing their practical knowledge.",

        " Interview Process: Certain universities may conduct interviews to evaluate candidates' technical knowledge, motivation, and research interests.",

        " Research Proposal: Candidates may need to submit a research proposal outlining their intended area of study or project for evaluation by the admissions committee.",

        " Reservation Policies: Institutions typically follow government regulations regarding reservations for SC, ST, OBC, and PwD categories.",

        " Eligibility for International/NRI Candidates: Non-resident and international candidates may need to meet additional eligibility criteria, including standardized tests like GRE and proof of English proficiency through exams like IELTS or TOEFL."],
}

var unordered_list = document.getElementById("criteria_elibility");

const boldCriteria = [
    "Educational Qualification", 
    "Age Limit", 
    "Work Experience", 
    "Entrance Exam Requirement", 
    "Minimum Cut-off Score", 
    "Interview/Group Discussion", 
    "Reservation Policies",
    "Eligibility for International/NRI Candidates",
    "Eligibility for Sponsored Candidates",
    "Reservation Policy"
];

for (key in courses) {
    if (key == courseItem) {
        console.log("Key is: ", key, " Course Item is: ", courseItem);

        var criteria_list = courses[key]
        console.log("Criteria list is:", criteria_list);
        criteria_list.forEach(element => {
            var node = document.createElement("LI");

            // Check karenge bold criteria ke liye
            boldCriteria.forEach(criterion => {
                if (element.startsWith(criterion)) {
                    // Agar Criteria matched ...Bold kardega
                    var boldText = element.split(":")[0] + ": ";
                    var criteriaText = element.split(":")[1];
                    node.innerHTML = "<strong>" + boldText + "</strong>" + criteriaText;
                }
            });

            //Agar Criteria Match Nai Kiya To Normally Append kardega
            if (!node.innerHTML) {
                node.appendChild(document.createTextNode(element));
            }
            unordered_list.appendChild(node);
        });

    }
}
