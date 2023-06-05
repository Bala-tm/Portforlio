export const Add_List = 'Add_List';
export const Toggle_List = 'Toggle_List';
export const Remove_List = 'Remove_List';
export const clear_All = 'clear_All';

export const addTodo = (text) => ({
    type: Add_List,
    payload: {
      text 
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

  export const clearAll = (data) => ({
    type: clear_All,
    
  });