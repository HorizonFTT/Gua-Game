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
        this.rotation = 0

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
        this.rotation = -45
    }
    update() {
        this.y += this.vy
        this.vy += this.gy * 0.1
        var h = 515
        if (this.y > h) {
            this.y = h
        }

        if (this.rotation < 45) {
            this.rotation += 5
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
        context.save()

        var w2 = this.w / 2
        var h2 = this.h / 2
        context.translate(this.x + w2, this.y + h2)
        if (this.flipX) {
            context.scale(-1, 1)
        }
        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-w2, -h2)

        context.drawImage(this.texture.image, 0, 0)

        context.restore()
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