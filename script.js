const birthdateInput = document.getElementById('birthdate');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();

    if (birthdate > today) {
        resultDiv.textContent = 'Please enter a valid birthdate.';
        return;
    }

    if (birthdateInput.value === '') {
        resultDiv.textContent = 'Please enter your birthdate.';
        return;
    }

    let ageInMilliseconds = today - birthdate;
    const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25));
    ageInMilliseconds -= ageInYears * (1000 * 60 * 60 * 24 * 365.25);
    const ageInMonths = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 30.44));
    ageInMilliseconds -= ageInMonths * (1000 * 60 * 60 * 24 * 30.44);
    const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
    const totalDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));


    resultDiv.innerHTML = `
        <div class="result-item">Your age is: ${ageInYears} years, ${ageInMonths} months, and ${ageInDays} days.</div>
        <div class="result-item">Total days: ${totalDays}</div>
    `;
});
