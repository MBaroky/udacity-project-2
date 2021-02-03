/* Global Variables */
const key = '5bc232d05bmshd22ca8d5b3fee96p138064jsn47a5d0cdb5a5';
const baseURL = 'https://openweatherapp.p.rapidapi.com';

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

doPost('/addData', {temp:300, date: newDate, userRes:`I'm freezing`});