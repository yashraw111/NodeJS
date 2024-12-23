const fs = require('fs')

// sync return the anything
//  const result = fs.readFileSync('./contact.txt',"utf-8")


//  this method expected callback function
//  fs.readFile("./contact.txt",'utf-8',(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
//  })
//  console.log(result);

// fs.appendFileSync('./contact.txt',new  Date().getDate().toLocaleString())

//Sync -- blocking

// fs.writeFileSync("./test.txt","hello world")

// //ASync -- Non-blocking


// fs.writeFile('./test.txt',"hello world Async",(err)=>{})
    // fs.writeFile("hello.txt","<h1>Hello i am yash panchal </h1>",(err)=>{
    //     if(err){
    //         console.log(err);
            
    //     }
    //     else{
    //         console.log("done");
    //     }
    // })\
    // fs.appendFile("hello.txt","and i am developer",(err)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log("Done");
            
    //     }
    // })

    // fs.rename('hello.txt',"first.txt",(err)=>{
    //     if(err){
    //         console.log(err);
            
    //     }
    //     else{
    //         console.log("update");
            
    //     }
    // })

    // fs.copyFile('first.txt',"./copy/new.txt",(err)=>{
    //     if(err){
    //         console.log(err);
            
    //     }
    //     else{
    //         console.log("done");
            
    //     }
    // })


    // fs.unlink("first.txt",(err)=>{
    //     if(err){
    //         console.log(err);
            
    //     }
    //     else{
    //         console.log("delete ??");
    //     }
    // })\
    
    // fs.rmdir('./copy',{recursive:true},(err)=>{
    //     if(err) console.error(err);
    //     else console.log("removed");
        
        
    // })
    // fs.rm ('./copy/index',{recursive:true},(err)=>{
    //     if(err) console.error(err);
    //     else console.log("removed");
    // })
    // fs.writeFile('./copy/text.txt',"yash panchal",(err)=>{
    //     if(err){
    //         console.log(err);

            
    //     }
    //     else{
    //         console.log("create");
            
    //     }
    // }) 

       fs.readFile('./copy/text.txt',(err)=>{
        if(err){
            console.log(err);

            
        }
        else{
            console.log("create");
            
        }
    })

    // fs.mkdir("./copy/index",{recursive:true},(err)=>{
    //     if(err){
    //         console.log(err);
            
    //     }
    //     else{
    //         console.log("create folder");
            
    //     }
    // })
