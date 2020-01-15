const config = {
    player_speed: 10,
    cloud_speed: 1,
    enemy_speed: randomBetween(2, 5),
    bullet_speed: 5,
    cooldown: 5,
}

class Player extends GuaImage {
    constructor(game) {
        super(game, 'player')
        this.setup()
    }
    setup() {
        this.cooldown = 0
    }
    update() {
        this.speed = config.player_speed
        if (this.cooldown > 0) {
            this.cooldown -= 1
        }
    }
    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
    fire() {
        if (this.cooldown != 0) {
            return
        }
        this.cooldown = config.cooldown
        var x = this.x + this.w / 2
        var y = this.y
        var b = Bullet.new(this.game)
        b.x = x
        b.y = y
        this.scene.addElement(b)
    }
}

class Bullet extends GuaImage {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }
    setup() {
    }
    update() {
        this.speed = config.bullet_speed
        this.y -= this.speed
    }
}
class Enemy extends GuaImage {
    constructor(game) {
        var type = randomBetween(0, 4)
        var name = 'enemy' + type
        super(game, name)
        this.setup()
    }
    setup() {
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 200)
    }
    update() {
        this.speed = config.enemy_speed
        this.y += this.speed
        if (this.y > 600) {
            this.setup()
        }
    }
}

class Cloud extends GuaImage {
    constructor(game) {
        super(game, 'cloud')
        this.setup()
    }
    setup() {
        this.x = randomBetween(0, 350)
        this.y = -randomBetween(0, 200)
    }
    update() {
        this.speed = config.cloud_speed
        this.y += this.speed
        if (this.y > 600 || this.y < 0) {
            this.setup()
        }
    }
}