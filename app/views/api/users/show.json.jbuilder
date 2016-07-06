json.user do
  json.extract! @user, :username, :id
end
json.totals do
  json.rideCount  @ride_count
  json.totalDistance  @total_distance
  json.totalDuration  @total_duration
  json.totalCalories  @total_calories
end
json.followings do
  json.array! @user.followings, :username, :id
end

json.partial! "api/users/user", user: @user
