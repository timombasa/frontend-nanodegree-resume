var bio = {
	"name": "Tim Ombasa",
	"role": "Web Developer",
	"welcomeMessage": "What can I build for you today?",
	"contacts": {
		"mobile": "612-850-1385",
		"email": "tim.ombasa@gmail.com",
		"github": "timombasa",
		"twitter": "@timombasa",
		"location": "Oakland"
	},
	"skills": [
		"HTML", "CSS", "JavaScript", "Java"
	],
	"bioPic": "images/fry.jpg"
};


var work = {
	"jobs": [
		{
			"employer": "ThoughtWorks",
			"title": "Software Developer",
			"location": "",
			"dates": "",
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
};

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
	]
	"onlineCourses": [
		{
			"title": "",
			"school": "Udacity",
			"dates": "",
			"url": ""
		},
		{
			"title": "",
			"school": "Treehouse",
			"dates": "",
			"url": ""
		}
	]
}


var name = "Tim Ombasa";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = " Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

