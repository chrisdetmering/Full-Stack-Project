export const fetchSteps = () => ( 
  $.ajax({ 
    method: "GET", 
    url: '/api/steps', 
    dataType: "json"
  })
)

export const createStep = (step) => ( 
  $.ajax({ 
    method: "POST", 
    url: '/api/steps', 
    data: { step }, 
    dataType: 'json'
  })
)

export const deleteStep = (step) => (
  $.ajax({
    method: "DELETE",
    url: `/api/steps/${step.id}`
  })
)