// Breaks down a timestamp into readable parts.
 export default function getTime(time) {
    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December' ];

    let datetime = new Date(time);
    let timeofday = 'AM';
    let hours = datetime.getHours();
    let minutes = datetime.getMinutes();
    let seconds = datetime.getSeconds();
    let weekday = dayNames[datetime.getDay()];
    let month = monthNames[datetime.getMonth()];
    let day = datetime.getDate();
    let year = datetime.getFullYear();

    if (hours === 0){
        hours = 12;
    } else if (hours > 12) {
        hours = hours - 12;
        timeofday = 'PM';
    }

    // Format minutes and seconds to have a leading 0 if needed.
    if (minutes < 10)
        minutes = '0' + minutes;
    if (seconds < 10)
        seconds = '0' + seconds;

    return {
        weekday: weekday,
        month: month,
        day: day,
        year: year,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        timeofday: timeofday
    }
}
