function applyJob() {
    alert("Thank you for applying! We will contact you soon.");
}

function contactUs() {
    alert("Your message has been received.");
}
function logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");

    alert("Logged Out Successfully");
}

