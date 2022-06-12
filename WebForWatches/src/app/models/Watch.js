const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Watch = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String},
    description: { type: String, maxlength: 1000 },
    image: { type: String, default: '' },
    price: { type: Number, default: ''},
    imageID: { type: String, default: '' },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  },
);

// Add plugins
mongoose.plugin(slug);
Watch.plugin(mongooseDelete, {
  deleteAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Watch', Watch);
