/* Global Variables */
const key = '&units=imperial&appid=3944bf9f5d03c16fc0a07f6efc71758a';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// get async fnc
const doGet = async (baseURL, find, key)=>{
    const req = await fetch(baseURL + find +  key);
    console.log(baseURL + find + key);
    try {
        const data = await req.json();
        console.log(data.main.temp);
        return data;
    } catch (error) {
        console.log(error)
    }
}

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

// function to run when generate button is clicked
const onSubmit = ()=>{
    let find = document.getElementById('zip').value;// '94040';
    let phrase = document.getElementById('feelings').value;// '94040';

    doGet(baseURL, find, key) // getting the data from weather API
    .then(function(data){
        console.log(data.main.temp);
        // then posting this data and the input from user to our endpoint
        doPost('/addData', {temp:data.main.temp,date: newDate, userRes:phrase});
        // then getting the endpoint entries und updating our UI with the latest entry
        updateUI();
    });
}

// updateui function
const updateUI = async()=>{
    const req = await fetch('/getData');
    try {
        const updateUIData = await req.json();
        const {temp, date, userRes} = updateUIData; // deconstructing the latest entry from the endpoint on our server
        document.getElementById('date').innerHTML = `Today is: ${date}`;
        document.getElementById('temp').innerHTML = `Temprature is: ${temp} °C`;
        document.getElementById('content').innerHTML = `You feel: ${userRes}`;

    } catch (error) {
        console.log(error);
    }
}

// the onClick associated with generate button
document.getElementById('generate').addEventListener('click',onSubmit);