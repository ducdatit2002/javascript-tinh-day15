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

  var ketQuaText = "";
  if (
    diemTongKet >= diemChuan &&
    diemToan !== 0 &&
    diemVan !== 0 &&
    diemAnh !== 0
  ) {
    ketQuaText = "Thí sinh trúng tuyển với số điểm đạt được: " + diemTongKet;
  } else {
    ketQuaText =
      "Thí sinh không trúng tuyển với số điểm đạt được: " + diemTongKet;
  }

  document.getElementById("ketQua").innerText = ketQuaText;
};

//BÀI TẬP 2: TÍNH TIỀN ĐIỆN
document.getElementById("btnTinhTienDien").onclick = function () {
  var tenKhachHang = document.getElementById("tenKhachHang").value;
  var soKwTieuThu = parseFloat(document.getElementById("SoKwTieuThu").value);

  var giaDien = 0;
  if (soKwTieuThu <= 50) {
    giaDien = soKwTieuThu * 500;
  } else if (soKwTieuThu <= 100) {
    giaDien = 50 * 500 + (soKwTieuThu - 50) * 650;
  } else if (soKwTieuThu <= 150) {
    giaDien = 50 * 500 + 50 * 650 + (soKwTieuThu - 100) * 850;
  } else {
    giaDien = 50 * 500 + 50 * 650 + 50 * 850 + (soKwTieuThu - 150) * 1100;
  }

  var tienDienHTML = "Tiền điện của khách hàng " + tenKhachHang + " là: " + giaDien + " đồng.";

  document.getElementById("TienDien").textContent = tienDienHTML;
};


//BÀI TẬP 3: TÍNH TIỀN THUẾ THU NHẬP CÁ NHÂN
document.getElementById("btnTinhTienThue").onclick = function() {
     var hoTen = document.getElementById("hoTen").value;
     var tongThuNhapNam = parseFloat(
       document.getElementById("tongThuNhapNam").value
     );
     var soNguoiPhuThuoc = parseInt(
       document.getElementById("soNguoiPhuThuoc").value
     );
}
