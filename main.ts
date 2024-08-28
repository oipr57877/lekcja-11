player.onChat("start", function () {
    gameplay.setGameMode(
    SURVIVAL,
    mobs.target(NEAREST_PLAYER)
    )
    blocks.fill(
    GLASS,
    pos(-8, 3, -5),
    pos(0, 3, 3),
    FillOperation.Replace
    )
    blocks.fill(
    AIR,
    pos(-4, 3, 0),
    pos(-4, -10, 0),
    FillOperation.Replace
    )
    blocks.place(WATER, pos(-4, 3, 0))
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    GLOWSTONE,
    10
    )
    loops.pause(10000)
    gameplay.timeSet(gameplay.time(NIGHT))
    player.runChatCommand("f1")
})
player.onChat("f2", function () {
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    NETHERITE_SWORD,
    1
    )
    loops.pause(10000)
    for (let index = 0; index < 10; index++) {
        mobs.spawn(mobs.monster(ZOMBIE), randpos(
        pos(-20, -2, -20),
        pos(20, -2, 20)
        ))
    }
    mobs.spawn(mobs.monster(HUSK), randpos(
    pos(-20, -2, -20),
    pos(20, -2, 20)
    ))
})
mobs.onMobKilled(mobs.monster(WITHER_SKELETON), function () {
    mobs.kill(
    mobs.entitiesByType(mobs.monster(SKELETON))
    )
    mobs.kill(
    mobs.entitiesByType(mobs.monster(WITHER_SKELETON))
    )
    loops.pause(10000)
    player.runChatCommand("f2")
})
player.onChat("f1", function () {
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    BOW,
    1
    )
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    ARROW,
    64
    )
    loops.pause(1000)
    for (let index = 0; index < 10; index++) {
        mobs.spawn(mobs.monster(SKELETON), randpos(
        pos(-20, -2, -20),
        pos(20, -2, 20)
        ))
    }
    mobs.spawn(mobs.monster(WITHER_SKELETON), randpos(
    pos(-20, -2, -20),
    pos(20, -2, 20)
    ))
})
player.onChat("f3", function () {
    for (let index = 0; index < 15; index++) {
        mobs.spawn(PRIMED_TNT, randpos(
        pos(-20, 10, -20),
        pos(20, 10, 20)
        ))
    }
})
mobs.onMobKilled(mobs.monster(HUSK), function () {
    mobs.kill(
    mobs.entitiesByType(mobs.monster(ZOMBIE))
    )
    mobs.kill(
    mobs.entitiesByType(mobs.monster(HUSK))
    )
    loops.pause(10000)
    player.runChatCommand("f3")
})
