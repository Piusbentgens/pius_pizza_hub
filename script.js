function calculateTuition(){
    var income = parseFloat($("#txtIncome").val());
    var noKids = parseFloat($("#txtKids").val());
    var tuition = 0;
    var tuition_pc = 0;
    var kids_disc = noKids*0.1;


    if (income > 0 && income < 20000) {
        tuition = 500;
    } else if (20000 <= income && income < 30000) {
        tuition = 600;
    } else if (30000 <= income && income < 40000) {
        tuition = 700;
    } else if (40000 <= income && income < 50000) {
        tuition = 800;
    } else if (50000 <= income && income < 60000) {
        tuition = 900;
    } else if (60000 <= income && income < 70000) {
        tuition = 1000;
    } else if (70000 <= income && income < 80000) {
        tuition = 1100;
    } else if (80000 <= income && income < 90000) {
        tuition = 1200;
    } else if (90000 <= income && income < 100000) {
        tuition = 1300;
        tuition_pc = parseInt(tuition / noKids);
    } else if (income >= 100000) {
        tuition = 1400;
    } else {
        tuition = "Invalid income entered";
    }
    if (noKids <= 5){
        tuition_pc = parseInt(tuition - tuition*kids_disc);
    }  else {
        tuition_pc = parseInt(tuition - tuition*0.5);
    }


    $("#tuition-total").html(tuition);
    $("#per-child").html(tuition_pc);


}


