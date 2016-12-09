import React from 'react';

// A looping countdown timer. Takes in a length in milliseconds and a callback.
// Will execute the callback every time the timer hits 0, before resetting itself.
class Countdown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            initialLength: props.timerLength,
            timeRemaining: props.timerLength,
            isUpdating: props.isUpdating,
            onComplete: props.onComplete
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        setInterval(this.tick, 1000);
        this.ding()
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.isUpdating != nextProps.isUpdating)
            this.setState(Object.assign({},this.state,{isUpdating: nextProps.isUpdating}));
    }

    tick() {
        // If we are waiting on an update, do not count down.
        if(!this.state.isUpdating){
            // If we've timed out, call the complete function and reset.
            if(this.state.timeRemaining <= 0){
                this.ding()
            }
            
            // Update info
            this.setState(Object.assign({},this.state,{ timeRemaining: this.state.timeRemaining - 1000 }));
        }
    }

    // Fires the onComplete callback and resets the timer. Note this is a bit buggy. Does not always reset timer.
    ding() {
        if(this.state.onComplete)
            this.state.onComplete();
        this.setState(Object.assign({},this.state,{ timeRemaining: this.state.initialLength }))
    }

    formatTime(milliseconds) {
        let totalSeconds = Math.round(milliseconds / 1000);

        let hours = parseInt(totalSeconds / 3600, 10);
        let minutes = parseInt(totalSeconds / 60, 10) % 60;
        let seconds = parseInt(totalSeconds % 60, 10);

        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        return {hours: hours, minutes: minutes, seconds: seconds};
    }

    render() {
        let millisRemaining = this.state.timeRemaining;
        let displayTime = this.formatTime(millisRemaining);
        
        // For berivity, do not display hours if there aren't any.
        let hoursString = displayTime.hours == 0 ? '' : displayTime.hours + ':'; 

        if(this.state.isUpdating){
            return (
                <div className='refresh-data'>
                    <span>Updating...</span>
                    <button className='refresh-button' onClick={() => this.ding()} disabled='disabled'>Update Now</button>
                </div>
            );
        } else {
            return (
                <div className='refresh-data'>
                    <span>Updating in {hoursString}{displayTime.minutes}:{displayTime.seconds}</span>
                    <button className='refresh-button' onClick={() => this.ding()}>Update Now</button>
                </div>
            );
        }
    }
}

module.exports = Countdown;