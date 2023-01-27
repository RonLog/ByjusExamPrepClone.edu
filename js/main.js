window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
}

let currentUrlPage = document.URL;
if(currentUrlPage = "https://ronlog.github.io/BujusExamPrepClone.edu" ){
    document.getElementsByClassName("fa-house-chimney").style.color = "blueviolet";
}
else if(currentUrlPage = "https://ronlog.github.io/BujusExamPrepClone.edu/ByjusPractice.html" ){
    document.getElementsByClassName("fa-book-open").style.color = "blueviolet";
}
else if(currentUrlPage = "https://ronlog.github.io/BujusExamPrepClone.edu/byjusTestSeries.html"){
    document.getElementsByClassName("fa-paste").style.color = "blueviolet";
}
else {
    document.getElementsByClassName("fa-video").style.color = "blueviolet";
}
