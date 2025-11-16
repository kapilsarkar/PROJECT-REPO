import { useState } from "react";
import { useUpdateNoteMutation } from "../features/notes/notesApi";

const EditNotes = ({ note }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [updateNote, { isLoading, isError, error }] = useUpdateNoteMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateNote({ id: note.id, title, content });
  };

  return (
    <>
      <div>
        <h2>Edit Notes</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder=" Title"
            disabled={isLoading}
          />
          <br />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter Your Content"
            disabled={isLoading}
          />
          <br />
          <button type="submit" disabled={isLoading}>
            Update Note
          </button>
          {isError && <div>Error:{error.data.message || "Update Failed"}</div>}
        </form>
      </div>
    </>
  );
};

export default EditNotes;
