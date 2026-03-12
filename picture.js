
const images =[
    "/pictures/outgetemp.png",
    "/pictures/outgetsalary.png",
    "/pictures/outgetsalarytotal.png",
    "/pictures/outgetcounloc.png"
]

const gallery = document.getElementById("gallery");
for (let i = 0; i<images.length; i++){
    const container = document.createElement("div");
    const img = document.createElement("img");
    img.src=images[i];
    img.width=1500;
    

const name = document.createElement("p");
name.textContent = images[i].split("/").pop().replace(".png", "");
container.appendChild(name);
container.appendChild(img);
name.style.fontFamily = "Arial, sans-serif";
name.style.fontSize = "20px";
gallery.appendChild(container);
}
