import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import db from 'lib/db';
import clientPromise from 'lib/clientPromise';
import User from 'models/User';

export interface ICustomSession {
  user?: {
    id?: string;
  };
}

export type TSessionTypes = Session & ICustomSession;

export const authOptions: NextAuthOptions = {
  // adapter: MongoDBAdapter(dbConnect),
  session: {
    strategy: 'jwt',
  },
  secret: process.env.SECRET,
  logger: {
    error(code, metadata) {
      console.log('auth error: ', code, metadata);
    },
    warn(code) {
      console.log('auth warn : ', code);
    },
    debug(code, metadata) {
      console.log('auth debug : ', code, metadata);
    },
  },
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   console.log('##email: ', email);
    //   console.log('##credentials: ', credentials);
    //   console.log('##profile: ', profile);
    //   console.log('##account: ', account);
    //   console.log('##user: ', user);
    //   return true;
    // },
    // async redirect({ url, baseUrl }) {
    //   return 'http://localhost:3000/user'
    // },
    async session({ session, user, token }) {
      // console.log('session: ', session);
      const newSession: TSessionTypes = session;

      //소셜가입이라 이메일 정보가없다면
      if (!session?.user?.email) {
        const exist = await User.findOne({ name: session?.user?.name });
        // console.log('소셜 가입 : ', exist);
        if (newSession?.user) {
          newSession.user.id = exist.id;
        }
      }
      //일반 회원이라면
      if (session?.user?.email) {
        const exist = await User.findOne({ email: user?.email });
        // console.log('일반 가입 : ', exist);
        if (newSession?.user) {
          newSession.user.id = exist.id;
        }
      }
      return newSession;
    },

    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
  events: {
    signIn: test => {},
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials, req) {
        await db.connect();
        const { email, password } = credentials as { email: string; password: string };

        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('error user');
        }

        const isValid = await user.checkPassword(password, user.password);
        if (!isValid) return null;
        return { email: user.email } as any;
      },
    }),
    KakaoProvider({
      clientId: '4cc2fcf9f3b0b72e95ac7eec8480e6cd',
      clientSecret: 'ksoo',
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),

  pages: {
    signIn: '/sign-in',
  },
};

export default NextAuth(authOptions);
