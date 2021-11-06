radio.onReceivedValue(function (name, value) {
    if (name == "a") {
        a = value
    }
    if (name == "b") {
        b = value
    }
    if (name == "c") {
        c = value
    }
    if (name == "d") {
        d = value
    }
})
let d = 0
let c = 0
let b = 0
let a = 0
radio.setGroup(20)
basic.forever(function () {
    serial.writeValue("t1", a)
    serial.writeValue("l1", b)
    serial.writeValue("t2", c)
    serial.writeValue("s2", d)
    basic.pause(1000)
})
