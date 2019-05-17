function LoadScript() {
    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var date = new Date();
    var weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var month = date.getMonth();
    var year = date.getFullYear();
    var decrementMonth = document.getElementById('left-arrow-month');
    var incrementMonth = document.getElementById('right-arrow-month');
    var decrementYear = document.getElementById('left-arrow-year');
    var incrementYear = document.getElementById('right-arrow-year');
    var bdays = {
        January: [
            {
                name: "Shubham katariya",
                dob: new Date("01/03/1995"),
            },
            {
                name: "Darshana Shrivastava",
                dob: new Date("01/15/1997"),
            },
            {
                name: "Shikha Shakarwar",
                dob: new Date("01/15/1994"),
            },
            {
                name: "Vipin Joshi",
                dob: new Date("01/15/1946"),
            },
            {
                name: "Deeksha Verma",
                dob: new Date("01/26/1996"),
            },
            {
                name: "Sagar Mishra",
                dob: new Date("01/31/1996"),
            },
        ],
        February: [
            {
                name: "Pranav vaidya",
                dob: new Date("02/25/1996"),
            },
        ],
        March: [
        ],
        April: [
            {
                name: "Gurpreet Chhabra",
                dob: new Date("04/02/1995"),
            },
            {
                name: "Sonam Gupta",
                dob: new Date("04/22/1987"),
            },
        ],
        May: [
            {
                name: "Siyaram patidar",
                dob: new Date("05/03/1985"),
            },
            {
                name: "Shubham Choubey",
                dob: new Date("05/05/1993"),
            },
            {
                name: "Mayur Vaidya",
                dob: new Date("05/09/1995"),
            },
            {
                name: "Amit Nagar",
                dob: new Date("05/10/1986"),
            },
            {
                name: "Deepak Patidar",
                dob: new Date("05/10/1990"),
            },
            {
                name: "Rahul Kulmi",
                dob: new Date("05/28/1988"),
            },
        ],
        June: [

        ],
        July: [
            {
                name: "Awanish Tiwari",
                dob: new Date("07/06/1974"),
            },
            {
                name: "Surendra patidar",
                dob: new Date("07/21/1988"),
            },
            {
                name: "Anjana singh",
                dob: new Date("07/24/1992"),
            },
        ],
        August: [
            {
                name: "Aaditya Paliwal",
                dob: new Date("08/08/1994"),
            },
            {
                name: "Vishal Patidar",
                dob: new Date("08/10/1994"),
            },
            {
                name: "Rahul Solanki",
                dob: new Date("08/21/1996"),
            },
        ],
        September: [
        ],
        October: [
            {
                name: "Piyush Chandak",
                dob: new Date("10/16/1996"),
            },
            {
                name: "Rashmi Soni",
                dob: new Date("10/19/1993"),
            },
        ],
        November: [
            {
                name: "Priyanshi Asawara",
                dob: new Date("11/19/1993"),
            },
        ],
        December: [
            {
                name: "Abhijeet Bhowmik",
                dob: new Date("12/03/1996"),
            },
            {
                name: "Gaurav Agrawal",
                dob: new Date("12/07/1994"),
            },
            {
                name: "Nitesh Thakur",
                dob: new Date("12/12/1990"),
            },
            {
                name: "Satya Patidar",
                dob: new Date("12/12/1983"),
            }
        ]
    }
    for (var i = 0; i < weeks.length; i++) {
        var weekContainer = document.createElement('div');
        weekContainer.className = "week-content";
        var newElement = document.createElement('div');
        weekContainer.appendChild(newElement);
        newElement.className = "date-content";
        document.getElementById('week-data').appendChild(weekContainer);
        newElement.innerHTML = weeks[i];
    }
    getDays(year, month);
    function getDays(year, month) {
        document.getElementById('month').innerHTML = months[month];
        document.getElementById('year').innerHTML = year;
        document.getElementById('date').innerHTML = "";
        var firstDay = new Date(year, month, 1);
        var lastDay = new Date(year, month + 1, 0);
        var lastDate = lastDay.getDate();
        var startingMonthDay = firstDay.getDay();
        var lastDateWeekDay = lastDay.getDay();
        var lastDatePrev = new Date(year, month, 0);
        var today = date.getDate();
        var k = 0;
        var nameAppend = [];
        var nextData = 1;
        for (var i = 1; i <= lastDate; i++) {
            var lastMonthData;
            lastMonthData = lastDatePrev.getDate() - lastDatePrev.getDay();
            while (k < startingMonthDay) {
                var weekContainer = document.createElement('div');
                weekContainer.className = "week-content";
                var newElement = document.createElement('div');
                weekContainer.appendChild(newElement);
                newElement.className = "row-data";
                newElement.innerHTML = lastMonthData;
                lastMonthData++;
                document.getElementById('date').appendChild(weekContainer);
                k++;
            }
            var weekContainer = document.createElement('div');
            weekContainer.className = "week-content";
            var newElement = document.createElement('div');
            weekContainer.appendChild(newElement);
            newElement.className = "date-content";
            newElement.innerHTML = i;
            var currentMonth = date.getMonth();
            var currentYear = date.getFullYear();
            document.getElementById('date').appendChild(weekContainer);
            if (i == today && currentMonth == month && currentYear == year) {
                document.querySelectorAll('#date .date-content')[i - 1].setAttribute("style", "border-radius: 50%; background-color: #ccffff;");
            }
            for (var j = 0; j < bdays[months[month]].length; j++) {
                if (bdays[months[month]][j].dob.getDate() == i) {
                    for (var b = j + 1; b < bdays[months[month]].length; b++) {
                        if (bdays[months[month]][j].dob.getDate() == bdays[months[month]][b].dob.getDate()) {
                            nameAppend.push(bdays[months[month]][j].name);
                            j++;
                        }
                    }
                    var x = document.querySelectorAll('#date .date-content')[i - 1];
                    x.setAttribute("style", "color: #ffffff; border-radius: 50%; background-color: #ff0000;");
                    x.setAttribute("data-date", i);
                    x.setAttribute("data-name", nameAppend + " " + bdays[months[month]][j].name);
                    x.setAttribute('data-toggle', 'modal');
                    x.setAttribute('data-target', '#open-modal');                    
                    x.onclick = function () {
                        document.querySelectorAll('.modal-title')[0].innerHTML = "Happy Birthday " + this.getAttribute('data-name');
                    }
                }
            }
            nameAppend = [];
            while (lastDateWeekDay < weeks.length-1 && i == lastDate) {
                var weekContainer = document.createElement('div');
                weekContainer.className = "week-content";
                var newElement = document.createElement('div');
                weekContainer.appendChild(newElement);
                newElement.className = "row-data";
                newElement.innerHTML = nextData++;
                document.getElementById('date').appendChild(weekContainer);
                lastDateWeekDay++;
            }
        }
    }
    incrementMonth.addEventListener('click', nextMonth);
    decrementMonth.addEventListener('click', prevMonth);
    incrementYear.addEventListener('click', nextYear);
    decrementYear.addEventListener('click', prevYear);
    function nextMonth() {
        if (month === 11) {
            month = 0;
            ++year;
        }
        else {
            ++month;
        }
        document.getElementById('month').innerHTML = months[month];
        document.getElementById('year').innerHTML = year;
        document.getElementById('date').innerHTML = "";
        getDays(year, month);
    }
    function prevMonth() {
        if (month === 0) {
            month = 12;
            --year;
        }
        --month;
        document.getElementById('month').innerHTML = months[month];
        document.getElementById('year').innerHTML = year;
        document.getElementById('date').innerHTML = "";
        getDays(year, month);
    }
    function prevYear() {
        --year;
        getDays(year, month);
    }
    function nextYear() {
        ++year;
        getDays(year, month);
    }
}