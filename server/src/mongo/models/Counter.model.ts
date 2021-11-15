import { Schema, model } from "mongoose";

interface CounterType {
  count: number;
  name: string;
}

const counterSchema = new Schema<CounterType>({
  name: String,
  count: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default model<CounterType>("Counter", counterSchema);
