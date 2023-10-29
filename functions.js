function getEnketoViewUlr(formId, submissionId, username, password) {
    // code to be executed
    // return statement (optional)

    const apiUrl = 'https://imecuador.unhcr.org/osmosys_sv/api/utils/koboview'; // Replace with your API endpoint URL
    const headers = new Headers();

    fetch(apiUrl,
        {
            mode: "cors",
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username: username, password: password, formId: formId, submissionId: submissionId})
        }
    )
        .then(response => {
            if (response.ok) {

                return response.json();
            }else {
                throw new Error(reponse.value);
            }
        })
        //.then(response => response.json())
        .then(data => {
            console.log(data);
            const formUrl = data.url;
            console.log(formUrl);
            window.open(formUrl, "_self")

            return formUrl
        })
        .catch(error => {
            console.error('error             x');
            console.error(error);
            alert('Usuario o contraseña incorrectos');
        });
};

// JavaScript text
// JavaScript code to extract and display the parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const formId = urlParams.get('formId');
const submissionId = urlParams.get('submissionId');
/*
// Display the parameter value on the web page
const parameterDisplay = document.createElement('p');
parameterDisplay.textContent = 'formId: ' + parameterValue;
document.body.appendChild(parameterDisplay);*/


// JavaScript code to handle form submission and API call

window.onload = function () {
    console.log('onload:')
    console.log(document)
    const button1 = document.getElementById('button1');
    console.log('form:')
    console.log(button1)


    button1.addEventListener('click', function (event) {
        console.log('-button1');
        event.preventDefault();

        // Get username and password from the form
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        enketoUrl = getEnketoViewUlr('aPJeBGZLjjJwgLZaYZQtsm', '35239549', username, password);
        console.log('url: ' + enketoUrl)
    });
};
