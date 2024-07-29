const formWrappeer = document.querySelector("#form-wrapper")
const form = document.querySelector("#form")
const searchInput = document.querySelector("#searchInput")
const buttonWrapper = document.querySelector("#buttonWrapper")
const searchButton = document.querySelector("#searchButton")
const clearButton = document.querySelector("#clearButton")
const images = document.querySelector("#images")

runEventListeners();

function runEventListeners(){
    form.addEventListener("submit" , search)
    clearButton.addEventListener("click" , clear)
}

function clear(){
    searchInput.value="";
    images.innerHTML="";
}

function search(e){
    const value = searchInput.value.trim();

    fetch(`https://api.unsplash.com/photos?query=${value}` , {
        method : "GET" , 
        headers : {
            Authorization: "Client-ID y7dRMsfIi0f7lQqbSql3ZW0lHfrQkF9pUmszejApnSc"
        }
    })
    .then((res)=> res.json())
    .then((data)=>{
        Array.from(data).forEach((image) =>{
        addImageToUI(image.urls.small);
        }
          
    );
          
    }
    )
    .catch((err)=> console.log(err))

    e.preventDefault();
}

function addImageToUI(url){
    const div = document.createElement("div")
    div.className="card";

    const img = document.createElement("img");
    img.setAttribute("src" , url)
    img.height=`400`
    img.width=`400`

    div.append(img);
    images.append(div);
} 