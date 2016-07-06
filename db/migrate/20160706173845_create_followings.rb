class CreateFollowings < ActiveRecord::Migration
  def change
    create_table :followings do |t|
      t.integer :following_id, null: false
      t.integer :follower_id, null: false

      t.timestamps null: false
    end

    add_index :followings, :following_id
    add_index :followings, :follower_id
  end
end
