import mongoose, { Connection } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) throw new Error('MONGODB_URI is not defined');

// Declare the global type augmentation correctly
declare global {
  var mongoose: { conn: Connection | null; promise: Promise<Connection> | null };
}

const cached: { conn: Connection | null; promise: Promise<Connection> | null } = global.mongoose || { conn: null, promise: null };

export async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'rentify', // Change to your database name
      bufferCommands: false,
    }).then(mongoose => mongoose.connection);  // Ensure we return the connection object
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
