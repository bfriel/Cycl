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
#  duration         :integer
#  calories_burned  :integer
#  start_pos        :string
#

require 'test_helper'

class RideTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
