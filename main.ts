input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Calli2bot.setRgbLed3(0xa300ff, true, false, false, true, false)
    Calli2bot.setRgbLed3(0x00ffdc, false, true, true, false, false)
    Calli2bot.setLed1(calli2bot.eLed.redb, true)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
	
})
let Calli2bot: calli2bot.Calli2bot = null
Calli2bot = calli2bot.beimStart(calli2bot.calli2bot_eADDR(calli2bot.eADDR.CB2_x22))
basic.forever(function () {
    Calli2bot.setMotoren2(100, 100)
    calli2bot.pause(calli2bot.calli2bot_ePause(calli2bot.ePause.p10))
    Calli2bot.setMotoren2(100, 50)
    basic.pause(10000)
    Calli2bot.setMotoren2(100, 100)
    basic.pause(10000)
    Calli2bot.setMotoren2(-50, 100)
    basic.pause(1000)
    Calli2bot.setMotoren2(-100, -100)
    basic.pause(1000)
    Calli2bot.setMotoren2(100, 11)
    basic.pause(100)
})
