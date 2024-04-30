<?php

$host = 'localhost';
$user = 'root';
$password = '';
$database = 'brain_pons_db';

$mysqli = new mysqli($host, $user, $password, $database);

if ($mysqli->error) {
    echo "Connect failed!!!";
    die("Connect failed: " . $mysqli->error);
    exit();
}
