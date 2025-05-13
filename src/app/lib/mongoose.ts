import mongoose, { Connection } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) throw new Error('MONGODB_URI is not defined');

// Declare the global type properly
declare global {
  var mongoose: { conn: Connection | null; promise: Promise<Connection> | null };
}

let cached = global.mongoose || { conn: null, promise: null };

export async function connectToDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    // Ensure we are returning a Promise<Connection>
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'rentify', // You can change this to your database name
      bufferCommands: false,
    }).then((mongooseInstance) => mongooseInstance.connection);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
