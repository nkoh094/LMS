const quizModel = require ('./quiz_model');
const submissionModel = require('../quizSubmission/quiz_submission_model');
const userModel = require('../users/users_model');
const quizOptionModel = require('../quizOptions/quiz_options_model');
const db = require('../../config/db_config');

class Quiz {
  
    constructor() { }

    createQuiz() {
        return async (req, res) => { 
            
            const { title, class_id, total_marks, submission_date, options } = req.body;
            let quizOptions = JSON.parse(options);
            if (!req.body || !title ||!class_id ||!total_marks ||!submission_date ||!quizOptions.length) {
                return res.status(400).send({ msg: 'Bad Request' });
            }
            
            let transaction;
            try {
                transaction = await db.sequelize.transaction();
                const newQuiz = await quizModel.create({ title, class_id, submission_date, total_marks }, { transaction });
                
                let promiseArray = [];
                quizOptions.forEach(elem => {
                    promiseArray.push(quizOptionModel.create({ 
                        question: elem.question,
                        op1: elem.op1,
                        op2: elem.op2,
                        op3: elem.op3,
                        op4: elem.op4,
                        correct_option: elem.correct,
                        quiz_id: newQuiz.id
                    }, { transaction }));
                });

                let reuslt = await Promise.all(promiseArray);
                await transaction.commit();
                
                return res.status(200).json({ msg: 'Quiz Created Successfully' });
            } catch (err) {
                console.log('Error in creating quiz: ', err);
                this.removeImage(file.filename).then().catch();
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }
        }
    }
    
    listQuiz() {
        return async (req, res) => { 
            
            let { id } = req.params;
            
            if (!id) {
                return res.status(400).send({ msg: 'Bad Request' });
            }

            try {
                const result = await quizModel.findAndCountAll({ where: { is_deleted: false, class_id: id } });
                const { count, rows } = result;
                return res.status(200).send({ count, data: rows });
            } catch (err) {
                console.log('Error in listing quiz from db', err);
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
                const result = await submissionModel.findAndCountAll({ where: { is_deleted: false, quize_id: id }, include: [ quizModel, userModel ] });
                const { count, rows } = result;
                return res.status(200).send({ count, data: rows });
            } catch (err) {
                console.log('Error in listing submission quiz from db', err);
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
                console.log('Error in update submission quiz from db', err);
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }   
        }
    }

}

module.exports = new Quiz();
