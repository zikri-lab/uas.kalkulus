const container = document.querySelector(".container");
let counter = 1;

setInterval(() => {
  const profiles = document.querySelectorAll(".profile");

  profiles.forEach((profile, index) => {
    const delay = index * 1000;
    setTimeout(() => {
      profile.style.opacity = 1;
      profile.style.transform = "translateY(0)";
      profile.querySelector(".name").style.opacity = 1;
    }, delay);
  });

  counter = (counter % 3) + 1;
}, 300);
