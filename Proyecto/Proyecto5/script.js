let imagenes = ["https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(png)/origin-imgresizer.eurosport.com/2020/04/14/2806567-57896350-2560-1440.png"
,"https://img.vavel.com/saul-alvarez-1544892764012.png",
"https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(png)/origin-imgresizer.eurosport.com/2020/04/14/2806567-57896350-2560-1440.png"
];

let fotos = document.querySelector(".gallery");

for(let boxeo of imagenes){
    let imagen=document.createElement("img");
    imagen.src=boxeo;
    fotos.append(imagen);
}

let boton = document.querySelector(".add");
boton.addEventListener("click", function(){
    let box = document.querySelector(".picture-url")
    imagenes.push(box.value);
    let imagen=document.createElement("img");
    imagen.src=box.value;
    fotos.append(imagen)
})