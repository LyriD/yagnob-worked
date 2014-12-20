class AddArtikulToSpreeProducts < ActiveRecord::Migration
  def change
    add_column :spree_products, :artikul, :string
  end
end
