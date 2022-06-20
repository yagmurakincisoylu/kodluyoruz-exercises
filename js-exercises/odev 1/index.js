const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const getUserName = () => {
    
    let askName = prompt("Please enter your name...").trim();
    
    const capitalizeName = (str) => {
        const lowerCase = str.toLowerCase();
        return str.charAt(0).toUpperCase() + lowerCase.slice(1);
    }

    if (askName == "" || askName == null) {
        alert("Please do not leave any fields blank!");
        getUserName();
    } else {
        let userName = capitalizeName(askName);
        document.getElementById("userName").textContent = ` ${userName}`;
    }
}

const getDate = () => {
    let d = new Date();
    let day = weekDays[d.getDay()];
    document.getElementById("weekDay").textContent = day;
}

const getTime = () => {
    let d = new Date();

    const addZero = i => {
        return i < 10 ? i = "0" + i : i;
    }

    let h = addZero(d.getHours());
    let m = addZero(d.getMinutes());
    let s = addZero(d.getSeconds());

    document.getElementById("dayTime").textContent = `${h}:${m}:${s}`;
}


getDate();
setInterval(getTime, 1000);
getUserName();

