function getCurrentLocation(successCb, errorCb) {
  if (navigator.geolocation) {
    var positionId
    successCb = successCb ? successCb : (position) => { console.log('default success CB: position', position) }

    errorCb = errorCb ? errorCb : (error) => { console.log('default error CB', error) }
    if (successCb && errorCb) {
      let options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0,
        distanceFilter: 1
      };
      positionId = navigator.geolocation.watchPosition(
        (position) => {
          console.log('action 1')
          successCb(position)
          console.log('action 2')
          // navigator.geolocation.clearWatch(positionId);
          console.log('action 3')
        }, errorCb, options)
    }
  }
}

export default {
  getCurrentLocation,
}