const mongoose = require('mongoose');
const schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new schema({
    name: { type: String, maxlength: 255, required: true },
    description: { type: String, maxlength: 255 },
    image: { type: String, maxlength: 60 },
    videoId: { type: String, maxlength: 20 },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true }
    // createAt: { type: Date, default: Date.now }, thay thế bằng timestamps
    // updateAt: { type: Date, default: Date.now }
}, {
    timestamps: true
})
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Course', Course);