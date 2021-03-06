Rails.application.routes.draw do
  namespace :api do
    resources :benches, only: [:new, :index, :create], defaults: {format: :json}
    resources :users, only: [:create], defaults: {format: :json}
    resource :session, only: [:create, :destroy], defaults: {format: :json}
  end

  root to: "static_pages#root"
  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
