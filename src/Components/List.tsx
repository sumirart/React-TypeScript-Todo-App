import React, { MouseEventHandler } from "react";

type Props = {
  todos: string[];
  handleDeleteTodo: (e: React.MouseEvent<HTMLSpanElement>) => void;
};

export default function List({ todos, handleDeleteTodo }: Props) {
  return (
    <div>
      <h2>Lists</h2>
      <ul>
        {todos.map((todo, index) => (
          <li>
            {todo} <span onClick={handleDeleteTodo}>X</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
