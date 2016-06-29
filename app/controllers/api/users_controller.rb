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
    render :index
  end

  def show
    @user = User.find(params[:id])
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
    params.require(:user).permit(:username, :password, :height, :weight, :gender, :birthdate )
  end
end
