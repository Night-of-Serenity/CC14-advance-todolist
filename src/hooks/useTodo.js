import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export function useTodo() {
  const shareObj = useContext(TodoContext);
  return shareObj;
}
