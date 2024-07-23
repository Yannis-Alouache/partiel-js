function exercice_1(){
    let content = document.getElementById("content");
    let numberOfChildren = content.getElementsByTagName('article').length
    let chapterNumber = document.getElementById("chapter-number");

    chapterNumber.innerText += numberOfChildren;
}

export default exercice_1;