
document.addEventListener("DOMContentLoaded", function () {

    const loadingSpinner = document.querySelector('.loading-spinner');
    if (loadingSpinner) {
        loadingSpinner.style.display = 'none'; // Hide loading spinner
    }

    // You can also add animations or other effects here

    // Finally, you can make the website content visible
    document.body.style.visibility = 'visible';

    const logo= document.getElementById("logo-img");
    logo.addEventListener("mouseover", function () {
        logo.style.cursor = "pointer";
    });
    
    // Add a click event listener to redirect to pad.html
    logo.addEventListener("click", function () {
        window.location.href = "index.html";
    });

   
   

 const p1= document.getElementById("pad-main1");
 p1.addEventListener("mouseover", function () {
    p1.style.cursor = "pointer";
 });

// Add a click event listener to redirect to pad.html
 p1.addEventListener("click", function () {
    window.location.href = "merodesh.html";
 });

 const p2= document.getElementById("pad-main2");
 p2.addEventListener("mouseover", function () {
    p2.style.cursor = "pointer";
 });

// Add a click event listener to redirect to pad.html
 p2.addEventListener("click", function () {
    window.location.href = "likhawat.html";
 });

 // Add an event listener to the logout button
const logoutButton = document.getElementById("logou");


    logoutButton.addEventListener("click", function () {
        // Clear the session storage
       sessionStorage.clear();

        // Redirect to the login page (you can change the URL as needed)
        window.location.href = "/";
    });

   

});


