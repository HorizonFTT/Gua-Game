class GuaLabel {
    constructor(game, text) {
        this.game = game
        this.text = text
    }
    static new(game, text) {
        return new this(game, text)
    }
    draw() {
        this.game.context.fillText(this.text, 100, 190)
    }
    update() {

    }
}

class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        // var label = GuaLabel.new(game, 'hello from gua')
        // this.addElement(label)

        var bg = GuaImage.new(game, 'bg')
        this.addElement(bg)

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