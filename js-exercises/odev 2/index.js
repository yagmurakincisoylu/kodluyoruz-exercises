const getTodayDate = () => {
    const today = new Date();
    const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    let date = today.getDate();
    let month = months[today.getMonth()];
    let year = today.getFullYear();
    let day = weekDays[today.getDay()];

    document.getElementById("date").textContent = date;
    document.getElementById("month").textContent = month;
    document.getElementById("year").textContent = year;
    document.getElementById("day").textContent = day;
}

getTodayDate();

// adding list items

const listArray = []; // for localStorage

const addElement = () => {
    const listText = document.getElementById("inputText");
    const list = document.getElementById("list");

    // adding and removing alert div
    const alertDiv = document.getElementById("alert");
    const alertText = document.getElementById("alertText");
    const deleteBtn = document.getElementById("deleteBtn");
    
    deleteBtn.addEventListener("click", deleteAlert)

    function deleteAlert() {
        this.parentElement.classList.add("display");
    }

    if (listText.value == 0 || listText.value == null) {
        alertText.textContent = "Please do not leave the field blank!";
        alertDiv.classList.remove("display");
    } else {

        // adding li element to ul

        const li = document.createElement("li");
        li.classList.add("flex")
        li.innerHTML = `
            <p>${listText.value}</p>
            
        `;
        list.appendChild(li);
        li.onclick = check;


        // adding button element to li

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerHTML = `
            <i class="fa-solid fa-xmark"></i>
        
        `;
        li.appendChild(deleteBtn);
        deleteBtn.onclick = deleteElement;

        // list item added alert
        alertText.textContent = "List item added!";
        alertDiv.classList.remove("display");

        // adding listArray to the localStorage
        listArray.push(listText.value);
        localStorage.setItem("to do list", JSON.stringify(listArray));
    }

    listText.value = "";
}

document.getElementById("submitBtn").addEventListener("click", addElement);

// deleting list items function

function deleteElement() {
    this.parentElement.remove();
}

// checked element function

function check(){
    this.classList.toggle("checked");
}


// localStorage.clear()