import { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App() {

    const [toDoList, setToDoList] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');

    if(localValue == null) 
      return [];

    return JSON.parse(localValue);
  });

  useEffect( () => {
    localStorage.setItem("ITEMS",JSON.stringify(toDoList))
  },[toDoList])


  const addTodo = (inputText) => {
    setToDoList((toDoList) => {
      return [...toDoList,
      { id: crypto.randomUUID(), 
      title: inputText, 
      completed: false
      }]
    })
  }

   const updateValue = (id) => {
    setToDoList((currentTodos)=>{
      return currentTodos.map((todo) => {
        if(todo.id === id){
          return {...todo, completed: !(todo.completed)}
        } 
        return todo;
      })
    })
   }

  const deleteItem = (id) => {
    setToDoList((currentTodos)=> {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="App">

      <section className="vh-100" >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-lg-9 col-xl-7">
                <div className="card rounded-3">
                  <div className="card-body p-5">
            
                  <h2 className="text-center my-3 pb-3" id='app-title'>T0 D0 APP</h2>
                  <ToDoForm onSubmit={addTodo} />
                  <ToDoList toDoList={toDoList} updateValue={updateValue} deleteItem={deleteItem} />

                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default App;
