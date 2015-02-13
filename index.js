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
"background": sC}); cA++; if(cA == 500){cA = 0; cP++; console.log(gD());} } }, 5000); }
// Get Flickr data
function gD() { $.getJSON("https://api.flickr.com/services/rest/?&method=f"
+"lickr.photos.search&api_key=33f27236670b6107249908b17b9dfb58&tags=dog%2Cfamil"
+"y&tag_mode=any&content_type=1&per_page=500&page"+cP+"&format=json&jsonc"
+"allback=?", function(d){ fD = d.photos.photo; return "HELLO";}); return "BAD"; }

//
// function imgD () {
// 	var iD = x.getImageData(0,0,c.width,c.height);
// 	gD(); $("#MI").css({ "width": c.width*20 });
// 	setTimeout(function(){
// 		for(var i = 0; i < iD.data.length; i += 4){
//
// 				// if( ((i/4) % 1 )== 0 ){
// 					//getImages( "0px 20px rgba(" + iD.data[i] + "," + iD.data[i + 1] + "," + iD.data[i + 2] + ", 0.8) inset");
// 					var rgb = "0px 20px rgba(" + iD.data[i] + "," + iD.data[i + 1] + "," + iD.data[i + 2] + ", 0.8) inset";
// 					var uq = fD[cA].id.toString();
// 					uq = uq + parseInt(Math.random()*999999999).toString();
// 					var cid = "#" + uq;
// 					var sC =  "url(https://farm" + fD[cA].farm + ".staticflickr.com/" + fD[cA].server +
// 							"/" + fD[cA].id + "_" + fD[cA].secret+ "_s.jpg)";
//
// 					console.log(i);
//
// 					if( (i/4) % c.width == 0){
// 						sC = "cyan";
// 						rgb = "none";
// 					}
//
// 					// $("#MI").append("<div id='" + fD[cA].id + "' class='it' ><img src=' https://farm" + fD[cA].farm + ".staticflickr.com/" + fD[cA].server +
// 					// "/" + fD[cA].id + "_" + fD[cA].secret+ "_s.jpg' /></div>");
//
// 					$("#MI").append("<div id='" + uq + "' class='it' ></div>")
//
// 					$(cid).css({
// 						"position": "relative",
// 						"display": "block",
// 						"float": "left",
// 						"width": "20px",
// 						"height": "20px",
// 						"background-size": "cover",
// 						"box-shadow": rgb,
// 						"background": sC
// 					});
//
// 					cA++;
//
// 					if(cA == 500){
// 						cP++;
// 						console.log("RESET");
// 						cA = 0;
// 						//gD();
// 					}
//
// 					// console.log(d);
// 				// }
//
// 		}
//
// 	}, 5000);
//
//
//
// }
//
//
// function gD() {
// 	var userID = "39233913@N02";
// 	var apiKey = "33f27236670b6107249908b17b9dfb58";
// 	var itemsPerPage = 500; // Max is 500
//
// 	$.getJSON("https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=" + apiKey + "&tags=dog%2Cfamily%2Clandscape%2Ccat%2Ccandid%2Ccity%2Csmile%2Chappy%2Clove%2Cjoy%2Cbeach%2Cmountains&tag_mode=any&content_type=1&per_page=" + itemsPerPage + "&page" + cP + "&format=json&jsoncallback=?", function(data){
// 			console.log("DATA LOADED");
// 			fD = data.photos.photo;
// 	});
// }

// function getImages (rgb) {
//
// 	var uq = fD[cA].id + parseInt(Math.random()*1000);
// 	var cid = "#" + uq;
// 	var sC =  "url(https://farm" + fD[cA].farm + ".staticflickr.com/" + fD[cA].server +
// 			"/" + fD[cA].id + "_" + fD[cA].secret+ "_s.jpg)";
//
// 	console.log(cA);
//
// 	// $("#MI").append("<div id='" + fD[cA].id + "' class='it' ><img src=' https://farm" + fD[cA].farm + ".staticflickr.com/" + fD[cA].server +
// 	// "/" + fD[cA].id + "_" + fD[cA].secret+ "_s.jpg' /></div>");
//
// 	$("#MI").append("<div id='" + uq + "' class='it' ></div>")
//
// 	$(cid).css({
// 		"position": "relative",
// 		"display": "block",
// 		"float": "left",
// 		"width": "10px",
// 		"height": "10px",
// 		"background-size": "cover",
// 		"box-shadow": rgb,
// 		"background": sC
// 	});
//
// 	console.log("IMAGE: ");
// 	console.log(sC);
//
// }
