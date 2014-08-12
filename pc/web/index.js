 
///To genome tweet////////////
var tweet = document.getElementById("tweets");
var twbtn = document.getElementById("tw_btn");
var input_to_box = document.getElementById("tw_btn2");//added
var gtweets = document.getElementById("gtweets");
var newNewStrg;
 
///To original tweet////////
var decode = document.getElementById("tweets2");
var dbtn = document.getElementById("dc_btn");
var dtweets = document.getElementById("tweets3");
 
 
 
 
var addTweet =function(tweets){
  var lower= tweets.toLowerCase();
  var strs = lower.split('');
  //console.log(tweet.value);
  
  for(var i=0,len=strs.length; i<len; i++){
 
    if(strs[i]=='a'){
      strs[i]= "GCT";
    } else if(strs[i]=='b'){
      strs[i] = "TGT";
    } else if(strs[i]=='c'){
      strs[i] = "CAT";
    } else if(strs[i]=='d'){
      strs[i] = "ACT";
    } else if(strs[i]=='e'){
      strs[i] = "CTT";
    } else if(strs[i]=='f'){
      strs[i] = "AAA";
    } else if(strs[i]=='g'){
      strs[i] = "GGG";
    } else if(strs[i]=='h'){
      strs[i] = "TCA";
    } else if(strs[i]=='i'){
      strs[i] = "CGA";
    } else if(strs[i]=='j'){
      strs[i] = "AAG";
    } else if(strs[i]=='k'){
      strs[i] = "GAT";
    } else if(strs[i]=='l'){
      strs[i] = "TTC";
    } else if(strs[i]=='m'){
      strs[i] = "ACG";
    } else if(strs[i]=='n'){
      strs[i] = "GAA";
    } else if(strs[i]=='o'){
      strs[i] = "TGG";
    } else if(strs[i]=='p'){
      strs[i] = "GTG";
    } else if(strs[i]=='q'){
      strs[i] = "TCC";
    } else if(strs[i]=='r'){
      strs[i] = "CCC";
    } else if(strs[i]=='s'){
      strs[i] = "AGT";
    } else if(strs[i]=='t'){
      strs[i] = "GCC";
    } else if(strs[i]=='u'){
      strs[i] = "TTA";
    } else if(strs[i]=='v'){
      strs[i] = "CAG";
    } else if(strs[i]=='w'){
      strs[i] = "AGA";
    } else if(strs[i]=='x'){
      strs[i] = "GCG";
    } else if(strs[i]=='y'){
      strs[i] = "TAG";
    } else if(strs[i]=='z'){
      strs[i] = "CAA";
    } else if(strs[i]==' '){
      strs[i] = "   ";
    } 
  }
  
  var newStrg = strs.join();
   newNewStrg = newStrg.split(",").join("");  
   gtweets.textContent= newNewStrg; 
};
 
 
 
 
 
 
///////////added//////////////////////////
 
  input_to_box.onclick=(function(){
	changeTweetText(gtweets.value);
  console.log("button was clicked");
});
 
function changeTweetText(answer){
	tweetText = answer ;
	$("#hashtag").html('<a href="https://twitter.com/intent/tweet?button_hashtag=GT_project" class="twitter-hashtag-button" data-text="'+ tweetText + '" >ツイート</a>');
 
	twttr.widgets.load();
}
  
///////////////////////////////
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
twbtn.onclick = function(){
  
  addTweet(tweets.value);
  console.log("button was clicked");
};
 
 
 
 
 
 
dbtn.onclick=function(event){
  var string = decode.value.split('');
  var string2= "";
  
  for(var i=0; i<string.length; i+=3){
    if(string[i]+string[i+1]+string[i+2]=="GCT"){
      string2=string2+"a";
  } else if (string[i]+string[i+1]+string[i+2]=="TGT"){
      string2=string2+"b";
  }else if (string[i]+string[i+1]+string[i+2]=="CAT"){
      string2=string2+"c";
  }else if (string[i]+string[i+1]+string[i+2]=="ACT"){
      string2=string2+"d";
  }else if (string[i]+string[i+1]+string[i+2]=="CTT"){
      string2=string2+"e";
  }else if (string[i]+string[i+1]+string[i+2]=="AAA"){
      string2=string2+"f";
  }else if (string[i]+string[i+1]+string[i+2]=="GGG"){
      string2=string2+"g";
  }else if (string[i]+string[i+1]+string[i+2]=="TCA"){
      string2=string2+"h";
  }else if (string[i]+string[i+1]+string[i+2]=="CGA"){
      string2=string2+"i";
  }else if (string[i]+string[i+1]+string[i+2]=="AAG"){
      string2=string2+"j";
  }else if (string[i]+string[i+1]+string[i+2]=="GAT"){
      string2=string2+"k";
  }else if (string[i]+string[i+1]+string[i+2]=="TTC"){
      string2=string2+"l";
  }else if (string[i]+string[i+1]+string[i+2]=="ACG"){
      string2=string2+"m";
  }else if (string[i]+string[i+1]+string[i+2]=="GAA"){
      string2=string2+"n";
  }else if (string[i]+string[i+1]+string[i+2]=="TGG"){
      string2=string2+"o";
  }else if (string[i]+string[i+1]+string[i+2]=="GTG"){
      string2=string2+"p";
  }else if (string[i]+string[i+1]+string[i+2]=="TCC"){
      string2=string2+"q";
  }else if (string[i]+string[i+1]+string[i+2]=="CCC"){
      string2=string2+"r";
  }else if (string[i]+string[i+1]+string[i+2]=="AGT"){
      string2=string2+"s";
  }else if (string[i]+string[i+1]+string[i+2]=="GCC"){
      string2=string2+"t";
  }else if (string[i]+string[i+1]+string[i+2]=="TTA"){
      string2=string2+"u";
  }else if (string[i]+string[i+1]+string[i+2]=="CAG"){
      string2=string2+"v";
  }else if (string[i]+string[i+1]+string[i+2]=="AGA"){
      string2=string2+"w";
  }else if (string[i]+string[i+1]+string[i+2]=="GCG"){
      string2=string2+"x";
  }else if (string[i]+string[i+1]+string[i+2]=="TAG"){
      string2=string2+"y";
  }else if (string[i]+string[i+1]+string[i+2]=="CAA"){
      string2=string2+"z";
  }else if (string[i]+string[i+1]+string[i+2]=="   "){
      string2=string2+" ";
  }
 
  }
  
  dtweets.textContent= string2;
};
 
 
