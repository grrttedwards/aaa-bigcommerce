var formContainer = document.getElementsByTagName("body")[0];
var form = document.createElement("p").appendChild(document.createTextNode("asdfasdfasdf"));
formContainer.appendChild(form);

var thumbnailHref = document.createElement("a");
thumbnailHref.href = "https://docs.google.com/uc?export=download&id=12p2l9W1jiiFPdAB5prg_JEI4ts-Kxbeg"
var thumbnail = document.createElement("img");
thumbnail.src = "https://drive.google.com/thumbnail?authuser=0&sz=w320&id=12p2l9W1jiiFPdAB5prg_JEI4ts-Kxbeg";


thumbnailHref.appendChild(thumbnail);
formContainer.appendChild(thumbnailHref);



fetch("https://docs.google.com/uc?export=download&id=19apjw9P48_DBege9NK_2QXUHDXiyEBt0", {mode: "no-cors"})
  .then(response => response.json())
  .then(files => {
    for (const file of files) {
        console.log(file)
    }
})
.catch(console.error);


// 12p2l9W1jiiFPdAB5prg_JEI4ts-Kxbeg
// var files = fetch("https://docs.google.com/uc?export=download&id=12p2l9W1jiiFPdAB5prg_JEI4ts-Kxbeg")
// var files = fetch("https://drive.google.com/file/d/12p2l9W1jiiFPdAB5prg_JEI4ts-Kxbeg/view?usp=sharing")
// https://drive.google.com/file/d/19apjw9P48_DBege9NK_2QXUHDXiyEBt0/view?usp=sharing
