// document.getElementById("openModal").onclick = function () {
//     document.getElementById("popupModal").style.display = "block";
// };

// document.querySelector(".close").onclick = function () {
//     document.getElementById("popupModal").style.display = "none";
// };

// // Close the modal when clicking outside it
// window.onclick = function (event) {
//     let modal = document.getElementById("popupModal");
//     if (event.target === modal) {
//         modal.style.display = "none";
//     }
// };

// function showImages(type) {
//     // Hide all image containers
//     document.querySelectorAll('.image-container').forEach(container => {
//         container.style.display = "none";
//     });

//     // Remove active class from all buttons
//     document.querySelectorAll('.sidebar button').forEach(btn => {
//         btn.classList.remove("active");
//     });

//     // If not master plan, show images
//     if (type !== "master") {
//         document.getElementById(type).style.display = "grid";
//     }

//     // Add active class to clicked button
//     event.target.classList.add("active");
// }

/*************************** */

function openPage(url) {
    window.location.href = url;
}