Rails.application.routes.draw do
  namespace :api do 
     resources :meetings
  end
  root "meetings#index"
end
