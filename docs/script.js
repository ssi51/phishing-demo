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

    // Simulate file download
    const link = document.createElement('a');
    link.href = 'harmless_script.bat'; // Path to your harmless script
    link.download = 'harmless_script.bat';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clear the input fields
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
