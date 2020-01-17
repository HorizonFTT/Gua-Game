class GuaPartical extends GuaImage {
    constructor(game) {
        super(game, 'fire')
        this.setup()
    }
    setup() {
        this.life = 30
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
        var factor = 0.02
        this.vx += factor * this.vx
        this.vy += factor * this.vy
        this.life -= 1
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
        this.duration
        this.x = 150
        this.y = 200
        this.particals = []
    }
    draw() {
        for (var p of this.particals) {
            p.draw()
        }
    }
    update() {
        this.duration -= 1
        if (this.duration == 0) {
            // TODO delete
            return
        }
        var p = GuaPartical.new(this.game)
        var s = 2
        var vx = randomBetween(-s, s)
        var vy = randomBetween(-s, s)
        p.init(this.x, this.y, vx, vy)
        this.particals.push(p)
        for (var p of this.particals) {
            p.update()
        }
        this.particals = this.particals.filter(p => p.life > 0)
    }
}