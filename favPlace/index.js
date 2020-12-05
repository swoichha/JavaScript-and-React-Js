let newPlace;
let myFavPlace =   ["Biratnagar", "Lalitpur", "Patan", "Kathmandu","Pokhara","Palpa"];

window.onload = function () {
    showFavPlace();
}

function addFavPlace() {
    var ul = document.getElementById("listOfFavPlaces");
    newPlace = document.getElementById("newFavPlace");

    if(myFavPlace.indexOf(newPlace.value) !== -1){
        alert("Place already exists!")
    } else{
        myFavPlace.push(newPlace.value)
        console.log(myFavPlace)
        var li = document.createElement("li");
        li.setAttribute('id', newPlace.value);
        li.appendChild(document.createTextNode(newPlace.value));
        ul.appendChild(li);
    }
}

function deleteFavPlace() {
    newPlace = document.getElementById("newFavPlace");
    if(myFavPlace.indexOf(newPlace.value) !== -1){
        let index = myFavPlace.indexOf(newPlace.value,0)
        myFavPlace.splice(index,1)
    }
    showFavPlace();
}

function showFavPlace() {
    let favPlace = '';
    for (const place of myFavPlace){
        favPlace = favPlace + `<li>${place}</li>`
    }
    document.getElementById("listOfFavPlaces").innerHTML = favPlace
}
