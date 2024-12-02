function handleSubmit() {
    // Get form values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Display a warning and show entered credentials
    const resultMessage = `
        <strong>Warning:</strong> You have entered your credentials on a fake site.<br>
        <em>Simulated Data:</em><br>
        Username: <strong>${username}</strong><br>
        Password: <strong>${password}</strong>
    `;

    // Display the result message in the form container
    document.getElementById("resultMessage").innerHTML = resultMessage;

    // Clear the input fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
