const assignmentModel = require ('./assignments_model');
const fs = require('fs');
const submissionModel = require('../studentFacultyAssignments/student_faculty_assignment_model');
const userModel = require('../users/users_model');

class Assignment {
  
    constructor() { }

    createAssignment() {
        return async (req, res) => { 
            
            const { title, class_id, description, total_marks, submission_date } = req.body;
            const file = req.file;
            if (!req.body || !title ||!class_id ||!description ||!total_marks ||!file ||!submission_date) {
                this.removeImage(file.filename).then().catch();
                return res.status(400).send({ msg: 'Bad Request' });
            }
            
            try {
                const result = await assignmentModel.create({ title, class_id, submission_date, description, file: file.filename, total_marks });
                return res.status(200).json({ msg: 'Assignment Created Successfully' });
            } catch (err) {
                console.log('Error in creating assignment: ', err);
                this.removeImage(file.filename).then().catch();
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }
        }
    }

    submitAssignment() {
        return async (req, res) => { 
            
            const { user_id, assign_id, } = req.body;
            const file = req.file;
            if (!req.body || !user_id ||!assign_id ||!file) {
                this.removeImage(file.filename).then().catch();
                return res.status(400).send({ msg: 'Bad Request' });
            }
            
            try {
                const result = await submissionModel.create({ user_id, assignment_id: assign_id, file: file.filename });
                return res.status(200).json({ msg: 'Assignment Submitted Successfully' });
            } catch (err) {
                console.log('Error in creating assignment: ', err);
                this.removeImage(file.filename).then().catch();
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }
        }
    }

    listAssignment() {
        return async (req, res) => { 
            
            let { id } = req.params;
            
            if (!id) {
                return res.status(400).send({ msg: 'Bad Request' });
            }

            try {
                const result = await assignmentModel.findAndCountAll({ where: { is_deleted: false, class_id: id } });
                const { count, rows } = result;
                return res.status(200).send({ count, data: rows });
            } catch (err) {
                console.log('Error in listing assignments from db', err);
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }   
        }
    }

    listUserAssignment() {
        return async (req, res) => { 
            
            let { id, user_id } = req.params;
            
            if (!id) {
                return res.status(400).send({ msg: 'Bad Request' });
            }

            try {
                const result = await assignmentModel.findAndCountAll({ where: { is_deleted: false, class_id: id }, include: [ submissionModel ] });
                let { count, rows } = result;
                rows = JSON.parse(JSON.stringify(rows));
                let newRows = [];
                rows.forEach(elem => {
                    let filtered = elem.assignment_submissions.filter(x => x.user_id == user_id);
                    newRows.push({...elem, assignment_submissions : filtered.length ? filtered[0] : {} });
                });
                return res.status(200).send({ count, data: newRows });
            } catch (err) {
                console.log('Error in listing user assignments from db', err);
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }   
        }
    }

    submissionList() {
        return async (req, res) => {

            let { id } = req.params;
            
            if (!id) {
                return res.status(400).send({ msg: 'Bad Request' });
            }

            try {
                const result = await submissionModel.findAndCountAll({ where: { is_deleted: false, assignment_id: id }, include: [ assignmentModel, userModel ] });
                const { count, rows } = result;
                return res.status(200).send({ count, data: rows });
            } catch (err) {
                console.log('Error in listing submission assignments from db', err);
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }   
        }
    }

    submissionUpdate() {
        return async (req, res) => {

            let { submission_id, obtained_marks } = req.body;
            
            if (!submission_id) {
                return res.status(400).send({ msg: 'Bad Request' });
            }

            try {
                const result = await submissionModel.update({ obtained_marks }, { where: { id: submission_id } });
                return res.status(200).send({ msg: 'Marks added successfully' });
            } catch (err) {
                console.log('Error in update submission assignments from db', err);
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }   
        }
    }

    removeImage(path) {
        return new Promise((rsv, rej) => {
            fs.unlink(`public/uploads/${path}`, (err) => {
                if (err) {
                  console.error(err);
                  return rej(err); 
                }
                return rsv({ msg: 'unlinked successfully' });
              })
        });
    }
}

module.exports = new Assignment();
