// grab the elements
let newIssueBtn = document.querySelector('#new_issue_btn');
let popUp = document.querySelector('#popup');
let closeBtn = document.querySelector('#closebtn');


// grab form elements
let issue = document.querySelector('#issue');
let sevarity = document.querySelector('#sevarity');
let desc = document.querySelector('#desc');
let submit = document.querySelector('#submit');
let tostMsg = document.querySelector('#tostmsg');

// display form popup
newIssueBtn.onclick = function() {
    popUp.style.display = 'block';
}
// Es6 format
// newIssueBtn.addEventListener('click',function(){
//     popUp.style.display = 'block';
// });


// close the popup
// closeBtn.onclick = function() {
//     popUp.style.display = 'none';
// }

// Es6 format
closeBtn.addEventListener('click', function(){
    popUp.style.display = 'none';
});


// new issue form submition
submit.addEventListener('click', function(event){
    if (issue.value != "" && sevarity.value != '' && desc.value != ''){
        addIssue(issue.value, sevarity.value, desc.value);
    }
    // event.preventDefault();
});

// create random id
let randomId = () => {
    return Math.floor(Math.random() * 1000000);
}

let issuesList = [];

// init function
function init(key, data) {
    if(arguments.length === 1) {
        if(key != null){
            issuesList = key;
        }
    }
    // data save in local storage
    else {
        localStorage.setItem(key, JSON.stringify(data));
    }
}

// add issue
let addIssue = (issue, sevarity, desc) => {
    issueItem = {
        id: randomId(),
        issueName: issue,
        issueSevarity: sevarity,
        issueDescription: desc
    };
    issuesList.push(issueItem);
    init('issueItems', issuesList)
}



// get the local storage data
let nameSpace = JSON.parse(localStorage.getItem('issueItems'));
init(nameSpace);
