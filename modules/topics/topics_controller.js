const topicsModel = require ('./topics_model');

class Topics {
  
    constructor() { }

    createTopic() {
        return async (req, res) => { 
            
            const { name, class_id, description, type, user_id } = req.body;
            
            if (!req.body || !name ||!description ||!user_id) {
                return res.status(400).send({ msg: 'Bad Request' });
            }
            
            try {
                let topic = { name, description, type, user_id };
                if (class_id) {
                    topic.class_id = class_id;
                }
                const result = await topicsModel.create(topic);
                return res.status(200).json({ msg: 'Topic Created Successfully' });
            } catch (err) {
                console.log('Error in creating topic: ', err);
                return  res.status(500).json({ msg: 'Internal Server Error', error: err });
            }
        }
    }
    
    listPrivateTopics() {
        return async (req, res) => { 
            
            let { id, user_id } = req.params;
            
            if (!id ||!user_id) {
                return res.status(400).send({ msg: 'Bad Request' });
            }

            try {
                const result = await topicsModel.findAndCountAll({ where: { is_deleted: false, class_id: id, user_id } });
                const { count, rows } = result;
                return res.status(200).send({ count, data: rows });
            } catch (err) {
                console.log('Error in listing private topics from db', err);
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }   
        }
    }

    listGeneralTopics() {
        return async (req, res) => { 
            
            let { id } = req.params;
            
            if (!id) {
                return res.status(400).send({ msg: 'Bad Request' });
            }

            try {
                const result = await topicsModel.findAndCountAll({ where: { is_deleted: false, type: false, user_id: id } });
                const { count, rows } = result;
                return res.status(200).send({ count, data: rows });
            } catch (err) {
                console.log('Error in listing topics from db', err);
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }   
        }
    }

    deleteTopic() {
        return async (req, res) => {

            const { topic_id } = req.body;

            if (!req.body || !topic_id) {
                return res.status(400).send({ msg: 'Bad Request' });
            }

            try {
                const result = await topicsModel.update({ is_deleted: true }, { where: { id: topic_id } });
                return res.status(200).json({ msg: 'Topic Deleted Successfully' });
            } catch (err) {
                console.log('Error in deleting topic from db', err);
                return res.status(500).json({ msg: 'Internal Server Error', error: err });
            }
        }
    }
}

module.exports = new Topics();
