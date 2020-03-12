function calculateTuition(){
    var income = parseFloat($("#txtIncome").val());
    var noKids = parseFloat($("#txtKids").val());
    var tuition = 0;
    var tuition_pc = 0;
    var kids_disc = noKids*0.1 - 0.1;
    var tuition1 = 0;
    var tuition2 = 0;

    if (income > 0 && income < 20000) {
        tuition = 300;
    } else if (20000 <= income && income < 30000) {
        tuition = 400;
    } else if (30000 <= income && income < 40000) {
        tuition = 500;
    } else if (40000 <= income && income < 50000) {
        tuition = 600;
    } else if (50000 <= income && income < 60000) {
        tuition = 700;
    } else if (60000 <= income && income < 70000) {
        tuition = 800;
    } else if (70000 <= income && income < 80000) {
        tuition = 900;
    } else if (80000 <= income && income < 90000) {
        tuition = 1000;
    } else if (90000 <= income && income < 100000) {
        tuition = 1100;
    } else if (income >= 100000 && income < 120000) {
        tuition = 1200;
    } else if (income >= 120000) {
        tuition = 1300;
    } else {
        tuition = "Invalid income entered";
    }

    if (noKids <= 4){
        tuition = parseInt((tuition - tuition*kids_disc))
        tuition_pc = parseInt((tuition - tuition*kids_disc)/noKids);
    }  else {
        tuition = parseInt(tuition - tuition*0.5)
        tuition_pc = parseInt((tuition - tuition*0.5)/noKids);
    }

    if (tuition <= 400) {
        tuition1 = tuition;
        tuition2 = tuition + 200;
    } else {
        tuition1 = tuition - 100;
        tuition2 = tuition + 100
    }

    tuition_pc = tuition
    tuition = tuition*noKids;

    $("#tuitionrange1").html(tuition1);
    $("#tuitionrange2").html(tuition2);
    $("#tuition-total").html(tuition);
    $("#per-child").html(tuition_pc);
}


