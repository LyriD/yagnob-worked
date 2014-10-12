Rails.application.routes.draw do

  # resources :baloons

  # resources :articles
  # resources :materials

  # mount Ckeditor::Engine => '/ckeditor'
  # This line mounts Spree's routes at the root of your application.
  # This means, any requests to URLs such as /products, will go to Spree::ProductsController.
  # If you would like to change where this engine is mounted, simply change the :at option to something different.
  #
  # We ask that you don't use the :as option here, as Spree relies on it being the default of "spree"
  mount Spree::Core::Engine, :at => '/'
          # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  get '/articles/:id' => 'spree/static_content#article'
  get '/admin/articles' => 'spree/admin/pages#articles_index'
  get '/admin/add_article' => 'spree/admin/pages#add_article'
  get '/admin/edit_article/:article_item_id' => 'spree/admin/pages#edit_article'
  get '/admin/delete_article/:article_item_id' => 'spree/admin/pages#delete_article'
  post '/articles' => 'articles#create_article'
  patch '/articles' => 'spree/admin/pages#update_article'

  get '/admin/baloons' => 'spree/admin/pages#baloons_index'
  get '/admin/add_baloon' => 'spree/admin/pages#add_baloon'
  get '/admin/edit_baloon/:baloon_item_id' => 'spree/admin/pages#edit_baloon'
  get '/admin/delete_baloon/:baloon_item_id' => 'spree/admin/pages#delete_baloon'
  post '/baloons' => 'spree/admin/pages#create_baloon'
  patch '/baloons' => 'spree/admin/pages#update_baloon'


  get '/admin/materials' => 'spree/admin/pages#materials_index'
  get '/admin/add_material' => 'spree/admin/pages#add_material'
  get '/admin/edit_material/:material_item_id' => 'spree/admin/pages#edit_material'
  get '/admin/delete_material/:material_item_id' => 'spree/admin/pages#delete_material'
  post '/materials' => 'spree/admin/pages#create_material'
  patch '/materials' => 'spree/admin/pages#update_material'

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
