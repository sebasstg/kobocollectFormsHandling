console.log('test');
username = 'elsalvador_kobo';
password = 'KoBoElSalvador';

// Make an API call with Basic Authentication headers


//console.log(headers);

getEnketoViewUlr('aPJeBGZLjjJwgLZaYZQtsm','35239549',username, password);




function getEnketoViewUlr(formid, submissionId, username,password) {
    // code to be executed
    // return statement (optional)
    const apiUrl = 'https://kobo.unhcr.org/api/v2/assets/'+formid+'/data/'+submissionId+'/enketo/view/?return_url=false'; // Replace with your API endpoint URL
    const headers = new Headers();
    console.log(username);
    console.log(password);
    headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
    fetch(apiUrl,
        {
            method: 'GET',
            headers: headers,
            mode: 'no-cors', // <---
            cache: 'default'
        }
    )
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const formUrl= data.url;
            console.log(formUrl);
            return formUrl
        })
        .catch(error => console.error(error));
}