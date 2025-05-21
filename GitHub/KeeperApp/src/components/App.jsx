import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



const App= () => {
  const [notes, setNotes] = React.useState([]);

  const addNote = (newNote) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  
  }

  function deleteNote(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index)=> {
        return index !== id;

      
  });
  });
  }
  function editNote(id, updatedNote) {
    setNotes(prevNotes =>
      prevNotes.map((note, index) => 
        index === id ? updatedNote : note
      )
    );
  }

  return(
  <div>
    <Header />  
    <CreateArea onAdd={addNote}/>
    {notes.map((noteItem, index) => (
    <Note 
    key={index} 
    id={index}
    title={noteItem.title} 
    content={noteItem.content} 
    onDelete={deleteNote}
    onEdit={editNote} 
     />
  ))}    
  <Footer />
  </div>
)};


export default App;
