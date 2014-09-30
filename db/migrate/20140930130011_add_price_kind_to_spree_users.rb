class AddPriceKindToSpreeUsers < ActiveRecord::Migration
  def change
    add_column :spree_users, :price_kind, :integer
  end
end
