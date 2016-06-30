class RemoveWeightBirthdateGenderFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :weight, :integer
    remove_column :users, :birthdate, :date
    remove_column :users, :gender, :string
  end
end
