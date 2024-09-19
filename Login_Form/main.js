
// Handling an AJAX Request with Promises

const xhr= new XMLHttpRequest();
const promise=new Promise((resolve, reject)=>{
    xhr.open('GET', 'https://example.com/data', true);
    xhr.onload=function(){
        if(xhr.status === 200){
            resolve(xhr.responseText);
        }
        else{
            reject(new Error('Failed to load data'));
        }
    };
    xhr.send();
});

promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
});