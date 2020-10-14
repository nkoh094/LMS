const classesModel = require ('./classes_model');
const userModel = require('../users/users_model');

class Classes {
  
    constructor() { }

    createClasses() {
        return async (req, res) => { 
            
            const { name, user_id, description } = req.body;
            
            if (!req.body || !name ||!user_id ||!description) {
                return res.status(400).send({ msg: 'Bad Request' });
            }
            
            try {
                const result = await classesModel.create({ name, faculty_id :user_id, description });
                return res.status(200).json({ msg: 'Class Created Successfully' });
            } catch (err) {
                console.log('Error in creating class: ', err);
                return  res.status(500).json({ msg: 'Internal Server Error', error: err });
            }
        }
    }
    
    listClasses() {
        return async (req, res) => { 
            
            let { user } = req.params;
            
            if (!user) {
                return res.status(400).send({ msg: 'Bad Request' });
            }

            try {
                const result = await classesModel.findAndCountAll({ where: { is_deleted: false, faculty_id: user } });
                const { count, rows } = result;
                return res.status(200).send({ count, data: rows });
            } catch (err) {
                console.log('Error in listing classes from db', err);
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }   
        }
    }
   
    listClassesStudent() {
        return async (req, res) => { 
            
            let { class_id } = req.params;
            
            if (!class_id) {
                return res.status(400).send({ msg: 'Bad Request' });
            }

            try {
                const result = await classesModel.findOne({ where: { is_deleted: false, id: class_id }, include: [ userModel ] });
                return res.status(200).send({ data: result });
            } catch (err) {
                console.log('Error in listing classes from db', err);
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }   
        }
    }

    deleteClass() {
        return async (req, res) => {

            const { class_id } = req.body;

            if (!req.body || !class_id) {
                return res.status(400).send({ msg: 'Bad Request' });
            }

            try {
                const result = await classesModel.update({ is_deleted: true }, { where: { id: class_id } });
                return res.status(200).json({ msg: 'Class Deleted Successfully' });
            } catch (err) {
                console.log('Error in deleting class from db', err);
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }
        }
    }
}

module.exports = new Classes();
