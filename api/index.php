<?php
$autoNumber = $_GET['auto_number'];
$fines = [];
$fines['18811234567890'] = (object) [
    'date' => '10.10.2015',
    'sum' => 1500,
];

header('Content-Type: application/json');
echo json_encode($fines);