class Api::UsersController < ApplicationController
    # before_action :require_current_user!, except: [:new, :create]
  
  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save!
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def new
    @user = User.new
  end

  def show 
    @user = User.find(params[:id])
  end 

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end