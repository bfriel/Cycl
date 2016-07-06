json.array! @followings do |following|
  json.username following.username
  json.userId following.id
end
