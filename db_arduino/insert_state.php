<?php

if(isset($_GET["state"])) {
   $state = $_GET["state"]; // get state value from HTTP GET
   $code = $_GET["code"];

   $servername = "localhost";
   $username = "root";
   $password = "0000";
   $dbname = "db_arduino";

   // Create connection
   $conn = new mysqli($servername, $username, $password, $dbname);
   // Check connection
   if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
   }

   $sql = "INSERT INTO state (STATE_CODE, STATE_CONTENT) VALUES ($code,$state) ON DUPLICATE KEY UPDATE  STATE_CONTENT = $state ";
   //$sql = "UPDATE  state SET STATE_CONTENT=$state WHERE STATE_CODE=$code";  

   if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
   } else {
      echo "Error: " . $sql . " => " . $conn->error;
   }

   $conn->close();
} else {
   echo "state is not set";
}
?>
