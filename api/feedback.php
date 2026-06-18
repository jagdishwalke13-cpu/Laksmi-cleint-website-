<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$file = 'feedbacks.json';

// Initialize the file if it doesn't exist
if (!file_exists($file)) {
    // Initial dummy data
    $initialData = [
        [
            "id" => 1,
            "name" => "Rahul Sharma",
            "role" => "Student",
            "feedback" => "The Robotics workshop was an eye-opener! I learned so much about IoT and basic circuit design. Highly recommended for beginners.",
            "avatar" => "https://i.pravatar.cc/150?u=1"
        ],
        [
            "id" => 2,
            "name" => "Priya Singh",
            "role" => "Teacher",
            "feedback" => "Implementing Robotonic's SDDP program in our school completely transformed the way students approach science. It's practical and very engaging.",
            "avatar" => "https://i.pravatar.cc/150?u=2"
        ],
        [
            "id" => 3,
            "name" => "Amit Verma",
            "role" => "Parent",
            "feedback" => "My son built his first drone after attending their aeromodeling fest. The kits are high quality and the instructors are very helpful.",
            "avatar" => "https://i.pravatar.cc/150?u=3"
        ],
        [
            "id" => 4,
            "name" => "Neha Gupta",
            "role" => "Principal",
            "feedback" => "The Atal Tinkering Lab setup by Robotonic is state-of-the-art. It provides our students with exactly what they need for 21st-century skills.",
            "avatar" => "https://i.pravatar.cc/150?u=4"
        ]
    ];
    file_put_contents($file, json_encode($initialData));
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $data = file_get_contents($file);
    echo $data;
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $newFeedback = json_decode($input, true);

    if ($newFeedback && isset($newFeedback['name']) && isset($newFeedback['feedback'])) {
        $data = json_decode(file_get_contents($file), true);
        
        // Ensure the new feedback has necessary fields
        $newFeedback['id'] = time();
        if (!isset($newFeedback['avatar'])) {
            $newFeedback['avatar'] = "https://i.pravatar.cc/150?u=" . time();
        }
        
        // Add new feedback to the beginning of the array
        array_unshift($data, $newFeedback);
        
        // Keep only the latest 50 feedbacks to avoid file growing too large
        $data = array_slice($data, 0, 50);
        
        // Save back to file
        file_put_contents($file, json_encode($data));
        
        echo json_encode(['success' => true, 'message' => 'Feedback saved!']);
    } else {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid data']);
    }
    exit();
}
?>
