class Api::MeetingsController < ApplicationController
    #before_action :authenticate_user!


    def index 
        render json: Meeting.all 
    end

end