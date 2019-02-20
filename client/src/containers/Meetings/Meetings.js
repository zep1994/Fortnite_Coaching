import React from 'react'
import { connect } from 'react-redux'
import MeetingCard from '../../components/Meetings/MeetingCard'

class Meetings extends React.Component {
    
    render() {
        return (
            <div className="MeetingsContainer">
                <h1>Meetings</h1>
                {this.props.meetings.map(meeting => <MeetingCard key={meeting.id} meeting={meeting} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        meetings: state.meetings
    })
}

export default connect(mapStateToProps)(Meetings)