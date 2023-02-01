const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	name: { type: String, required: true }
});

const SubcategorySchema = new Schema({
	name: { type: String, required: true },
	category: { type: Schema.Types.ObjectId, ref: 'Category' }
});

const AttributeSchema = new Schema({
	name: { type: String, required: true }
});

const VariantSchema = new Schema({
	attribute: { type: Schema.Types.ObjectId, ref: 'Attribute' },
	value: { type: String, required: true },
	price: { type: Number, required: true }
});

const ProductSchema = new Schema({
	name: { type: String, required: true },
	subcategory: { type: Schema.Types.ObjectId, ref: 'Subcategory' },
	variants: [VariantSchema]
});

module.exports = {
	Category: mongoose.model('Category', CategorySchema),
	Subcategory: mongoose.model('Subcategory', SubcategorySchema),
	Attribute: mongoose.model('Attribute', AttributeSchema),
	Product: mongoose.model('Product', ProductSchema)
};
