function displayAge() {
    const birthDate = new Date(document.querySelector('input[type="datetime-local"]').value);
    const currentDate = new Date();
    let age = birthDate.getFullYear();
    let yearsPassed = 0;
    for (let year = age; year < currentDate.getFullYear(); year++) {
        yearsPassed++;
    }
 // Display the result
 const result = "Your age is: " + yearsPassed;
 document.getElementById("output").textContent = result;
}
