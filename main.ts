function gtacalli2botem62 () {
    calli2bot.comment("1 Erweiterung laden:")
    calli2bot.comment("calliope-net/calli2bot")
}
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
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    while (Calli2bot.seite9Linienfolger(100, 50, 10)) {
    	
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    while (true) {
        Calli2bot.i2cReadINPUTS()
        if (Calli2bot.bitINPUTS(calli2bot.eINPUTS.sp0)) {
            Calli2bot.setMotor(calli2bot.eMotor.beide, 0)
            calli2bot.pauseSekunden(calli2bot.calli2bot_ePause(calli2bot.ePause.p05))
            Calli2bot.setMotoren2(50, -50)
            calli2bot.pauseSekunden(calli2bot.calli2bot_ePause(calli2bot.ePause.p05))
        } else if (false) {
        	
        } else {
            Calli2bot.setMotor(calli2bot.eMotor.beide, 50)
        }
    }
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Hold), function () {
    while (true) {
        if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.dunkel)) {
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            basic.pause(500)
            calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 50)
            calliBot2.motor(C2Motor.rechts, C2Dir.rueckwaerts, 50)
            basic.pause(500)
        } else if (calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.dunkel)) {
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            basic.pause(500)
            calliBot2.motor(C2Motor.links, C2Dir.rueckwaerts, 50)
            calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 50)
            basic.pause(500)
        } else {
            calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 50)
        }
    }
})
let Calli2bot: calli2bot.Calli2bot = null
Calli2bot = calli2bot.beimStart(calli2bot.calli2bot_eADDR(calli2bot.eADDR.CB2_x22))
basic.showIcon(IconNames.Angry)
