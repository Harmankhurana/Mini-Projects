const form = document.querySelector('form');
// Writing here will give you empty values and i want when i put value in input box then it takes the values and calculate on them
// const height = parseInt(document.querySelector('#height').value);
// const weight = parseInt(document.querySelector('#weight').value);

form.addEventListener('submit' , function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height) ) {            // checking that if height values are correct or not
        results.innerHTML = "Please give the valid height value"
    } 
    else if (weight === '' || weight < 0 || isNaN(weight)) {        // checking that if weight values are correct or not
        results.innerHTML = "Please give the valid weight value"
    }
    else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);     // after multiplication value can be sometimes very big, so using toFixed(2) which gives only till 2 number values
        // show the result
        results.innerHTML = `<span>${BMI}</span>`;
    }
});