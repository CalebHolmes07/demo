
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function() {

    const playerName = document.getElementById("playerName").value.trim();
    const location = document.getElementById("location").value;
    const suppliesInput = document.getElementById("supplies").value;

    const story = document.getElementById("story");
    const outcome = document.getElementById("outcome");

    const supplies = Number(suppliesInput);

    // Check for invalid information

    if (playerName === "") {
        story.textContent = "Please enter your name before starting.";
        outcome.textContent = "";
        return;
    }

    if (suppliesInput === "" || !Number.isInteger(supplies) || supplies < 0 || supplies > 10) {
        story.textContent = "Please enter a whole number of supplies between 0 and 10.";
        outcome.textContent = "";
        return;
    }

    // Different stories for each location

    if (location === "forest") {
        story.textContent = playerName + ", you cautiously enter the Haunted Forest. Strange creatures move between the trees, and mysterious sounds follow you through the darkness.";

    } else if (location === "cave") {
        story.textContent = playerName + ", you enter the Crystal Cave. Glowing crystals light your path as you discover a mysterious underground world filled with secrets.";

    } else if (location === "city") {
        story.textContent = playerName + ", you explore the Abandoned City. Empty buildings surround you as you search for signs of civilization and clues about what happened.";

    } else {
        story.textContent = "Something went wrong. Please choose a location.";
        outcome.textContent = "";
        return;
    }

    // Determine whether the player survives

    if (supplies >= 0 && supplies <= 3) {
        outcome.textContent = "MISSION FAILED! You ran out of supplies and had to abandon your adventure.";

    } else if (supplies >= 4 && supplies <= 6) {
        outcome.textContent = "BARELY SURVIVED! You completed your adventure, but only just!";

    } else if (supplies >= 7 && supplies <= 10) {
        outcome.textContent = "MISSION SUCCESSFUL! You were well-prepared and successfully completed your adventure.";
    }

});


/*
1. What does document.getElementById() do?

document.getElementById() finds an HTML element using its ID so JavaScript can access and change it.

2. What is the purpose of an if statement?

An if statement allows JavaScript to make decisions based on whether a condition is true or false.

3. Why did you use Number() when retrieving supplies?

I used Number() because HTML input values are returned as strings, and I needed to convert the supplies into a number so I could compare them correctly.

4. What was the most challenging part of this assignment?

The most challenging part was making the different locations display their own stories while also making the number of supplies affect the final outcome.

5. What would you add to this game if you had more time?

If I had more time, I would add more locations, additional choices, and different endings so players could experience something different each time they played.
*/
