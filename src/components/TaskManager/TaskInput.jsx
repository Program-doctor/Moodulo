import { useState } from "react";

const TaskInput = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    onAdd(trimmed);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center gap-3">
      <input
        type="text"
        placeholder="What do you want to accomplish?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5FD788] text-sm"
      />
      <button
        type="submit"
        className="bg-[#5FD788] text-white px-5 py-3 rounded-lg text-sm hover:bg-[#4cca70] transition"
      >
        Add
      </button>
    </form>
  );
};

export default TaskInput;

