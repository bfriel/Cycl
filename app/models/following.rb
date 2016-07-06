# == Schema Information
#
# Table name: followings
#
#  id           :integer          not null, primary key
#  following_id :integer          not null
#  follower_id  :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Following < ActiveRecord::Base
  validates :following_id, :follower_id, presence: true
  validates :follower, uniqueness: { scope: :following }

  belongs_to :following, class_name: :User
  belongs_to :follower, class_name: :User
end
