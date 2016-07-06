class AddStartPosToRides < ActiveRecord::Migration
  def change
      add_column :rides, :start_pos, :string
  end
end
