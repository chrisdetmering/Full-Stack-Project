class Api::SessionsController < ApplicationController 
  def new 
  end 

  def create 
    @user = User.find_by_credantials(
      sessions_params.username, 
      sessions_params.password)

    if @user.nil? 
      render json: 'wrong credentials'
    else 
      render json: "welcome back #{@user.username}"
    end
  end 

  def show
    @user = User.find(id: params[:id])
  end 
  
  private 

  def sessions_params 
    params.require(:user).permit(:username, :password)
  end 

end 