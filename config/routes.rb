Rails.application.routes.draw do
  devise_for :users
  namespace :api do 
     resources :meetings
  end
  root "meetings#index"
end
