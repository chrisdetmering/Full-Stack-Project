class Api::ProjectsController < ApplicationController
  
  def index 
    @projects = Project.all 
    render :index
  end 

  def create 
    @project = Project.create(todo_params)

    if @project.save!
      render json: @project
    else 
      render json: @project.errors.full_messages, status: 422
    end 
  end 

  def show 
    @project = Project.find_by(id: params[:id])

    if @project 
      render json: @project
    else 
      render json: {status: "error", code: 4000, message: "can't find todo" }
    end 
  end 

  def update 
    @project = Project.find_by(id: params[:id])

    if @project.update!(todo_params)
      render json: @project
    else 
      render json: @project.errors.full_messages, status: 400 
    end 

  end 

  def destroy 
    @project = Project.find_by(id: params[:id])
  
    if @project.delete
      render json: @project
    else 
      render json: @project.errors.full_messages, status: 400 
    end
  end 

  private 
  def project_params 
    params.require(:project).permit(:title, :user_id)
  end 
end