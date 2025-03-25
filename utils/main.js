$(document).ready(function() {
  getAllData(); // Ambil data saat halaman pertama kali dimuat

  // Event listener untuk tombol Edit
  $(document).on("click", ".editBtn", function() {
    let id = $(this).data("id");
    let name = $(this).data("name");
    let position = $(this).data("position");

    $("#editId").val(id);
    $("#editName").val(name);
    $("#editPosition").val(position);
    $("#editForm").show();
  });
});
