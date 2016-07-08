Rails.application.routes.draw do
  root to: 'static_pages#root'

   namespace :api do
     resources :users, only: [:new, :create, :show, :index, :update] do
       resource :following, only: [:create, :show, :destroy]
     end
     resource :session, only: [:create, :destroy]
     resources :rides, only: [:create, :show, :index] do
       resources :comments, only: [:create, :destroy]
     end
   end
end
