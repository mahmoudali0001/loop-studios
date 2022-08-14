let linksBtn = document.querySelector(".icon");
let linksSpan = document.querySelector(".icon span:nth-child(2)");
let listLinks = document.querySelector(".links");
let closebtn = document.querySelector(".close-btn");

linksBtn.onclick = function () {
  listLinks.classList.add("show");
  linksSpan.classList.add("show-span");
  closebtn.classList.add("show");
};

closebtn.onclick = function () {
  listLinks.classList.remove("show");
  linksSpan.classList.remove("show-span");
  closebtn.classList.remove("show");
};
