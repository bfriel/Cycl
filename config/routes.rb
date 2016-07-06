Rails.application.routes.draw do
  root to: 'static_pages#root'

   namespace :api do
     resources :users, only: [:new, :create, :show, :index, :update] do
       resource :following, only: [:create, :destroy]
     end
     resource :session, only: [:create, :destroy]
     resources :rides
   end
end
