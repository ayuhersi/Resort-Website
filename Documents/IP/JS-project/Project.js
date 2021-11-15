function fn(){
var d = new Date();

//adding var 
var date = parseInt(document.getElementById("day").value);
var month = parseInt(document.getElementById("month").value);
var year = parseInt(document.getElementById("year").value);
// setting up the days
if (day < 0 || day > 31) {
    document.getElementsByClassName("dayerror").innerHtml = "Enter valid date";
} else if (date == "") {
        document.getElementsByClassName("dayerror").innerHtml = "This field cannot be empty";
        return false;
} else; {
            d.setDate(date);
        
}
// setting up the months
if (month < 0 || month == 12) {
    document.getElementsByClassName("montherror").innerHtml = "Enter valid date";
} else if (month == "") {
        document.getElementsByClassName("montherror").innerHtml = "This field cannot be empty";
        return false;
} else; {
            d.setMonth(month);


// setting up the year
if (month< 0 ){
    document.getElementsByClassName("yearerror").innerHtml = "Enter valid date";
} else if (year == "") {
        document.getElementsByClassName("yearerror").innerHtml = "This field cannot be empty";
         return false;
} else; {
            d.setYear(year);
        
}
//connecting days of the week to names
var day = d.getDay();
var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
var male = [ 'Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', "Kwame"]
var female = [ 'Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

//calculating function
function getAkan() {
    var ismale = document.getElementById('male').checked;
    var isfemale = document.getElementById('female').checked;
 if (ismale == true && isfemale == false) {
     if (day == 0){
         alert("your name is " + male[0]);
        }
    
     else if (day == 1) {
         alert("your name is " + male[1]);
        }
   
     else if (day == 2) {
         alert("your name is " + male[2]);
        }
   
     else if (day == 3) {
         alert("your name is " + male[3]);
        }
   
     else if (day == 4) {
         alert("your name is " + male[4]);
        }  
     else if (day == 5) {
            alert("your name is " + male[5]);
        }

     else if (day == 6) {
            alert("your name is" + male[6]);
        }


}   else if (ismale == false && isfemale == true) {
       if (day == 0) {
         alert("your name is " + female[0]);
        }
    
     else if (day == 1) {
         alert("your name is " + female[1]);
        }
   
     else if (day == 2) {
         alert("your name is " + female[2]);
        }
   
     else if (day == 3) {
         alert("your name is " + female[3]);
        }
   
      else if (day == 4) {
         alert("your name is " + female[4]);
        }  
      else if (day == 5) {
            alert("your name is " + female[5]);
        }

      else if (day == 6) {
            alert("your name is" + female[6]);
        }
        


    }
    }
    getAkan();
    function calculatingDay(){
        year = document.getElementById('year').value;
        cc = parseInt(year.substring(0,2));
    }

}

}
