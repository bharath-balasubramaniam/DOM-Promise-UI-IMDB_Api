let btn = document.querySelector("button");
let input = document.getElementById("movie");
btn.setAttribute("onclick", "foo()");
btn.onclick = function () {
  foo();
  btn.setAttribute("data-target", "#exampleModal");
  btn.setAttribute("data-toggle", "modal");
};
let foo = async function () {
  let data = await fetch(
    `http://www.omdbapi.com/?t=${input.value}&apikey=5c6e09a0`
  );
  let info = await data.json();
  document.querySelector(".modal-title").textContent = info.Title;
  document.querySelector(".poster").src = info.Poster;
  document.getElementById("phead").textContent = info.Title;
  document.getElementById("pyear").textContent = `❕${info.Year}`;
  document.getElementById("pgenre").textContent = `⁉${info.Genre}`;
  document.getElementById("pcountry").textContent = `❣${info.Country}`;
  document.getElementById("pstory").textContent = info.Plot;
  document.getElementById(
    "pdirector"
  ).innerHTML = `<h5>Director:<span>${info.Director}</span></h5>`;
  document.getElementById(
    "pawards"
  ).innerHTML = `<h5>Awards:<span>${info.Awards}</span></h5>`;
  console.log(info);
  document.getElementById("pruntime").innerHTML = `🕘RunTime: ${info.Runtime}.`;
  document.getElementById(
    "planguage"
  ).innerHTML = `🌍Language: ${info.Language}.`;
  document.getElementById(
    "pimdb"
  ).innerHTML = `‼IMDB Rating: ${info.imdbRating}/10.`;
  document.getElementById(
    "pmeta"
  ).innerHTML = `💯MetaScore: ${info.Metascore}/100.`;
};
