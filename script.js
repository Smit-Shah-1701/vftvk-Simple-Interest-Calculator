function compute(){
    

    var principalAmountElement = document.getElementById("principal");
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * rate * years) / 100 ;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = parseInt(principal) + parseInt(interest);

    if (principal<=0){
        alert("Enter a positive principal amount");
        principalAmountElement.focus();
        return false;
    }

    document.getElementById("result").innerHTML="If you deposit <yellowBg>"+principal+"</yellowBg>,<br> at an interest rate of <yellowBg>"+rate+"%</yellowBg>.<br> You will receive an amount of <yellowBg>"+amount+"</yellowBg>,<br> in the year <yellowBg>"+year+"</yellowBg>";
}


function updateRate(){
    var ratevalue = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=ratevalue+"%";
}
