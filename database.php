<?php
$link = connectToDatabase();
if(
    ($name = checkInput(@$_POST['name']) and 
    $email = checkInput($_POST['email']) and
    $homepage = checkInput($_POST['phone']) and
    $comment = checkInput($_POST['message'])) != ''){
    $insert_query = $link -> prepare("INSERT INTO Guestbook (User_id, time, Name, Email,Homepage,Comment) VALUES (NULL, CURRENT_TIMESTAMP, ?, ?, ?, ?)");
    $insert_query->bind_param('ssss', $name, $email,$homepage,$comment);
    $insert_query->execute();
	header('location: index.html?send'); 
}

function connectToDatabase(){ // DSV databas.
    $mysql_host='atlas.dsv.su.se';
    $mysql_user='usr_16453842';
    $mysql_password='453842';
    $mysql_db='db_16453842';
    $mysql_port = 3306;
    return $link = @mysqli_connect($mysql_host, $mysql_user,$mysql_password, $mysql_db, $mysql_port);
}

function checkInput($input){ 
    global $link;
    $input = $link->escape_string(trim($input));
    return $input;
}
?>
