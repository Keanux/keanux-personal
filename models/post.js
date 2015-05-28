module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define(
        "Post",
        {
            title: DataTypes.STRING,
            subtitle: DataTypes.STRING,
            content: DataTypes.TEXT
        },
        {
            classMethods: {
                associate: function (models) {
                    models.Post.belongsTo(models.User);
                }
            }
        });

    return Post;
};