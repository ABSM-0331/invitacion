// Configura la fecha de destino
var targetDate = new Date("Jan 10, 2025 15:00:00").getTime();

// Actualiza la cuenta regresiva cada segundo
var countdown = setInterval(function() {

    // Obtiene la fecha y hora actual
    var now = new Date().getTime();

    // Calcula la diferencia entre la fecha de destino y la fecha actual
    var distance = targetDate - now;
    // Calcula el tiempo para días, horas, minutos y segundos
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el resultado en los elementos correspondientes
    document.getElementById("dias").innerHTML = days;
    document.getElementById("horas").innerHTML = hours;
    document.getElementById("minutos").innerHTML = minutes;
    document.getElementById("segundos").innerHTML = seconds;

    // Si la cuenta regresiva termina, muestra un mensaje
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("dias").innerHTML = "";
        document.getElementById("horas").innerHTML = "";
        document.getElementById("minutos").innerHTML = "";
        document.getElementById("segundos").innerHTML = "¡Evento iniciado!";
    }
}, 1000);

// script.js
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;

    const element = document.querySelector('.inicio');
    const newPosition = scrollY * 0.4;
    element.style.transform = `translateY(${newPosition}px)`;
    const scaleValue = Math.max(1 - scrolled / 900, 0.4); // Ajusta el divisor para cambiar la intensidad del escalado
    const centro = document.querySelector('.centro');
    centro.style.transform = `scale(${scaleValue})`;

});
 console.log()
function toggleForm(show) {
    const familySection = document.getElementById('datos-con');
    if (show) {
        familySection.classList.remove('datos');
    } else {
        familySection.classList.add('datos');
    }
}

function decreaseValue() {
    var input = document.getElementById('asistentes');
    var currentValue = parseInt(input.value);
    if (currentValue > input.min) {
        input.value = currentValue - 1;
    }
}

function aumentarValor(){
    var input = document.getElementById('asistentes');
    var currentValue = parseInt(input.value);
    if (currentValue < input.max){
        input.value = currentValue + 1;
    }
}

var data = [
    {
        img: "recursos/raul y abi/imagen1.jpeg"
    }
];

const fotos = 33;
for(i=2;i<=fotos;i++){
    data.push({
        img: `recursos/raul y abi/imagen${i}.jpeg`
    })
}
const thumbnailListwrapper = document.querySelector(".wrapper");

thumbnailListwrapper.innerHTML += `
    <div class="thumbnail zoom">
        <img src="${data[0].img}">
    </div>
`;

for (let i = 1; i < data.length; i++){
    thumbnailListwrapper.innerHTML += `
        <div class="thumbnail" style="--ids:${i-1}">
            <img src="${data[i].img}">
        </div>
    `;
}

const nextBtn = document.querySelector(".next-button");
var currentIndex = 0;

nextBtn.addEventListener("click", () => {
    nextBtn.disabled = true;
    var clone = thumbnailListwrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumbnailListwrapper.appendChild(clone);
    thumbnailListwrapper.children[1].classList.add("zoom");
    setTimeout(() => {
        thumbnailListwrapper.children[0].remove();
        nextBtn.disabled = false;
    }, 1000);

    for(let i = 2; i < thumbnailListwrapper.childElementCount; i++){
        thumbnailListwrapper.children[i].style = `--ids: ${i-2}`;
    }
    if(currentIndex < data.length - 1){
        currentIndex++
    }
    else{
        currentIndex=0;
    }
});
