input.onGesture(Gesture.Shake, function () {
    mano = randint(1, 3)
    if (mano == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (mano == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
let mano = 0
basic.showLeds(`
    # . . . .
    . # . . .
    . . # . .
    . . . # .
    . . . . #
    `)
basic.forever(function () {
    if (true) {
    	
    }
})
