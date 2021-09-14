// Настройка ползунков

const weightValue = document.getElementById('weight'),
      volumeValue = document.getElementById('volume');

const weightValueRange = document.getElementById('weight_range'),
      volumeValueRange = document.getElementById('volume_range');

const inputsRange = document.querySelectorAll('.calc_slider');
const inputsValue = document.querySelectorAll('.calc_value');

const assignValue = () => {
    weightValue.value = weightValueRange.value;
    volumeValue.value = volumeValueRange.value;
}

const assignRange = () => {
    weightValueRange.value = weightValue.value;
    volumeValueRange.value = volumeValue.value;
}

for(let input of inputsRange) {
    input.addEventListener('input', () => {
        assignValue();
    })
}

weightValueRange.addEventListener('input' , function() {
    let weightFirstValueRange = weightValueRange.value;
    let weightSecondValueRange = weightFirstValueRange*100/25000;
    let weightColorRange = 'linear-gradient(90deg, #4F84EB ' + weightSecondValueRange +'%, #89909F ' + weightSecondValueRange + '%)';
    weightValueRange.style.background = weightColorRange;
})

volumeValueRange.addEventListener('input' , function() {
    let volumeFirstValueRange = volumeValueRange.value;
    let volumeSecondValueRange = volumeFirstValueRange*100/120;
    let volumeColorRange = 'linear-gradient(90deg, #4F84EB ' + volumeSecondValueRange +'%, #89909F ' + volumeSecondValueRange + '%)';
    volumeValueRange.style.background = volumeColorRange;
})

weightValue.addEventListener('input' , function() {
    let weightFirstValue = weightValue.value;
    let weightSecondValue = weightFirstValue*100/25000;
    let weightColor = 'linear-gradient(90deg, #4F84EB ' + weightSecondValue +'%, #89909F ' + weightSecondValue + '%)';
    weightValueRange.style.background = weightColor;
})

volumeValue.addEventListener('input' , function() {
    let volumeFirstValue = volumeValue.value;
    let volumeSecondValue = volumeFirstValue*100/120;
    let volumeColor = 'linear-gradient(90deg, #4F84EB ' + volumeSecondValue +'%, #89909F ' + volumeSecondValue + '%)';
    volumeValueRange.style.background = volumeColor;
})

for(let value of inputsValue) {
    value.addEventListener('input', () => {
        assignRange();
        let valueNumber = value.value;
    })
}


// Логика калькулятора

function getValue () {

    //Получение данных с формы

    const startCity = document.getElementById('startCity').value;
    const finishCity = document.getElementById('finishCity').value;
    const weightFinishValue = document.getElementById('weight').value;
    const volumeFinishValue = document.getElementById('volume').value;
    const requestURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?origins=${startCity}&destinations=${finishCity}&key=AIzaSyCO9I-9cmBpuwUJEdBcNe5F3AGN4iW_Dzs`

    const calcError = document.getElementById('calc_error');
    calcError.classList.remove('active');

    document.getElementById('calc_result').innerHTML = '';  


    // Расчет растояния

    const getDistance = new XMLHttpRequest();

    getDistance.open('GET', requestURL,);
    getDistance.responseType = 'json';

    getDistance.onload = function () {
        let resultGoogleApi = getDistance.response;
        if (resultGoogleApi.rows[0].elements[0].status == "OK") {
            let distanceSTR = resultGoogleApi.rows[0].elements[0].distance.text;
            let distanceSplitSTR = distanceSTR.split(' ')[0];
            let distanceWithoutEnter = distanceSplitSTR.replace(/\s+/g, '');
            console.log(distanceWithoutEnter);
            let distanceFinishNumber = Number(distanceWithoutEnter);

            //Арифметические действия 

            let pricePerKilometer;

            if (weightFinishValue < 2000) {
                pricePerKilometer = 7;
                console.log(pricePerKilometer);
            } else if (weightFinishValue >= 2000 && weightFinishValue < 5000 ) {
                pricePerKilometer = 14;
                console.log(pricePerKilometer);
            } else if (weightFinishValue >= 5000 && weightFinishValue < 15000 ) {
                pricePerKilometer = 19;
                console.log(pricePerKilometer);
            } else if (weightFinishValue >= 15000) {
                pricePerKilometer = 23;
                console.log(pricePerKilometer);
            } else {
                console.log('Error')
            }

            let finishPrice = pricePerKilometer*distanceFinishNumber;

            document.getElementById('calc_result').innerHTML = 'Стоимость: ' + finishPrice + ' грн';   
        } else {
            const calcError = document.getElementById('calc_error');
            calcError.classList.add('active');
            console.log('Error');
        }
    }

    getDistance.onerror = () => {
        const calcError = document.getElementById('calc_error');
        calcError.classList.add('active');
        console.log('Error');
    }

    getDistance.send();

}