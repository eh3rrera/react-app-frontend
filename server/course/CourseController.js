var express = require('express');
var router = express.Router();

const courses = [
    {
        id: "react-flux-building-applications",
        title: "Building Applications in React and Flux",
        watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
        authorId: "cory-house",
        length: "5:08",
        category: "JavaScript"
    },
    {
        id: "clean-code",
        title: "Clean Code: Writing Code for Humans",
        watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
        authorId: "cory-house",
        length: "3:10",
        category: "Software Practices"
    },
    {
        id: "architecture",
        title: "Architecting Applications for the Real World",
        watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
        authorId: "cory-house",
        length: "2:52",
        category: "Software Architecture"
    },
    {
        id: "career-reboot-for-developer-mind",
        title: "Becoming an Outlier: Reprogramming the Developer Mind",
        watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
        authorId: "cory-house",
        length: "2:30",
        category: "Career"
    },
    {
        id: "web-components-shadow-dom",
        title: "Web Component Fundamentals",
        watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
        authorId: "cory-house",
        length: "5:10",
        category: "HTML5"
    }
];

const replaceAll = (str, find, replace) => {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
    return replaceAll(course.title, ' ', '-').toLowerCase();
};

// CREATES A NEW USER
router.post('/', function (req, res) {
    const course = {
      title : req.body.title,
      authorId : req.body.authorId,
      length : req.body.length,
      category : req.body.category
    };
  
    if (course.title.length < minCourseTitleLength) {
      res.status(500).send(`Title must be at least ${minCourseTitleLength} characters.`);
    } else {
      course.id = generateId(course);
      course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
      courses.push(course);
      res.status(200).send(course);
    }
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    res.status(200).send(courses);
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
  const existingCourseIndex = courses.findIndex(course => course.id === req.params.id);
  if(existingCourseIndex == -1) {
    res.status(500).send("There was a problem finding the course.");
  } else {
    const courseFound = Object.assign({}, courses[existingCourseIndex]);
    res.status(200).send(courseFound);
  }
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
  const indexOfCourseToDelete = courses.findIndex(course => course.id === req.params.id);
  if(indexOfCourseToDelete == -1) {
    res.status(500).send("There was a problem finding the course.");
  } else {
    console.log(indexOfCourseToDelete);
    courses.splice(indexOfCourseToDelete, 1);
    res.status(200).send("Course was deleted.");
  }
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
  const existingCourseIndex = courses.findIndex(course => course.id === req.params.id);
  if(existingCourseIndex == -1) {
    res.status(500).send("There was a problem finding the course.");
  } else {
    const courseFound = Object.assign({}, courses[existingCourseIndex]);
    const course = {
      id: courseFound.id,
      title : req.body.title,
      authorId : req.body.authorId,
      length : req.body.length,
      category : req.body.category,
      watchHref: courseFound.watchHref
    };
    courses.splice(existingCourseIndex, 1, course);
    res.status(200).send(course);
  }
});


module.exports = router;