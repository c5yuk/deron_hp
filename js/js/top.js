httpObj = new XMLHttpRequest();
httpObj.open("get", "../js/json/data.json", true);
httpObj.onload = function(){
var myData = JSON.parse(this.responseText);
var liveTxt = "";
var newsTxt = "";
for (var i=0; i<myData.liveTop.length; i++){
	liveTxt = liveTxt + "<p class='info'>" + myData.liveTop[i].label + "</p><hr />";
}
for (var i=0; i<myData.news.length; i++){
	newsTxt = newsTxt + "<p class='info'>" + myData.news[i].label + "<a href=" + myData.news[i].linkLabel + "><br>" + myData.news[i].detail + "</a></p><hr />";
}
document.getElementById("liveInfo").innerHTML = liveTxt;
document.getElementById("newsInfo").innerHTML = newsTxt;
}
httpObj.send(null);
