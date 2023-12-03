input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Calli2bot.setRgbLed3(0xa300ff, true, false, false, true, false)
    Calli2bot.setRgbLed3(0x00ffdc, false, true, true, false, false)
    Calli2bot.setLed1(calli2bot.eLed.redb, true)
    Calli2bot.setMotoren2(100, 100)
    calli2bot.pauseSekunden(calli2bot.calli2bot_ePause(calli2bot.ePause.p5))
    Calli2bot.setMotoren2(100, 50)
    calli2bot.pauseSekunden(calli2bot.calli2bot_ePause(calli2bot.ePause.p5))
    Calli2bot.setMotoren2(100, 100)
    calli2bot.pauseSekunden(calli2bot.calli2bot_ePause(calli2bot.ePause.p5))
    Calli2bot.setMotoren2(-50, 100)
    calli2bot.pauseSekunden(calli2bot.calli2bot_ePause(calli2bot.ePause.p5))
    Calli2bot.setMotoren2(-100, -100)
    calli2bot.pauseSekunden(calli2bot.calli2bot_ePause(calli2bot.ePause.p5))
    Calli2bot.setMotoren2(-40, -40)
    calli2bot.pauseSekunden(calli2bot.calli2bot_ePause(calli2bot.ePause.p5))
    Calli2bot.i2cRESET_OUTPUTS()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    while (Calli2bot.seite9Linienfolger(100, 50, 10)) {
    	
    }
})
let Calli2bot: calli2bot.Calli2bot = null
Calli2bot = calli2bot.beimStart(calli2bot.calli2bot_eADDR(calli2bot.eADDR.CB2_x22))
basic.showIcon(IconNames.Angry)
