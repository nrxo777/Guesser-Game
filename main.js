let input_number = document.querySelector('#input-number');
const submit_number = document.querySelector('#submit-number');
const attempt = document.querySelector('#attempt');
let hint = document.querySelector('#hint');

let random_number = parseInt((Math.random() * 10) + 1);

let user_attempt = 1

// ********** Input Validation **********

submit_number.addEventListener('click', function(e) {
    e.preventDefault();

    let guess = parseInt(input_number.value);
    
    value_validation(guess);
})

function value_validation(guess) {
    if(isNaN(guess)) {
        alert("ENTER A VALID NUMBER!");
    } else if(guess < 1) {
        alert("ENTER A NUMBER MORE THAN 01!");
    } else if(guess > 10) {
        alert("ENTER A NUMBER LESS THAN 10!");
    } else {
        if(user_attempt > 3) {
            confirm(`GAME OVER.. RANDOM NUMBER WAS ${random_number}`)
        } else {
            value_check(guess);
        }
    }
}

// ********** Value Check **********
function value_check(guess) {
    if(guess === random_number) {
        confirm("YOU WON!!!");
        reset_game();
        return;
    } else if (guess < random_number) {
        hint.innerHTML = `Try some higher value than ${guess}`
    } else if (guess > random_number) {
        hint.innerHTML = `Try some lower value than ${guess}`
    }

    clear_value(guess);
}


function clear_value(guess) {
    input_number.value = '';
    user_attempt++;
    remaining_attempt = 4 - user_attempt;
    attempt.innerHTML =  remaining_attempt;

    if(remaining_attempt === 0) {
        confirm(`GAME OVER.. RANDOM NUMBER WAS ${random_number}`);
        reset_game();
    }

}

// ********** Reset Game **********

function reset_game(guess) {
    user_attempt = 1;
    random_number = parseInt((Math.random() * 10) + 1);
    attempt.innerHTML = '3';
    input_number.value = '';
    hint.innerHTML = '';
}




