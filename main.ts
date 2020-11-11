let projectile: Sprite = null
scene.setBackgroundColor(6)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f e e e e f . . . . . 
    . . . f f e e f e e e f f . . . 
    . . f b f e e e e e e f b f . . 
    . f b f e f e e e e f e f b f . 
    f c b f e e e e e e e e f b b f 
    f c b b f f f f f f f f b b b f 
    f c b b b b b b b b b b b b b f 
    f c c c c c c c c c c c c c c f 
    . f f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . f . . . . . . f . . . . 
        . . . f e f . . . . f d f . . . 
        . . f e 3 f . . . . f 3 d f . . 
        . f e 3 3 f . . . . f 3 3 d f . 
        . f e 3 3 f . f f . f 3 3 d f . 
        f e e e e e f d d f d d d d d f 
        f d e e d d d d d d d d d d d f 
        f d d d d d d d d d d d e e d f 
        f d d d d d d d d d d e e e d f 
        f d f f d d d f f d d e f f e f 
        f d d d d d d d d d d d e e e f 
        f d d d f d d f f d d f d d d f 
        f d d d d f f d d f f d d d d f 
        f d d d d d d d d d d d d d d f 
        . f d d d d d d d d d d d d f . 
        . . f f f f f f f f f f f f . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
})
forever(function () {
    music.jumpUp.play()
    music.jumpDown.play()
})
