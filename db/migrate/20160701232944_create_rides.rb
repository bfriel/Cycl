class CreateRides < ActiveRecord::Migration
  def change
    create_table :rides do |t|
      t.integer :user_id, null: false
      t.text :ride_path, null: false
      t.string :ride_name, null: false
      t.integer :elevation_gain, null: false
      t.float :distance, null: false
      t.text :ride_description

      t.timestamps null: false
    end
    add_index :rides, :user_id
  end
end
