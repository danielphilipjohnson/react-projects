import { Document } from "mongoose";

export interface TodoInterface extends Document {
  name: string;
  description: string;
  status: boolean;
}