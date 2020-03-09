class Api::TodosController < ApplicationController
  
  def index 
    todos = Todo.all 
    render json: todos, include: :tags
  end 

  def create 
    @todo = Todo.create(todo_params)

    if @todo.save!
      render json: @todo, include: :tags
    else 
      render json: @todo.errors.full_messages, status: 422
    end 
  end 

  def show 
    @todo = Todo.find_by(id: params[:id])

    if @todo 
      render json: @todo
    else 
      render json: {status: "error", code: 4000, message: "can't find todo" }
    end 
  end 

  def update 
    @todo = Todo.find_by(id: params[:id])

    if @todo.update!(todo_params)
      render json: @todo
    else 
      render json: @todo.errors.full_messages, status: 400 
    end 

  end 

  def destroy 
    @todo = Todo.find_by(id: params[:id])
  
    if @todo.delete
      render json: @todo
    else 
      render json: @todo.errors.full_messages, status: 400 
    end
  end 

  private 
  def todo_params 
    params.require(:todo).permit(:title, :body, :done, :id, :tag_names => [])
  end 
end
