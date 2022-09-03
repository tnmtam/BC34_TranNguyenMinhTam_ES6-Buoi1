function getEle(id) {
    return document.getElementById(id);
};

let toan = getEle('inpToan').value * 1;
let ly = getEle('inpLy').value * 1;
let hoa = getEle('inpHoa').value * 1;
let van = getEle('inpVan').value * 1;
let su = getEle('inpSu').value * 1;
let dia = getEle('inpDia').value * 1;
let english = getEle('inpEnglish').value * 1;

const avg = (...numbers) => {
    let sum = 0;
    let diemTB = 0;
    for (let index = 0; index < numbers.length; index++) {
        sum += numbers[index];
        diemTB = sum / numbers.length;
    }
    console.log(diemTB);
};

document.getElementById('btnKhoi1').onclick = () => {
    document.getElementById('tbKhoi1').innerHTML = avg(toan,ly,hoa);
};
document.getElementById('btnKhoi2').onclick = () => {
    document.getElementById('tbKhoi2').innerHTML = avg(van, su, dia, english);
};