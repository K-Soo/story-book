import mongoose, { ConnectOptions } from 'mongoose';

const connection: { isConnected?: number | boolean } = {};

export async function connect() {
  if (connection.isConnected) {
    console.info('already Connected mongoose ✅');
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('connection: ✅', connection);
      console.log('use previous connection ✅');
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect(process.env.MONGO_URL as string);
  connection.isConnected = db.connections[0].readyState;
  console.log('new connection ✅');
  mongoose.set('debug', true);

  mongoose.connection.on('connected', function () {
    console.log('✅ mongoDB Connection Successful');
  });

  mongoose.connection.on('error', function (err) {
    console.log('❌mongoDB Connection Failed', +err);
  });
}

export async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE__ENV === 'production') await mongoose.disconnect();
    connection.isConnected = false;
  } else {
    console.log('dev mode not disconnected ❌');
  }
}

const db = { connect, disconnect };

export default db;
