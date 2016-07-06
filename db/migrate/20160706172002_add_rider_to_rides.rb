class AddRiderToRides < ActiveRecord::Migration
  def change
    add_column :rides, :rider, :string
  end
end
