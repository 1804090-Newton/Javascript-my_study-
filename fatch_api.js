console.clear();
 fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'PATCH',
    headers:{
        'Content-Type':'application/json'
    }, 
    body:JSON.stringify({
        title:'fooe is bad boy'
        
    })
 }).then((res)=>{
    if(!res.ok)
       {
        const message=` Error:${res.status}`
        throw new Error(message);

       }
       return res.json(); }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });