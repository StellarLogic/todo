import { nanoid } from "nanoid";
import colors from "./colors";

export const TODO_LIST = [
  { id: nanoid(), item: "To complete JavaScript", isCompleted: false },
  { id: nanoid(), item: "Meditation", isCompleted: true },
  { id: nanoid(), item: "Go for a walk", isCompleted: false },
];

export const COLOR_LIST = Object.keys(colors);

export const activeTabOptions = {
  TODO: "TODO",
  COMPLETED: "COMPLETED",
};
