import { Add_List, Toggle_List, Remove_List } from '../actions/ToDoAction';

const initialState = [];
const todoReducer = (state = initialState, action) => {console.log("action.payload",action.payload);

  switch (action.type) {
    case Add_List:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload.text,
          

          completed: false,
        },
      ];

    case Toggle_List:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      ); 
    case Remove_List:
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
};

export default todoReducer;