controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    if (TRex.isHittingTile(CollisionDirection.Bottom)) {
        TRex.vy = -220
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    game.over(false)
})
sprites.onDestroyed(SpriteKind.Projectile, function on_on_destroyed(sprite2: Sprite) {
    info.changeScoreBy(1)
})
let exit2 = 0
let exit3 = 0
let projectile : Sprite = null
let TRex : Sprite = null
scene.setBackgroundColor(13)
TRex = sprites.create(assets.image`
    tRex
`, SpriteKind.Player)
TRex.setPosition(20, 70)
TRex.ay = 400
tiles.setTilemap(tilemap`
    level1
`)
game.onUpdateInterval(1500, function on_update_interval() {
    
    projectile = sprites.createProjectileFromSide(assets.image`
        cactus
    `, randint(-200, -120), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
    projectile.setFlag(SpriteFlag.AutoDestroy, true)
    exit3 += 1
    if (exit3 > 4) {
        exit2 = randint(1, 2)
        if (exit2 == 2) {
            pause(100)
            projectile = sprites.createProjectileFromSide(assets.image`
                fly
            `, randint(-120, -100), 0)
            tiles.placeOnTile(projectile, tiles.getTileLocation(9, 3))
        }
        
    }
    
})
