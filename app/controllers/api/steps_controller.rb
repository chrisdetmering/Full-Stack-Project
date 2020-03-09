class Api::StepsController < ApplicationController 

  def index 
    @steps = Step.all 
    render json: @steps
  end 

  def create 
    @step = Step.create(step_params)

    if @step.save
      render json: @step 
    else 
      render json: @step.errors.full_messages, status: 422
    end 
  end 

  def show 
    @step = Step.find_by(id: params[:id])

    if @step 
      render json: @step
    else 
      render json: {status: "error", code: 4000, message: "can't find todo" }
    end 
  end 

  def update 
    @step = Step.find_by(id: params[:id])

    if @step.update!(step_params)
      render json: @step
    else 
      render json: @step.errors.full_messages, status: 400 
    end 

  end 

  def destroy 
    @step = Step.find_by(id: params[:id])
  
    if @step.delete
      render json: @step
    else 
      render json: @step.errors.full_messages, status: 400 
    end
  end 

  private 
  def step_params 
    params.require(:step).permit(:body, :todo_id, :id)
  end 
end 