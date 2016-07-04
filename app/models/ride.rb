# == Schema Information
#
# Table name: rides
#
#  id               :integer          not null, primary key
#  user_id          :integer          not null
#  ride_path        :text             not null
#  ride_name        :string           not null
#  elevation_gain   :integer          not null
#  distance         :float            not null
#  ride_description :text
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Ride < ActiveRecord::Base
  validates :user_id, :ride_name, :ride_path, :elevation_gain, :distance, presence: true

  belongs_to :user
end