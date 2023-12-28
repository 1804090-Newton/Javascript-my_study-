// function square(x){
//     console.log(`The square of ${x} is ${x*x}`);
// }

// function higherOrderFunction(num, callback){
//     callback(num);
// }

// higherOrderFunction(7, square);



const taskone=(callback)=>{
    console.log("task1");
      callback();
    }
    //const dataloading=
    
    const tasktwo=(callback)=>{
    setTimeout(()=>{
        console.log("Data Loading task 2");
        callback();
    },20);
    
    }
    const taskthree=(callback)=>{
    console.log("task3");
    callback();
    }
    const taskfour=(callback)=>{    
    console.log("task4");
    callback();
    }
    const taskfive=(callback)=>{
    console.log("task5");
    callback(); 
    }
    taskone( f1=()=>{
        tasktwo( f2=()=>{
          taskthree(f3=()=>{
            taskfour(f4=()=>{
              taskfive(f5=()=>{
                console.log("task6");
              });
            });

          });
        });
    });
    
    