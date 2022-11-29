import { Schema, model, models, Types } from 'mongoose';
import mongoose from 'mongoose';
import createModel from '../lib/createModel';

interface IPpaginator {
  paginate(): void;
}

interface IBookStoryPostSchema extends Document {
  title: string;
  content: string;
  author: Types.ObjectId;
  views: number;
  comments: [];
  createdAt: Date;
}

const BookStoryPostSchema: Schema<IBookStoryPostSchema> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    views: { type: Number, default: 0 },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BookStoryComment' }],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

BookStoryPostSchema.method('fullName', function fullName() {
  return this.title + ' ' + this.title;
});

const BookStoryPost = models.BookStoryPost || model<IBookStoryPostSchema>('BookStoryPost', BookStoryPostSchema);

// export default createModel<IBookStoryPostDocument, mongoose.PaginateModel<IBookStoryPostDocument>>('BookStoryPost', BookStoryPostSchema);

export default BookStoryPost;
