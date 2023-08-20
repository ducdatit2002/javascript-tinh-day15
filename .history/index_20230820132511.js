// Bài tập 1: QUẢN LÝ TUYỂN SINH
document.getElementById("btnKetQua").onclick = function () {
  // Input: điểm Toán, điểm Lý, điểm Hoá, điểm chuẩn, khu vực, đối tượng
  // Lưu ý: Dữ liệu người dùng nhập mặc định là chuỗi
  var diemChuan = parseFloat(document.getElementById("diemChuan").value);
  var diemToan = parseFloat(document.getElementById("diemToan").value);
  var diemVan = parseFloat(document.getElementById("diemVan").value);
  var diemAnh = parseFloat(document.getElementById("diemAnh").value);
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = parseInt(document.getElementById("doiTuong").value);

  var diemUuTien = 0;

  // Tính điểm ưu tiên khu vực
  switch (khuVuc) {
    case "A":
      diemUuTien += 2;
      break;
    case "B":
      diemUuTien += 1;
      break;
    case "C":
      diemUuTien += 0.5;
      break;
  }

  // Tính điểm ưu tiên đối tượng
  switch (doiTuong) {
    case 1:
      diemUuTien += 2.5;
      break;
    case 2:
      diemUuTien += 1.5;
      break;
    case 3:
      diemUuTien += 1;
      break;
  }

  // Tính điểm tổng kết
  var diemTongKet = diemToan + diemVan + diemAnh + diemUuTien;

  var ketQuaHTML = "";
  if (
    diemTongKet >= diemChuan &&
    diemToan !== 0 &&
    diemVan !== 0 &&
    diemAnh !== 0
  ) {
    ketQuaHTML = "Thí sinh trúng tuyển với số điểm đạt được: " + diemTongKet;
  } else {
    ketQuaHTML =
      "Thí sinh không trúng tuyển với số điểm đạt được: " + diemTongKet;
  }

  document.getElementById("ketQua").innerHTML = ketQuaHTML;

  var ketQua = {
    trungTuyen:
      diemTongKet >= diemChuan &&
      diemToan !== 0 &&
      diemVan !== 0 &&
      diemAnh !== 0,
    diemDatDuoc: diemTongKet,
  };

  console.log(ketQua);
};
