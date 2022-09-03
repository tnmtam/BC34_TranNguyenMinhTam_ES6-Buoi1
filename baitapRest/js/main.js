let tinhDiem = (...rest) => {
    let sum = 0;
    let count = 0;
    for (let diem of rest) {
      sum += diem;
      count++;
    }
    return (sum / count).toFixed(2);
  };
  document.getElementById("btnKhoi1").onclick = function () {
    diemToan = +document.getElementById("inpToan").value;
    diemLy = +document.getElementById("inpLy").value;
    diemHoa = +document.getElementById("inpHoa").value;
    if (
      diemToan !== parseInt(diemToan) ||
      diemHoa !== parseInt(diemHoa) ||
      diemLy !== parseInt(diemLy)
    ) {
      return alert("xin nhap diem");
    }
    if (!diemToan || !diemLy || !diemHoa) {
      return alert("ko dc de trong");
    }
    if (diemToan < 0 || diemToan > 10) {
      return alert("xin nhap lai");
    }
    if (diemLy < 0 || diemLy > 10) {
      return alert("xin nhap lai");
    }
    if (diemHoa < 0 || diemHoa > 10) {
      return alert("xin nhap lai");
    }
    sum = tinhDiem(diemHoa, diemToan, diemLy);
    document.getElementById("tbKhoi1").innerHTML = sum;
  };
  document.getElementById("btnKhoi2").onclick = function () {
    diemVan = +document.getElementById("inpVan").value;
    diemSu = +document.getElementById("inpSu").value;
    diemDia = +document.getElementById("inpDia").value;
    diemEnglish = +document.getElementById("inpEnglish").value;
    if (
      diemVan !== parseInt(diemVan) ||
      diemSu !== parseInt(diemSu) ||
      diemDia !== parseInt(diemDia) ||
      diemEnglish !== parseInt(diemEnglish)
    ) {
      return alert("xin nhap diem");
    }
    if (!diemVan || !diemSu || !diemDia || !diemEnglish) {
      return alert("ko dc de trong");
    }
    if (diemVan < 0 || diemVan > 10) {
      return alert("xin nhap lai");
    }
    if (diemSu < 0 || diemSu > 10) {
      return alert("xin nhap lai");
    }
    if (diemDia < 0 || diemDia > 10) {
      return alert("xin nhap lai");
    }
    if (diemEnglish < 0 || diemEnglish > 10) {
      return alert("xin nhap lai");
    }
    sum = tinhDiem(diemDia, diemEnglish, diemSu, diemVan);
    document.getElementById("tbKhoi2").innerHTML = sum;
  };