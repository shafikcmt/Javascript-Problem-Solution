//let fees = [];

function getProgramType() {
    var course = document.getElementById("interested_area").value;
    var items;

    if (course === "pharmacy") {
        items = ["Select", "D.Pharmacy", "B.Pharmacy"];
        fees = [" ",130000, 300000];
    } else if (course === "allied-health-sciences") {
        items = ["select", "M.Sc. Nutrition & Dietetics",
             "B.Tech. Medical Lab Technology",
             "B.Sc. Yogic Science",
             "B.Sc. Nutrition & Dietetics",
             "B.Sc. Food Technology",
             "B.Sc. Public Health"
            ];
        fees = [null,120000, 300000, 270000, 180000, 180000, 180000];
    } else if (course === "agriculture") {
        items = ["select","M.Sc. Agricultural Sciences",
             "B.Sc. (Hons.) Agricultural Sciences"
            ];
        fees = [null,150000, 380000];

    } else if (course === "law") {
        items = ["select","Ph.D.",
             "L.L.M.",
             "L.L.B.",
             "B.A. LL.B. (Hons.)",
             "BBA.LL.B. (Hons.)"
            ];
        
        fees = [null,225000, 110000, 100000, 475000, 475000];
    } else if (course === "engineering") {
        items = ["select", "Ph.D. ME | CSE | Civil | ECE",
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
        fees = [null,225000, 120000, 300000, 135000, 360000, 360000,360000,360000,360000,360000,360000,360000,360000,450000,440000,440000,440000,440000,440000,440000,440000,440000,360000];
    } else if (course === "computer-application") {
        items = ["select", "MCA",
             "BCA",
             "BCA Hons. Industry Integrated Program Artificial Int. & Machine Learning",
             "BCA Hons. Industry Integrated Program Data Science & Analytics",
             "BCA Hons. Industry Integrated Program Cyber Security",
             "BCA Hons. Industry Integrated Program Cloud Computing",
             "BCA Hons. Industry Integrated Program Full Stack Web Development in tie up with CODEQUOTIENT"
            ];
        fees = [null,120000,150000,195000,195000,195000,195000,195000,195000];
    } else if (course === "sciences") {
        items = ["select", "M.Sc. In Botany",
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
        fees =[null,120000,120000,120000,120000,120000,120000,120000,120000,120000,180000,180000,180000,180000,180000,180000,180000,180000,180000,180000,180000];
    } else if (course === "commerce") {
        items = ["select", "Ph.D.",
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
         fees =[null,180000,120000,225000,225000,225000,225000,225000,225000,225000,180000];
    } else if (course === "arts-humanities") {
        items = ["select", "M.A.",
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
         fees =[null,120000,120000,120000,120000,120000,120000,120000,120000,180000,180000,180000,180000,180000,180000,180000];
    } else if (course === "media-studies") {
        items = ["select",
           "M.A. Journalism & Mass Communication",
           "M.Sc. Animation, & Multimedia Technology",
           "B.Sc. Animation, VFX & Gaming",
           "B.A. (Hons.) Journalism & Mass Comm.",
           "B.A. Film & Television Studies"

        ];
        fees =[null,150000,150000,225000,180000,180000];
    } else if (course === "fashion-design") {
        items = ["select",
           "B.Design.",
           "Fashion Design",
           "Product Design",
           "Interior Design",
           "Communication Design",
           "B.Sc. Interior Design"

        ];
        fees =[null,440000,440000,440000,440000,440000,330000];
    } else if (course === "management") {
        items = ["select",
           "Ph.D.",
           "PG Diploma",
           "Maritime Business Management",
           "Entreprenuership",
           "Innovation & Design Thinking",
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
         fees =[null,225000,75000,75000,75000,75000,190000,190000,190000,190000,190000,190000,190000,190000,190000,190000,190000,190000,190000,190000,190000,190000,190000,225000,225000,225000,225000,225000,225000,225000,225000,225000,225000,225000,225000,225000,225000,225000,225000,225000,225000,180000];
    } else if (course === "hotel-management") {
        items = ["select",
           "Bachelor of Hotel Mgmt. & Catering Tech.",
           "B.Sc. Hotel Management",
           "Hotel Management",
           "Culinary Sciences",
           "Travel & Tourism Management",
           "D.Voc. Food Processing",
           "Diploma in Food Production",
           "Diploma in Food & Beverage Services"
        ];
         fees =[null,352000,225000,225000,225000,225000,225000,67500,67500];
    } else if (course === "special-education") {
        items = ["select",
           "B.Ed. Special Education",
           "Hearing Inpairment",
          "Learning Disability"
//           "M.Ed.",
//           "M.A. Education",
//           "B.Ed."
        ];
        fees =[null,120000,120000,120000];
    } else if (course === "short-term-certification-diploma") {
        items = ["select",
           "Drone Technology",
           "Block Chain",
           "Data Science",
           "Cyber Technology",
           "Artificial Intelligence",
           "Web Design",
           "Digital Marketing"
        ];
         fees =[null,352000,225000,225000,225000,225000,225000,67500,67500];
    }


    var str = "";
    items.forEach((item, i) => {
        str += `<option value=${fees[i]}> ${item} </option>`;
    });
    document.getElementById("pickone").innerHTML = str;
}
document.getElementById("btn").addEventListener("click", getProgramType);
//*****************************************************************************

function getscholarship() {
    var scholarship = document.getElementById("pickscholar").value;
    var items;
    items = ["select", "GUTS (GEETA UNIVERSITY TEST OF SCHOLARSHIP) SCORE",
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

}
document.getElementById("btnscho").addEventListener("click", getscholarship);
//*********************************************************************
function getscholarper() {
    var scholarship_per = document.getElementById("pickscholar").value;
    var items;
    if (scholarship_per === "GUTS (GEETA UNIVERSITY TEST OF SCHOLARSHIP) SCORE") {
        items = ["Select", "Scholarship"

                          ];

    } else if (scholarship_per === "MERIT PERCENTAGE IN QUALIFYING EXAMINATION") {
        items = ["select", "Scholarship Offered"

                ];
    } else if (scholarship_per === "PERFORMANCE IN SPORTS") {
        items = ["select", "International Players",
                 "National Medal winners",
                 "National Participation"
                ];
    } else if (scholarship_per === "COVID-19") {
        items = ["select", "Loss of both the parents due to COVID",
                 "Loss of father due to COVID",
                 "Loss of family member",
                 "Frontline corona warriors i.e. Medical staff, Health workers, Doctors,Paramedics, Police, Civic workers, working withNational Disaster Management Auth. (NDMA) etc"
                ];
    } else if (scholarship_per === "SOCIAL RESPONSIBILITY") {
        items = ["select", "Freedom Fighters",
                 "Defense",
                 "Disability",
                 "Employee",
                 "Employee's Sibling/Spouse",
                 "Existing Student / GGI Alumni",
                 "Alumni / Existing Student's Sibling/Spouse",
                 "Economically Weaker Sections",
                 "Child of Single Mother(SGC)",
                 "Orphan Child"
                ];
    } else if (scholarship_per === "NATIONAL LEVEL TESTS / ENTRANCE") {
        items = ["select", "JEE (Main) - Joint Entrance Examination",
                 "National Eligibility cumNEET - Entrance Test",
                 "CAT/ XAT/ MAT/ CMAT/ NMAT",
                 "NIFT Entrance Exam NID DAT UCEED",
                 "Existing Student / GGI Alumni"
                ];
    }

    var str = "";
    items.forEach((item, i) => {
        str += `<option value="${item}">${item}</option>`;
    });
    document.getElementById("typeOfScholarship").innerHTML = str;
}

document.getElementById("btnscho-per").addEventListener("click", getscholarper);

const typeOfScholarshipSelector = document.querySelector("#typeOfScholarship");
typeOfScholarshipSelector.addEventListener("change", (e) => {
    let items = [];
    let off = [];
    let str = '';
    //    GUTS (GEETA UNIVERSITY TEST OF SCHOLARSHIP) SCORE START
    if (typeOfScholarshipSelector.value === "Scholarship") {
        items = ["select", "≥95", "≥90%", "≥80%", " ≥70%", "≥60%"];
        off = [null, 100, 50, 40, 30, 10];
    }
    //    GUTS (GEETA UNIVERSITY TEST OF SCHOLARSHIP) SCORE START
    //    **********************************************************************
    //SCHOLARSHIP ON BASIS OF MERIT / PERCENTAGE IN QUALIFYING EXAMINATION START
    else if (typeOfScholarshipSelector.value === "Scholarship Offered") {
        items = ["select", "≥95", "90-94.99 %", "80-89.99 %", " 70-79.99 % ", "60- 69.99 %"];
        off = [null, 100, 50, 40, 30, 10];
    }
    //SCHOLARSHIP ON BASIS OF MERIT / PERCENTAGE IN QUALIFYING EXAMINATION END
    //    **********************************************************************

    //    NATIONAL LEVEL TESTS / ENTRANCE START
    else if (typeOfScholarshipSelector.value === "JEE (Main) - Joint Entrance Examination") {
        items = ["select", "50%", "40%", "30%"];
        off = [null, 50, 40, 30];


    } else if (typeOfScholarshipSelector.value === "National Eligibility cumNEET - Entrance Test") {
        items = ["select", "50%", "40%", "30%"];
        off = [null, 50, 40, 30];


    } else if (typeOfScholarshipSelector.value === "CAT/ XAT/ MAT/ CMAT/ NMAT") {
        items = ["select", "50%", "40%", "30%"];
        off = [null, 50, 40, 30];


    } else if (typeOfScholarshipSelector.value === "NIFT Entrance Exam NID DAT UCEED") {
        items = ["select", "50%", "40%", "30%"];
        off = [null, 50, 40, 30];


    } else if (typeOfScholarshipSelector.value === "Existing Student / GGI Alumni") {
        items = ["select", "50%", "40%", "30%"];
        off = [null, 50, 40, 30];


    }
    //    NATIONAL LEVEL TESTS / ENTRANCE END

    // *****************************************************************************   

    //    SCHOLARSHIP ON THE BASIS OF PERFORMANCE IN SPORTS START
    else if (typeOfScholarshipSelector.value === "International Players" || typeOfScholarshipSelector.value === "National Medal winners" || typeOfScholarshipSelector.value === "National Participation") {

        let fees = document.querySelector("#pickone").value;
        let offer = 0;
        if (typeOfScholarshipSelector.value === "International Players") {
            offer = 100;
        } else if (typeOfScholarshipSelector.value === "National Medal winners") {
            offer = 50;
        } else if (typeOfScholarshipSelector.value === "National Participation") {
            offer = 30;
        }

        document.querySelector("#totalFee").value = fees;
        document.querySelector("#offer").value = offer + "%";
        let minusFee = (fees * (offer / 100));
        document.querySelector("#finalFee").value = fees - minusFee;

    }
    //    SCHOLARSHIP ON THE BASIS OF PERFORMANCE IN SPORTS END

    // *****************************************************************************   

    //    SOCIAL RESPONSIBILITY SCHOLARSHIP START
    else if (
        typeOfScholarshipSelector.value === "select" || 
        typeOfScholarshipSelector.value === "Freedom Fighters" || 
        typeOfScholarshipSelector.value === "Defense" ||
        typeOfScholarshipSelector.value === "Disability" ||
        typeOfScholarshipSelector.value === "Employee" ||
        typeOfScholarshipSelector.value === "Employee's Sibling/Spouse" ||
        typeOfScholarshipSelector.value === "Existing Student / GGI Alumni" ||
        typeOfScholarshipSelector.value === "Alumni / Existing Student's Sibling/Spouse" ||
        typeOfScholarshipSelector.value === "Economically Weaker Sections" ||
        typeOfScholarshipSelector.value === "Child of Single Mother(SGC)" ||
        typeOfScholarshipSelector.value === "Orphan Child") {

        let fees = document.querySelector("#pickone").value;
        let offer = 0;
        if (typeOfScholarshipSelector.value === "Freedom Fighters") {
            offer = 30;
        } else if (typeOfScholarshipSelector.value === "Defense") {
            offer = 30;
        }
        else if (typeOfScholarshipSelector.value === "Disability") {
            offer = 30;
        } else if (typeOfScholarshipSelector.value === "Employee") {
            offer = 50;
        } else if (typeOfScholarshipSelector.value === "Employee's Sibling/Spouse") {
            offer = 30;
        } else if (typeOfScholarshipSelector.value === "Existing Student / GGI Alumni") {
            offer = 50;
        } else if (typeOfScholarshipSelector.value === "Alumni / Existing Student's Sibling/Spouse") {
            offer = 30;
        } else if (typeOfScholarshipSelector.value === "Economically Weaker Sections") {
            offer = 30;
        } else if (typeOfScholarshipSelector.value === "Child of Single Mother(SGC)") {
            offer = 30;
        } else if (typeOfScholarshipSelector.value === "Orphan Child") {
            offer = 50;
        } else if (typeOfScholarshipSelector.value === "select") {
            offer = 0;
        } 

        document.querySelector("#totalFee").value = fees;
        document.querySelector("#offer").value = offer + "%";
        let minusFee = (fees * (offer / 100));
        document.querySelector("#finalFee").value = fees - minusFee;

    }
    //  SOCIAL RESPONSIBILITY SCHOLARSHIP END


    // *****************************************************************************   

    //    COVID 19 SCHOLARSHIPS START
    else if (
        typeOfScholarshipSelector.value === "Loss of both the parents due to COVID" || typeOfScholarshipSelector.value === "Loss of father due to COVID" ||
        typeOfScholarshipSelector.value === "Loss of family member" ||
        typeOfScholarshipSelector.value === "Frontline corona warriors i.e. Medical staff, Health workers, Doctors,Paramedics, Police, Civic workers, working withNational Disaster Management Auth. (NDMA) etc") {

        let fees = document.querySelector("#pickone").value;
        let offer = 0;
        if (typeOfScholarshipSelector.value === "Loss of both the parents due to COVID") {
            offer = 60;
        } else if (typeOfScholarshipSelector.value === "Loss of father due to COVID") {
            offer = 40;
        } else if (typeOfScholarshipSelector.value === "Loss of family member") {
            offer = 20;
        }
        else if (typeOfScholarshipSelector.value === "Frontline corona warriors i.e. Medical staff, Health workers, Doctors,Paramedics, Police, Civic workers, working withNational Disaster Management Auth. (NDMA) etc") {
        offer = 20;
    }
    document.querySelector("#totalFee").value = fees;
    document.querySelector("#offer").value = offer + "%";
    let minusFee = (fees * (offer / 100));
    document.querySelector("#finalFee").value = fees - minusFee;
    } 
//   COVID 19 SCHOLARSHIPS END

const scholarshipPercentageSelctor = document.querySelector("#pickscholarpercentage");

items.forEach((item, i) => {
    str += `<option value="${off[i]}"> ${item} </option>`;
});

scholarshipPercentageSelctor.innerHTML = str;

});



//  don't touch it
const scholarshipPercentageSelctor = document.querySelector("#pickscholarpercentage");
scholarshipPercentageSelctor.addEventListener("change", (e) => {

    let off = scholarshipPercentageSelctor.value;
    console.log(off);
    let fees = document.querySelector("#pickone").value;
    console.log(fees)
    document.querySelector("#totalFee").value = fees;
    document.querySelector("#offer").value = scholarshipPercentageSelctor.value + "%";
    let minusFee = (fees * (off / 100));
    document.querySelector("#finalFee").value = fees - minusFee;

});