// Get
let elUsersWrapper = document.querySelector(".users__wrapper");
let elPostsWrapper = document.querySelector(".posts__wrapper");
let elTempUsers = document.querySelector("#user__template").content;
let elTempPosts = document.querySelector("#post__template").content;


// comments get 

let elUserCommitTemplate = document.querySelector("#comment__template").content
let elUserCommitList = document.querySelector(".comments__list")
let elUserCommitResultNumber = document.querySelector(".result__number")


function renderCommits(array, wrapper) {
    wrapper.innerHTML = null
    let span3 = document.querySelector(".span3").textContent = array.length
    
    let fragment = document.createDocumentFragment()
    
    for (const item of array) {
        let templateItem = elUserCommitTemplate.cloneNode(true);
        
        templateItem.querySelector(".comments__title").textContent = item.name
        templateItem.querySelector(".comments__body").textContent = item.body
        
        fragment.appendChild(templateItem)
    }
    wrapper.appendChild(fragment)
}

elPostsWrapper.addEventListener("click" , function (event) {
    
    let added = event.target.dataset.postId;
    
    if(added) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${added}/comments`)
        .then(response => response.json())
        .then(json => renderCommits(json,elUserCommitList))
        
    }
})




function renderUsers(array) {
    elUsersWrapper.innerHTML = null;

    let span1 = document.querySelector(".span1").textContent = array.length
    
    let newFragment = document.createDocumentFragment();
    
    for (const item of array) {
        let newLi = elTempUsers.cloneNode(true);
        
        newLi.querySelector(".user__link").textContent = item.name;
        newLi.querySelector(".user__link").dataset.userId = item.id;
        
        newFragment.appendChild(newLi);
    }
    
    elUsersWrapper.appendChild(newFragment);
}

function renderPosts(array) {
    elPostsWrapper.innerHTML = null;

    let span2 = document.querySelector(".span2").textContent = array.length
    
    let newFragment = document.createDocumentFragment();
    
    for (const item of array) {
        let newLi = elTempPosts.cloneNode(true);
        
        newLi.querySelector(".post__id").textContent = item.id;
        newLi.querySelector(".post__link").dataset.postId = item.id;
        newLi.querySelector(".post__link").textContent = item.title;
        newLi.querySelector(".post__body").textContent = item.body;
        
        newFragment.appendChild(newLi);
    }
    
    elPostsWrapper.appendChild(newFragment);
}

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => renderUsers(json))


elUsersWrapper.addEventListener("click", function(evt) {
    let datasetId = evt.target.dataset.userId;
    
    if (datasetId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${datasetId}/posts`)
        .then(response => response.json())
        .then(json => renderPosts(json))
    }
})


