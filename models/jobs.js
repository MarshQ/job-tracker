module.exports = function (sequelize, DataTypes) {
        var job = sequelize.define("Job", {

            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true
                }
            },
            company: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            job_title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            //These are the boolean columns that hold the different common tchnologies that are used. 
            tech_react: {
                type: DataTypes.BOOLEAN,
                default: false
            }, 
            tech_python: {
                type: DataTypes.BOOLEAN,
                default: false
            }, 
            tech_javascript: {
                type: DataTypes.BOOLEAN,
                default: false
            }, 
            tech_css: {
                type: DataTypes.BOOLEAN,
                default: false
            }, 

            location: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            cover_resume: {
                type: DataTypes.BOOLEAN,
                default: false,
            },
            interview_scheduled :{
                type: DataTypes.BOOLEAN,
                default: false
            }, 
            interview_date: {
                type: DataTypes.DATE,
            },
            thank_you_note: {
                type: DataTypes.BOOLEAN,
                default: false
            },
            technical_interview_questions: {
                type: DataTypes.TEXT, 
            },
            feedback: {
                type: DataTypes.TEXT,
            }  
     });
    }