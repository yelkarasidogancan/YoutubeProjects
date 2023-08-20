const container = document.querySelector(".container");
const content = document.querySelector(".content");

container.addEventListener("mousemove", (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 10;

  content.style.transform = `translateZ(200px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseleave", () => {
  content.style.transform = `translateZ(200px)`;
});
