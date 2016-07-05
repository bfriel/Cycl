class AddDurationCaloriesToRides < ActiveRecord::Migration
  def change
    add_column :rides, :duration, :integer
    add_column :rides, :calories_burned, :integer
  end
end
