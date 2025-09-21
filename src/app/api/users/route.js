import { connectDB } from "@/lib/mongo";
import mongoose from "mongoose";

// Define schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export async function POST(req) {
  await connectDB();
  const body = await req.json();

  const newUser = await User.create(body);

  return Response.json(newUser);
}

export async function GET() {
  await connectDB();
  const users = await User.find();
  return Response.json(users);
}
