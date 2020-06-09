namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.setTilemap(tiles.createTilemap(
            hex`1000100001020202020202020202020202020203080000000000000000000000000000040800020202020300000000000102000408000000000004000000000008000004080000000000040000000000080000040800000000000400000000000800000408000000000004000000000008000004080000000000040000000000080000040800000000000400000000000800000408000000000004000000000008000004080000000000040000000000080000040802020202020300000a06060b00000408000000000004000004000f08000004080000000000040000040000080000040800000000000400000d02020c00090407060606060604060606060606060605`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 . . . . . 2 2 . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 . . 2 2 2 2 . . 2 2 2 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 . . . . . 2 . . 2 2 2 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.stairEast,sprites.dungeon.stairLadder],
            TileScale.Sixteen
        ))
})
let fred = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . 4 4 f 2 2 2 2 2 2 f 4 4 . . 
. . 4 4 f 2 2 2 2 2 2 f 4 4 . . 
. . 4 4 f 2 2 2 2 2 2 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
controller.moveSprite(fred)
tiles.setTilemap(tiles.createTilemap(
            hex`10001000090a0a0a0a0a0a0a0a0a0a0a0a0a0a0b0819000000000000000000000000000c080000000e000000000000000000000c080e0e0e0e000000000e00111200000c0800000000000000000e00031400000c0800000e0e001112001000000000000c0800000e00000314000e00000000000c0800000e00000000000e00000000000c0800000e00000000000e00000000000c080e0e0e00000e0e000e0e0e100e0e0c080000000000000e000000000000000c080000000000000e000000000000000c0800000e08100808000e0e100e00000c0800000000001708000e00000000000c0800000000000008000e00000000000c050e0e0e0e0e0e0e000e0e0e0e0e0e0d`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 . . . . . . . . . . 2 
2 2 2 2 2 . . . . 2 . 2 2 . . 2 
2 . . . . . . . . 2 . 2 2 . . 2 
2 . . 2 2 . 2 2 . 2 . . . . . 2 
2 . . 2 . . 2 2 . 2 . . . . . 2 
2 . . 2 . . . . . 2 . . . . . 2 
2 . . 2 . . . . . 2 . . . . . 2 
2 2 2 2 . . 2 2 . 2 2 2 2 2 2 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . 2 2 2 2 2 . 2 2 2 2 . . 2 
2 . . . . . . 2 . 2 . . . . . 2 
2 . . . . . . 2 . 2 . . . . . 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.floorLightMoss,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.doorClosedNorth,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.stairNorth,sprites.dungeon.stairLadder,sprites.dungeon.stairLarge,sprites.dungeon.chestClosed,sprites.dungeon.stairSouth],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(fred, sprites.dungeon.stairSouth)
scene.cameraFollowSprite(fred)
