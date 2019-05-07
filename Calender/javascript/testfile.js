//values before month start
// for(var i = date1WeekDay ; i > 0 ; i--) {
        //     var prevMonthValue = lastDatePrev.getDate() - i + 1;
        //     var newelement = document.createElement('div');
        //     newelement.className = "week-content row-data";
        //     newelement.innerHTML = prevMonthValue;
        //     //console.log(newelement);
        //     document.getElementById('date').appendChild(newelement);
        // } 

//values after month end
// for (var i = 1; i <= 6 - lastDayWeek ; i++) {
        //     var newelement = document.createElement('div');
        //     newelement.className = "week-content row-data";
        //     newelement.innerHTML = i;
        //     // console.log(newele);
        //     document.getElementById('date').appendChild(newelement);
        // } 

//values from objects
        // for (var j = 0; j < 2; j++) {
            //     // console.log("inside for");
            //     // console.log(bdays[j].dob.getDate());
            //     // console.log(bdays[j].dob.getMonth());
            //     if (bdays[j].dob.getDate() == i && bdays[j].dob.getMonth() == mon) {
            //         document.querySelectorAll('#date .date-content')[i - 1].setAttribute("style", "color: #ffffff; border-radius: 50%; background-color: #ff0000;");
            //         document.querySelectorAll('#date .date-content')[i - 1].setAttribute('data-toggle','modal');
            //         document.querySelectorAll('#date .date-content')[i - 1].setAttribute('data-target', '#my');
            //         //console.log(bdays[i].name);
            //         document.querySelectorAll('.modal-title')[0].innerHTML = "Happy Birthday " + bdays[j].name;
            //     }
            // }



for (var i = 1 ; i <= lastDate; i++) {
            while(date1WeekDay > 0) {
                console.log(date1WeekDay);
                newelement = document.createElement('div');
                newelement.className = "week-content row-data";
                var incr = lastDatePrev.getDate() - date1WeekDay +1;
                newelement.innerHTML = incr;
                document.getElementById('date').appendChild(newelement);
                date1WeekDay--;
            }
            newelement = document.createElement('div');
            newelement.className = "week-content date-content";
            newelement.innerHTML = i;
            var currentMonth = date.getMonth();
            var currentYear = date.getFullYear();
            
            //console.log(newele);
            document.getElementById('date').appendChild(newelement);
            if (i == today && currentMonth == mon && currentYear == year) {
                //console.log("inside loop");
                //console.log(i);
                //console.log(today);
                //console.log(document.querySelectorAll('#date > .week-content')[i-1]);
                document.querySelectorAll('#date .date-content')[i-1].style.backgroundColor = "#ccffff";
                document.querySelectorAll('#date .date-content')[i-1].style.borderRadius = "50%";
            }
            // for (var j = 0; j < 2; j++) {
            //     // console.log("inside for");
            //     // console.log(bdays[j].dob.getDate());
            //     // console.log(bdays[j].dob.getMonth());
            //     if (bdays[j].dob.getDate() == i && bdays[j].dob.getMonth() == mon) {
            //         document.querySelectorAll('#date .date-content')[i - 1].setAttribute("style", "color: #ffffff; border-radius: 50%; background-color: #ff0000;");
            //         document.querySelectorAll('#date .date-content')[i - 1].setAttribute('data-toggle','modal');
            //         document.querySelectorAll('#date .date-content')[i - 1].setAttribute('data-target', '#my');
            //         //console.log(bdays[i].name);
            //         document.querySelectorAll('.modal-title')[0].innerHTML = "Happy Birthday " + bdays[j].name;
            //     }
            // }
            var demo =1;
            while (lastDateWeekDay < 6 && i == lastDate) {
                console.log(lastDateWeekDay);
                newelement = document.createElement('div');
                newelement.className = "week-content row-data";
                newelement.innerHTML = demo ++;
                document.getElementById('date').appendChild(newelement);
                lastDateWeekDay++;
            }
        }

        // for (var i = 1; i <= 6 - lastDayWeek ; i++) {
        //     var newelement = document.createElement('div');
        //     newelement.className = "week-content row-data";
        //     newelement.innerHTML = i;
        //     // console.log(newele);
        //     document.getElementById('date').appendChild(newelement);
        // } 
    //}




    // var bdays = [
    //     {
    //         name : "Pranav vaidya",
    //         dob : new Date("02/25/1996"),
    //         text : "happy bday",
    //     },
    //     {
    //         name: "Anjana singh",
    //         dob: new Date("07/24/1992"),
    //         text: "happy bday",
    //     },
    // ]

    object = { 
        
        baz: 
        { 
            foo: { bar: 5 } 
        }
    };



    var bdays = {
        Jan: [
            {
                name : "Shubham katariya",
                dob : new Date(01/03/1995),
            },
            {
                name: "Darshana Shrivastava",
                dob : new Date(01/15/1997),
            },
            {
                name: "Shikha Shakarwar",
                dob : new Date(01/15/1994),
            },
            {
                name : "Vipin Joshi",
                dob : new Date(01/15/1946),
            },
            {
                name: "sagar Mishra",
                dob : new Date(01/31/1996),
            }
        ],
        Feb: [
            {
                name : "Pranav vaidya",
                dob : new Date("02/25/1996"),
            },
            {
                name: "Anjana singh",
                dob: new Date("07/24/1992"),
            },
        ]
    }


    // var ab = 
    //console.log(month);
    // var bdays = [
    //         {
    //             name : "Pranav vaidya",
    //             dob : new Date("02/25/1996"),
    //             text : "happy bday",
    //         },
    //         {
    //             name: "Anjana singh",
    //             dob: new Date("07/24/1992"),
    //             text: "happy bday",
    //         },
    //         {

    //         },
    //     ]
    // var temp = [
    //     // j=0 january
    //     [
    //         {
    //             name: "Pranav vaidya",
    //             dob: new Date("02/25/1996"),
    //             text: "happy bday",
    //         },
    //     ],
    //     // j=1 february
    //     [
    //         {
    //             name: "Anjana singh",
    //             dob: new Date("07/24/1992"),
    //             text: "happy bday",
    //         },
    //     ]
    // ];

    // //console.log(temp[0][0].dob.getDate());
    // for (var j = 0; j < 2; j++) {
    //     console.log(temp[j][0].dob.getDate());
    // }
    //console.log(tempe[month][day])


    jaunary = [
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
        name: "sagar Mishra",
        dob: new Date("01/31/1996"),
    },
    ], 
    February =
    {
        name: "Pranav vaidya",
        dob: new Date("02/25/1996"),
    },
    April =
    {
        name: "Gurpreet Chhabra",
        dob: new Date("04/02/1995"),
    },
    {
        name: "Sonam Gupta",
        dob: new Date("04/22/1987"),
    },
    May =
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
    June =
    {
        name: "Awanish Tiwari",
        dob: new Date("07/06/1974"),
    },
    {
        name: "Surendra patidar",
        dob: new Date("07/21/1988"),
    },
    July =
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
    October =
    {
        name: "Piyush Chandak",
        dob: new Date("10/16/1996"),
    },
    {
        name: "Rashmi Soni",
        dob: new Date("10/19/1993"),
    },
    November =
    {
        name: "Priyanshi Asawara",
        dob: new Date("11/19/1993"),
    },
    December =
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