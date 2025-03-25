function createData(event) {
  event.preventDefault(); // Mencegah reload halaman

  let name = $("#name").val();
  let position = $("#position").val();

  let requestData = { name: name, position: position };

  $.ajax({
    url: 'http://localhost:8888/employee',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(requestData),
    success: function(response) {
      alert(response.message);
      getAllData();
    },
    error: function(xhr, status, error) {
      alert(xhr.responseJSON.message);
    }
  });
}

// Event listener untuk form create
$(document).ready(function() {
  $("#formForSubmit").submit(createData);
});
