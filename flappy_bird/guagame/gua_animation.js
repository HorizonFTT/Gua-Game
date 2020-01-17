class GuaAnimation {
    constructor(game) {
        this.game = game
        this.animations = {
            idle: [],
        }
        for (let i = 0; i < 3; i++) {
            var name = `b${i}`
            var t = game.textureByName(name)
            this.animations['idle'].push(t)
        }
        this.animationName = 'idle'
        this.texture = this.frames()[0]
        this.w = this.texture.w
        this.h = this.texture.h
        this.frameIndex = 0
        this.frameCount = 3

        this.flipX = false

        this.gy = 10
        this.vy = 0
    }
    static new(game) {
        return new this(game)
    }
    frames() {
        return this.animations[this.animationName]
    }
    jump() {
        this.vy = -10
    }
    update() {
        this.y += this.vy
        this.vy += this.gy * 0.1
        var h = 515
        if (this.y > h) {
            this.y = h
        }

        this.frameCount -= 1
        if (this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
        }
    }
    draw() {
        var context = this.game.context
        if (this.flipX) {
            context.save()

            var x = this.x + this.w / 2
            context.translate(x, 0)
            context.scale(-1, 1)
            context.translate(-x, 0)
            context.drawImage(this.texture.image, this.x, this.y)

            context.restore()
        } else {
            context.drawImage(this.texture.image, this.x, this.y)
        }
    }
    move(x, keyStatus) {
        this.flipX = (x < 0)
        this.x += x
        // var animationName = {
        //     down: 'walk',
        //     up: 'idle'
        // }
        // var name = animationName[keyStatus]
        // this.changeAnimation(name)
    }
    changeAnimation(name) {
        this.animationName = name
    }
}