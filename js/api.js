const api = [
    {
    id:1,
    name: "Paola",
    surname: "Aguirre",
    carrera: "Diploma en Marketing",
    country: "Uruguay",
    egreso: "15 / 10 / 2022"
    },
    {
    id: 2,
    name: "Agustin",
    surname: "Menendez",
    carrera: "Fullstack Web Developer Bootcamp",
    country: "Paraguay",
    egreso: "07 / 08 / 2022"
    },
    {
    id: 3,
    name: "Manuel",
    surname: "Dominguez",
    carrera: "Fotografía",
    country: "Paraguay",
    egreso: "07 / 08 / 2022",
    }
]


// const object = api.find(obj => obj.carrera ==="Fotografía");


// console.log(object);

filterSelection("all")
function filterSelection(c) {
  let i;
  let x = document.getElementsByClassName("cards");
  if (c == "all") { c = ""};
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
  }
  
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
      }
    }
    element.className = arr1.join(" ");
  }
  
  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("carrerasContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }