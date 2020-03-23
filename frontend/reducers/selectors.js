
export const allTodos = ( {entities: { todos }} ) => { 
  return Object.keys(todos).map(id => todos[id])
}

