enum RadioMessage {
    message1 = 49434,
    Ball$ = 60380
}
namespace SpriteKind {
    export const Weapon = SpriteKind.create()
    export const Button = SpriteKind.create()
    export const Npc = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    projectile = sprites.createProjectileFromSide(img`
        . . . f f f f f f f f f . . . . 
        . . f f d d d d d d d f f . . . 
        . f f d d d d d d d d d f f . . 
        . f d d d d d d d d d d d f . . 
        . f d f d d d d d d 2 d d f . . 
        . f d d f d d d d 2 d d d f . . 
        . f d d d f d d 2 d d d d f . . 
        . f d d d d f 2 d d d d d f . . 
        . f 6 d d d f 2 d d d d 6 f . . 
        . f 2 d d f d d 2 d d d f f . . 
        . f 6 d f d d d d 2 d d 6 f . . 
        . f d d d d d d d d d d d f . . 
        . f d d f f f d f f f d d f . . 
        . f d d f . f d f . f d d f . . 
        . f f f f . f f f . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 50)
    textSprite = textsprite.create("Objective:hit this lever")
    info.startCountdown(50)
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f . . . . . . . . . 
        . . . . f 2 f . . . . . . . . . 
        . . . . f 2 f . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . f d d d d b f . . . . . . . 
        . . f d d d d b f . . . . . . . 
        . . f d d b b b f . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Button)
    scaling.scaleByPixels(mySprite2, 10, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`myAnim0`,
    300,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . 3 3 3 3 3 . . 
        . . . f f f f f 3 3 f f . 3 3 . 
        . . f f d d d d 3 d d f f . 3 . 
        . . f d d d d d 3 d d b f . 3 . 
        . . f d f d d d 3 3 3 b a a a a 
        . . f d f d d d d d d b a 8 8 8 
        . . f d f d d d d d d b a a a a 
        . . f d f d d d d d d b f a 8 a 
        . . f d f d d d d d d b f a 8 a 
        . . f d d d d d d d b b f a 8 a 
        . . f f d d d d d d b f f a 8 a 
        . . . f f f f f f f f f . a a a 
        . . . . . f b b b f . . . . . . 
        . . . . . f d d d f . . . . . . 
        . . . . . f d d d f . . . . . . 
        . . . . . f d d d f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f 3 3 3 3 3 . 
        . . f f d d d d d 3 3 3 f . 3 3 
        . . f d d d d d d 3 3 b f . . 3 
        . . f d f d d d a a a a a . 3 3 
        . . f d f d d d a 8 8 8 a . 3 3 
        . . f d f d d d a a a a a . . . 
        . . f d f d d d d a 8 a f . . . 
        . . f d f d d d d a 8 a f . . . 
        . . f d d d d d d a 8 a f . . . 
        . . f f d d d d d a a a f . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . f b b b f . . . . . . 
        . . . . . f d d d f . . . . . . 
        . . . . . f d d d f . . . . . . 
        . . . . . f d d d f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . 3 3 3 3 3 d d d d f f . . . 
        . 3 3 3 d 3 3 3 d d d b f . . . 
        3 3 3 d f d 3 3 3 d d b f . . . 
        3 3 f d f d d 3 3 d d b f . . . 
        . . f d f d a a a a a b f . . . 
        . . f d f d a 8 8 8 a b f . . . 
        . . f d f d a a a a a b f . . . 
        . . f d d d d a 8 a b b f . . . 
        . . f f d d d a 8 a b f f . . . 
        . . . f f f f a 8 a f f . . . . 
        . . . . . f b a a a . . . . . . 
        . . . . . f d d d f . . . . . . 
        . . . . . f d d d f . . . . . . 
        . . . . . f d d d f . . . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Npc, SpriteKind.Player, function (sprite, otherSprite) {
    tiles.setCurrentTilemap(tilemap`level12`)
    for (let index = 0; index < 10; index++) {
        projectile2 = sprites.createProjectileFromSide(img`
            . . . f f f f f f f f f . . . . 
            . . f f d d d d d d d f f . . . 
            . f f d d d d d d d d d f f . . 
            . f d d d d d d d d d d d f . . 
            . f d f d d d d d d 2 d d f . . 
            . f d d f d d d d 2 d d d f . . 
            . f d d d f d d 2 d d d d f . . 
            . f d d d d f 2 d d d d d f . . 
            . f 6 d d d f 2 d d d d 6 f . . 
            . f 2 d d f d d 2 d d d f f . . 
            . f 6 d f d d d d 2 d d 6 f . . 
            . f d d d d d d d d d d d f . . 
            . f d d f f f d f f f d d f . . 
            . f d d f . f d f . f d d f . . 
            . f f f f . f f f . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, 50, 50)
    }
    story.spriteSayText(mySprite3, "Get lots of points")
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        projectile.startEffect(effects.disintegrate)
        info.changeScoreBy(1)
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f d d d d d d d f f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d f d d d f d b f . . . 
        . . f d d f d d d f d b f . . . 
        . . f d d f d d d f d b f . . . 
        . . f d d f d d d f d b f . . . 
        . . f d d f d d d f d b f . . . 
        . . f d d d d d d d b b f . . . 
        . . f f d d d d d d b f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . f b f b f . . . . . . 
        . . . . . f d f d f . . . . . . 
        . . . . . f d f d f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f f . . . 
        . . . f f d d d d d d d f f . . 
        . . . f b d d d d d d d d f . . 
        . . . f b d f d d d f d d f . . 
        . . . f b d f d d d f d d f . . 
        . . . f b d f d d d f d d f . . 
        . . . f b d f d d d f d d f . . 
        . . . f b d f d d d f d d f . . 
        . . . f b b d d d d d d d f . . 
        . . . f f b d d d d d d f f . . 
        . . . . f f f f f f f f f . . . 
        . . . . . . f b f b f . . . . . 
        . . . . . . f d f d f . . . . . 
        `],
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f d d d d d d d f . . . . 
        . . f d d d d d d d d b f . . . 
        . . f d f d d d d d d b f . . . 
        . . f d f d d d d d d b f . . . 
        . . f d f d d d d d d b f . . . 
        . . f d f d d d d d d b f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d d d d d d b b f . . . 
        . . . f d d d d d d b f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f b f b f . . . . . . 
        . . . . f d f . f d f . . . . . 
        . . . f d f . . . f d f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f d d d d d d d f . . . . 
        . . f d d d d d d d d b f . . . 
        . . f d f d d d d d d b f . . . 
        . . f d f d d d d d d b f . . . 
        . . f d f d d d d d d b f . . . 
        . . f d f d d d d d d b f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d d d d d d b b f . . . 
        . . . f d d d d d d b f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f b b b f . . . . . . 
        . . . . . f d d d f . . . . . . 
        . . . . . f d d d f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f d d d d d d d f . . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d f d d f d d d b f . . . 
        . . f d f f f f d d d b f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d d d d d d b b f . . . 
        . . . f d d d d d d b f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f b f b f . . . . . . 
        . . . . f d f . f d f . . . . . 
        . . . f d f . . . f d f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f d d d d d d d f . . . . 
        . . f d d d d d d d d b f . . . 
        . . f d f d d d d d d b f . . . 
        . . f d f d d d d d d b f . . . 
        . . f d f d d d d d d b f . . . 
        . . f d f d d d d d d b f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d d d d d d b b f . . . 
        . . . f d d d d d d b f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f b b b f . . . . . . 
        . . . . . f d d d f . . . . . . 
        . . . . . f d d d f . . . . . . 
        `],
    300,
    true
    )
})
info.onCountdownEnd(function () {
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f . . . . 
        . f f 9 9 9 9 9 9 9 f f . . . . 
        . f 9 f f f 9 f f f 9 f . . . . 
        . f 9 f 1 f 9 f 1 f 9 f . . . . 
        . f 9 f f f 9 f f f 9 f . . . . 
        . f 9 9 9 9 9 9 9 9 9 f . . . . 
        . f f 9 f 9 f 9 f 9 f f . . . . 
        . f 9 f f f f f f f 9 f . . . . 
        . f 9 9 f 9 f 9 f 9 9 f f . . . 
        . f f 9 9 9 9 9 9 9 9 9 f . . . 
        . f f f f f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Npc)
    scroller.setCameraScrollingMultipliers(1, 1)
    tiles.setCurrentTilemap(tilemap`level10`)
    sprites.destroy(mySprite2)
    timer.after(20000, function () {
        game.gameOver(true)
    })
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f d d d d d d d f . . . 
        . . . f b d d d d d d d d f . . 
        . . . f b d d d d d d f d f . . 
        . . . f b d d d d d d f d f . . 
        . . . f b d d d d d d f d f . . 
        . . . f b d d d d d d f d f . . 
        . . . f b d d d d d d d d f . . 
        . . . f b b d d d d d d d f . . 
        . . . . f b d d d d d d f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . f b f b f . . . . . 
        . . . . . f d f . f d f . . . . 
        . . . . f d f . . . f d f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f d d d d d d d f . . . 
        . . . f b d d d d d d d d f . . 
        . . . f b d d d d d d f d f . . 
        . . . f b d d d d d d f d f . . 
        . . . f b d d d d d d f d f . . 
        . . . f b d d d d d d f d f . . 
        . . . f b d d d d d d d d f . . 
        . . . f b b d d d d d d d f . . 
        . . . . f b d d d d d d f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . f b b b f . . . . . 
        . . . . . . f d d d f . . . . . 
        . . . . . . f d d d f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f d d d d d d d f . . . 
        . . . f b d d d d d d d d f . . 
        . . . f b d d d d d d d d f . . 
        . . . f b d d d f d d f d f . . 
        . . . f b d d d f f f f d f . . 
        . . . f b d d d d d d d d f . . 
        . . . f b d d d d d d d d f . . 
        . . . f b b d d d d d d d f . . 
        . . . . f b d d d d d d f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . f b f b f . . . . . 
        . . . . . f d f . f d f . . . . 
        . . . . f d f . . . f d f . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f d d d d d d d f . . . 
        . . . f b d d d d d d d d f . . 
        . . . f b d d d d d d f d f . . 
        . . . f b d d d d d d f d f . . 
        . . . f b d d d d d d f d f . . 
        . . . f b d d d d d d f d f . . 
        . . . f b d d d d d d d d f . . 
        . . . f b b d d d d d d d f . . 
        . . . . f b d d d d d d f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . f b b b f . . . . . 
        . . . . . . f d d d f . . . . . 
        . . . . . . f d d d f . . . . . 
        `],
    300,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f d d d d d d d f f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d f d d d f d b f . . . 
        . . f d d f d d d f d b f . . . 
        . . f d d f d d d f d b f . . . 
        . . f d d f d d d f d b f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d d d d d d b b f . . . 
        . . f f d d d d d d b f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . f b f b f . . . . . . 
        . . . . . f f f d f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f d d d d d d d f f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d f d d d f d b f . . . 
        . . f d d f d d d f d b f . . . 
        . . f d d f d d d f d b f . . . 
        . . f d d f d d d f d b f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d d d d d d b b f . . . 
        . . f f d d d d d d b f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . f b f b f . . . . . . 
        . . . . . f d f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f d d d d d d d f f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d d d d d d d b f . . . 
        . . f f d d f d f d d f f . . . 
        . . f d f f d d d f f b f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d d d d d d b b f . . . 
        . . f f d d d d d d b f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . f b f b f . . . . . . 
        . . . . . f f f d f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f d d d d d d d f f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d f d d d f d b f . . . 
        . . f d d f d d d f d b f . . . 
        . . f d d f d d d f d b f . . . 
        . . f d d f d d d f d b f . . . 
        . . f d d d d d d d d b f . . . 
        . . f d d d d d d d b b f . . . 
        . . f f d d d d d d b f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . f b f b f . . . . . . 
        . . . . . f d f f f . . . . . . 
        `],
    300,
    true
    )
})
controller.combos.attachCombo("Up down left Bb aa ba ab", function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    sprites.destroy(mySprite)
})
sprites.onOverlap(SpriteKind.Button, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        animation.runImageAnimation(
        mySprite2,
        [img`
            . . . . . f f f . . . . . . . . 
            . . . . . f 2 f . . . . . . . . 
            . . . . . f 2 f . . . . . . . . 
            . . . f f f f f f f . . . . . . 
            . . f d d d d d d d f . . . . . 
            . . f d d d d d d d f . . . . . 
            . . f d d d d d d d f . . . . . 
            . . f d d d d d d d f . . . . . 
            . . f d d d d d d d f . . . . . 
            . . f f f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f . . . . . . . . 
            . . . . . f 2 f . . . . . . . . 
            . . . f f f f f f f . . . . . . 
            . . f d d d d d d d f . . . . . 
            . . f d d d d d d d f . . . . . 
            . . f d d d d d d d f . . . . . 
            . . f d d d d d d d f . . . . . 
            . . f d d d d d d d f . . . . . 
            . . f f f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        false
        )
        projectile2 = sprites.createProjectileFromSide(img`
            . . . f f f f f f f f f . . . . 
            . . f f d d d d d d d f f . . . 
            . f f d d d d d d d d d f f . . 
            . f d d d d d d d d d d d f . . 
            . f d f d d d d d d 2 d d f . . 
            . f d d f d d d d 2 d d d f . . 
            . f d d d f d d 2 d d d d f . . 
            . f d d d d f 2 d d d d d f . . 
            . f 6 d d d f 2 d d d d 6 f . . 
            . f 2 d d f d d 2 d d d f f . . 
            . f 6 d f d d d d 2 d d 6 f . . 
            . f d d d d d d d d d d d f . . 
            . f d d f f f d f f f d d f . . 
            . f d d f . f d f . f d d f . . 
            . f f f f . f f f . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, 50, 50)
    }
})
let mySprite3: Sprite = null
let projectile2: Sprite = null
let mySprite2: Sprite = null
let textSprite: TextSprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f . . . . 
    . . f f d d d d d d d f f . . . 
    . . f d d f d d f d d b f . . . 
    . . f d d f d d f d d b f . . . 
    . . f d d f d d f d d b f . . . 
    . . f d d f d d f d d b f . . . 
    . . f d d f d d f d d b f . . . 
    . . f d d d d d d d d b f . . . 
    . . f d d d d d d d b b f . . . 
    . . f f d d d d d d b f f . . . 
    . . . f f f f f f f f f . . . . 
    . . . . f b b f b b f . . . . . 
    . . . . f d d f d d f . . . . . 
    `, SpriteKind.Player)
music.play(music.stringPlayable("C5 B A G F E D G ", 120), music.PlaybackMode.LoopingInBackground)
tiles.setCurrentTilemap(tilemap`level2`)
controller.moveSprite(mySprite)
info.setLife(3)
scene.cameraFollowSprite(mySprite)
info.startCountdown(301)
game.setGameOverPlayable(true, music.melodyPlayable(music.powerUp), false)
game.setGameOverMessage(false, "GAME OVER!")
let statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
statusbar.attachToSprite(mySprite)
info.setScore(0)
