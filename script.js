let isSureQuestion = false;

function loadInitialQuestion() {
    document.querySelector('h1').textContent = 'Will you provisionally marry me?';
    document.getElementById('yesButton').style.display = 'inline-block';
    document.getElementById('noButton').textContent = 'No';
    isSureQuestion = false;
}

function loadSureQuestion() {
    document.querySelector('h1').textContent = 'Are you sure?';
    document.getElementById('yesButton').style.display = 'none';
    document.getElementById('noButton').textContent = 'No';
    isSureQuestion = true;
}

// Initial load
loadInitialQuestion();

document.getElementById('yesButton').addEventListener('click', function() {
    alert('Yay! I knew you would say yes! 💍');
});

document.getElementById('noButton').addEventListener('click', function() {
    if (isSureQuestion) {
        loadInitialQuestion();
    } else {
        loadSureQuestion();
    }
}); 