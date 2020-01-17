// class GuaLabel {
//     constructor(game, text) {
//         this.game = game
//         this.text = text
//     }
//     static new(game, text) {
//         return new this(game, text)
//     }
//     draw() {
//         this.game.context.fillText(this.text, 100, 190)
//     }
//     update() {

//     }
// }

class Pipes {
    constructor(game) {
        this.game = game
        this.pipes = []
        this.mouthSpace = 150
        this.pipeSpace = 200
        this.columsOfPipe = 3
        for (let i = 0; i < this.columsOfPipe; i++) {
            var p1 = GuaImage.new(game, 'pipe')
            p1.flipY = true
            p1.x = 500 + i * this.pipeSpace
            var p2 = GuaImage.new(game, 'pipe')
            p2.x = p1.x
            this.resetPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }
    static new(game) {
        return new this(game)
    }
    resetPipesPosition(p1, p2) {
        p1.y = randomBetween(-200, 0)
        p2.y = p1.y + p1.h + this.mouthSpace
    }
    debug() {
        this.pipeSpace = config.pipe_space.value
        this.mouthSpace = config.mouth_space.value
    }
    update() {
        this.debug()
        for (var i = 0; i < this.pipes.length; i += 2) {
            var p1 = this.pipes[i]
            var p2 = this.pipes[i + 1]
            p1.x -= 5
            p2.x -= 5
            if (p1.x < -100) {
                p1.x += this.pipeSpace * this.columsOfPipe
            }
            if (p2.x < -100) {
                p2.x += this.pipeSpace * this.columsOfPipe
                this.resetPipesPosition(p1, p2)
            }
        }
    }
    draw() {
        var context = this.game.context
        for (var p of this.pipes) {
            context.save()

            var w2 = p.w / 2
            var h2 = p.h / 2
            context.translate(p.x + w2, p.y + h2)
            var scaleX = p.flipX ? -1 : 1
            var scaleY = p.flipY ? -1 : 1
            context.scale(scaleX, scaleY)
            context.rotate(p.rotation * Math.PI / 180)
            context.translate(-w2, -h2)

            context.drawImage(p.texture.image, 0, 0)

            context.restore()
        }

    }
}

class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        // var label = GuaLabel.new(game, 'hello from gua')
        // this.addElement(label)

        var bg = GuaImage.new(game, 'bg')
        this.addElement(bg)

        this.pipe = Pipes.new(game)
        this.addElement(this.pipe)

        this.grounds = []
        for (let i = 0; i < 2; i++) {
            var g = GuaImage.new(game, 'ground')
            g.x = i * 336
            g.y = 550
            this.addElement(g)
            this.grounds.push(g)
        }
        this.skipCount = 4

        var b = GuaAnimation.new(game)
        b.x = 100
        b.y = 300
        this.b = b
        this.addElement(b)

        this.setupInputs()
        // var ps = GuaParticalSystem.new(game)
        // this.addElement(ps)
        // game.registerAction('k', function () {
        //     var s = Scene(game)
        //     game.replaceScene(s)
        // })
    }
    update() {
        super.update()

        this.skipCount -= 1
        var offset = -5
        if (this.skipCount == 0) {
            this.skipCount = 4
            offset = 15
        }
        for (let i = 0; i < 2; i++) {
            var g = this.grounds[i]
            g.x += offset
        }
    }
    setupInputs() {
        var self = this
        var b = this.b
        self.game.registerAction('a', function (keyStatus) {
            b.move(-2, keyStatus)
        })
        self.game.registerAction('d', function (keyStatus) {
            b.move(2, keyStatus)
        })
        self.game.registerAction('j', function (keyStatus) {
            b.jump()
        })
    }
    // draw() {
    //     // draw labels
    //     super.draw()
    //     // this.game.context.fillText('按 k 开始游戏', 100, 190)
    // }
}
