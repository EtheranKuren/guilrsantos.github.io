//Put all text variables here
let toggleBtn = document.getElementById("Translate"),
  title = document.querySelectorAll(".title"),
  descr = document.querySelectorAll(".description");

//Sets the language to portuguese
let currentLanguage = "portuguese";

fetch("static/data.json")
  .then((response) => response.json())
  .then((data) => {
    title.forEach(
      (title, index) =>
        (title.innerHTML = data.portuguese[index].title.replace(/\n/g, "<br>"))
    );
    descr.forEach(
      (descr, index) =>
        (descr.innerHTML = data.portuguese[index].description.replace(
          /\n/g,
          "<br>"
        ))
    );
    //The Translate Function
    toggleBtn.addEventListener("click", () => {
      // Language Switch
      if (currentLanguage === "english") {
        currentLanguage = "portuguese";
        document
          .getElementById("Translate")
          .setAttribute("title", "Switch to English");
        document
          .getElementById("Resume")
          .setAttribute("href", "media/files/ResumoGRS.pdf");
      } else {
        currentLanguage = "english";
        document
          .getElementById("Translate")
          .setAttribute("title", "Switch to Portuguese");
        document
          .getElementById("Resume")
          .setAttribute("href", "media/files/ResumeGRS-En.pdf");
      }
      // Update the title and description based on the current language
      title.forEach(
        (title, index) =>
          (title.innerHTML = data[currentLanguage][index].title.replace(
            /\n/g,
            "<br>"
          ))
      );
      descr.forEach(
        (descr, index) =>
          (descr.innerHTML = data[currentLanguage][index].descr.replace(
            /\n/g,
            "<br>"
          ))
      );
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
