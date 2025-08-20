/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { removeTodo, updateTodo } from "../utils/todoSlice";
import { FiCheckCircle, FiTrash2, FiEdit2, FiSave } from "react-icons/fi";
import { useState } from "react";

const ViewTodo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleSave = () => {
    if (editText.trim() !== "") {
      dispatch(updateTodo({ id: editId, text: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  return (
    <div className="max-w-xl shadow-2xl mb-2 mx-auto mt-6 px-4">
      <h3 className="text-xl font-bold text-center mb-4 text-gray-800 dark:text-white">
        Your Todos
      </h3>

      {todos.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No tasks added yet.
        </p>
      ) : (
        <ul className="space-y-3">
          <AnimatePresence>
            {todos.map((todo) => (
              <motion.li
                key={todo.id}
                className="flex justify-between items-center bg-violet-600 px-4 py-3 rounded-lg text-white shadow-md hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-violet-400" />
                  <p className="text-sm font-bold sm:text-base">{todo.text}</p>
                  {editId === todo.id ? (
                    <motion.div
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="flex-grow px-2 py-1 rounded text-black"
                        autoFocus
                      />
                      <button
                        onClick={handleSave}
                        className="text-green-300 hover:text-green-500"
                      >
                        <FiSave className="text-xl" />
                      </button>
                    </motion.div>
                  ) : (
                    <button
                      className="text-yellow-300 hover:text-yellow-500"
                      onClick={() => handleEdit(todo)}
                    >
                      <FiEdit2 className="text-xl" />
                    </button>
                  )}
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-red-400 hover:text-red-600 transition duration-200"
                    aria-label="Delete todo"
                  >
                    <FiTrash2 className="text-xl" />
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
};

export default ViewTodo;
