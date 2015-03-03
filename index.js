// 20 line challenge
var iL=document.getElementById('i'), c=document.getElementById('c'), fD = {},
x=c.getContext('2d'), cP=0, cA=0; iL.addEventListener('change', hI, !1);
// Read in the image data
function hI(e){var r = new FileReader(); r.onload = function(event){
	var img = new Image(); img.onload = function(){
	  c.width = img.width; c.height = img.height; x.drawImage(img,0,0); }
		img.src = event.target.result; }; r.readAsDataURL(e.target.files[0]); }
// Generate the moasic
function imgD () { var iD = x.getImageData(0,0,c.width,c.height); gD();
$("#MI").css({ "width": c.width*20 }); setTimeout(function(){
for(var i = 0; i < iD.data.length; i += 4){ var rgb = "0px 20px rgba(" +
   iD.data[i] + "," + iD.data[i + 1] + "," + iD.data[i + 2] + ", 0.8) inset";
//XXX: this next line can be replaced if each id is different
var uq = fD[cA].id.toString() + parseInt(Math.random()*9999999999).toString();
var sC="url(https://farm" + fD[cA].farm + ".staticflickr.com/"+fD[cA].server+"/"
+fD[cA].id+"_"+fD[cA].secret+"_s.jpg)"; $("#MI").append("<div id='"+uq+"'></div>");
// Assign a tint for moasic pictures //XXX: this could be replaced by tineye
$(("#" + uq)).css({"position": "relative", "display": "block", "float": "left",
"width": "20px", "height": "20px","background-size": "cover", "box-shadow": rgb,
"background": sC}); cA++; if(cA == 500){cA = 0; cP++; gD().done();} } }, 5000); }
// Get Flickr data
function gD() { return $.getJSON("https://api.flickr.com/services/rest/?&method=f"
+"lickr.photos.search&api_key=33f27236670b6107249908b17b9dfb58&tags=dog%2Cfamil"
+"y&tag_mode=any&content_type=1&per_page=500&page="+cP+"&format=json&jsonc"
+"allback=?", function(d){ fD = d.photos.photo; }); }
