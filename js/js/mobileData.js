httpObj = new XMLHttpRequest();
httpObj.open("get", "../js/json/data.json", true);
httpObj.onload = function(){
var myData = JSON.parse(this.responseText);
var newsTxt = "";

for (var i=0; i<myData.news.length; i++){
	newsTxt = newsTxt + "<p class='date'>" + myData.news[i].label + "</p><p class='news_info'><a href=" + myData.news[i].linkLabel + ">" + myData.news[i].detail + "</a></p>";
}
document.getElementById("newsInfo").innerHTML = newsTxt;
}
httpObj.send(null);
