import { Schema, model, models, Types } from 'mongoose';
import mongoose from 'mongoose';

export interface ILibrary extends Document {
  user: Types.ObjectId;
  wishBooks: IBookDocument[];
  readBooks: IBookDocument[];
}

interface IBookDocument {
  author: string;
  description: string;
  discount: string;
  image: string;
  isbn: string;
  link: string;
  pubdate: string;
  publisher: string;
  title: string;
}

const wishBookSchema: Schema<IBookDocument> = new Schema(
  {
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
  {
    versionKey: false,
  }
);

const readBookSchema: Schema<IBookDocument> = new Schema(
  {
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
  {
    versionKey: false,
  }
);

const LibrarySchema: Schema<ILibrary> = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    wishBooks: [wishBookSchema],
    readBooks: [readBookSchema],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Library = models.Library || model<ILibrary>('Library', LibrarySchema);

export default Library;
