function addUser(){
SessionIdTemp = document.getElementById("userName")
localStorage.setItem("SessionId", SessionIdTemp);
window.location = "chatRoom.html";
}
