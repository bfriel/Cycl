class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
		@user = User.new(user_params)

		if @user.save
			log_in(@user)
			render :show
		else
			render json: @user.errors, status: 422
		end
  end

  def index
    @users = User.all
    @current_user = current_user
  end

  def show
    @user = User.includes(:followings).find(params[:id])
    @ride_count = @user.rides.count
    @total_distance = @user.rides.sum('distance')
    @total_duration = @user.rides.sum('duration')
    @total_calories = @user.rides.sum('calories_burned')
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      render :show
    else
      render :errors
    end
  end


  private
  def user_params
    params.require(:user).permit(:username, :password )
  end
end
