const submit = document.getElementById("submitRoute");
var route = document.getElementById("route").value;
var run = document.getElementById("run").value;
var truck = document.getElementById("truck").value;
var driver = document.getElementById("driver").value;
var customer = document.getElementById("customer").value;
var job = document.getElementById("job").value;
var referenceNumber = document.getElementById("referenceNumber").value;
var notes = document.getElementById("notes").value;
var currentTime = document.getElementById("currentTime");
var content = document.getElementById('content');
const settings = document.getElementById('settings');
const minOrMax = document.getElementById('minOrMax');
const routeMaker = document.getElementById('routeMaker');

var delivery = {
    route: "",
    run: "",
    truck: "",
    driver: "",
    customer: "",
    job: "",
    referenceNumber: "",
    notes: ""
    }

//Settings
settings.addEventListener('click', settingsModal());

//Clock
// currentTime.textContent = moment().format('MMMM Do YYYY, LT');
window.setInterval(function () {
    currentTime.textContent = moment().format('MMMM Do YYYY, LT');
}, 1000);

//Calendar
$(function () {
    $("#datepicker").datepicker();
});

minOrMax.addEventListener('click', () => {
    if (minOrMax.textContent === '+') {
        minOrMax.textContent = '-';
        routeMaker.style.visibility = 'visible';
        routeMaker.style.height = 'max-content'
    }
    else {
        minOrMax.textContent = '+';
        routeMaker.style.visibility = 'hidden';
        routeMaker.style.height = '35px';
    }
    
})

//Add Route Form
submit.addEventListener('click', () => addDelivery());

//Route Form
function addDelivery() {

    delivery = {
        route: route,
        run: run,
        truck: truck,
        driver: driver,
        customer: customer,
        job: job,
        referenceNumber: referenceNumber,
        notes: notes
    }

    let deliveryInput = Object.values(delivery);

    let newDelivery = document.createElement('div');
    newDelivery.classList.add('delivery');
    
    for (let i=0; i < Object.keys(delivery).length; i++) {
        let newColumn = document.createElement('p');
        newColumn.textContent = deliveryInput[i];
        newDelivery.append(newColumn)
    }

    content.append(newDelivery);

    console.log(delivery);
  
}

//Settings Modal Window
function settingsModal() {
    
}

