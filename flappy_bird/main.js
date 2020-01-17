var loadLevel = function(game, n) {
    n = n - 1
    var level = levels[n]
    var blocks = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

var enableDebugMode = function(game, enable) {
    if(!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function() {
    var images = {
        bullet: 'img/bullet.png',
        sky: 'img/sky.png',
        cloud: 'img/cloud.png',
        player: 'img/player.png',
        enemy0: 'img/enemy0.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        enemy4: 'img/enemy4.png',
        fire: 'img/fire.png',

        idle0: 'img/player-idle/0.png',
        idle1: 'img/player-idle/1.png',
        idle2: 'img/player-idle/2.png',
        idle3: 'img/player-idle/3.png',
        walk0: 'img/player-walk/0.png',
        walk1: 'img/player-walk/1.png',
        walk2: 'img/player-walk/2.png',
        walk3: 'img/player-walk/3.png',
        walk4: 'img/player-walk/4.png',
        walk5: 'img/player-walk/5.png',
        walk6: 'img/player-walk/6.png',
        walk7: 'img/player-walk/7.png',
    }
    var game = GuaGame.instance(30, images, function(g){
        // var s = Scene.new(g)
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
