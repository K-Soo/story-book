import { Schema, model, models, Types, Model, PaginateModel } from 'mongoose';
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface IBookStoryPostDocument extends Document {
  title: string;
  content: string;
  author: Types.ObjectId;
  likes: Types.ObjectId;
  views: number;
  rate: number;
  comments: [];
  createdAt: Date;
  bookInfo: {
    author: string;
    description: string;
    discount: string;
    image: string;
    isbn: string;
    link: string;
    pubdate: string;
    publisher: string;
    title: string;
  };
}

const BookStoryPostSchema: Schema<IBookStoryPostDocument> = new Schema(
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
    rate: { type: Number, required: true },
    bookInfo: {
      author: { type: String, required: true },
      description: { type: String, required: true },
      discount: { type: String, required: true },
      image: { type: String, required: true },
      isbn: { type: String, required: true },
      link: { type: String, required: true },
      pubdate: { type: String, required: true },
      publisher: { type: String, required: true },
      title: { type: String, required: true },
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    likes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BookStoryLike',
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BookStoryComment' }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

BookStoryPostSchema.plugin(mongoosePaginate);

const BookStoryPost =
  models.BookStoryPost ||
  model<IBookStoryPostDocument, PaginateModel<IBookStoryPostDocument>>('BookStoryPost', BookStoryPostSchema);

export default BookStoryPost;
