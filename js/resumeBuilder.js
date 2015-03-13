var bio = {
	"name": "Tim Ombasa",
	"role": "Web Developer",
	"contacts": {
		"mobile": "612-850-1385",
		"email": "tim.ombasa@gmail.com",
		"github": "timombasa",
		"twitter": "@timombasa",
		"location": "Oakland"
	},
	"welcomeMessage": "What can I build for you today?",
	"skills": [
		"HTML", "CSS", "JavaScript", "Java"
	],
	"bioPic": "images/fry.jpg",
}

bio.display() = function() {
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
}



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
}

education.display() = function() {
	for (school in education.schools) {
		// new div for work experience
		$("#education").append(HTMLschoolStart);
		// concat employer and title
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolMajor);
		$(".education-entry:last").append(formattedSchoolDates);
	}
}

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
		},
		{
			"employer": "ThoughtWorks",
			"title": "Software Developer",
			"location": "",
			"dates": "",
			"description": ""
		}
	]

}

work.display() = function() {
	for (job in work.jobs) {
		// new div for work experience
		$("#workExperience").append(HTMLworkStart);
		// concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
	}
}

displayWork();

function locationizer(work_obj) {
    var locations = [];

	for(job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locations.push(newLocation);
	}
    return locations;
}

console.log(locationizer(work));

var projects = {
	"projects": [
		{
			"title": "",
			"dates": "",
			"description": "",
			"images": [{"www.example1.com"},{"www.example2.com"}]
		},
		{
			"title": "",
			"dates": "",
			"description": "",
			"images": [{"www.sample1.com"},{"www.sample2.com"}]
		}
	]
}

projects.display = function() {
	for(project in projects.projects) {
		// new div for projects
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".projects-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".projects-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDates.replace("%data%", projects.projects[project].description);
		$(".projects-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images)
			var formattedImage = HTMLprojectImage.replace("%data", projects.projects[project].images[image]);
			$(".projects-entry:last").append(formattedImage);
		}
	}
}


$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function inName(name) {
	name = name.trim().split("");
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].toUpperCase();

	return name[0] + "" + name[1];
}

$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);








var name = "Tim Ombasa";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = " Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["HTML", "CSS", "JavaScript", "Java"];
$("#main").append(skills);


