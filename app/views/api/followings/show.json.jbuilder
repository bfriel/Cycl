json.array! @follows do |follow|
  json.id follow.following_id
  json.followersId follow.follower_id
  json.username follow.following.username
end
