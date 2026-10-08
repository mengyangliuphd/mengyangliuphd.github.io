const button=document.querySelector("header button");
function setLanguage(language){
  document.documentElement.lang=language;
  document.querySelectorAll("[data-en][data-zh]").forEach(element=>{element.textContent=element.dataset[language];});
  button.textContent=language==="en"?"中文":"EN";
  localStorage.setItem("preferredLanguage",language);
}
setLanguage(localStorage.getItem("preferredLanguage")==="zh"?"zh":"en");
button.addEventListener("click",()=>setLanguage(document.documentElement.lang==="en"?"zh":"en"));
