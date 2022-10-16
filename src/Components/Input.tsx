import React from "react";

type Props = {
  inputTodo: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

export default function Input({
  inputTodo,
  handleChange,
  handleSubmit,
}: Props) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={inputTodo}
          name="todo"
        />
      </form>
    </div>
  );
}
