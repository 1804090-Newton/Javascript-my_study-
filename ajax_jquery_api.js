

console.clear();
 // console.log(window);

 const makeRequest=async(url,method,data)=>{
    try{
        const result= await $.ajax({
            url:url,
            method:method,
            data:data,
        });
        return result;
      }
       catch(error){
          console.log(error);
      };
       
 }


 const deleteData=()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/3','DELETE').then(
        (res)=>{
            console.log(res);
        });

 };
 deleteData();

// similar way  to get , put, post, delete, patch  data from api





//  const getData=()=>{
//     makeRequest('https://jsonplaceholder.typicode.com/posts/3','PUT',
//           {
//             title: 'fooooot',
//             body: 'baritala',
//             userId: 2,
//           }).then(
//         (res)=>{
//             console.log(res);
//         });

//  };
//  getData();