document.querySelectorAll('.link-container a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('sidebar-active').checked = false;
    });
  });
(() => {
  const el = document.getElementById("typing");

  
  const words = [
    "Coder",
    "a Web Developer",
    "a Programmer",
    "a Designer"
  ];

  const typeSpeed = 100;
  const eraseSpeed = 60;
  const holdTime = 1200;
  const gapBetween = 200;

  let wordIndex = 0, charIndex = 0, typing = true;

  function tick() {
    const current = words[wordIndex];

    if (typing) {
      el.textContent = current.slice(0, ++charIndex);
      if (charIndex === current.length) {
        typing = false;
        return setTimeout(tick, holdTime);
      }
      return setTimeout(tick, typeSpeed);
    } else {
      el.textContent = current.slice(0, --charIndex);
      if (charIndex === 0) {
        typing = true;
        wordIndex = (wordIndex + 1) % words.length;
        return setTimeout(tick, gapBetween);
      }
      return setTimeout(tick, eraseSpeed);
    }
  }

  tick();
})();
 const form = document.getElementById("contact-form");
    const loader = document.getElementById("loader");

    form.addEventListener("submit", function(e){
      e.preventDefault();
      loader.style.display = "flex"; 

      fetch("https://script.google.com/macros/s/AKfycbyHLKeWMTGL0fPZszPQhnB2c24fEX3ATBCuCkgZjoOqYyePvZAqNvU71v1YTMXQDbLe/exec", {   
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.name.value,
          email: this.email.value,
          message: this.message.value
        })
      }).then(() => {
        setTimeout(() => {
          loader.style.display = "none"; 
          alert("✅ Submitted Successfully!");
          form.reset();
        }, 1500);
      });
    });
