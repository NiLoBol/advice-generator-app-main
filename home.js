function dice() {
    fetch('https://api.adviceslip.com/advice')
        .then(function (response) {
            return response.json() 
        })
        .then(function (data) {
            
            document.querySelector('#id-advice').innerHTML = data.slip.id;
            document.querySelector('#title').innerHTML =  `<q>${data.slip.advice}</q>`;
        })
}
