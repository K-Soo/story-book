import { Schema, model, models, Types } from 'mongoose';
import mongoose from 'mongoose';

export interface IBookStoryLike extends Document {
  postId: Types.ObjectId;
  userId: Types.ObjectId;
  commentId: Types.ObjectId;
}

const BookStoryLikeSchema: Schema<IBookStoryLike> = new Schema(
  {
    postId: {
      index: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BookStoryPost',
    },
    userId: {
      index: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const BookStoryLike = models.BookStoryLike || model<IBookStoryLike>('BookStoryLike', BookStoryLikeSchema);

export default BookStoryLike;
