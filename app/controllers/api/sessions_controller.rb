class Api::SessionsController < ApplicationController
  def new

  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      redirect_to root_url
    else
      flash[:errors] = ["Invalid username or password"]
      render :new, status: 404
    end
  end

  def destroy
    if current_user
      logout
      render json: {}, status: 200
    else
      render :new, status: 404
    end
  end
end
