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

class GuaPartical extends GuaImage {
    constructor(game) {
        super(game, 'fire')
        this.setup()
    }
    setup() {

    }
    init(x, y, vx, vy) {
        this.x = x
        this.vx = vx
        this.y = y
        this.vy = vy
    }
    update() {
        this.x += this.vx
        this.y += this.vy
    }
}

class GuaParticalSystem {
    constructor(game) {
        this.game = game
        this.setup()
    }
    static new(game, text) {
        return new this(game, text)
    }
    setup() {
        this.x = 150
        this.y = 200
        this.numberOfParticals = 100
        this.particals = []
    }
    draw() {
        for (var p of this.particals) {
            p.draw()
        }
    }
    update() {
        if (this.particals.length < this.numberOfParticals) {
            var p = GuaPartical.new(this.game)
            var vx = randomBetween(-10, 10)
            var vy = randomBetween(-10, 10)
            p.init(this.x, this.y, vx, vy)
            this.particals.push(p)
        }
        for (var p of this.particals) {
            p.update()
        }
    }
}

class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        var label = GuaLabel.new(game, 'hello')
        this.addElement(label)

        var ps = GuaParticalSystem.new(game)
        this.addElement(ps)
        // game.registerAction('k', function () {
        //     var s = Scene(game)
        //     game.replaceScene(s)
        // })
    }
    // draw() {
    //     // draw labels
    //     super.draw()
    //     // this.game.context.fillText('按 k 开始游戏', 100, 190)
    // }
}
