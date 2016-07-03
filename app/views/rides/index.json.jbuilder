json.array! @rides do |ride|
  json.ride_path ride.ride_path
  json.ride_name ride.ride_name
  json.ride_description ride.ride_description
  json.ride_id ride.id
end
