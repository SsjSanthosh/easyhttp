const http = new EasyHTTP;

// GET 
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data=>console.log(data));

const data = {
    name:'John',
    job:'Cop',
    city:'Baltimore'
}

http.post('https://jsonplaceholder.typicode.com/users',data)
    .then(post=>console.log(post));

http.put('https://jsonplaceholder.typicode.com/users/4',data)
    .then(post=>console.log(post));

http.delete('https://jsonplaceholder.typicode.com/users/4')
    .then(data=>console.log(data))