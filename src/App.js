import './App.css';
import { useState } from 'react';
import Layout from './Layout';
import AddBook from './AddBook';
import ListItems from './ListItems';
import EditBooks from './EditBooks';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [items , setItems] = useState([
    {id : 1, title: "Frankenstein" , author: "Mary Shelley", genre: "Science Fiction", status: ""}
  ])

  function deleteBook(id)
  {
      setItems(items.filter((item) => item.id !== id));
  }

  function addBook(item) {
    const newItem = { ...item, id: Date.now() };
    setItems([...items, newItem]);
  }

  function updateBook(updated){
    setItems(items.map((item) => item.id === updated.id ? updated : item));
  }

  return (
    <Router>
        <Layout>
            <Routes>
               <Route path="/" element={ <ListItems items={items} onDelete={deleteBook} /> }    />

               <Route path="/add" element={ <AddBook onAdd={addBook} /> }    />

               <Route path='/edit/:id' element ={<EditBooks items = {items} onUpdate={updateBook}/>}/>
            </Routes>
        </Layout>
    </Router>
  );
}

export default App;
