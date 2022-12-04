$(document).ready(readyNow);{
    //console.log('hi')
}

let totalMonthlySalary= 20000;
let employeeInfo = [];

function readyNow(){
    //console.log('in readyNow')
    $('body').on('click', '#submitButton', employeeSubmissionButton);
    $('body').on('click', '#deleteEmployeeButton', deleteEmployeeButton);
    let monthlyPayoutBudget = $('#remainingMonthlyBudget')
    monthlyPayoutBudget.empty()
    monthlyPayoutBudget.append(totalMonthlySalary.toLocaleString('en-US'))
    renderEmployeeTable()
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
}

// function calculateMonthlyBalance(){
//     //subtract salary from employeeInfo from totalMonthlySalary
//     let monthlySalaryBalance = 0;
    
//     for (let i=0; i<employeeInfo.length; i++){
//         totalMonthlySalary - Number(employeeInfo[i].annualSalary);
//     }
//     console.log('in calculateMonthlyBalance')

// }

function renderEmployeeTable(){
    
    $('#employeesTable').empty();
    for (let i = 0; i < employeeInfo.length; i++) {
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

    // function calculateMonthlySalary(){
    //     let employeeMonthlySalaryTemp = 0
    //      for(let i = 0; i < employeeInfoTable.length; i++){
    //         employeeMonthlySalaryTemp += Number(employeeInfoTable[i].SalaryList)
    //      }
    //       console.log(employeeMonthlySalaryTemp)
          
    //       let employeeMonthlySalary = Math.round(employeeMonthlySalaryTemp/12)
        
    //       console.log(employeeMonthlySalary)
        
          
    //      let value = ('$' + employeeMonthlySalary);
    //      $('#totalMonthlySalary').text(`Monthly Total: ${value}`);
        
    //      if (employeeMonthlySalary >= 20000){
    //         $('#TheDiv').addClass('Over20k');
    //     }
    //     else{
    //         $('#TheDiv').removeClass('Over20k');
    //     }
    //     console.log(`testing red ${value}`)
    //      render()
// } else {
//     $('#output').empty();
//     $('#output').append(`
//         <h2 id="output">
//             <div id="normal">
//             Monthly Cost: ${monthlyCosts}
//             </div>
//         </h2>
//     `)
//     }
//        }
//}