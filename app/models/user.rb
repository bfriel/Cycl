# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :password, length:  { minimum: 6, allow_nil: true }
  validates :session_token, :username, uniqueness: true

  after_initialize :ensure_session_token

  has_many :rides

  has_many :followings, through: :out_follows, source: :following
  has_many :out_follows, class_name: :Following, foreign_key: :follower_id

  has_many :followers, through: :in_follows, source: :follower
  has_many :in_follows, class_name: :Following, foreign_key: :following_id


  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user.try(:is_password?, password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
