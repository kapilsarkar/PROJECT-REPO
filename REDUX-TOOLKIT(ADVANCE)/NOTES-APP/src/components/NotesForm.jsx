import { useState } from "react";
import { useAddNoteMutation } from "../features/notes/notesApi";

const NotesForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [addNote] = useAddNoteMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addNote({ title, content });
    setTitle("");
    setContent("");
  };
  return (
    <>
      <div>
        <h2>Notes Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Your Title"
          />
          <br/>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter Your Content"
          />
          <br/>
          <button type="submit">Add Note</button>
        </form>
      </div>
    </>
  );
};

export default NotesForm;
