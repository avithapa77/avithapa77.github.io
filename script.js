const canvas = document.getElementById('fallingSymbols');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const symbols = ['✌️', '❤️'];
const symbolArray = [];

for(let i = 0; i < 50; i++){
    symbolArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        //size: 20 + Math.random() * 30,
        size: 1 + Math.random() * 30,
        //speed: 1 + Math.random() * 3,
        speed: 0 + Math.random() * 2,
        symbol: symbols[Math.floor(Math.random() * symbols.length)]
    });
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    symbolArray.forEach(s => {
        ctx.font = `${s.size}px Arial`;
        ctx.fillText(s.symbol, s.x, s.y);
        s.y += s.speed;
        if(s.y > canvas.height){
            s.y = -50;
            s.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});