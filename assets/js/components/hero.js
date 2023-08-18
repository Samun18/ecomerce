

// logica del hero

function scrollHero() {
    const container = document.querySelector(".container__gallery");
    const punto = document.querySelectorAll(".punto");
    
    punto.forEach((cadaPunto, i) => {
      punto[i].addEventListener("click", (e) => {
        let position = i;
        let operation = position * -25;
    
        container.style.transform = `translateX(${operation}%)`;
    
        punto.forEach((cadaPunto, i) => {
          punto[i].classList.remove("activo");
        });
        punto[i].classList.add("activo");
      });
    });

}
export default scrollHero


