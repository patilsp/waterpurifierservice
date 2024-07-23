import { Schema, model, models } from 'mongoose';

const InquirySchema = new Schema({
  userId: {
    type: String,
  },
  inquiryId: {
    type: String,
  },
  username: {
    type: String,
  },
  name: {
    type: String,
  },
  mobile: {
    type: String,
  },
   note: {
    type: String,
  },
  inquiryType: {
    type: String,
  },
  model: {
    type: String,
  },

});

const Inquiry = models.Inquiry || model('Inquiry', InquirySchema);

export default Inquiry;
