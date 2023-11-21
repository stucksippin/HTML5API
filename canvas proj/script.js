var canvas = document.getElementById('app')
ctx = canvas.getContext('2d'),
    options = {
        opacity: 0.05,
        count: 80,
        fps: 60,
        color: 'hsl(hue,100%, 50%)',
        hue: 0, // тон 
        divisionSpeed: 1000
    };

canvas.width = window.innerWidth % 10 ? (Math.floor(window.innerWidth / 10) * 10) : window.innerWidth;
canvas.height = window.innerHeight % 10 ? (Math.floor(window.innerHeight / 10) * 10) : window.innerHeight;

var width = canvas.width,
    height = canvas.height;

function Init() {
    window.requestAnimationFrame(Init);

    Step();
}

function Step() {

    for (var i = 0; i < options.count; i++) {
        if (options.hue == 360) options.hue = 0;
        else options.hue = options.hue + (1 / options.divisionSpeed);

        var fillColor = options.color.replace("hue", options.hue);

        ctx.fillStyle = fillColor;
        ctx.fillRect(Math.random() * width, Math.random() * height, 10, 10);
    }

    ctx.fillStyle = "rgba(255,255,255," + options.opacity + ")";
    ctx.fillRect(0, 0, width, height);
}


Init();

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth % 10 ? (Math.floor(window.innerWidth / 10) * 10) : window.innerWidth;
    canvas.height = window.innerHeight % 10 ? (Math.floor(window.innerHeight / 10) * 10) : window.innerHeight;

    width = canvas.width,
        height = canvas.height;
})

document.addEventListener('DOMContentLoaded', () => {

    const followCursor = () => { // объявляем функцию followCursor
        const el = document.querySelector('.follow-cursor') // ищем элемент, который будет следовать за курсором

        window.addEventListener('mousemove', e => { // при движении курсора
            const target = e.target // определяем, где находится курсор
            if (!target) return

            if (target.closest('a')) { // если курсор наведён на ссылку
                el.classList.add('follow-cursor_active') // элементу добавляем активный класс
            } else { // иначе
                el.classList.remove('follow-cursor_active') // удаляем активный класс
            }

            el.style.left = e.pageX + 'px' // задаём элементу позиционирование слева
            el.style.top = e.pageY + 'px' // задаём элементу позиционирование сверху
        })
    }

    followCursor() // вызываем функцию followCursor

})













