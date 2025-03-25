function updateData(event) {
  event.preventDefault();

  let id = $("#editId").val();
  let name = $("#editName").val();
  let position = $("#editPosition").val();

  $.ajax({
    url: `http://localhost:8888/employee/${id}`,
    type: 'PUT',
    contentType: 'application/json',
    data: JSON.stringify({ name: name, position: position }),
    success: function(response) {
      alert(response.message);
      getAllData();
      $("#editForm").hide()
    },
    error: function(xhr, status, error) {
      alert(xhr.responseJSON.message)
    }
  });
}

// Event listener untuk form edit
$(document).ready(function() {
  $("#editForm").submit(updateData);
});
