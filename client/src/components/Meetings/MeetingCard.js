import React from 'react'

const MeetingCard = ({meeting}) => (
    <div key={meeting.id} className="MeetingCard">
        <h3>{meeting.name}</h3>
        <p>{meeting.price}</p>
        <p>{meeting.time}</p>
    </div>
     
)

export default MeetingCard