class EasyHTTP{
    // GET REQUESTS W/o PROMISE
    // get(url){
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //         .then(err=>console.log(err))
    // }
    // GET WITH PROMISES
    // get(url){
    //   return new Promise((resolve,reject)=>{
    //       fetch(url)
    //         .then(res=>res.json())
    //         .then(data=>resolve(data))
    //         .catch(err=>reject(data));
    //   })  
    // }
    // GET WITH ASYNC AWAIT
    async get(url){
        const response = await fetch(url);
        const resData  = await response.json();
        return resData;
       }
    // POST REQUESTS WITH PROMISES
    // post(url,data){
    //    return new Promise((resolve,reject)=>{
    //        fetch(url,{
    //            method:'POST',
    //            headers:{
    //                'Content-type':'application/json'
    //            },
    //            body:JSON.stringify(data)

    //        })
    //        .then(res=>res.json())
    //        .then(data=>resolve(data))
    //        .catch(err=>reject(err))
    //     })
    // }
    // POST WITH ASYNC AWAIT
    async post(url,data){
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }
    // PUT REQUESTS WITH PROMISES
    // put(url,data){
    //     return new Promise((resolve,reject)=>{
    //         fetch(url,{
    //             method:'PUT',
    //             headers:{
    //                 'Content-type':'application/json'
    //             },
    //             body:JSON.stringify(data)
 
    //         })
    //         .then(res=>res.json())
    //         .then(data=>resolve(data))
    //         .catch(err=>reject(err))
    //      })
    //  }
    // PUT WITH ASYNC AWAIT
    async put(url,data){
        const response = await fetch(url,{
            method:'PUT',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }
    //  DELETE REQUESTS WITH THEN 
    // delete(url){
    //     return new Promise((resolve,reject)=>{
    //         fetch(url,{
    //             method:'DELETE',
    //             headers:{
    //                 'Content-type':'application/json'
    //             }
    //         }) 
    //         .then(res=>res.json())
    //         .then(resolve("DELETED!"))
    //         .catch("NOT DELETED")
    //     })

       async delete(url){
        const response = await fetch(url,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            }
        });
        const resData  = await response.json();
        return resData;
       }
    
}