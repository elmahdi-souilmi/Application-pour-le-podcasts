








function submit() {


  var par = document.getElementById("container");

  var im = document.getElementById("images");
  var ij = document.getElementById("date");
  var pdr = document.getElementById("podcasters");
  var pd = document.getElementById("podcasts");
  var ds = document.getElementById("desc");


       par.innerHTML += "<div class='part'>" +"<div>" +"<img  src =" + im.value  + ">" + "</div>" + "<h5 align='left'>"+ ij.value + 

        "<h1 align='left'>" + pdr.value + "</h1>" +  "<div>" +   "<h4 align='left'>" + pd.value + "</h4>" + "</div>" + "<p>" + ds.value + "</p>"




        + "</div>";




  


  
}





