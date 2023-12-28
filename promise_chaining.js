console.log("welcome");
const taskone=()=>{

    return new Promise((resolve,reject)=>{
        resolve("task 1 is completed");
        reject("task 1 is not  completed");
    });
};
const tasktwo=()=>{

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("task 2 is completed");
        },2000);
        
    });
};
const taskthree=()=>{

    return new Promise((resolve,reject)=>{
        resolve("task 3 is completed");
    });
};
const taskfour=()=>{

    return new Promise((resolve,reject)=>{
        reject("task 4 is not completed");
    });
};

taskone().then((res)=>console.log(res))
        .then(tasktwo)
        .then((res)=>console.log(res))
        .then(taskthree)
        .then((res)=>console.log(res))
        .then(taskfour)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err));


  console.log("end");      

