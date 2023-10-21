window.onload = function(){
    
    // Background
    const bg = document.querySelector(".bg-img");

    window.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const decX = mouseX / window.innerWidth;
        const decY = mouseY / window.innerHeight;
        const maxX = bg.offsetWidth - window.innerWidth;
        const maxY = bg.offsetHeight - window.innerHeight;

        const panX = decX * maxX
        const panY = decY * maxY

        bg.style.translate = `${-panX}px ${-panY}px`;
        
    });

    // Relogio
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");

    let hr = document.querySelector("#hr");
    let min = document.querySelector("#min");
    let sec = document.querySelector("#sec");

    setInterval(() => {
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();

        var am = h >= 12 ? "PM" : "AM";

        // conversao para 12hrs
        if (h > 12){
            h = h -12;
        }

        // adicionando zero no digito 1-9
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
        ampm.innerHTML = am;

        hr.style.transform = `rotateZ(${h * 30}deg)`;
        min.style.transform = `rotateZ(${m * 6}deg)`;
        sec.style.transform = `rotateZ(${s * 6}deg)`;
    })

    // Todo-list
    let inputBox = document.querySelector('#inputBox');
    let list = document.querySelector('#list');

    inputBox.addEventListener('keyup', function(event){
    if(event.key == 'Enter') {
        addItem(this.value)
        this.value = '';
    }
    })

    let addItem = (inputBox) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${inputBox}<i></i>`;

    listItem.addEventListener("click", function(){
        this.classList.toggle('done');
    })

    listItem.querySelector('i').addEventListener('click', function(){
        listItem.remove();
    })

    list.appendChild(listItem)
    }
}
