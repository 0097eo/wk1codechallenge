// function to calculate net salary 
function  calculateNetSalary(basicSalary, benefits){

    // variable definition  
    const grossSalary = basicSalary + benefits
    const taxRelief = 2400
    const taxablePay = grossSalary - taxRelief
    const pensionablePay = grossSalary * 0.6
    let PAYE, NHIFDeduction, netSalary

        // calculating PAYE deductions
        if(taxablePay <= 24000){
            PAYE = taxablePay * 0.1
        }else if(taxablePay > 24000 && taxablePay <= 32333 ){
            PAYE = taxablePay * 0.25
        }else if(taxablePay > 32333 && taxablePay <= 500000){
            PAYE = taxablePay * 0.3
        }else if(taxablePay > 500000 && taxablePay <= 800000){
            PAYE = taxablePay * 0.32
        }else if(taxablePay > 800000){
            PAYE = taxablePay * 0.35
        }

        // calculating NHIF deductions 
        if(grossSalary<6000){
            NHIFDeduction = 160
        }else if(grossSalary >= 6000 && grossSalary <= 7999){
            NHIFDeduction = 300
        }
        else if(grossSalary >= 8000 && grossSalary <= 11999){
            NHIFDeduction = 400
        }
        else if(grossSalary >= 12000 && grossSalary <= 14999){
            NHIFDeduction = 500
        }
        else if(grossSalary >= 15000 && grossSalary <= 19999){
            NHIFDeduction = 600
        }
        else if(grossSalary >= 20000 && grossSalary <= 24999){
            NHIFDeduction = 750
        }
        else if(grossSalary >= 25000 && grossSalary <= 29999){
            NHIFDeduction = 850
        }
        else if(grossSalary >= 30000 && grossSalary <= 34999){
            NHIFDeduction = 900
        }
        else if(grossSalary >= 35000 && grossSalary <= 39999){
            NHIFDeduction = 950
        }
        else if(grossSalary >= 40000 && grossSalary <= 44999){
            NHIFDeduction = 1000
        }
        else if(grossSalary >= 45000 && grossSalary <= 49999){
            NHIFDeduction = 1100
        }
        else if(grossSalary >= 50000 && grossSalary <= 59999){
            NHIFDeduction = 1200
        }
        else if(grossSalary >= 60000 && grossSalary <= 69999){
            NHIFDeduction = 1300
        }
        else if(grossSalary >= 70000 && grossSalary <= 79999){
            NHIFDeduction = 1400
        }
        else if(grossSalary >= 80000 && grossSalary <= 89999){
            NHIFDeduction = 1500
        }
        else if(grossSalary >= 90000 && grossSalary <= 99999){
            NHIFDeduction = 1600
        }
        else if(grossSalary >= 100000){
            NHIFDeduction = 1700
        }

    // calculating NSSF deductions
    const NSSFDeduction = pensionablePay * 0.06


    const totalDeductions = NHIFDeduction + NSSFDeduction + PAYE

    // calculating net salary
    netSalary = grossSalary - totalDeductions 

    // returning the values
    return{
        grossSalary: grossSalary,
        NHIFDeduction: NHIFDeduction,
        NSSFDeduction: NSSFDeduction,
        PAYE: PAYE,
        netSalary: netSalary,
    }

}
//example function call
console.log(calculateNetSalary(50000, 15000))