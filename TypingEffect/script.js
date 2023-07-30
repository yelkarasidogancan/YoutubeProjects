document.addEventListener("DOMContentLoaded", function () {
  const text = "Programlama Yolculuğu";
  let index = 0;

  function type() {
    const typingText = document.getElementById("typing-text");
    typingText.textContent = text.slice(0, index);
    index++;
    if (index > text.length) {
      index = 0;
    }
    setTimeout(type, 200);
  }

  type();
});
