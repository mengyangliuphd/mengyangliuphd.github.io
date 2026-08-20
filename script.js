const button = document.querySelector("header button");
button.addEventListener("click", () => {
  const next = document.documentElement.lang === "en" ? "zh" : "en";
  document.documentElement.lang = next;
  document.querySelectorAll("[data-en][data-zh]").forEach((element) => {
    element.textContent = element.dataset[next];
  });
  button.textContent = next === "en" ? "中文" : "EN";
  document.title = next === "en" ? "Mengyang Liu, PhD | Biomedical Imaging" : "刘梦阳博士｜生物医学成像";
});
