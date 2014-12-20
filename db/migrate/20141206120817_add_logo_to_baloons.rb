class AddLogoToBaloons < ActiveRecord::Migration
  def change
    add_column :baloons, :logo, :string
  end
end
