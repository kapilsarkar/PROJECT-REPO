import EditNotes from "./components/EditNotes";
import NotesForm from "./components/NotesForm";
import NotesList from "./components/NotesList";

function App() {
  const exampleNote = {
    id: "1",
    title: "Sample Note",
    content: "This is a Sample Content",
  };
  return (
    <>
      <div>
        <h2 className="text-center">NOTES-APP</h2>
        <NotesList />
        <NotesForm />
        <EditNotes note={exampleNote} />
      </div>
    </>
  );
}

export default App;
