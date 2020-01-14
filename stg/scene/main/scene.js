class Scene extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInputs()
    }
    setup() {
        var g = this.game
        this.numberOFEnemy = 10
        this.bg = GuaImage.new(g, 'sky')
        this.cloud = Cloud.new(g)
        this.player = Player.new(g)
        this.player.x = 100
        this.player.y = 150

        this.addElement(this.bg)
        this.addElement(this.cloud)
        this.addElement(this.player)

        this.addEnemys()
    }
    addEnemys() {
        var es = []
        for (let i = 0; i < this.numberOFEnemy; i++) {
            var e = Enemy.new(this.game)
            es.push(e)
            this.addElement(e)
        }
        this.enemys = es
    }
    setupInputs() {
        var g = this.game
        var s = this
        g.registerAction('a', function () {
            s.player.moveLeft()
        })
        g.registerAction('d', function () {
            s.player.moveRight()
        })
        g.registerAction('w', function () {
            s.player.moveUp()
        })
        g.registerAction('s', function () {
            s.player.moveDown()
        })
        g.registerAction('j', function () {
            s.player.fire()
        })
    }
    update() {
        super.update()
        this.cloud.y += 1
    }
}


// var Scene = function (game) {
//     var s = {
//         game: game,
//     }
//     // 初始化
//     var paddle = Paddle(game)
//     var ball = Ball(game)

//     var score = 0
//     var level = 1

//     var blocks = loadLevel(game, level)

//     game.registerAction('a', function () {
//         paddle.moveLeft()
//     })
//     game.registerAction('d', function () {
//         paddle.moveRight()
//     })
//     game.registerAction('f', function () {
//         ball.fire()
//     })

//     var levels = ['1', '2', '3']
//     for (let i = 0; i < levels.length; i++) {
//         const element = levels[i];
//         game.registerAction(element, function () {
//             blocks = loadLevel(game, Number(element))
//         })
//     }


//     s.draw = function () {
//         // draw 背景
//         game.context.fillStyle = "#554"
//         game.context.fillRect(0, 0, 400, 300)
//         // draw
//         game.drawImage(paddle)
//         game.drawImage(ball)
//         // draw blocks
//         for (var i = 0; i < blocks.length; i++) {
//             var block = blocks[i]
//             if (block.alive) {
//                 game.drawImage(block)
//             }
//         }
//         // draw labels
//         game.context.fillText('分数: ' + score, 10, 290)
//     }
//     s.update = function () {
//         if (window.paused) {
//             return
//         }

//         ball.move()
//         // 判断游戏结束
//         if (ball.y > paddle.y) {
//             // 跳转到 游戏结束 的场景
//             var end = SceneEnd.new(game)
//             game.replaceScene(end)
//         }
//         // 判断相撞
//         if (paddle.collide(ball)) {
//             // 这里应该调用一个 ball.反弹() 来实现
//             ball.反弹()
//         }
//         // 判断 ball 和 blocks 相撞
//         for (var i = 0; i < blocks.length; i++) {
//             var block = blocks[i]
//             if (block.collide(ball)) {
//                 // log('block 相撞')
//                 block.kill()
//                 ball.反弹()
//                 // 更新分数
//                 score += 100
//             }
//         }
//     }

//     // mouse event
//     var enableDrag = false
//     game.canvas.addEventListener('mousedown', function (event) {
//         var x = event.offsetX
//         var y = event.offsetY
//         log(x, y, event)
//         // 检查是否点中了 ball
//         if (ball.hasPoint(x, y)) {
//             // 设置拖拽状态
//             enableDrag = true
//         }
//     })
//     game.canvas.addEventListener('mousemove', function (event) {
//         var x = event.offsetX
//         var y = event.offsetY
//         // log(x, y, 'move')
//         if (enableDrag) {
//             log(x, y, 'drag')
//             ball.x = x
//             ball.y = y
//         }
//     })
//     game.canvas.addEventListener('mouseup', function (event) {
//         var x = event.offsetX
//         var y = event.offsetY
//         log(x, y, 'up')
//         enableDrag = false
//     })

//     return s
// }
