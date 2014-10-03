class AddColumnsToSpreeProducts < ActiveRecord::Migration
  def change
    add_column :spree_products, :instruction, :string
    add_column :spree_products, :certificate, :string
  end
end
