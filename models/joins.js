module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // Giving the joins model a name of type STRING
        email: DataTypes.STRING
    });

    User.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        User.hasMany(models.jobs, {
            onDelete: "cascade"
        });
    };

    return User;
};