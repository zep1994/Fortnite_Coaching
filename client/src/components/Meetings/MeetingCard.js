import React from 'react'

const MeetingCard = ({meeting}) => (
    <div key={meeting.id} className="MeetingCard">
        <h3>{meeting.name}</h3>
        <h4>{meeting.date}</h4>
    </div>
     
)

export default MeetingCard