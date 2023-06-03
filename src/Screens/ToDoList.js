import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../redux/actions/ToDoAction';

const ToDoList = ({ todos, addTodo, toggleTodo, removeTodo }) => {
   const [text, setText] = useState('');
   const [title, setTitle] = useState('');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleTitleInputChange  = (e) => {
    setTitle(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if ((text.trim() !== '')&&(title.trim() !== '')) {
      addTodo(text,title);
      setText('');
      setTitle('');
    }
  };

  const handleToggle = (id) => {
    toggleTodo(id);
  };

  const handleRemove = (id) => {
    removeTodo(id);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form style={{display:'flex',alignContent:'center',alignItems:'center'}} onSubmit={handleFormSubmit}>
      
      <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={handleTitleInputChange}
        />
      
        <input
          type="text"
          placeholder="Enter a new todo"
          value={text}
          onChange={handleInputChange}
        />

        
        <button type="submit">Add Todo</button>
      </form>

   


      <div 
      
      className="container"
      style={{width:"75%"}}
      >
      <h3>Tasks</h3>   

      <div   style={{
        
        // width: "30rem",
        // display:'flex',alignContent:"center",alignItems:'center'
        
        }}>









      <ul>
        {todos.map((todo) => (
          <li  
          class="list-group-item"
            key={todo.id}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
        wordWrap:'break-word'
            }}
          >
{/* {todos.map((todo) => ( */}

<div className="card-body">
  <h5 className="card-title" onClick={() => handleToggle(todo.id)}>{todo.title}</h5>
  <p className="card-text" onClick={() => handleToggle(todo.id)}>{todo.text}</p>
  <span href="#" className="btn btn-primary"  onClick={() => handleRemove(todo.id)}>Remove</span>
</div>

  
{/* /////   ))} */}




            {/* <span onClick={() => handleToggle(todo.id)}>{todo.text}</span>
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
          
            <br/> */}

          </li>
        ))}
      </ul>
      </div>


</div>

    </div>
  );
};

const mapStateToProps = (state) => {

  console.log("state",state);
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);