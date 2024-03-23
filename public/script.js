// function toggleDropdown() {
//     var dropdownContent = document.getElementById("myDropdown");
//     if (dropdownContent.style.display === "block") {
//         dropdownContent.style.display = "none";
//     } else {
//         dropdownContent.style.display = "block";
//     }
// }
// function toggleDropdown2() {
//     var dropdownContent = document.getElementById("myDropdown2");
//     if (dropdownContent.style.display === "block") {
//         dropdownContent.style.display = "none";
//     } else {
//         dropdownContent.style.display = "block";
//     }
// }

// // Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         for (var i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.style.display === "block") {
//                 openDropdown.style.display = "none";
//             }
//         }
//     }
// }
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn2')) {
//         var dropdowns2 = document.getElementsByClassName("dropdown-content2");
//         for (var i = 0; i < dropdowns2.length; i++) {
//             var openDropdown2 = dropdowns2[i];
//             if (openDropdown2.style.display === "block") {
//                 openDropdown2.style.display = "none";
//             }
//         }
//     }
// }
function toggleDropdown(dropdownId) {
    var dropdownContent = document.getElementById(dropdownId);
    
    if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";

            } else {
                dropdownContent.style.display = "block";
                
            }
}


// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn2')&& !event.target.matches('.dropbtn3') && !event.target.matches('.dropbtn4')&& !event.target.matches('.dropbtn5')) {
        var dropdowns = document.querySelectorAll('.dropdown-content, .dropdown-content2, .dropdown-content3, .dropdown-content4, .dropdown-content5');
        dropdowns.forEach(function (dropdown) {
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            }
        });
    }
}
