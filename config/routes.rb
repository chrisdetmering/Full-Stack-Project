Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do 
    resources :todos
    resources :steps
    resources :users, only: [:create, :new, :show]
    resource :session, only: [:create, :new, :destroy]
  end 

  match '*path', to: 'static_pages#root', via: :all
end
