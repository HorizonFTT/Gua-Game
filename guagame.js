var GuaGame = function (fps) {
    var g = {
        actions: {},
        keydowns: {},
    }
    var canvas = document.querySelector('#paddle')
    var context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context

    g.drawImage = function (guaImage) {
        g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
    }

    window.addEventListener('keydown', function (event) {
        g.keydowns[event.key] = true
    })

    window.addEventListener('keyup', function (event) {
        g.keydowns[event.key] = false
    })

    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }

    setInterval(function () {
        var actions = Object.keys(g.actions)
        for (let i = 0; i < actions.length; i++) {
            const key = actions[i]
            if (g.keydowns[key]) {
                g.actions[key]()
            }
        }
        g.update()
        g.context.clearRect(0, 0, canvas.width, canvas.height)
        g.draw()
    }, 1000 / fps)
    return g
}