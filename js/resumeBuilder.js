//var name = "Alfia Khaibullina";
//var role = "Web Developer";

//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").append (formattedName);
//$("#header").append (formattedRole);

var bio = [
{
  "name": "Alfia Khaibullina",
  "age": 53,
  "role": "Web Developer",
  "pic_URL": "images/fry.jpg",
  "skills": ["Programming ","HTML ", "GitHub ", "Teaching "]
},
{
  "contacts": {
    "mobile": "202-294-6745",
    "email": "alfiamyst@gmail.com",
    "github": "alfiamyst",
  },
  "location": "Arlington, VA",
  "welcome": "Welcome to my brand spanking new page",
  }
]


var work = [
{
  "current_job": "Staff Scientist",
  "years": "2009 - current"
},
{
  "employer": "Children's National Medical Center",
  "location": "Washington, DC"
}
]

var education = [
{
  "Undegrad": "Kazakh State University",
  "years": "1979-1984",
  "city": "Alma-Ata, Kazakhstan"
},
{
  "graduate": "George Washington University",
  "years": "1996-2003",
  "city": "Washington, DC"
}
]

var projects {}


$("#main").append (education.graduate);
