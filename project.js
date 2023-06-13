document.addEventListener("DOMContentLoaded", function() {
    const projectListSection = document.getElementById("project-list");
    const projectDetailsSection = document.getElementById("project-details");
    const projectNameElement = document.getElementById("project-name");
    const uploadedByElement = document.getElementById("uploaded-by");
    const projectDescriptionElement = document.getElementById("project-description");
    const projectStatusElement = document.getElementById("project-status");
    const backBtn = document.querySelector(".back-btn");
    const viewBtns = document.querySelectorAll(".view-btn");
  
    // Function to show project details
    function showProjectDetails(projectName, uploadedBy, description, status) {
      projectNameElement.textContent = projectName;
      uploadedByElement.textContent = uploadedBy;
      projectDescriptionElement.textContent = description;
      projectStatusElement.textContent = status;
  
      projectListSection.style.display = "none";
      projectDetailsSection.style.display = "block";
    }
  
    // Function to go back to project list
    function goBackToList() {
      projectListSection.style.display = "block";
      projectDetailsSection.style.display = "none";
    }
  
    // Event listeners
    viewBtns.forEach(function(viewBtn) {
      viewBtn.addEventListener("click", function() {
        const projectRow = this.parentNode.parentNode;
        const projectName = projectRow.querySelector("td:first-child").textContent;
        const uploadedBy = projectRow.querySelector("td:nth-child(2)").textContent;
        const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit."; // Add code to get project description
        const status = "Not Approve"; // Add code to get project status
  
        showProjectDetails(projectName, uploadedBy, description, status);
      });
    });
  
    backBtn.addEventListener("click", goBackToList);
  });
// Fungsi untuk menampilkan notifikasi
function showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.innerText = message;
    document.body.appendChild(notification);
  
    // Menghapus notifikasi setelah 3 detik
    setTimeout(function () {
      notification.remove();
    }, 3000);
  }
  
  // Event listener untuk tombol "Approve"
  const approveBtns = document.querySelectorAll(".approve-btn");
  approveBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      //const projectRow = this.closest("tr");
      //const projectName = projectRow.querySelector(".project-name").innerText;
      showNotification(`Project has been approved.`);
      // Tambahkan logika atau kode lain yang diperlukan setelah menyetujui proyek
    });
  });
  
  // Event listener untuk tombol "Reject"
  const rejectBtns = document.querySelectorAll(".reject-btn");
  rejectBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      showNotification("Project has been rejected. Notifying admin.");
      // Tambahkan logika atau kode lain yang diperlukan setelah menolak proyek
    });
  });
  