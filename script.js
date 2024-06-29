document.addEventListener('DOMContentLoaded', function() {
 document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
  event.preventDefault();

    var fullName = document.getElementById('fname').value;
    var studentID = document.getElementById('studentID').value;
    var email = document.getElementById('email').value;
        var classValue = document.getElementById('classValue').value;
        var rollNumber = document.getElementById('rollnumber').value;

    var entry = document.createElement('div');
        entry.className = 'entry';

    var entryText = document.createElement('p');
     entryText.textContent = 'Full Name: ' + fullName + ', Student ID: ' + studentID + ', Email: ' + email + ', Class: ' + classValue + ', Roll Number: ' + rollNumber;

var deleteButton = document.createElement('button');
 deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            entry.remove();
        });

     entry.appendChild(entryText);
entry.appendChild(deleteButton);

     document.getElementById('entries').appendChild(entry);

document.getElementById('studentForm').reset();
    });
});