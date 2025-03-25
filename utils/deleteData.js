function deleteData(id) {
  if (confirm("Apakah kamu yakin ingin menghapus data ini?")) {
    $.ajax({
      url: `http://localhost:8888/employee/${id}`,
      type: 'DELETE',
      success: function(response) {
        alert(response.message);
        getAllData();
      },
      error: function(xhr, status, error) {
        alert(xhr.responseJSON.message);
      }
    });
  }
}

// Event listener untuk tombol delete
$(document).on("click", ".handleDelete", function() {
  let id = $(this).data("id");
  deleteData(id);
});
