import React from 'react';
import { Table } from 'react-bootstrap';
import getTime from '../utils/GetTime';

// A looping countdown timer. Takes in a length in milliseconds and a callback.
// Will execute the callback every time the timer hits 0, before resetting itself.
class DeparturesTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: props.data
        };
    }

    componentWillReceiveProps(nextProps) {
        if(this.state.data != nextProps.data)
            this.setState(Object.assign({},this.state,{data: nextProps.data}));
    }

    render() {
        // Associating train statuses with css classes.
        let statusClass = {
                                'On Time': '',
                                'Cancelled': 'train-negative', 
                                'Arriving': 'train-positive',
                                'End': '',
                                'Now Boarding': 'train-positive',
                                'Info to follow': '',
                                'Arrived': 'train-positive',
                                'All Aboard': 'train-positive',
                                'TBD': '',
                                'Departed': '',
                                'Delayed': 'train-alert',
                                'Late': 'train-alert',
                                'Hold': 'train-alert'
                            };




        if(this.state.data.length == 0){
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            );
        } 
        else {
            return (
                <Table responsive className="table-no-border">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Origin</th>
                            <th>Destination</th>
                            <th>Train</th>
                            <th>Track</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(function(train, index){
                            let style = statusClass[train.Status]
                            let time = train.ScheduledTime;
                            if (train.Lateness != 0)
                                time += train.Lateness
                            let parsedTime = getTime(time * 1000);
                            let readableTime = parsedTime.hours + ':' + parsedTime.minutes + parsedTime.timeofday;

                            return (
                                <tr className={style}>
                                    <td>{readableTime || 'TBD'}</td>
                                    <td>{train.Origin || 'TBD'}</td>
                                    <td>{train.Destination || 'TBD'}</td>
                                    <td>{train.Trip || 'TBD'}</td>
                                    <td>{train.Track || 'TBD'}</td>
                                    <td>{train.Status || 'TBD'}</td>
                                </tr>

                            );
                        })}
                    </tbody>
                </Table>
            );
        }
    }
}

module.exports = DeparturesTable