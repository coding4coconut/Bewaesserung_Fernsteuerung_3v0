input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
radio.onReceivedValue(function (name, value) {
    MoistureValuePercent = parseFloat(name)
    if (value == 1) {
        basic.showString(name)
        led.plotBarGraph(
        MoistureValuePercent,
        100
        )
        basic.pause(750)
        basic.clearScreen()
    }
    if (value == 2) {
        MotorOffOn_State = 1
        basic.showString(name)
    }
    if (value == 21) {
        MotorOffOn_State = 1
        basic.showString(name)
    }
    if (value == 22) {
        MotorOffOn_State = 1
        led.plotBarGraph(
        MoistureValuePercent,
        100
        )
    }
    if (value == 3) {
        MotorOffOn_State = 0
        basic.showString(name)
    }
    if (value == 31) {
        MotorOffOn_State = 0
        basic.showString(name)
    }
})
let MoistureValuePercent = 0
let MotorOffOn_State = 0
basic.showIcon(IconNames.Happy)
MotorOffOn_State = 0
MoistureValuePercent = 0
radio.setFrequencyBand(20)
radio.setTransmitPower(7)
radio.setGroup(1)
radio.setTransmitSerialNumber(false)
basic.forever(function () {
	
})
