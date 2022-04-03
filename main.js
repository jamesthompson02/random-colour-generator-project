//The following variables and functions all relate to getting each of the two pages to show based
// on when the end user clicks the title of the page (both titles are in top pane).

const random_generator = document.getElementById('left-half-title');
const simple_hex = document.getElementById('right-half-title');

const random_generator_page = document.getElementById('background-box-1');
const simple_hex_page = document.getElementById('background-box-2');

function randomGeneratorPage() {
    simple_hex_page.style.display = 'none';
    random_generator_page.style.display = 'flex';
}

function simpleHexPage() {
    random_generator_page.style.display = 'none';
    simple_hex_page.style.display = 'flex';
}

random_generator.addEventListener('click', () => {
    randomGeneratorPage();
})
simple_hex.addEventListener('click', () => {
    simpleHexPage();
})

//The following all relates to generating random colors when the end user clicks the button on the 
//random generator page. The intended effect is to turn the page a random color. Moreover, the user
// is informed of the hexadecimal identifier of the color that was generated.

const background_color_box = document.getElementById('background-colour-box');
const hexadecimal_text = document.getElementById('hexadecimal-text');
const random_button = document.getElementById('random-btn');
const clipboard1 = document.getElementById('clipboard');
const para = document.getElementById('para');
let clicks = 0;

function randomColorGenerator6() {
    const hexadecimal_characters = '0123456789abcdef';
    let hashtag_element = '#';
    for (starter = 0; starter < 6; starter += 1) {
        hexadecimal_char_index = hexadecimal_characters[Math.round(Math.random() * 15)];
        hashtag_element += hexadecimal_char_index
    }
    return hashtag_element;
}

function randomColorGenerator3() {
    const hexadecimal_characters = '0123456789abcdef';
    let hashtag_element = '#';
    for (starter = 0; starter < 3; starter += 1) {
        hexadecimal_char_index = hexadecimal_characters[Math.round(Math.random() * 15)];
        hashtag_element += hexadecimal_char_index
    }
    return hashtag_element;
}

function onclicks() {
    clicks += 1;
}


random_button.addEventListener('click', () => {
    onclicks();
    if (clicks % 2 == 0) {
        let new_var = randomColorGenerator6();
        random_generator_page.style.backgroundColor = new_var;
        background_color_box.innerText = 'Background Color:';
        hexadecimal_text.innerText = new_var;
        if (clipboard1.style.display = 'none') {
            clipboard1.style.display = 'flex';
        }
        if (para.style.display = 'none') {
            para.style.display = 'flex';
        }
    } else {
        let new_var = randomColorGenerator3();
        random_generator_page.style.backgroundColor = new_var;
        background_color_box.innerText = 'Background Color:';
        hexadecimal_text.innerText = new_var;
        if (clipboard1.style.display = 'none') {
            clipboard1.style.display = 'flex';
        }
        if (para.style.display = 'none') {
            para.style.display = 'flex';
        }
    }
})

// The following code is intended to add functionality to the clipboard icon. The idea is that if
// the end user likes a color and wants to use it in a coding project, they can click the clipboard 
// icon to copy the hexadecimal identifier and then paste it into a different window.

clipboard1.addEventListener('click', () => {
    navigator.clipboard.writeText(hexadecimal_text.innerText);
})

// The following code is for the 'Simple Hex' page. The idea is that the end user can type in a
// hexadecimal identifier in the input box and then press the enter key. Once the enter key is
// pressed, the background color will change to the hexadecimal identifier (assuming the input
// is a valid hexadecimal identifier).

const input1 = document.getElementById('inp');

input1.addEventListener('keypress', function(event) {
    let user_input = String(input1.value);
    user_input = user_input.toLowerCase();
    user_input = user_input.replace(/\s/g, '');
    const hexadecimal_characters = '0123456789abcdef';   
    if (event.key === 'Enter') {
        while (user_input == '') { 
            return alert('Must input a valid hexadecimal identifier');
        }
    }
    if (event.key === 'Enter') {
        while (user_input[0] !== '#') {
            return alert("Valid hexadecimal identifiers always begin with a '#'");
        }
    }
    if (event.key === 'Enter') {
        if (user_input.length == 7 || user_input.length == 4) {
            console.log(user_input);
        } else {
            alert('Valid hexadecimal identifiers are only ever 4 or 7 characters long (including the hashtag)');
        }
    }
    if (event.key === 'Enter') {
        for (let i = 1; i < (user_input.length - 1); i++) {
            if (hexadecimal_characters.includes(user_input[i]) === false) {
                alert('Valid hexadecimal identifiers only include letters from A-F and numbers from 0-9');
                break;
            } else {
                simple_hex_page.style.backgroundColor = user_input;        
            }
        }
    }
})





