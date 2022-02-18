var submit = document.getElementById("submitRoute");
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


//Clock
currentTime.textContent = moment().format('MMMM Do YYYY, LT');

//Calendar
$(function () {
    $("#datepicker").datepicker();
});


//Add Route Form
submit.addEventListener('click', addDelivery());

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

    let newDelivery = document.createElement('div');
    newDelivery.classList.add('delivery');
    
    for (let i=0; i<delivery.length; i++) {
        let newColumn = document.createElement('p');
        newColumn.textContent = delivery[i].value;
    }

    newDelivery.append(content);

    console.log(delivery);
  
}

