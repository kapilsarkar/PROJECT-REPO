import { useState } from "react";
import { addTodo } from "../utils/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim(); //Prevents tasks that are just spaces.

    if (!trimmedInput) {
      //More concise and handles empty string/falsy values.
      toast.error("Please Enter a Task");
      return; //Avoids nesting code inside else, improves readability.
    }
    const isDuplicate = todos.some(
      (todo) => todo.text.toLowerCase() === trimmedInput.toLowerCase()
    );

    if (isDuplicate) {
      toast.warning("Tasks Already Exists");
       return; // Prevent adding duplicate
    }

    dispatch(addTodo(trimmedInput));
    setInput("");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 rounded-2xl shadow-2xl bg-white dark:bg-gray-800 transition-colors duration-300">
      <h2 className="text-2xl font-semibold text-center bg-violet-600 text-white py-4 rounded-t-2xl">
        TODO APP
      </h2>
      <form
        onSubmit={handleAddTodo}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6"
      >
        <input
          className="w-full sm:w-auto flex-grow bg-gray-100 dark:bg-gray-700 dark:text-white placeholder-gray-500 rounded-lg border border-gray-300 dark:border-gray-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-400 outline-none px-4 py-2 transition-all duration-200"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button
          className="bg-violet-600 hover:bg-violet-700 text-white font-medium px-6 py-2 rounded-full transition duration-200 shadow-md"
          type="submit"
        >
          +
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
