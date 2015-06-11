'use strict';

module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define(
        'Post',
        {
            title: DataTypes.STRING,
            subtitle: DataTypes.STRING,
            content: DataTypes.TEXT,
            unique_id: DataTypes.STRING
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
