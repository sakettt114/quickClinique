import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    // If already connected, return early
    if (mongoose.connection.readyState === 1) {
      console.log("Database already connected");
      return;
    }

    const dbUrl = process.env.DB_URL || process.env.MONGODB_URI;
    if (!dbUrl) {
      throw new Error("Database URL not found in environment variables");
    }

    // Connect with options for serverless environments
    await mongoose.connect(dbUrl, {
      serverSelectionTimeoutMS: 10000, // Timeout after 10s (cold starts can be slow)
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
      maxPoolSize: 10, // Limit connections for serverless
      bufferCommands: true, // Buffer commands until connection is ready
    });
    console.log("Connected to database successfully");
  } catch (err) {
    console.error("Database connection error:", err);
    // Don't exit process in serverless environments
    if (process.env.VERCEL) {
      throw err; // Re-throw so the serverless function can handle it
    } else {
      process.exit(1); // Exit process if database connection fails (local development)
    }
  }
};

export default connectDB;
