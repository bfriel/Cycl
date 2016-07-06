class Api::FollowingsController < ApplicationController
  def create
    @follow = current_user.out_follows.create!(following_id: params[:user_id])

    render :follow
  end

  def destroy

    @follow = current_user.out_follows.find_by(following_id: params[:user_id])
    @follow.destroy!

    render :follow
  end
end
