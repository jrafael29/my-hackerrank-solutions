<?php
function breakingRecords($scores) {
    // Write your code here
    $lowestScore = $highestScore = $scores[0];
    $mostBreaking = $leastBreaking = 0;
    
    foreach($scores as $score){
        if($score < $lowestScore) {
            $lowestScore = $score;
            $leastBreaking++;
        }
        if($score > $highestScore) {
            $highestScore = $score;
            $mostBreaking++;
        }
    }
    return [$mostBreaking, $leastBreaking];
}