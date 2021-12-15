let sign = ['X', 'O'];

let random_sign = Math.floor(Math.random() * sign.length)

let fields = document.querySelectorAll('.field')
fields.forEach((elem) => {
    elem.addEventListener('click', function () {
        elem.innerHTML = sign[random_sign]
    })
})

function game_ligic(){
    if (fields[0].innerHTML == 'X' || 'O' && fields[1].innerHTML == 'X' || 'O') {
        console.log('вавав')
    }
}
game_ligic()
 