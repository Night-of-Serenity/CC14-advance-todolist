import styles from "./TodoLists.module.scss";
import { TodoItem } from "./TodoItem";
import { useTodo } from "../../hooks/useTodo";

export function TodoLists() {
  const { todosFilter } = useTodo();

  return (
    <ul className={styles.todoList}>
      {todosFilter?.map((item) => (
        <TodoItem todo={item} key={item.id} />
      ))}
    </ul>
  );
}
