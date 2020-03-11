class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save!
      login!(@user)
      render json: @user
    else
      render json: @user.errors.full_messages
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