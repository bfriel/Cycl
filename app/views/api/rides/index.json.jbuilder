json.array! @rides do |ride|
  json.ride_path ride.ride_path
  json.ride_name ride.ride_name
  json.ride_description ride.ride_description
  json.elevation_gain ride.elevation_gain
  json.duration ride.duration
  json.distance ride.distance
  json.calories_burned ride.calories_burned
  json.user_id ride.user_id
  json.ride_id ride.id
  json.start_pos ride.start_pos
  json.rider ride.rider
end
