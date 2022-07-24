const { Schema, model } = require('mongoose');
//const bcrypt = require('bcrypt');

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    }
});



// // compare the incoming password with the hashed password
// projectSchema.methods.isCorrectPassword = async function (password) {
//     return bcrypt.compare(password, this.password);
// };

const Project = model('Project', projectSchema);

module.exports = Project;
