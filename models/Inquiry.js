import { Schema, model, models } from 'mongoose';

const InquirySchema = new Schema({

  id: {
    type: String,
  },
  userId: {
    type: String,
  },
  inquiryId: {
    type: String,
  },
  username: {
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
