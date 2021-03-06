class Api::RidesController < ApplicationController
  def create
    @ride = Ride.new(ride_params)
    @ride.user_id = current_user.id

    if @ride.save
      render :index
    end
  end

  def show
    @ride = Ride.find
  end

  def index
    @rides = Ride.all
  end

  private
  def ride_params
    params.require(:ride).permit(:ride_path, :ride_name, :elevation_gain, :rider,
      :distance, :ride_description, :duration, :calories_burned, :start_pos)
  end
end
