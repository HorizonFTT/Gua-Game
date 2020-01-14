class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    addElement(element) {
        this.elements.push(element)
    }
    draw() {
        for (let i = 0; i < this.elements.length; i++) {
            const e = this.elements[i];
            this.game.drawImage(e)
        }
    }
    update() {

    }
}
