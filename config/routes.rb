Rails.application.routes.draw do
  namespace :api do 
      resources :meetings
  end
end
