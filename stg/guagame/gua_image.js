class GuaImage {
    constructor(game, name) {
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.w
        this.h = this.texture.h
        this.game = game
    }
    static new(game, name) {
        var i = new this(game, name)
        return i
    }
    draw() {

    }
    update() {

    }
}