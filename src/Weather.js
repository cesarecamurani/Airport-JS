function WeatherReporter() {
  this._weather = ["Sunny", "Cloudy", "Overcast", "Stormy"];
};

WeatherReporter.prototype.isStormy = function () {
  var rand = this._weather[Math.floor(Math.random() * this._weather.length)];
    if (rand === "Stormy") { return true; }
    else { return false; };
};
