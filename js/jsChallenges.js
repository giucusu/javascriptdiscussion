// //  when you check the box email fields appear // 
// // Challenge 1: When the checkbox is checked, display the email input fields//
document.querySelector('#subscribe').addEventListener('click', function() {
    // if checked, display the email fields //
    if (this.checked) {
        document.querySelector('#emailDiv').style.display = 'block';
    }
    // hide when it is unchecked //
    else {
        document.querySelector('#emailDiv').style.display = 'none';
    }
});

// // Part 2 - we are concating the string//
document.addEventListener('click', function() {
    let currentTime = new Date();
    alert('The current time is: ' + currentTime);
});


// Challenge 2 //
document.querySelector("#sameAddress").addEventListener("click", function() {
    console.log("This works")
    if(this.checked){
        document.querySelector("#home").value = document.querySelector("#bill").value;
        document.querySelector("#home").disabled = true;
    }
    else {
        document.querySelector("#home").value = '';
        document.querySelector("#home").disabled = false;
    }});

// // Challenge 3 //
document.querySelector("#ch3form").addEventListener("submit", function() {

    let date = document.querySelectorAll("input[name='gradDate']:checked").length;
    let standing = document.querySelectorAll("input[name='standing']:checked").length;
    // if date equals 0 or standing equals 0, then alert the user to check both boxes //

    if (date == 0 || standing == 0) {
        alert("Please select both boxes");
        e.preventDefault()
    }
});