var topic = document.getElementsByClassName("Topic");
for ( var i=0; i<topic.length; i++){
   topic[i].style.color = "green";
 }
 var action = document.querySelector(".action");
 action.innerHTML = "Notes and Action Items"
 action.style.color = "blue";

 var bar = document.querySelector(".top-bar");
 bar.style = "display: block; margin: auto; color: grey; width: 500px";
 bar.rows[0].cells[0].style.padding="10px";
 bar.rows[0].cells[1].style.padding="10px";
 bar.rows[0].cells[2].style.padding="10px";

 var meet = document.querySelector(".agenda");
 meet.style.padding = "0px 100px 50px 100px";