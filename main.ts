let movement = 0
let position = 0
basic.forever(function () {
    movement = input.acceleration(Dimension.X)
    position = Math.map(movement, -1023, 1023, 0, 100)
    sb.setServoPosition(sb.servo(SBServo.ServoA), position)
})
