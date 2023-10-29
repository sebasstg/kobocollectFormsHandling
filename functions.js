function getEnketoViewUlr(formid, submissionId, username, password) {
    // code to be executed
    // return statement (optional)
    const apiUrl = 'https://kobo.unhcr.org/api/v2/assets/' + formid + '/data/' + submissionId + '/enketo/view/?return_url=false'; // Replace with your API endpoint URL
    const headers = new Headers();
    console.log(username);
    console.log(password);

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
    //headers.append('Origin', 'http://localhost:63343');
    //headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Headers",
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    console.log(headers);
    console.log(headers.get('Authorization'));
    fetch(apiUrl,
        {
            mode: "cors",
            method: 'GET',
            headers: headers,
            credentials: 'include',
        }
    )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const formUrl = data.url;
            console.log(formUrl);
            return formUrl
        })
        .catch(error => console.error(error));
};

// JavaScript text
// JavaScript code to extract and display the parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const parameterValue = urlParams.get('parameter_name');

// Display the parameter value on the web page
const parameterDisplay = document.createElement('p');
parameterDisplay.textContent = 'Parameter Value: ' + parameterValue;
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


