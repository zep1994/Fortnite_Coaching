class MeetingSerializer < ActiveModel::Serializer 
    attributes :id, :name, :time, :duration, :price
end