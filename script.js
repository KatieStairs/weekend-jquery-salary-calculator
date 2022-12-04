$(document).ready(readyNow);{
    //console.log('hi')
}

let totalMonthlySalary = 20000;
let employeeInfo = [];

function readyNow(){
    //console.log('in readyNow')
    $('body').on('click', '#submitButton', employeeSubmissionButton);
    $('body').on('click', '.deleteEmployeeButton', deleteEmployeeButton);
    let monthlyPayout = $('#totalMonthlyPayout')
    monthlyPayout.empty()
    monthlyPayout.append(totalMonthlySalary.toLocaleString('en-US'))

}

function deleteEmployeeButton(){
    //console.log('in deleteEmployee')
    $(this).parent().parent().remove();
}

function employeeSubmissionButton(){
    //console.log('in employeeSubmission')
    let newEmployeeInfo = {
        firstName: $('#fNameInput').val(),
        lastName: $('#lNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        annualSalary: $('#annualSalaryInput').val()
    }
    employeeInfo.push(newEmployeeInfo);
    console.log('employeeSubmissionButton', employeeInfo)
    
    let a = $('#fNameInput').val()
    let b = $('#lNameInput').val()
    let c = $('#idInput').val()
    let d = $('#titleInput').val()
    let e = $('#annualSalaryInput').val()
    $('#fNameData').append(a)
    $('#lNameData').append(b)
    $('#idData').append(c)
    $('#titleData').append(d)
    $('#annualSalaryData').append(e)

    $('#fNameInput').val(''),
    $('#lNameInput').val(''),
    $('#idInput').val(''),
    $('#titleInput').val(''),
    $('#annualSalaryInput').val('')
    calculateMonthlyBalance();
    
}

function calculateMonthlyBalance(){
    console.log('in calculateMonthlyBalance')

}

function render(){

}



