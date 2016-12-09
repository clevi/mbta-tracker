import * as types from '../constants/ActionTypes';

export function requestUpdate() {  
  return {
    type: types.REQUEST_UPDATE
  };
}

export function recieveUpdate(response) {  
  return {
    type: types.RECIEVE_UPDATE,
    data: response
  };
}

// Fetch the departure times from the server as an async action. Dispatch a retrieveUpdate action with the resulting blob.
export function fetchDepartures() {
    return function (dispatch) {
        dispatch(requestUpdate());
        return fetch('http://developer.mbta.com/lib/gtrtfs/Departures.csv')
          .then((response) => {
            if (response.status >= 400) {
                throw new Error('Bad response from server');
            } else {
                response.blob().then((blob) => {
                    // Setup a FileReader and CSV parser to handle the incoming blob.
                    let reader = new FileReader()

                    reader.onload = (event) => {
                      var Converter = require('csvtojson').Converter;
                      var converter = new Converter({});
                      converter.fromString(event.target.result, function(err,result){
                        dispatch(recieveUpdate(result));  
                      });
                    };

                    reader.readAsText(blob);
                });
            }
        });
  }
}