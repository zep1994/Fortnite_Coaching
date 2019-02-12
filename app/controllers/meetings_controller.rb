class MeetingsController < ApplicationController

    def index 
        render json: Meeting.all 
    end
end
