class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    addElement(img) {
        img.scene = this
        this.elements.push(img)
    }
    draw() {
        for (let i = 0; i < this.elements.length; i++) {
            const e = this.elements[i];
            // this.game.drawImage(e)
            e.draw()
        }
    }
    update() {
        for (let i = 0; i < this.elements.length; i++) {
            const e = this.elements[i];
            e.update()
        }
    }
}
