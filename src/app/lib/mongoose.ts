import mongoose, { Connection } from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) throw new Error('MONGODB_URI is not defined');

// Update the cached variable to properly handle mongoose.Connection
let cached: { conn: Connection | null; promise: Promise<Connection> | null } = global.mongoose || { conn: null, promise: null };

export async function connectToDB() {
  // If the connection exists, return it
  if (cached.conn) return cached.conn;

  // If there's no existing promise for the connection, create one
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: 'rentify',  // Change to your database name
      bufferCommands: false,
    }).then(mongoose => mongoose.connection);  // Ensure we return the connection object
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

declare global {
  var mongoose: { conn: Connection | null; promise: Promise<Connection> | null };
}
