class Api::UsersController < ApplicationController
    before_action :require_current_user!, except: [:new, :create]
  
  def create
    @user = User.new(user_params)

    if @user.save!
      login!(@user)
      redirect_to '/api/todos'
    else
      render json: @user.errors.full_messages
    end
  end

  def new
    @user = User.new
  end

  def show 
    @user = User.find(params[:id])
    render json: @user
  end 

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end