class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }
  helper_method :current_user, :logged_in?

  def login!(user)
    @current_user = user
    session[:session_token] = user.session_token
  end 

  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= User.find_by(session_token: session[:session_token])
  end 

  def logged_in?
    current_user != nil
  end

  def log_out!
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end

  def require_current_user! 
    if current_user.nil? 
      redirect_to '/api/session/new'
    elsif "#{current_user.id}" != params[:id]
      render json: 'That is not your profile'
    end 
  end 
end
