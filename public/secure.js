document.getElementById("showMessage").addEventListener("click", () => {
  const message = document.getElementById("message").value;

  // Safe code display the input as text
  document.getElementById("messageResult").textContent = message;
});

document.getElementById("readData").addEventListener("click", () => {
  const input = document.getElementById("dataInput").value;
  const result = document.getElementById("dataResult");

  try {
    //JSON.parse() reads JSON
    const data = JSON.parse(input);
    result.textContent = "Name: " + data.name;
  } catch (error) {
    result.textContent = "Invalid JSON. Please enter valid data.";
  }
});
