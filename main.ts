let x = 0
let y = 0
basic.forever(function () {
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    if (x > 100 && y > 100) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (x > 100 && y < -100) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (x < -100 && y > 100) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (x < -100 && y < -100) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (x < 100 && y > 100) {
        basic.showArrow(ArrowNames.North)
    } else if (x < 100 && y < -100) {
        basic.showArrow(ArrowNames.South)
    } else if (x > 100 && y < 100) {
        basic.showArrow(ArrowNames.West)
    } else if (x < -100 && y < 100) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showIcon(IconNames.Target)
    }
})
