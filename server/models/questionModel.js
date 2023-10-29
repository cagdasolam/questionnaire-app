import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const optionSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

const questionSchema = new Schema({
  text: {
    type: Schema.Types.String,
    required: true,
  },
  options: [optionSchema],
}, { timestamps: true });

const Question = mongoose.model('Question', questionSchema);

export default Question;
