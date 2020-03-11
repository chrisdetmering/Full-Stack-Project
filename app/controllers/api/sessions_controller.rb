class Api::SessionsController < ApplicationController 
  def new 
  end 

  def create 
    @user = User.find_by_credentials(
      params[:user][:username], 
      params[:user][:password])

    if @user.nil? 
      render json: 'wrong credentials'
    else 
      redirect_to "/api/users/#{@user.id}"
    end
  end 

  def show
    @user = User.find(id: params[:id])
  end 
  
  private 

end 