let fees;

function getProgramType() {
    var course = document.getElementById("interested_area").value;
    var items;

    if (course === "pharmacy") {
        items = ["D.Pharmacy", "B.Pharmacy"];
    } else if (course === "allied-health-sciences") {
        items = ["M.Sc. Nutrition & Dietetics",
             "B.Tech. Medical Lab Technology",
             "B.Sc. Yogic Science",
             "B.Sc. Nutrition & Dietetics",
             "B.Sc. Food Technology",
             "B.Sc. Public Health"
            ];
    } else if (course === "agriculture") {
        items = ["M.Sc. Agricultural Sciences",
             "B.Sc. (Hons.) Agricultural Sciences"
            ];
    } else if (course === "law") {
        items = ["Ph.D.",
             "L.L.M.",
             "L.L.B.",
             "B.A. LL.B. (Hons.)",
             "BBA.LL.B. (Hons.)"
            ];
        fees = [10000, 20000, 30000, 50000, 70000];

    } else if (course === "engineering") {
        items = ["Ph.D. ME | CSE | Civil | ECE",
             "M.Tech. ME | CSE | CE | ECE",
             "B.Tech. ME | CE | ECE",
             "Diploma ME | CSE | CE",
             "B.Tech (Hons.) Mechanical Engg. In Electrical Vehicle Tech.",
             "B.Tech (Hons.) Mechanical Engineering In Robotics & Auto.",
             "B.Tech (Hons.) Electronics & Comm. Engg. In Internet of Things & Intelligent Systems",
             "B.Tech (Hons.) Electronics & Comm. Engg. In Drone Technology",
             "B.Tech (Hons.) Electronics & Comm. Engg. In GIS & Remote Sensing",
             "B.Tech (Hons.) Electrical Engg. In Electrical Vehicle Tech.",
             "B.Tech (Hons.) Civil Engg. In Green Technology & Sustainability Engg.",
             "B.Tech (Hons.) Civil Engg. In Smart Cities",
             "B.Tech (Hons.) Civil Engg. In Construction Technology",
             "B.Tech. CSE + MBA (Integrated)",
             "B.Tech. (Hons.) Computer Sci. & Engg.",
             "Industry Integrated Program In Internet of Things", "Industry Integrated Program In Artificial Int. & Machine Learning",
             "Industry Integrated Program In Data Science & Analytics",
             "Industry Integrated Program In Cyber Security",
             "Industry Integrated Program In Cloud Computing",
             "Industry Integrated Program In Full Stack Web Development in tie up with Code Quotient",
             "Industry Integrated Program In Block Chain Technology",
             "B.Tech. CSE"
            ];
    } else if (course === "computer-application") {
        items = ["MCA",
             "BCA",
             "BCA Hons. Industry Integrated Program Artificial Int. & Machine Learning",
             "BCA Hons. Industry Integrated Program Data Science & Analytics",
             "BCA Hons. Industry Integrated Program Cyber Security",
             "BCA Hons. Industry Integrated Program Cloud Computing",
             "BCA Hons. Industry Integrated Program Full Stack Web Development in tie up with CODEQUOTIENT"
            ];
    } else if (course === "sciences") {
        items = ["M.Sc. In Botany",
             "M.Sc. In Zoology",
             "M.Sc. In Chemistry",
             "M.Sc. In Physics",
             "M.Sc. In Mathematics",
             "M.Sc. In Biotechnology",
             "M.Sc. In Microbiology",
             "M.Sc. In Data Analytics",
             "M.Sc. In Forensic Sci.",
             "B.Sc. (Hons.) In Medical",
             "B.Sc. (Hons.) In Biology",
             "B.Sc. (Hons.) In Microbiology",
             "B.Sc. (Hons.) In Forensic Sciences",
             "B.Sc. (Hons.) In Zoology",
             "B.Sc. (Hons.) In Botany",
             "B.Sc. (Hons.) In Physics",
             "B.Sc. (Hons.) In Chemistry",
             "B.Sc. (Hons.) In Mathematics",
             "B.Sc. (Hons.) In Statistics & Analysis",
             "B.Sc. (Hons.) In Biotechnology"
            ];
    } else if (course === "commerce") {
        items = ["Ph.D.",
            "M.Com.",
            "B.Com. (Hons.) In Financial Market",
            "B.Com. (Hons.) In E Commerce",
            "B.Com. (Hons.) In Accounting",
            "B.Com. (Hons.) In Marketing",
            "B.Com. (Hons.) In Advanced Cost & Mgmt.",
            "B.Com. (Hons.) In Auditing & Taxation",
            "B.Com. (Hons.) In Banking & Insurance",
            "B.Com."

            ];
    } else if (course === "arts-humanities") {
        items = ["M.A.",
            "M.A.  Economics",
            "M.A.  Political Sci.",
            "M.A.  English",
            "M.A.  Psychology",
            "M.A.  Performing Arts",
            "M.A.  Fine Arts",
            "M.A.  Sociology",
            "B.A.",
            "B.A. (Hons.) In Economics",
            "B.A. (Hons.) In Political Sci.",
            "B.A. (Hons.) In English",
            "B.A. (Hons.) In Psychology",
            "B.A. (Hons.) In Performing Arts",
            "B.A. (Hons.) In Fine Arts"

            ];
    } else if (course === "media-studies") {
        items = [
           "M.A. Journalism & Mass Communication",
           "M.Sc. Animation, & Multimedia Technology",
           "B.Sc. Animation, VFX & Gaming",
           "B.A. (Hons.) Journalism & Mass Comm.",
           "B.A. Film & Television Studies"

        ];
    } else if (course === "fashion-design") {
        items = [
           "B.Design.",
           "Fashion Design",
           "Product Design",
           "Interior Design",
           "Communication Design",
           "B.Sc. Interior Design"

        ];
    } else if (course === "management") {
        items = [
           "Ph.D.",
           "PG Diploma",
           "Maritime Business Management",
           "Entreprenuership",
           "Innovation & Design Thinking",
           "MBA",
           "MBA In Finance",
           "MBA In Marketing",
           "MBA In Hospital Mgmt.",
           "MBA In Retail Mgmt.",
           "MBA In E Commerce",
           "MBA In Sports Mgmt.",
           "MBA In General Mgmt.",
           "MBA In Info. Tech.",
           "MBA In Human Resource Mgmt.",
           "MBA In Family Business Mgmt.",
           "MBA In Supply Chain & Logistics",
           "MBA In International Business",
           "MBA In Real Estate Mgmt.",
           "MBA In Pharmaceutical Mgmt.",
           "MBA In Agri Business Mgmt.",
           "MBA In Hotel Mgmt. & Tourism",
           "MBA In Media Communication",
           "BBA (Hons.) In Financial Technology (Fin Tech.)",
           "BBA (Hons.) In Human Resource Mgmt.",
           "BBA (Hons.) In Import & Export Mgmt.",
           "BBA (Hons.) In Real Estate & Urban Infra.",
           "BBA (Hons.) In Tourism & Hospitality Mgmt.",
           "BBA (Hons.) In Family Business Mgmt.",
           "BBA (Hons.) In Retail Mgmt.",
           "BBA (Hons.) In Sports Mgmt.",
           "BBA (Hons.) In Hospital Mgmt.",
           "BBA (Hons.) In Marketing",
           "BBA (Hons.) In Tech Sales",
           "BBA (Hons.) In Customer Success",
           "BBA (Hons.) In Family Business Mgmt.",
           "BBA (Hons.) In Insurance & Risk Mgmt.",
           "BBA (Hons.) In Digital Marketing",
           "BBA (Hons.) In Banking & Finance",
           "BBA (Hons.) In Business Analytics",
           "BBA (Hons.) In Event Mgmt.",
           "BBA"

        ];
    } else if (course === "hotel-management") {
        items = [
           "Bachelor of Hotel Mgmt. & Catering Tech.",
           "B.Sc. Hotel Management",
           "Hotel Management",
           "Culinary Sciences",
           "Travel & Tourism Management",
           "D.Voc. Food Processing",
           "Diploma in Food Production",
           "Diploma in Food & Beverage Services"
        ];
    } else if (course === "special-education") {
        items = [
           "B.Ed. Special Education",
           "Hearing Inpairment",
           "Learning Disability",
           "M.Ed.",
           "M.A. Education",
           "B.Ed."
        ];
    } else if (course === "short-term-certification-diploma") {
        items = [
           "Drone Technology",
           "Block Chain",
           "Data Science",
           "Cyber Technology",
           "Artificial Intelligence",
           "Web Design",
           "Digital Marketing"
        ];
    }


    var str = "";
    for (var item of items) {
        str += "<option>" + item + "</option>";
    }
    document.getElementById("pickone").innerHTML = str;
}
document.getElementById("btn").addEventListener("click", getProgramType);
//*****************************************************************************

function getscholarship() {
    var scholarship = document.getElementById("pickscholar").value;
    var items;
    items = ["GUTS (GEETA UNIVERSITY TEST OF SCHOLARSHIP) SCORE",
             "MERIT PERCENTAGE IN QUALIFYING EXAMINATION",
             "NATIONAL LEVEL TESTS / ENTRANCE",
             "SOCIAL RESPONSIBILITY",
             "PERFORMANCE IN SPORTS",
             "COVID-19"

            ];
    var str = "";
    for (var item of items) {
        str += "<option>" + item + "</option>";
    }

    document.getElementById("pickscholar").innerHTML = str;
    console.log(str);
}
document.getElementById("btnscho").addEventListener("click", getscholarship);
//*********************************************************************
function getscholarper() {
    var scholarship_per = document.getElementById("pickscholar").value;
    var items;
    var itemsports;
    if (scholarship_per === "GUTS (GEETA UNIVERSITY TEST OF SCHOLARSHIP) SCORE") {
        items = items = ["Scholarship",
                          ""
                          ];
    } else if (scholarship_per === "MERIT PERCENTAGE IN QUALIFYING EXAMINATION") {
        items = ["Scholarship Offered",
                 ""
                ];
    } else if (scholarship_per === "PERFORMANCE IN SPORTS") {
        items = ["International Players",
                 "National Medal winners",
                 "National Participation"
                ];
    } else if (scholarship_per === "COVID-19") {
        items = ["Loss of both the parents due to COVID",
                 "Loss of father due to COVID",
                 "Loss of family member",
                 "Frontline corona warriors i.e. Medical staff, Health workers, Doctors,Paramedics, Police, Civic workers, working withNational Disaster Management Auth. (NDMA) etc"
                ];
    } else if (scholarship_per === "SOCIAL RESPONSIBILITY") {
        items = ["Freedom Fighters",
                 "Defense",
                 "Disability",
                 "Employee's Sibling/Spouse",
                 "Existing Student / GGI Alumni",
                 "Alumni / Existing Student's Sibling/Spouse",
                 "Economically Weaker Sections",
                 "Child of Single Mother(SGC)",
                 "Orphan Child"
                ];
    } else if (scholarship_per === "NATIONAL LEVEL TESTS / ENTRANCE") {
        items = ["JEE (Main) - Joint Entrance Examination",
                 "National Eligibility cumNEET - Entrance Test",
                 "CAT/ XAT/ MAT/ CMAT/ NMAT",
                 "NIFT Entrance Exam NID DAT UCEED",
                 "Existing Student / GGI Alumni"
                ];
    }


    var str = "";

    for (var item of items) {
        str += "<option>" + item + "</option>";
    }
    document.getElementById("pickscholarpercentage").innerHTML = str;
}
document.getElementById("btnscho-per").addEventListener("click", getscholarper);



let percentage = [10, 20, 30, 40, 10, 25];
const schoBtn = document.querySelector("#btnscho");

schoBtn.addEventListener("click", (e) => {
    const scholarTemp2 = document.querySelectorAll("#pickscholar option");
    scholarTemp2.forEach((ele, i) => {
     ele.setAttribute("value", percentage[i]);
        console.log(ele);
    });
});


