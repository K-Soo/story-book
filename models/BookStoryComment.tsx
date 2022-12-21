import { Schema, model, models, Types, Model, PaginateModel } from 'mongoose';
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface IBookStoryComment extends Document {
  content: string;
  post: Types.ObjectId;
  author: Types.ObjectId;
}
interface IBookStoryCommentModel extends Model<IBookStoryComment> {
  paging: () => void;
}

const BookStoryCommentSchema: Schema<IBookStoryComment> = new Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BookStoryPost',
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
BookStoryCommentSchema.plugin(mongoosePaginate);

const BookStoryComment =
  models.BookStoryComment ||
  model<IBookStoryComment, IBookStoryCommentModel>('BookStoryComment', BookStoryCommentSchema);

export default BookStoryComment;
