const defaultFeedbackText = {
    question: 'Was this helpful?',
    supportText: 'Help us serve you better!'
};

const feedbackAfterThumbsDown = {
    question: 'Sorry to hear that!',
    supportText: 'We’ll try improving'
};

function showText() {
    const textEle = document.getElementById('text');

    textEle.style.height = 'auto';
    textEle.style.padding = '1rem 0';
    
    textEle.parentElement.classList.add('no-after');
}

function onThumbsDown() {
    const thumbsDown = document.getElementById('thumbs-down');
    const thumbsUp = document.getElementById('thumbs-up');

    // highlight thumbs down button
    thumbsDown.classList.add('active');
    thumbsUp.classList.remove('active');

    // change feedback text
    document.querySelector('.feedback-question').innerHTML =  'Sorry to hear that!';
    document.querySelector('.feedback-support-text').innerHTML = 'We’ll try improving';

    // show report button
    const reportButton = document.getElementById('report-issue');
    reportButton.classList.add('active');

    // scroll to report button
    window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
}

function onThumbsUp() {
    const thumbsDown = document.getElementById('thumbs-down');
    const thumbsUp = document.getElementById('thumbs-up');

    // highlight thumbs up button
    thumbsDown.classList.remove('active');
    thumbsUp.classList.add('active');

    // revert feedback text
    document.querySelector('.feedback-question').innerHTML = 'Was this helpful?';
    document.querySelector('.feedback-support-text').innerHTML = 'Help us serve you better!';

    // remove report button
    const reportButton = document.getElementById('report-issue');
    reportButton.classList.remove('active');
}