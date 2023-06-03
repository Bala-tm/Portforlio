import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../redux/actions/ToDoAction';
import { PlusOutlined ,DeleteFilled} from '@ant-design/icons';

const ToDoList = ({ todos, addTodo, toggleTodo, removeTodo }) => {
   const [text, setText] = useState('');
   const [Pendinglength, setPendinglength] = useState(0);
   const [width, setWindowWidth] = React.useState(0);

   React.useEffect(() => {
 
     updateDimensions()
 
      
   }, [text])


   React.useEffect(() => {
    setPendinglength(
  todos.filter(e=>{
if(!e.completed){
    return e
}

  }


  ).length)
 
      
   }, [todos])
 
 
   const updateDimensions = () => {
     const width = window.innerWidth
     setWindowWidth(width)
   }
 

 
  const handleInputChange  = (e) => {
    setText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if ((text.trim() !== '')) {
      addTodo(text);
      setText('');
     
    }
  };

  const handleToggle = (id) => {
    toggleTodo(id);
  };

  const handleRemove = (id) => {
    removeTodo(id);
  };

  return (
    <div className='tododiv'>
    
   

    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <div 
      
      className="container"
      style={{width:width>700?"35%":"80%",
       
      height: '65vh'}}
      >
      <h1 >Todo App</h1>
      <form  onSubmit={handleFormSubmit}>
      
    
      
        <input
          type="text"
          placeholder="Enter a new todo"
          value={text}
          onChange={handleInputChange}
          className='inputtodo'
        />
&nbsp;
        
        <button type="submit"   className="plusbtn"><PlusOutlined/></button>
      </form> 
      <div   style={{
        
        // width: "30rem",
        // display:'flex',alignContent:"center",alignItems:'center'
        
        }}>









      <ul   style={{paddingInlineStart: '0px'}}>
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
{/* <div className="alert alert-success">
  <strong>{todo.title} : </strong>{todo.text}
  <span href="#" className=" pull rightbtn btn-danger"  onClick={() => handleRemove(todo.id)}>Remove</span>

</div> */}

<div className="">
  {/* <h5 className="card-title" onClick={() => handleToggle(todo.id)}>{todo.title}</h5> */}
  
  <p className="alert" onClick={() => handleToggle(todo.id)}>{todo.text}
  
  <p href="#"  className='close-btn'  onClick={() => handleRemove(todo.id)}><DeleteFilled/></p>
  </p>

  

</div>

  
{/* /////   ))} */}




            {/* <span onClick={() => handleToggle(todo.id)}>{todo.text}</span>
            <button onClick={() => handleRemove(todo.id)}>Remove</button>
          
            <br/> */}

          </li>
        ))}
      </ul>
      
      
    {Pendinglength > 0 ?
     <p>you have {Pendinglength} pending  {Pendinglength > 1?"tasks":"task"}  </p>
    
    :null}  
     
      </div>


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