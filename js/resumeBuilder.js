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
    "bioPic": "images/missisippi.jpg",
    "skills" : ["HTML", "CSS", "JavaScript","Java"],

    "display": function() {
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
            .append(formattedTwitter)
            .append(formattedLocation);

        $("#header").append(formattedPic).append(formattedWelcomeMessage);

        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);

            for (skill in bio.skills) {
            	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $('#skills').append(formattedSkill);
            }
        }
    }
}

var education = {
    "schools": [
        {
            "name": "University of Minnesota",
            "location": "Minneapolis, MN",
            "degree": "Bachelor of Science",
            "major": "Computer Science",
            "dates": "2010",
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
            "title": "Front-End Web Developer",
            "school": "Udacity Nanodegree",
            "date": "2015",
            "url": "https://www.udacity.com/course/nd001"
        },
        {
            "title": "Front-End Web Development",
            "school": "Treehouse",
            "date": "2014",
            "url": "http://teamtreehouse.com/tracks/front-end-web-development"
        }
    ],

    "display": function() {
        var schoolStart = HTMLschoolStart;

        $('#education').append(schoolStart);
        // loop through brick-and-mortar education
        for(var i = 0; i < education.schools.length; i++) {
            var schoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            $('#education').append(schoolName);

            var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $('#education').append(schoolLocation);

            var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $('#education').append(schoolDegree);

            var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
            $('#education').append(schoolMajor);

            var schoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $('#education').append(schoolDates);
        }


        var onlineClasses = HTMLonlineClasses;
        $('#education').append(onlineClasses);
        // loop through online courses
        for(var j = 0; j < education.onlineCourses.length; j++) {
            var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
            $('#education').append(onlineTitle);

            var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
            $('#education').append(onlineSchool);

            var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].date);
            $('#education').append(onlineDates);

            var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
            $('#education').append(onlineURL);

            $('#education').append('<hr>');
        }
    }
}


var work = {
    "jobs": [
        {
			"employer": "Self-employed",
			"title": "Web Developer",
			"location": "Oakland, CA",
			"dates": " March 2015 - present",
			"description": "I make websites and Web applications :)"
        },
        {
			"employer": "ThoughtWorks",
			"title": "Software Developer",
			"location": "San Francisco, CA",
			"dates": "June 2011 - Nov. 2014",
			"description": "Waved our hands around at client presentations and magic happened."
        }
    ],

    "display": function() {
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
}

var projects = {
    "projects": [
      {
        "title": "Udacity - Mockup to Website",
        "dates": "2014",
        "description": "Replicated a PDF mockup in HTML and CSS",
        "images": ["images/mockup_to_webpage_screenshot1.png"]
      }
    ],

    "display": function() {
        for (var project in projects["projects"]) {
            $("#projects").append(HTMLprojectStart);
            var project = projects["projects"][project];
            var formattedTitle = HTMLprojectTitle.replace("%data%", project["title"]);
            var formattedDates = HTMLprojectDates.replace("%data%", project["dates"]);
            var formattedDesc = HTMLprojectDescription.replace("%data%", project["description"]);
            var formattedImages = "";

            if (project["images"].length > 0){
                for (image in project["images"]) {
                    formattedImages += HTMLprojectImage.replace("%data%", project["images"][image]);
                };
            }
            $(".project-entry:last").append(formattedTitle + formattedDates + formattedDesc + formattedImages);
        };
    }
}


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
































