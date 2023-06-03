export const Add_List = 'Add_List';
export const Toggle_List = 'Toggle_List';
export const Remove_List = 'Remove_List';

export const addTodo = (text,title) => ({
    type: Add_List,
    payload: {
      text,
      title
    },
  });
  
  export const toggleTodo = (id) => ({
    type: Toggle_List,
    payload: {
      id,
    },
  });
  
  export const removeTodo = (id) => ({
    type: Remove_List,
    payload: {
      id,
    },
  });