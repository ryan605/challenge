const prompt=require("prompt-sync")();
function calculateSalary(personalRelief,totDeduct,NHIF,NSSF,grossSalary,taxableIncome)

{
let payee;
personalRelief= +2400;
grossSalary= +prompt("enter salary amount")
NHIF= +prompt("enter NHIF deductions")
NSSF= +prompt("enter NSSF deductions")

totDeduct=(NSSF+ personalRelief+ NHIF)
taxableIncome=(grossSalary-totDeduct);

console.log(`Your taxable income is Ksh:${taxableIncome}`)
console.log(`Your total dedactions is Ksh:${totDeduct}`)
//code give total deductions and taxable income

if (taxableIncome <=24000) {
    payee=taxableIncome*0.1
}else if (taxableIncome >=24001 && taxableIncome <=32333){
    payee=taxableIncome*0.25;
}else(taxableIncome >32333)
    payee=taxableIncome*0.3
//program calculates payee

 netSalary=(taxableIncome - payee)
 console.log(`Your net salary is Ksh:${netSalary}`)
}
calculateSalary()