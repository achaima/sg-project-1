function Countdown() {
  this.start_time = '00:30'
  this.target_id = '#timer'
}

Countdown.prototype.init(){
  this.reset();
  setInterval(this.name + '.tick()',1000)
}


Countdown.prototype.reset(){
  time = this.start_time.split(':');
  this.minutes = parseInt(time_ary[0]);
  this.seconds = parseInt(time_ary[1]);
  this.update-target();
}
