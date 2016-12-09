import React from 'react';
import getTime from '../utils/GetTime';

class Clock extends React.Component {
    constructor() {
        super()
        this.state = {time: new Date()};
        this.tick = this.tick.bind(this);
    }

    // Generates and formats a timestamp to be readable.
    currentTime() {
        let time = this.state.time;
        return getTime(time);
    }

    componentDidMount() {
        setInterval(this.tick, 1000);
    }

    tick() {
        this.setState({time: new Date()});
    }

    render() {
        var time = this.currentTime();
        return (
            <div className="current-date-time">
                <span>{time.weekday}, {time.month} {time.day}, {time.year} {time.hours}:{time.minutes}:{time.seconds} {time.timeofday}</span>
            </div>
        );
    }
}

module.exports = Clock;