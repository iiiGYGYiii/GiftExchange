import { Counter } from "../models";

const name = "Gift-Exchange";

export async function autoCreate(): Promise<void> {
  try {
    const value = await Counter.findOne({ name });
    if (value) return;
    const newCounter = new Counter({
      count: 0,
      name,
    });
    await newCounter.save();
  } catch (error) {
    console.error("Counter couldn't be initialized");
  }
}

export async function autoIncrement(): Promise<void> {
  const prevCount = await Counter.findOne({ name });
  if (prevCount === null) return;
  await Counter.findByIdAndUpdate(prevCount._id, {
    count: prevCount.count + 1,
  });
}

export async function getCount(): Promise<number | undefined> {
  const count = await Counter.findOne({ name });
  if (count === null) return;
  return count.count;
}
