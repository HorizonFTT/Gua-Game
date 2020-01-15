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
