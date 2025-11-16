import { useDeleteNoteMutation, useGetNotesQuery } from "../features/notes/notesApi";

const NotesList = () => {
  const { data: notes, isLoading } = useGetNotesQuery();
  const [deleteNote] = useDeleteNoteMutation();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(notes);

  return (
    <>
      <div>
        <h2>Notes List</h2>
        {notes &&
          notes.map((note) => (
            <div className=" flex justify-center items-center" key={note?.id}>
              <h3 className=" font-bold text-2xl p-2">Title:{note?.title}</h3>
              <p className=" font-bold text-xl">Content:{note?.content}</p>
              <button onClick={()=>deleteNote(note.id)}>Delete</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default NotesList;
