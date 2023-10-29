function getEnketoViewUlr(formId, submissionId, username, password) {
    // code to be executed
    // return statement (optional)

    formid = 'aPJeBGZLjjJwgLZaYZQtsm';
    submissionId = '35239549';
    const apiUrl = 'http://localhost:8080/osmosys_sv/api/utils/test1'; // Replace with your API endpoint URL
    const headers = new Headers();
    console.log(username);
    console.log(password);

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
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const formUrl = data.url;
            console.log(formUrl);
            window.open(formUrl, "_self")

            return formUrl
        })
        .catch(error => console.error(error));
};

// JavaScript text
// JavaScript code to extract and display the parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const formId = urlParams.get('formId');
const submissionId = urlParams.get('submissionId');

// Display the parameter value on the web page
const parameterDisplay = document.createElement('p');
parameterDisplay.textContent = 'formId: ' + parameterValue;
document.body.appendChild(parameterDisplay);


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
        username = 'elsalvador_kobo';
        password = 'KoBoElSalvador';
        enketoUrl = getEnketoViewUlr('aPJeBGZLjjJwgLZaYZQtsm', '35239549', username, password);
        console.log('url: ' + enketoUrl)
    });
};

function testing() {
    console.log('test');
    username = 'elsalvador_kobo';
    password = 'KoBoElSalvador';

// Make an API call with Basic Authentication headers


//console.log(headers);

    getEnketoViewUlr('aPJeBGZLjjJwgLZaYZQtsm', '35239549', username, password);
}


