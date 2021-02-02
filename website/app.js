/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// post async function
const doPost = async (url='', data ={})=>{
    const res = await fetch(url, {
        method:'Post',
        credentials: 'same-origin',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(data)
    });
    try {
        const newData = await res.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log(error);
    }
}

doPost('/addData', {'test':'hello'});