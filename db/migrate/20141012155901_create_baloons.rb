class CreateBaloons < ActiveRecord::Migration
  def change
    create_table :baloons do |t|
      t.string :coords
      t.text :caption
      t.string :header
      t.text :body
      t.string :footer

      t.timestamps
    end
  end
end
