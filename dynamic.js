function getJSON(file,callback){
   var xhr=new XMLHttpRequest();
   xhr.overrideMimeType("application/json");
     xhr.open("GET",file,true);
     xhr.onreadystatechange = ()=>{
        if (xhr.readyState =="4" && xhr.status ===200) {
        callback(xhr.responseText);
        }
     }
    xhr.send(); 
 }

 getJSON("./data.json",(text)=> {
   var d = JSON.parse(text);
   console.log(d);
   basic_details(d.details);
      trainers_details(d.trainers);
})


var main=document.querySelector(".parent-div");

  function basic_details(SDC) {

     var n = document.createElement("h1");
     n.textContent=SDC.name;
     main.appendChild(n);

     var h = document.createElement("h2");
     h.textContent="Courses in APSSDC:";
     main.appendChild(h);

     var ul= document.createElement("ul");
     for (var i = 0; i <SDC.courses.length; i++) {
     var li = document.createElement("li");
     li.textContent=SDC.courses[i];
     ul.appendChild(li);
     }
     main.appendChild(ul);
     }

function trainers_details(t) {
   var h = document.createElement("h2");
   h.textContent="Trainers details in APSSDC:";
   main.appendChild(h);

var table = document.createElement("table");
var row="";
for(var i in t){
row +="<tr><td>"+t[i].name+"</td><td>"+t[i].phoneNo+"</td><td>"+t[i].Email+"</td><td>"+t[i].course+"</td></tr>";    
}
table.innerHTML=row;
main.appendChild(table);
}
document.write("<br>")

