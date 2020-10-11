const db = require ('../../config/db_config');

const studentsEnrolled = db.sequelize.define('students_enrolled', {
  id: {
    type: db.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: db.DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id"
      },
      required: true
  },
  class_id: {
    type: db.DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "classes",
      key: "id"
    },
    required: true
  },
  is_deleted: {
    type: db.DataTypes.BOOLEAN,
    required: true,
    defaultValue: false
  }
}, { underscored: true, timestamp: true, tableName: 'students_enrolled' });

module.exports = studentsEnrolled;
