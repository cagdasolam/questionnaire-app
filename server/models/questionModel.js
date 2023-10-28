import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const questionSchema = new Schema({
  text: {
    type: Schema.Types.String,
    required: true,
  },
  options:
  {
    type: Schema.Types.Map,
    of: Schema.Types.String,
  },
}, { timestamps: true });

const Question = mongoose.model('Question', questionSchema);

export default Question;
