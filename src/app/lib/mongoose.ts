import mongoose, { Connection } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined');
}

// Extend the NodeJS global type only once (safely)
type MongooseGlobal = {
  conn: Connection | null;
  promise: Promise<Connection> | null;
};

const globalWithMongoose = globalThis as typeof globalThis & {
  _mongoose?: MongooseGlobal;
};

// Initialize the cache if it doesn't exist
if (!globalWithMongoose._mongoose) {
  globalWithMongoose._mongoose = { conn: null, promise: null };
}

const cached = globalWithMongoose._mongoose;

export async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: 'rentify',
        bufferCommands: false,
      })
      .then(m => m.connection);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
