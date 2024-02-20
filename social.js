let github;
document.getElementById("github").onclick = function(){
    github = document.getElementById("github").value;
    console.log(github);
    document.getElementById("github").innerHTML = "This is my" + github;
}