class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :ride_id, null: false
      t.integer :user_id, null: false
      t.string :body, null: false
      t.string :author, null: false

      t.timestamps null: false
    end
    add_index :comments, :ride_id
    add_index :comments, :user_id
  end
end
