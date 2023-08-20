//Bài tập 1: QUẢN LÝ TUYỂN SINH

document.getElementById("btnKetQua").onclick = function() {
  //input: điểm Toán, điểm Lý, điểm Hoá, diem
  //Lưu ý: dữ liệu người dùng nhập mặc định là chuỗi
  var diemChuan = parseFloat(document.getElementById("diemChuan").value);
  var diemToan = parseFloat(document.getElementById("diemToan").value);
  var diemVan = parseFloat(document.getElementById("diemVan").value);
  var diemAnh = parseFloat(document.getElementById("diemAnh").value);
  var khuVuc = document.getElementById("khuVuc").value.toUpperCase();
  var doiTuong = parseInt(document.getElementById("doiTuong").value);
}