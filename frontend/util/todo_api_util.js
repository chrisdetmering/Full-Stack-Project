  export const fetchTodos = () => (
    $.ajax({
      method: "GET",
      url: "/api/todos",
      dataType: "json"
    }) 
  )

  export const createTodo = (todo) => (
    $.ajax({
      method: "POST",
      url: "/api/todos",
      data: { todo: todo },
      dataType: "json"
    })
  )

  export const updateTodo = (todo) => ( 
    $.ajax({ 
      method: "PATCH",
      url: `/api/todos/${todo.id}`,
      data: {todo: todo},
      dataType: "json"
    })
  )

  export const deleteTodo = (todo) => (
    $.ajax({ 
      method: "DELETE", 
      url: `/api/todos/${todo.id}`
    })
  )

  