document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.querySelector("#productTable tbody");
  const addRowBtn = document.getElementById("addRowBtn");

  // Function to update row numbers
  function updateRowNumbers() {
    const rows = tableBody.querySelectorAll("tr");
    rows.forEach((row, index) => {
      row.querySelector(".row-no").textContent = index + 1;
    });
  }

  // Add new row
  addRowBtn.addEventListener("click", function () {
    const lastRow = tableBody.querySelector("tr:last-child");
    const newRow = lastRow.cloneNode(true); // clone last row
    tableBody.appendChild(newRow); // add as last row
    updateRowNumbers();
  });

  // Event delegation for delete button
  tableBody.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
      e.target.closest("tr").remove(); // remove row
      updateRowNumbers();
    }
  });
});
