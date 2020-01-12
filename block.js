var Block = function (position) {
    var image = imageFromPath('block.png')
    var o = {
        image: image,
        x: position[0],
        y: position[1],
        w: 50,
        h: 20,
        alive: true,
        life:position[2] || 1
    }
    o.kill = function () {
        --o.life
        if(o.life==0){
            o.alive = false
        }
    }
    o.collide = function (ball) {
        return o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o))
    }
    return o
}