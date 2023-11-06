import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const questionnaireSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Question',
    },
  ],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

const Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);

export default Questionnaire;
