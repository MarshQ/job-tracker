module.exports = function (sequelize, DataTypes) {
        var User = sequelize.define("User", {

            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true
                }
            },
            Company: {
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
                //text or string? 
            },
            feedback: {
                type: DataTypes.TEXT,
            },
         },
     });