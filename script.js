$(document).ready(readyNow);{
    //console.log('hi')
}

//Global variables between .ready and function readyNow

let employeeInfo = [];

function readyNow(){
    //console.log('in readyNow')
    $('body').on('click', '#submitButton', employeeSubmissionButton);
    $('body').on('click', '#deleteEmployeeButton', deleteEmployeeButton);
    let monthlyPayoutBudget = $('#remainingMonthlyBudget')
    monthlyPayoutBudget.empty()
    renderEmployeeTable()
    calculateMonthlySalaryBalance()
}

function deleteEmployeeButton(){
    // console.log('in deleteEmployee')
    
    // // let buttonClicked = $(this);
    // // let tableRow = buttonClicked.parent().parent();

    // // tableRow.remove();
    $(this).parent().parent().remove();
}

function employeeSubmissionButton(){
    //console.log('in employeeSubmission')
    let newFName = $('#fNameInput').val();
    let newLName = $('#lNameInput').val();
    let newID = $('#idInput').val();
    let newTitle = $('#titleInput').val();
    let newAnnualSalary = $('#annualSalaryInput').val()


    let newEmployeeInfo = {
        firstName: newFName,
        lastName: newLName,
        id: Number(newID),
        title: newTitle,
        annualSalary: Number(newAnnualSalary)
    }
    employeeInfo.push(newEmployeeInfo);
    console.log('employeeSubmissionButton', employeeInfo)

    $('#fNameInput').val(''),
    $('#lNameInput').val(''),
    $('#idInput').val(''),
    $('#titleInput').val(''),
    $('#annualSalaryInput').val('')
    
    //calculateMonthlyBalance();
    //addRow();
    renderEmployeeTable();
    calculateMonthlySalaryBalance();
    //renderTotalMonthly();
}

function renderEmployeeTable(){
    $('#employeesTable').empty();
    for (let i = 0; i < employeeInfo.length; i++) { //let employee of employeeInfo would have worked too. //employee.firstname instead of employeeInfo[i].firstName
     $('#employeesTable').append(`                   
        <tr>
            <td>${employeeInfo[i].firstName}</td>   
            <td>${employeeInfo[i].lastName}</td>
            <td>${employeeInfo[i].id}</td>
            <td>${employeeInfo[i].title}</td>
            <td>${employeeInfo[i].annualSalary}</td>
            <td> 
                <button id= deleteEmployeeButton>Delete</button>
            </td>
        </tr>
    `)
    }
}

//Using the stored information, calculate monthly costs and append this to the to DOM

function calculateMonthlySalaryBalance(){
    console.log('in calculateMonthlySalaryBalance')
    $('#remainingMonthlyBudget').empty()
    let monthlySalaryBalance = 0
    for (let i=0; i<employeeInfo.length; i++){
        monthlySalaryBalance += employeeInfo[i].annualSalary / 12;
    } 

    console.log(monthlySalaryBalance)
    
    $('#remainingMonthlyBudget').text(monthlySalaryBalance) //.text maybe? was .append
        if (monthlySalaryBalance > 20000) {
        $('#remainingMonthlyBudget').addClass('overBudgetText')
    } else {
        $('#remainingMonthlyBudget').removeClass('overBudgetText')
    }

}
