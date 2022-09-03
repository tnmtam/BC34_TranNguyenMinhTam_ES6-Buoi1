const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender", "celadon", "saffron", "fuschia", "cinnabar"];

let arrColor = document.querySelectorAll('.color-button');


for (let index = 0; index < arrColor.length; index++){
    arrColor[index].onclick = () => {
        document.getElementById('house').classList.add(arrColor[index].id);
    }
} 



