
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract MoodDiary {
    string mood;

    // Write Function
    function setMood(string memory _mood) public {
        mood = _mood;
    }

    // Read Function
    function getMood() public view returns(string memory) {
        return mood;
    }
}
