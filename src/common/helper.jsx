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
      };
      positionId = navigator.geolocation.watchPosition(
        (position) => {
          successCb(position)
          navigator.geolocation.clearWatch(positionId);
        }, errorCb, options)
    }
  }
}

export default {
  getCurrentLocation,
}