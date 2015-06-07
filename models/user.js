module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define(
        "User",
        {
            name: DataTypes.STRING,
            nickname: DataTypes.STRING,
            provider: DataTypes.ENUM('Local', 'Facebook'),
            loginId: DataTypes.STRING
        },
        {
            classMethods: {
                associate: function (models) {
                    models.User.hasMany(models.Post);
                }
            }
        });

    return User;
};