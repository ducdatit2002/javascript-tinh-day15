//Bài tập 1: QUẢN LÝ TUYỂN SINH

document.getElementById("btnKetQua").onclick = function () {
  //input: điểm Toán, điểm Lý, điểm Hoá, điểm chuẩn, khu vực ,đối tượng
  //Lưu ý: dữ liệu người dùng nhập mặc định là chuỗi
  var diemChuan = parseFloat(document.getElementById("diemChuan").value);
  var diemToan = parseFloat(document.getElementById("diemToan").value);
  var diemVan = parseFloat(document.getElementById("diemVan").value);
  var diemAnh = parseFloat(document.getElementById("diemAnh").value);
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = parseInt(document.getElementById("doiTuong").value);

  var diemUuTien = 0;
  //Tính điểm ưu tiên khu vực
  if (khuVuc === "A") {
    diemUuTien += 2;
  } else if (khuVuc === "B") {
    diemUuTien += 1;
  } else if (khuVuc === "C") {
    diemUuTien += 0.5;
  }
  //Tính điểm ưu tiên đối tượng
  if (doiTuong === 1) {
    diemUuTien += 2.5;
  } else if (doiTuong === 2) {
    diemUuTien += 1.5;
  } else if (doiTuong === 3) {
    diemUuTien += 1;
  }

  var diemTongKet = diemToan + diemVan + diemAnh + diemUuTien;

  
};
