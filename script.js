var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-links");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
}

var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "brightness.png";
  } else {
    icon.src = "moon.png";
  }
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbw75WFt-hE1pEtPisnMuPsvDHDoUpOsr_zU7Z_hHM5vfiQ8JiHHTYwTwIiSynW0zXOzNA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

document.addEventListener("DOMContentLoaded", function () {
  let percentage = document.getElementById("percentage");
  let loader = document.getElementById("loader");
  let count = 0;
  let interval = setInterval(function () {
    count++;
    percentage.innerText = count + "%";
    loader.style.borderTopColor = `hsl(${count * 3.6}, 70%, 50%)`; // Change loader color based on percentage
    if (count === 100) {
      clearInterval(interval);
      // Remove preloader when loading is complete
      setTimeout(function () {
        document.querySelector(".preloader").style.display = "none";
      }, 500);
    }
  }, 20); // Adjust the interval for smoother animation
});
