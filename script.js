$(document).ready(readyNow);{
    console.log('hi')

}

let totalMonthlySalary = 20000;
let employeeInfo = [];

function readyNow(){
    //console.log('in readyNow')
    $('body').on('click', '#submitButton', employeeSubmission);
    $('body').on('click', '.delete', deleteEmployee);
    let monthlyPayout = $('#totalMonthlyPayout')
    monthlyPayout.empty()
    monthlyPayout.append(totalMonthlySalary.toLocaleString('en-US'))
}

function deleteEmployee(){
    //console.log('in deleteEmployee')
    $(this).parent().parent().remove();
}

function employeeSubmission(){
    //console.log('in employeeSubmission')
    let newEmployeeInfo = {
        firstName: $('#fNameInput').val(),
        lastName: $('#lNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        annualSalary: $('#annualSalaryInput').val()
    }
    employeeInfo.push(newEmployeeInfo);
    $('#fNameInput').val(''),
    $('#lNameInput').val(''),
    $('#idInput').val(''),
    $('#titleInput').val(''),
    $('#annualSalaryInput').val('')
}




