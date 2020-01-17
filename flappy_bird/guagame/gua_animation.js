class GuaAnimation {
    constructor(game) {
        this.game = game
        this.animations = {
            idle: [],
            walk: [],
        }
        for (let i = 0; i < 4; i++) {
            var name = `idle${i}`
            var t = game.textureByName(name)
            this.animations['idle'].push(t)
        }
        for (let i = 0; i < 8; i++) {
            var name = `walk${i}`
            var t = game.textureByName(name)
            this.animations['walk'].push(t)
        }
        this.animationName = 'idle'
        this.texture = this.frames()[0]
        this.frameIndex = 0
        this.frameCount = 3
    }
    static new(game) {
        return new this(game)
    }
    frames() {
        return this.animations[this.animationName]
    }
    update() {
        this.frameCount -= 1
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
        }
    }
    draw() {
        this.game.drawImage(this)
    }
    move(x, keyStatus) {
        this.x += x
        var animationName = {
            down: 'walk',
            up: 'idle'
        }
        var name = animationName[keyStatus]
        this.changeAnimation(name)
    }
    changeAnimation(name) {
        this.animationName = name
    }
}