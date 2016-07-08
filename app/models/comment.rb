# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  ride_id    :integer          not null
#  user_id    :integer          not null
#  body       :string           not null
#  author     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base
  validates :ride_id, :user_id, :body, :author, presence: true

  belongs_to :ride
  belongs_to :user
end
