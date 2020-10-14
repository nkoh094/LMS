const uploader = require('../helpers/upload');
const passport = require('passport');
require('../helpers/passport.js')();
const Users = require('../modules/users/users_controller');
const Interests = require('../modules/interests/interests_controller');
const Classes = require('../modules/classes/classes_controller');
const Lectures = require('../modules/lectures/lectures_controller');
const Topics = require('../modules/topics/topics_controller');
const UserInterest = require('../modules/usersInerests/user_interest_controller');
const Annoucements = require('../modules/annoucements/annoucements_controller');
const Assignments = require('../modules/assignments/assignments_controller');
const CourseMaterial = require('../modules/courseMaterial/course_material_controller');
const Quiz = require('../modules/quizes/quiz_controller');

module.exports = function(app) {
  
  app.get("/", function(req, res) {
    res.send("********");
  });

  // social auths
  app.post('/api/auth/facebook', passport.authorize('facebook-token', { session: false }), Users.fbAuth());

  //verify Identity 
  app.post('/api/verify/identity', Users.verifyIdentity());

  //user Register
  app.post('/api/user/create', Users.userRegister());

  //user Login
  app.post('/api/user/signin', Users.userLogin());

  //users list
  app.get('/api/user/:user/list', Users.listUsers());

  //admin Register
  app.post('/api/admin/create', Users.adminRegister());

  //interest create
  app.post('/api/interest/create', Interests.createInterest());

  //interest list
  app.get('/api/interest/list', Interests.listInterests());

  //interest delete
  app.delete('/api/interest/delete', Interests.deleteInterest());

  //Class create
  app.post('/api/class/create', Classes.createClasses());

  //Class list
  app.get('/api/class/:user/list', Classes.listClasses());

  //Class Student list
  app.get('/api/class/:class_id/student/list', Classes.listClassesStudent());

  //Class delete
  app.delete('/api/class/delete', Classes.deleteClass());

  //Lecture create
  app.post('/api/class/lecture/create', uploader.upload.single('files'), Lectures.createLecture());

  //Lecture List 
  app.get('/api/class/:id/lecture/list', Lectures.listLectures());

  //Lecture delete
  app.delete('/api/class/lecture/delete', Lectures.deleteLecture());

  //Topic create
  app.post('/api/topic/create', Topics.createTopic());

  //Topic private list
  app.get('/api/class/:id/topic/:user_id/list', Topics.listPrivateTopics());

  //Topic general list
  app.get('/api/topic/:id/list', Topics.listGeneralTopics());

  //Topic delete
  app.delete('/api/topic/delete', Topics.deleteTopic());
  
   //user interest create
  app.post('/api/user/interest/create', UserInterest.createInterest());

  //user interest list
  app.get('/api/interest/:user_id/list', UserInterest.listInterests());

  //user interest delete
  app.delete('/api/user/interest/delete', UserInterest.deleteInterest());
  
   //annoucenment create
  app.post('/api/annoucement/create', Annoucements.createAnnoucement());

  //annoucement list
  app.get('/api/annoucement/:id/list', Annoucements.listAnnoucement());

  //annoucement delete
  app.delete('/api/annoucement/delete', Annoucements.deleteAnnoucement());

  //Assignment create
  app.post('/api/class/assignment/create', uploader.upload.single('assignment'), Assignments.createAssignment());

  //Assignment List 
  app.get('/api/class/:id/assignment/list', Assignments.listAssignment());

  //Assignment Submission List 
  app.get('/api/class/assignment/:id/submission/list', Assignments.submissionList());

  //Assignment Submission Update 
  app.post('/api/class/assignment/submission/update', Assignments.submissionUpdate());

  //Course Material create
  app.post('/api/class/course/material/create', uploader.upload.single('course-material'), CourseMaterial.createCourseMaterial());

  //Course Material List 
  app.get('/api/class/:id/course/material/list', CourseMaterial.listCourseMaterial());

  //Quiz create
  app.post('/api/class/quiz/create', Quiz.createQuiz());

  //Quiz List 
  app.get('/api/class/:id/quiz/list', Quiz.listQuiz());
  
  //Quiz Submission List 
  app.get('/api/class/quiz/:id/submission/list', Quiz.submissionList());

  //Quiz Submission Update 
  app.post('/api/class/quiz/submission/update', Quiz.submissionUpdate());
};
