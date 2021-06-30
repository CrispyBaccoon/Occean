//createHead = function () {
//title = document.head.getElementsByTagName("title")[0].innerText;
//head =
//'<meta charset="UTF-8">' +
//'<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
//'<script src="https://kit.fontawesome.com/830f50fe29.js" crossorigin="anonymous"></script>' +
//'<link rel="stylesheet" href="occean.css">' +
//"<title>" +
//title +
//"</title>";
//document.head.innerHTML = head;
//};

//createHead();

makeWater = function (waveId) {
  water =
    '<li><a href="#' +
    waveId +
    '"><button onclick="toggleOccean()">' +
    waveId +
    "</button></a></li>";
  return water;
};

makeWave = function (wave) {
  waveId = wave.id;
  return makeWater(waveId);
};

makeWaves = function (ocean, ind) {
  waves = "";
  for (i = 0; i < ind; i++) {
    wave = ocean[i];
    waves += makeWave(wave);
  }
  return waves;
};

makeOcean = function (ocean, ind) {
  ocean = '<ul id="OcceanList">' + makeWaves(ocean, ind) + "</ul>";
  OccHeader = document.getElementById("Occean");
  OccHeader.innerHTML = ocean;
};

createOcean = function () {
  sections = document.getElementsByTagName("section");
  sectionIndex = sections.length;
  /* # waveTemplate
   * <ul id="Occean">
   * <li><a href="waveId">[waveId]</a></li>
   * </ul>
   */
  makeOcean(sections, sectionIndex);
};

//# headerTemplate
//<header>
//<div>
//<div id="OccHeader"></div>
//<div class="Beach"></div>
//</div>
//</header>

makeDune = function (dune) {
  sand = '<li><a href="' + dune + '.html">' + dune + "</a></li>";
  return sand;
};

makeBeach = function () {
  pages = ["download", "docs", "learn"];
  dunes = "";
  for (i = 0; i < pages.length; i++) {
    dune = pages[i];
    dunes += makeDune(dune);
  }
  return dunes;
};

createBeach = function () {
  beach = '<ul id="BeachList">' + makeBeach() + "</ul>";
  beachElement = document.getElementById("Beach");
  beachElement.innerHTML = beach;
};

OcceanBeach = function () {
  homePage = "./";
  cape =
    '<header id="Cape">' +
    "<div>" +
    "<div id=OcceanName>" +
    '<div id="OcceanHead"><a href="' +
    homePage +
    '">Occean</a><button onclick="toggleOccean()"><i id="icon" class="fas fa-chevron-down"></i></button></div>' +
    '<div id="Occean"></div>' +
    "</div>" +
    '<div id="Beach"></div>' +
    "</div>" +
    "</header>";
  bodyElement = document.body.insertAdjacentHTML("beforebegin", cape);
  createBeach();
  createOcean();
};

StyleBeach = function () {
  document.getElementById("Cape").classList += "bg-1";
};

visible = true;

toggleOccean = function () {
  if (visible) {
    document.getElementById("OcceanList").style.display = "inline-block";
    document.getElementById("icon").className = "fas fa-chevron-up";
    visible = false;
  } else {
    document.getElementById("OcceanList").style.display = "none";
    document.getElementById("icon").className = "fas fa-chevron-down";
    visible = true;
  }
};

OcceanBeach();
StyleBeach();
