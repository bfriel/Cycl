json.user do
  json.currentUser @current_user
end
json.totals do
  json.workoutCount  @workout_count
  json.totalDistance  @total_distance
  json.totalDuration  @total_duration
  json.totalCalories  @total_calories
end
json.followings do
  json.array! @current_user.followings, :username, :id
end
