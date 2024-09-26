// console.log("moviepage");
// document.addEventListener("DOMContentLoaded",function(){
//     alert("first Login, And Watch Movies in this website.")
// })
let movielists = document.getElementById("movielists");
async function fetchingdetails(){
    let res = await fetch('./movieslist.json');
    let data = await res.json();
    displaymovies(data);
}
fetchingdetails()

function displaymovies(m){
    for(let i of m){
        let imgsrcc = i.imgpath;
        let imgname = i.moviename;
        let year = i.year;
        
        let imgdiv = document.createElement("div");
        let imgpath = document.createElement("img");
        imgpath.src=imgsrcc;

        let movieName = document.createElement("h3");
        movieName.innerHTML = imgname;

        let movieyear = document.createElement("p");
        movieyear.innerHTML = year;

        
        imgdiv.appendChild(imgpath);
        imgdiv.appendChild(movieName);
        imgdiv.appendChild(movieyear);
        movielists.appendChild(imgdiv);
    }

}