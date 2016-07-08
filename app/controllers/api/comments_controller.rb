class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :comment
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    render :comment
  end

  private
  def comment_params
    params.require(:comment).permit(:ride_id, :user_id, :body, :author)
  end
end
