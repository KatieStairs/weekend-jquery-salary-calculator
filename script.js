$(document).ready(readyNow);{
    console.log('hi')

}

function readyNow(){
    console.log('in readyNow')
    $('body').on('click', '#submitButton', employeeSubmission);
    $('body').on('click', '.delete', deleteEmployee);

}

function deleteEmployee(){
    console.log('in deleteEmployee')
    $(this).parent().parent().remove();
}

function employeeSubmission(){
    console.log('in employeeSubmission')

}