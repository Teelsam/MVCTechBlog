const Blog = require('./Blog');
const User = require('./User');
const Comment = require('./Comment');


//conecting tables by foreign keys
Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Blog, {
    foreignKey: "user_id",
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});
Comment.belongsTo(Blog, {
    foreignKey: 'blog_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Blog.hasMany(Comment, {
    foreignKey: 'blog_id'
});

module.exports = { Blog, User, Comment };