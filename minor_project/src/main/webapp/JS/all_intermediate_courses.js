function getQueryParameter(courseName) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(courseName);
}

const courseItem = getQueryParameter("text");
console.log(courseItem);


const courses = {
    "Diploma in Pharmacy": ["Educational Qualification: Candidates must have completed their 10+2 or equivalent examination with Science subjects, including Physics, Chemistry, and Biology, from a recognized board.",
        "Age Limit: Most institutions require candidates to be at least 17 years old and typically not older than 25 years at the time of admission.",
        "English Proficiency: A basic proficiency in English is essential, as many programs are conducted in English, and candidates are often required to have studied English in their 10+2 curriculum.",
        "Entrance Exam Requirement: Some colleges may conduct entrance exams or require scores from state-level examinations to assess candidates' aptitude for the pharmacy course.",
        "Minimum Cut-off Score: Institutions may set a minimum cut-off score for admission based on entrance exam results or aggregate marks in the qualifying examination.",
        "Interview/Group Discussion: A few institutions may conduct personal interviews or group discussions as part of their selection process to evaluate candidates' communication skills and suitability for the course.",
        "Reservation Policies: Reserved seats are typically available for SC, ST, OBC, and PwD candidates as per government regulations and institutional policies.",
        "Eligibility for International/NRI Candidates: Non-resident and international candidates may have specific eligibility criteria, including additional documentation and possibly language proficiency tests."],

    "Diploma in Engineering": ["Educational Qualification: Candidates must have completed 10th grade or an equivalent examination from a recognized board, typically with a minimum aggregate score.",

        "Age Limit: Most institutions require candidates to be between 15 to 20 years old at the time of admission, although age criteria may vary.",

        "Subject Requirements: Some institutions may specify certain subjects (like Mathematics and Science) that candidates should have studied in their previous education.",

        "Entrance Exam: Many colleges conduct entrance exams or accept scores from state-level polytechnic entrance tests to assess candidates' suitability for engineering programs.",

        "Minimum Cut-off Marks: Candidates must achieve a minimum score in their qualifying examination or entrance exam to be eligible for admission.",

        "Personal Interview: Some institutions may conduct interviews to evaluate candidates’ motivation and interest in engineering.",

        "Reservation Policies: Reserved seats for SC, ST, OBC, and PwD candidates are often available in accordance with government regulations.",

        "Eligibility for International/NRI Candidates: International or NRI candidates may have specific eligibility criteria, including additional documentation or qualifications."],

    "Diploma in Nursing": ["Educational Qualification: Candidates must have completed their 10+2 or an equivalent qualification in the science stream, with subjects such as Physics, Chemistry, and Biology.",

        "Age Limit: Applicants are generally required to be between 17 to 35 years old at the time of admission, although specific age criteria may vary by institution.",
        "English Proficiency: Proficiency in English is essential, often necessitating that candidates have studied English as a compulsory subject in their previous education.",

        "Entrance Exam Requirement: Some nursing schools may require candidates to pass a relevant entrance exam to assess their suitability for the nursing program.",

        "Minimum Cut-off Score: Institutions may establish a minimum cut-off score or percentage in the qualifying examination or entrance exam for admission eligibility.",

        "Health and Fitness: Candidates must undergo a medical examination to ensure they meet the required health standards for the nursing profession.",

        "Personal Interview: Some institutions may conduct a personal interview to evaluate candidates’ motivations, communication skills, and suitability for the nursing field.",

        "Reservation Policies: Reserved seats may be available for candidates from SC, ST, OBC, and PwD categories in accordance with government regulations."],

    "Diploma in Hotel Management": ["Educational Qualification: Candidates must have completed their 10th or 12th grade from a recognized board, ensuring foundational knowledge for the program.",

        "Age Limit: Most institutions require candidates to be between 17 to 25 years of age at the time of admission to ensure maturity for the hospitality industry.",

        "English Proficiency: Proficiency in English is essential, as it is the primary medium of instruction and communication in the hotel management field.",

        "Entrance Exam Requirement: Some institutions may require candidates to pass an entrance exam designed to assess their aptitude for the hospitality sector.",

        "Interview Process: A personal interview may be conducted by some colleges to evaluate candidates' communication skills and suitability for the course.",

        "Reservation Policies: Institutions often provide reserved seats for SC, ST, OBC, and PwD categories in accordance with government regulations.",

        "Industry Exposure: Some programs may require or recommend candidates to have prior experience or exposure to the hospitality industry, which can enhance practical learning.",

        "Eligibility for International Candidates: International students may need to fulfill specific requirements, including proficiency tests like IELTS or TOEFL, to demonstrate their English language skills."],

    "Diploma in Fashion Designing": ["Educational Qualification: Candidates must have completed their 10th or 12th grade from a recognized board or equivalent, providing a foundation for advanced studies in fashion design.",

        "Age Limit: Most institutions typically require candidates to be at least 16 years old at the time of admission, although age criteria may vary.",

        "Creative Aptitude: A strong interest and flair for creativity, design, and fashion trends are essential for success in the course, as this program emphasizes artistic expression.",

        "Portfolio Submission: Some colleges require candidates to submit a portfolio showcasing their artistic skills and previous design work as part of the admission process.",

        "Entrance Exam Requirement: Certain institutions may conduct entrance exams to assess candidates' understanding of fashion, design concepts, and aptitude.",

        "Interview Process: An interview may be conducted to evaluate candidates' passion for fashion and their understanding of the industry.",

        "Reservation Policies: Admissions may include reserved seats for SC, ST, OBC, and PwD categories as per government regulations.",

        " Eligibility for International Candidates: Foreign candidates may have distinct eligibility requirements, including language proficiency tests like IELTS or TOEFL."],

    "Diploma  in Information Technology": ["Educational Qualification: Candidates should have completed their 10th grade or an equivalent qualification from a recognized board, providing a foundational understanding of academic subjects.",

        "Age Limit: Typically, candidates must be between 15 to 20 years old at the time of admission, though specific age requirements may vary by institution.",

        "Proficiency in Mathematics: A basic understanding of mathematics is often required, as it is crucial for various aspects of information technology and programming.",

        "Entrance Exam Requirement: Some institutions may conduct entrance exams to assess candidates' aptitude and readiness for the diploma program.",

        "Minimum Cut-off Score: Certain colleges may establish a minimum cut-off score for admission based on academic performance in previous examinations.",

        "Interview/Group Discussion: Some institutions might include an interview or group discussion round to evaluate candidates’ motivation and communication skills.",

        "Reservation Policies: Institutions often follow government guidelines for reservation policies, providing seats for SC, ST, OBC, and PwD candidates.",

        "Eligibility for International Candidates: Non-resident candidates may have specific eligibility criteria, including language proficiency tests, depending on the institution."],

    "Diploma in Graphic Designing": ["Educational Qualification: Candidates should have completed their 10+2 or an equivalent examination from a recognized board, ensuring a foundational understanding of creative concepts.",

        "Age Limit: There is generally no strict age limit; however, candidates are typically expected to be at least 16 years old at the time of admission.",

        "Portfolio Requirement: Many institutions require candidates to submit a portfolio showcasing their creative work, demonstrating skills and potential in graphic design.",

        "Software Proficiency: Familiarity with graphic design software, such as Adobe Photoshop, Illustrator, or CorelDRAW, may be recommended to facilitate learning during the course.",

        "Entrance Exam: Some institutions may conduct an entrance exam or an aptitude test to assess candidates' artistic abilities and suitability for the program.",

        "Interview/Personal Statement: An interview or personal statement may be required to evaluate candidates' passion for graphic design and their long-term career goals.",

        "Reservation Policies: Institutions often have provisions for reserved seats according to government regulations for SC, ST, OBC, and PwD categories.",

        "International Candidate Eligibility: Specific eligibility criteria for international candidates may apply, which could include language proficiency tests like IELTS or equivalent."],

    "Diploma in Interior Designing": ["Educational Qualification: Candidates should have completed their 10th or 12th standard from a recognized board, as this serves as the basic requirement for admission into the diploma program.",

        "Age Limit: Most institutions do not impose a strict age limit, but candidates should ideally be between 16 to 25 years at the time of admission to ensure they can complete the course effectively.",

        "Portfolio Requirement: Some institutions may require candidates to submit a portfolio showcasing their creativity and prior work in design or art, demonstrating their passion for the field.",

        "Entrance Exam Requirement: Certain colleges may conduct entrance exams or aptitude tests to assess candidates' skills and suitability for the interior designing course.",

        "Interview Process: An interview may be conducted to evaluate the candidate's motivation, creativity, and understanding of interior design concepts.",

        "Reservation Policies: Institutions may have reserved seats available for SC, ST, OBC, and PwD categories, in accordance with government regulations.",

        "Eligibility for International Candidates: International applicants may need to meet specific requirements, including language proficiency tests like IELTS or equivalent."],

    "Diploma in Agriculture": ["Educational Qualification: Candidates must have completed their 10th grade or equivalent from a recognized board, as this forms the basic educational requirement for pursuing a diploma in Agriculture.",

        "Age Limit: Generally, candidates should be between 15 to 20 years of age at the time of application, although some institutions may allow for slight variations.",

        "Subject Requirements: It is often preferred that candidates have studied Science, especially Biology and Mathematics, in their 10th grade to prepare for the agricultural curriculum.",

        "Entrance Exam Requirement: Some colleges may require candidates to pass an entrance exam specific to agricultural studies to assess their aptitude and knowledge in the field.",

        "Minimum Cut-off Score: Certain institutions may set a minimum cut-off score in their entrance exams, which candidates must achieve to qualify for admission.",

        "Practical Knowledge: Candidates should possess a genuine interest in agriculture and related practical knowledge, as hands-on experience is crucial in this field.",

        "Reservation Policies: Institutions typically follow government regulations for reservations, providing seats for SC, ST, OBC, and PwD candidates as per the applicable guidelines.",

        "Eligibility for International/NRI Candidates: International or NRI candidates may have distinct eligibility criteria, including language proficiency tests and equivalent educational qualifications."],

    "Diploma in Paramedical Sciences": ["Educational Qualification: Candidates must have completed their 10+2 or equivalent in science stream from a recognized board, with a focus on subjects like Biology, Physics, and Chemistry.",

        "Age Limit: Most institutions typically require candidates to be between 17 to 30 years of age at the time of application, though some may vary this criterion.",

        "Health and Fitness Standards: Candidates may need to meet specific health and fitness criteria, ensuring they are physically capable of handling the demands of paramedical training.",

        "Entrance Exam Requirement: Some institutions may require candidates to clear an entrance exam or interview to assess their aptitude and readiness for the course.",

        "Minimum Cut-off Marks: Certain institutions set a minimum score threshold in the qualifying examination, which candidates must achieve to qualify for admission.",

        " Reservation Policies: As per government regulations, reserved seats may be available for SC, ST, OBC, and PwD candidates.",

        "Previous Work Experience: Some advanced diploma courses may require candidates to have relevant work experience or internships in the healthcare field.",

        "Eligibility for International Candidates: Foreign candidates may need to meet additional requirements, including verification of their educational credentials and proficiency in the English language."],

    "Diploma in Multimedia and Animation": ["Educational Qualification: Candidates must have completed their 10th or 12th grade from a recognized board to be eligible for admission into the Diploma in Multimedia and Animation program.",
        "Age Limit: There may be no strict age limit, but most institutions prefer candidates to be between 16 to 25 years old at the time of admission.",
        "Portfolio Requirement: Many institutions require candidates to submit a portfolio showcasing their creative work, such as drawings, digital art, or multimedia projects, to assess their skills and creativity.",
        "Entrance Exam/Interview: Some colleges may conduct an entrance exam or personal interview to evaluate candidates' aptitude, artistic skills, and motivation for pursuing the course.",
        "Computer Proficiency: Basic knowledge of computers and familiarity with graphic design software is often expected, as these skills are crucial for success in the program.",
        "Reservation Policies: Institutions typically adhere to government regulations regarding reservations for SC, ST, OBC, and other minority categories.",
        "International Candidates: International applicants may have specific eligibility requirements, including proficiency in English and possibly submitting standardized test scores."],

    "Diploma in Digital Marketing": ["Educational Qualification: Candidates must have completed their higher secondary education to ensure they have the basic knowledge necessary for digital marketing concepts.",
        "Age Limit: Institutions typically do not have a strict age requirement, allowing a diverse range of applicants to pursue the course.",
        "English Proficiency: Basic understanding of English is crucial for comprehending course content and engaging in discussions.",
        "Entrance Exam Requirement: While not universally required, certain programs may implement assessments to gauge candidates' readiness for digital marketing.",
        "Minimum Cut-off Score: A threshold may be set for admissions, ensuring that candidates meet specific academic standards.",
        "Interview Requirement: Selected institutions might include interviews in their admission process to assess candidates' passion for the field.",
        "Reservation Policies: Institutions typically reserve a certain number of seats for specific categories to promote inclusivity in education.",
        "Eligibility for International/NRI Candidates: Non-resident and international applicants may face unique criteria, such as proof of English language skills, to ensure they can keep up with course demands."],

    "Diploma in Travel & Tourism": [],

    "Diploma in Journalism": [],

    "Diploma in Psychology": [],

    "Diploma in Mass Communication": [],

    "Diploma in Web Development": [],

    "Diploma in Information Technology": [],

    "Diploma in Dental Hygienist": [],

    "Science": ["Educational Qualification: Completion of 10th grade from a recognized board with a minimum required percentage, typically around 50% for science-related diploma programs.",

        " Age Limit: Candidates generally need to be between 15 to 18 years old at the time of application, but this may vary depending on the institution.",

        "Subject Requirements: Some institutions may require candidates to have a background in specific subjects, like mathematics or science, in their 10th grade.",

        "Entrance Exam Requirement: An entrance exam may be required by some institutions to assess candidates' aptitude for science-related diploma studies.",

        "Minimum Cut-off Score: Meeting any cut-off score set by the institution, especially if there’s an entrance exam involved, can be necessary for selection.",
        "Interview/Counseling Round: Clearing a personal interview or counseling round may be a part of the admission process in some institutions.",

        "Reservation Policies: Reserved seats may be available for certain categories such as SC, ST, and OBC, following government or institutional policies.",

        "Eligibility for NRI/International Candidates: For NRI or foreign applicants, there may be additional eligibility criteria, including standardized language tests if applicable."],

    "Commerce": ["Educational Qualification: Candidates must have completed their 10+2 or equivalent qualification from a recognized board, with preference for commerce or related subjects.",

        "Age Limit: Most institutions require candidates to be between 17 and 25 years old at the time of application, though this may vary.",

        "English Proficiency: Proficiency in English is typically necessary, with many colleges requiring English as a compulsory subject in 10+2.",

        "Entrance Exam Requirement: Certain institutions may require candidates to clear an entrance exam specific to commerce, such as DU JAT or other university tests.",

        "Minimum Cut-off Score: Colleges may have a minimum cut-off score or rank in entrance exams, which candidates must meet for admission.",

        "Interview/Group Discussion: Some institutions assess candidates through an interview or group discussion to evaluate communication and aptitude.",

        "Reservation Policies: Reserved seats are available as per government guidelines for SC, ST, OBC, and PwD categories.",

        "Eligibility for International/NRI Candidates: International or NRI candidates may have distinct requirements, such as standardized language tests like IELTS or TOEFL."],

    "Arts/Humanities": ["Educational Qualification: Admission generally requires candidates to have completed their higher secondary education, with minimum scores varying by institution.",

        "Age Limit: Most colleges do not have a strict age limit, though the typical age range for applicants is 17-25 years.",

        "English Proficiency: Since the medium of instruction is often English, candidates may need basic proficiency in English or have studied it at the 10+2 level.",

        "Entrance Exam Requirement: Generally, arts and humanities programs do not have compulsory entrance exams; however, select institutions may require one.",

        "Minimum Cut-off Score: While minimum scores may not be set for most arts programs, top colleges sometimes have a cut-off for admission.",

        "Interview/Written Test: Some institutions conduct interviews or written tests to assess the applicant’s interest and aptitude for humanities studies.",

        "Reservation Policies: Seats may be reserved for students from specific categories, following governmental or institutional policies.",

        "Eligibility for International/NRI Candidates: Foreign or NRI candidates may have to meet specific criteria, including exams like IELTS or TOEFL if English proficiency is required."]

}
var unordered_list = document.getElementById("criteria_eligibility");

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
