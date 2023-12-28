console.clear();

// Event: onload(), onerror()
// Properties: readyState, status, statusText, responseText, responseXML 
const makeRequest = (method, url, requestData) => { 
    return  new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
    
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        xhr.onload = () => {
            let responseData = xhr.response;
            console.log(JSON.parse(responseData));
        }
    
        xhr.onerror = () => {   
            console.log('Error Occurred');
        }
    
        xhr.send(JSON.stringify(requestData));

    })
   
}  

const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts').then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
}

// const sendData = () => {
//     makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     });
// }

// const updateData = () => {
//     makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
//         title: 'Al jabir',
//         body: 'vaiya',
//         userId: 6,
//     });
// }

// const updatesingleData = () => {
//     makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
//         title: 'Asif',
       
//     });
// }
// const deleteData = () => { 
//     makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
// }

 getData();
//sendData();
//updateData();
//updatesingleData();
//deleteData();
