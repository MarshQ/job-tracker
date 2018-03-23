var bcrypt = require("bcrypt-nodejs");
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    //this is from the sequelize passport homework - Rocky you can feel free to change this however you need to and delete this comment! 
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    User.hook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    return User;
};