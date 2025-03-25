function getAllData() {
  $.ajax({
    url: 'http://localhost:8888/employee',
    type: 'GET',
    dataType: 'json',
    success: function(response) {
      let rows = "";
      $.each(response.data, function(index, data) {
        rows += /*html*/`<tr>
                    <td>${index+1}</td>
                    <td>${data.name}</td>
                    <td>${data.position}</td>
                    <td>
                        <button class="editBtn" data-id="${data.id}" data-name="${data.name}" data-position="${data.position}">Edit</button>
                        <button class="handleDelete" data-id="${data.id}">Hapus</button>
                    </td>
                </tr>`;
      });
      $("#dataTable tbody").html(rows);
    },
    error: function(xhr, status, error) {
      console.error("Terjadi kesalahan: " + error);
    }
  });
}
