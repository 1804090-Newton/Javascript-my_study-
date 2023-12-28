
const makeRequest=async(url,config)=>{
    const res=await fetch(url,config);
    if(!res.ok){
      const message=`Error:${res.status}`;
      throw new Error(message);
    }
    const data=await res.json();
    return data;
};
const sendData=()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            title:'foo',
            body:'bar',
            userId:1
        })
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });


};
//sendData();
const getData=()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1',{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            title:'foor is dddddd is ddss',
           // body:'bar',
           // userId:1
        })
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
}
getData();







//  fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:'PATCH',
//     headers:{
//         'Content-Type':'application/json'
//     }, 
//     body:JSON.stringify({
//         title:'fooe is bad boy'
        
//     })
//  }).then((res)=>{
//     if(!res.ok)
//        {
//         const message=` Error:${res.status}`
//         throw new Error(message);

//        }
//        return res.json(); }).then((data)=>{
//         console.log(data);
//     }).catch((err)=>{
//         console.log(err);
//     });