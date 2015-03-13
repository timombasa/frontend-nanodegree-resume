var bio = {
    "name": "Tim Ombasa",
    "role": "Web Developer",
    "welcomeMessage": "What can I build for you today?",
    "contacts": {
        "mobile": "612-850-1385",
		"email": "tim.ombasa@gmail.com",
		"github": "timombasa",
		"twitter": "@timombasa",
		"location": "Oakland, CA"
    },
    "skills" : ["HTML", "CSS", "JavaScript","Java"],
    "bioPic":"images/missisippi.jpg"
}


bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%",bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);

    $("#header").prepend(formattedRole).prepend(formattedName);

    $("#topContacts")
        .append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedTwitter)
        .append(formattedLocation);

    $("#footerContacts")
        .append(formattedMobile)
        .append(formattedEmail)
        .append(formattedGithub)
        .append(formattedLocation);


    $("#header").append(formattedPic).append(formattedWelcomeMessage);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);

        for (skill in bio.skills) {
        	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $('#skills').append(formattedSkill);
        }
    }
};


var education = {
	"schools": [
		{
			"name": "University of Minnesota",
			"location": "Minneapolis, MN",
			"degree": "Bachelor of Science",
			"majors": ["Computer Science"],
			"dates": "2002-2004, 2008-2010",
			"url": "twin-cities.umn.edu"
		},
		{
			"name": "Normandale Community College",
			"location": "Bloomington, MN",
			"degree": "Associate of Science",
			"major": ["Computer Science"],
			"dates": "2006-2008",
			"url": "www.normandale.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Crash Course",
			"school": "Udacity",
			"date": "",
			"url": ""
		},
		{
			"title": "",
			"school": "Treehouse",
			"date": "",
			"url": ""
		}
	]
};


education.display = function(){
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace('#', school.url);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates_attended);

        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last a").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolLocation).append(formattedSchoolDates);

        school.majors.forEach(function(major) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formattedSchoolMajor);
        });
    });

    if (education.onlineCourses.length > 0) {
        $(".education-entry").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (course) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace('#', course.url);;
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates_attended);

            $(".education-entry:last")
                .append(formattedOnlineTitle + formattedOnlineSchool)
                .append(formattedOnlineDates)
                .append('<br>');
        });
    }
};

var work = {
    "jobs": [
        {
			"employer": "Self-employed",
			"title": "Web Developer",
			"location": "Oakland, CA",
			"dates": " March 2015 - present",
			"description": ""
        },
        {
			"employer": "ThoughtWorks",
			"title": "Software Developer",
			"location": "San Francisco, CA",
			"dates": "June 2011 - Nov. 2014",
			"description": ""
        }
    ]
}

work.display = function() {
	for (job in work.jobs) {
		// new div for work experience
		$("#workExperience").append(HTMLworkStart);
		// concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
		$(".work-entry:last").append(formattedLocation);
	}
}


var projects = {
    "projects" : [
        {
			"title": "xxxx",
			"dates": "xxx",
			"description": "xxxx",
            "images" : ["images/project1.png"]
        },
        {
            "title" : "MochiStaker Clone (Phaser)",
            "dates_worked" : "3 July 2014",
            "description" : "",
            "images" : ["images/project2.png"]
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",project.title);
        var formattedDates = HTMLprojectDates.replace("%data%",project.dates_worked);
        var formattedDescription = HTMLprojectDescription.replace("%data%",project.description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        if (project.images.length > 0) {
            project.images.forEach(function(image){
                var formattedImage = HTMLprojectImage.replace("%data%",image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    })
};


work.display();
bio.display();
education.display();
projects.display();

$('#main').append(internationalizeButton);
$("#mapDiv").append(googleMap);
































