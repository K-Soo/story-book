import { Schema, model, models, Types, Model } from 'mongoose';
import mongoose from 'mongoose';

interface IBookStoryPostDocument extends Document {
  title: string;
  content: string;
  author: Types.ObjectId;
  views: number;
  comments: [];
  createdAt: Date;
}

// static
interface IBookStoryModel extends Model<IBookStoryPostDocument> {
  findByUsername: (username: string) => Promise<IBookStoryPostDocument>;
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

BookStoryPostSchema.statics.findByPost = function (username: string) {
  return this.findOne({ username });
};

const BookStoryPost = models.BookStoryPost || model<IBookStoryPostDocument>('BookStoryPost', BookStoryPostSchema);

export default BookStoryPost;
