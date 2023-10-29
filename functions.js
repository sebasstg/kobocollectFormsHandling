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
    const form = document.getElementById('loginForm');
    console.log('form:')
    console.log(form)


    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get username and password from the form
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        username = 'elsalvador_kobo';
        password = 'KoBoElSalvador';

        // Make an API call with Basic Authentication headers
        const apiUrl = 'https://kobo.unhcr.org/api/v2/assets/aPJeBGZLjjJwgLZaYZQtsm/data/35239549/enketo/view/?return_url=false'; // Replace with your API endpoint URL
        const headers = new Headers();
        console.log(username);
        console.log(password);

        headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));



        fetch(apiUrl, {
            method: 'GET',
            headers: headers,
            mode: 'no-cors', // <---
            cache: 'default'
        })
            .then(response => {
                console.log(response.ok);
                console.log(response.type);
                console.log(response.headers);

                console.log('response::::')
                    console.log(response);
                }
            )
            /*
            .then(response => response.json())
            .then(data => {
                // Handle the JSON response with two fields (e.g., data.field1, data.field2)
                console.log(data);
            })

             */
            .catch(error => {
                console.log(error);
                alert(error);
                console.error('Error:', error);

            });
    });
};


