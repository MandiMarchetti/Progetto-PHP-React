<?php
include('api.php');

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);

if ($name && $phone && $email && $password) {
    echo "x";
} else {
    echo "y";
}
