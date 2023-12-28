console.clear();
 axios.post('https://jsonplaceholder.typicode.com/posts/ ',
 {
      
      body:JSON.stringify({
        title:' Newton',
        body:'bar',
        userId:161,
      }),
      
        
 })
 
 .then((response) => {
   console.log(response.data)
 }).catch((error) => {
   console.log(error)
 });
