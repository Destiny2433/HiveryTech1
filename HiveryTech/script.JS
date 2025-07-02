let attempts = 0;

const validUsers = {
    "Destiny": "Secure123",
    "Yungton": "TechHive",
    "Ayodeji": "blblbl",
    "Olaiya": "Access2024",
    "Zara": "life is good",
    "Azstec": "Azstec247",
    "$tylish": "Stylish"

};

document.getElementById('fresh').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const passcode = document.getElementById('passcode').value;
    const message = document.getElementById('message');

    if (attempts>= 5) {
        message.textContent = 'Too many failed attempts! Try again later.';
        message.style.color = 'red';
        return;
}

    if (validUsers[username] && validUsers[username] === passcode) {
        message.textContent = 'Access Granted!';
        message.style.color = 'green';

        // Store user session with username
        localStorage.setItem("loggedInUser",username);

        // Redirect to dashboard
        setTimeout(() => { 
            window.location.href = 'dashboard.html';
}, 1000);
} else {
        attempts++;
        message.textContent = 'Invalid username or password!';
        message.style.color = 'red';
}
});
