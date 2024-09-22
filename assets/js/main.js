document.getElementById('calorie-form').addEventListener('submit', function() {



    const height = parseFloat(document.getElementById('body-size').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);
    const activity = parseFloat(document.getElementById('activity').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;

    let bmr;


    if (gender === 'male') {
        bmr = 66.47 + (13.7 * weight) + (5 * height) - (6.8 * age);
    } else {
        bmr = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
    }

    const tdee = bmr * activity;

    document.getElementById("bmr").innerText = bmr;
    document.getElementById("tdee").innerText = tdee;

});