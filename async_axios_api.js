console.clear();

const makeRequest=async(config)=>{
    return await axios(config);
}

const createData=()=>{
   makeRequest({
              method:'post',
              url:'https://jsonplaceholder.typicode.com/posts',
              data:JSON.stringify(  {
                title:'Newton',
                body:'bar',
                userId:161,
              })
       }).then(
    (res)=>{
        console.log(res.data);
    }).catch((err)=>{
        console.log(err);
    });
};

createData();










// axios.post('https://jsonplaceholder.typicode.com/posts/ ',
// {
     
//      body:JSON.stringify({
//        title:' Newton',
//        body:'bar',
//        userId:161,
//      }),
     
       
// })
// .then((response) => {
//   console.log(response.data)
// }).catch((error) => {
//   console.log(error)
// });