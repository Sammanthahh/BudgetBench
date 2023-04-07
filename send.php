<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "Thank you for subscribing to our mailing list.We will contact you soon!";
}

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "database1";

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection didn't work out: " . $conn->connect_error);
}

$sql = "INSERT INTO contacts (name, email, message)
VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
