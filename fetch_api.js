// get req feth api need only 1 parameter that is url 
const getdata = ()=>{
    url = "https://jsonplaceholder.typicode.com/posts/";
    fetch(url)
    .then((response)=>
    {
        return response.json()
    })
    .then((data)=>
    {
        console.log(data)
    })
}
getdata();


// const  postdata = ()=>{
//         url = "https://jsonplaceholder.typicode.com/posts";
//         data = "daudadajdja adjakdjakdj djakdaj kjdkasj"
//         parameter = {
//             method : "POST",
//             Headers : {
//                 'Content-Type' : "application/json"
//             },
//             body : JSON.stringify(data)
//         }
//         fetch(url,parameter)
//         .then((response)=>
//         {
//             return response.json()
//         })
//         .then((data)=>
//         {
//             console.log(data)
//         })
//     }
//     postdata ();