const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}

function ordinal_numbers(number) {
    const defaultOrdinals =
    {
        1: { cardinal: 'one', Ordinal: 'First' },
        2: { cardinal: 'two', Ordinal: 'Second' },
        3: { cardinal: 'three', Ordinal: 'Third' },
        4: { cardinal: 'four', Ordinal: 'Fourth' },
        5: { cardinal: 'five', Ordinal: 'Fifth' },
        6: { cardinal: 'six', Ordinal: 'Sixth' },
        7: { cardinal: 'seven', Ordinal: 'Seventh' },
        8: { cardinal: 'eight', Ordinal: 'Eighth' },
        9: { cardinal: 'nine', Ordinal: 'Ninth' },
        10: { cardinal: 'Ten', Ordinal: 'tenth' },
        11: { cardinal: 'Eleven', Ordinal: 'Eleventh' },
        12: { cardinal: 'Twelve', Ordinal: 'Twelfth' },
        13: { cardinal: 'Thirteen', Ordinal: 'Thirteenth' },
        14: { cardinal: 'Fourteen', Ordinal: 'Fourteenth' },
        15: { cardinal: 'Fifteen', Ordinal: 'Fifteenth' },
        16: { cardinal: 'Sixteen', Ordinal: 'Sixteenth' },
        17: { cardinal: 'Seventeen', Ordinal: 'Seventeenth' },
        18: { cardinal: 'Eighteen', Ordinal: 'Eighteenth' },
        19: { cardinal: 'Ninteen', Ordinal: 'Ninteenth' },
        20: { cardinal: 'Twenty', Ordinal: 'Twentieth' },
        30: { cardinal: 'Thirty', Ordinal: 'Thirtieth' },
        40: { cardinal: 'Forty', Ordinal: 'Fortieth' },
        50: { cardinal: 'Fifty', Ordinal: 'Fiftieth' },
        60: { cardinal: 'Sixty', Ordinal: 'Sixtieth' },
        70: { cardinal: 'Seventy', Ordinal: 'Seventieth' },
        80: { cardinal: 'Eighty', Ordinal: 'Eightieth' },
        90: { cardinal: 'Ninety', Ordinal: 'Ninetieth' },
        100: { cardinal: 'One Hundred', Ordinal: 'Hundredth' },
    }
    let number_to_string = '';
    // console.log(number.toString().length)
    if (number.toString().length === 1 || defaultOrdinals.hasOwnProperty(number)) {
        return defaultOrdinals[number].Ordinal
    }
    else {

        number_to_string = number.toString().split('')
        first_exploded_string = parseInt(number_to_string[0] + "0")

        second_exploded_string = parseInt(number_to_string[1])


        return defaultOrdinals[first_exploded_string].cardinal + "-" + defaultOrdinals[second_exploded_string].Ordinal
    }
}


function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const entryCardinal = ordinal_numbers(entryNumber);

    const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">${entryCardinal} Entry : Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">${entryCardinal} Entry : Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;
    targetInputContainer.insertAdjacentHTML('beforeend', HTMLString);
}

function calculateCalories(e) {
    e.preventDefault();
    isError = false;

    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
    const lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
    const dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
    const snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
    const exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');

    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);

    if (isError) {
        return;
    }

    const consumedCalories = breakfastCalories + lunchCalories + dinnerCalories + snacksCalories;
    const remainingCalories = budgetCalories - consumedCalories + exerciseCalories;
    const surplusOrDeficit = remainingCalories < 0 ? 'Surplus' : 'Deficit';
    output.innerHTML = `
  <span class="${surplusOrDeficit.toLowerCase()}">${Math.abs(remainingCalories)} Calorie ${surplusOrDeficit}</span>
  <hr>
  <p>${budgetCalories} Calories Budgeted</p>
  <p>${consumedCalories} Calories Consumed</p>
  <p>${exerciseCalories} Calories Burned</p>
  `;

    output.classList.remove('hide');
}

function getCaloriesFromInputs(list) {
    let calories = 0;

    for (const item of list) {
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);

        if (invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
            isError = true;
            return null;
        }
        calories += Number(currVal);
    }
    return calories;
}

function clearForm() {
    const inputContainers = Array.from(document.querySelectorAll('.input-container'));

    for (const container of inputContainers) {
        container.innerHTML = '';
    }

    budgetNumberInput.value = '';
    output.innerText = '';
    output.classList.add('hide');
}

addEntryButton.addEventListener("click", addEntry);
calorieCounter.addEventListener("submit", calculateCalories);
clearButton.addEventListener("click", clearForm);