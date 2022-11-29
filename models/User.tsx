import { Schema, model, models, Model } from 'mongoose';
import bcrypt from 'bcrypt';
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  image: string;
  test: string;
}

// method
interface IUserDocument extends IUser, Document {
  setPassword: (password: string) => Promise<void>;
  checkPassword: (password: string) => Promise<boolean>;
}

// static
interface IUserModel extends Model<IUserDocument> {
  findByUsername: (username: string) => Promise<IUserDocument>;
}

const userSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
  },
  test: {
    type: String,
  },
});

userSchema.methods.checkPassword = async function (password: string) {
  const result = await bcrypt.compare(password, this.password);
  return result;
};

userSchema.methods.setPassword = async function (password: string) {
  const hash = await bcrypt.hash(password, 10);
  this.password = hash;
};

userSchema.statics.findByUsername = function (username: string) {
  return this.findOne({ username });
};

const User = models.User || model<IUserDocument, IUserModel>('User', userSchema);

export default User;
