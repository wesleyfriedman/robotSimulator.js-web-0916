'use strict'

class Robot {
  constructor(){
    this.bearing = 'north'
    this.coordinates = [0, 0]
    this.bearingIndex = 0
  }

  instructions(commands){
    var arrayCommands = commands.split('')
    for (var i = 0; i < arrayCommands.length; i++) {
      switch (arrayCommands[i]) {
        case 'L':
          arrayCommands[i] = 'turnLeft'
          break;
        case 'R':
          arrayCommands[i] = 'turnRight'
          break;
        case 'A':
          arrayCommands[i] = 'advance'
          break;
      }
    }
    return arrayCommands
  }

  evaluate(commands){
    var arrayCommands = this.instructions(commands)
    for (var i = 0; i < arrayCommands.length; i++) {
      switch (arrayCommands[i]) {
        case 'turnLeft':
          this.turnLeft()
          break;
        case 'turnRight':
          this.turnRight()
          break;
        case 'advance':
          this.advance()
          break;
      }
    }
  }

  place(location){
    this.at(location['x'],location['y'])
    this.orient(location.direction)
  }

  at(x, y){
    this.coordinates = [x, y]
  }

  orient(command){
    var headings = ['north', 'east', 'south', 'west']
    if (!headings.includes(command)){
      throw new Error("Invalid Robot Bearing")
    } else {
      this.bearingIndex = headings.indexOf(command)
      this.bearing = command
    }
  }

  turnRight(){
    var headings = ['north', 'east', 'south', 'west']
    this.bearingIndex += 1
    if (this.bearingIndex === 4){
      this.bearingIndex = 0
    }
    this.bearing = headings[this.bearingIndex]
  }

  turnLeft(){
    var headings = ['north', 'east', 'south', 'west']
    this.bearingIndex -= 1
    if (this.bearingIndex === -1){
      this.bearingIndex = 3
    }
    this.bearing = headings[this.bearingIndex]
  }

  advance(){
    var x = this.coordinates[0]
    var y = this.coordinates[1]
    if (this.bearing === 'west'){
      this.at(x-1, y)
    } else if (this.bearing === 'east') {
      this.at(x+1, y)
    } else if (this.bearing === 'north'){
      this.at(x, y+1)
    } else if (this.bearing === 'south'){
      this.at(x, y-1)
    }
  }

}
// robot1 = new Robot()
// var mapOfRoom = []
