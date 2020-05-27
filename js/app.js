//$.getJSON
//("https://api.covid19india.org/data.json", 
// function(data){
//  console.log(data);
//}
//)

var settings = {
  "url": "https://api.covid19india.org/data.json",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
  var tt_con = response.statewise[0].confirmed;
  var tt_act = response.statewise[0].active;
  var tt_ded = response.statewise[0].deaths;
  var tt_rec = response.statewise[0].recovered;
  
  $(".tt_con").append(tt_con);
  $(".tt_act").append(tt_act);
  $(".tt_ded").append(tt_ded);
  $(".tt_rec").append(tt_rec);
});
