// 20 line challenge
var iL=document.getElementById('i'), c=document.getElementById('c'), fD = {},
x=c.getContext('2d'), cP=0, cA=0; iL.addEventListener('change', hI, !1);

var curIndex = 0;

//  dog%2Cfamil"
// +"y%2Cjoy%2Chappy%2Cmountains%2Ccat%2Cfood;

// Read in the image data
function hI(e){var r = new FileReader(); r.onload = function(event){
	var img = new Image(); img.onload = function(){
		c.width = img.width; c.height = img.height; x.drawImage(img,0,0); }
		img.src = event.target.result; }; r.readAsDataURL(e.target.files[0]); }
// Generate the moasic
function imgD () {

	if($.isEmptyObject(fD)){
		console.log("EMPTY");
		console.log($("#val").val());
		gD().done(function(){
				console.log("DONE!!");
				imgD();
			});
	}

	var iD = x.getImageData(0,0,c.width,c.height);
	$("#MI").css({ "width": c.width*20 });
	// iD.data.length
	var max = 500;
	var i = 0;
	while(curIndex < iD.data.length && i < 500){
		var rgb = "0px 20px rgba(" +
								iD.data[curIndex] + "," + iD.data[curIndex + 1] + "," + iD.data[curIndex + 2] + ", 0.8) inset";
//XXX: this next line can be replaced if each id is different
		var uq = fD[cA].id.toString() + parseInt(Math.random()*9999999999).toString();
		var sC="url(https://farm" + fD[i].farm + ".staticflickr.com/"+fD[i].server+"/"
							+fD[i].id+"_"+fD[i].secret+"_s.jpg)"; $("#MI").append("<div id='"+uq+"'></div>");
// Assign a tint for moasic pictures //XXX: this could be replaced by tineye
				$(("#" + uq)).css({"position": "relative", "display": "block", "float": "left",
				"width": "20px", "height": "20px","background-size": "cover", "box-shadow": rgb,
				"background": sC});

				cA++;
				i++;
				curIndex +=4;

				if(cA == 500){
					cA = 0;
					console.log("CP: ");
					console.log(cP);
					cP = cP + 1;
					console.log("UPDATE CP");
					console.log(cP);

					gD().done(function(){
							console.log("DONE!!");
							imgD();
						});
				}
		  }

		}

// Get Flickr data
function gD() { return $.getJSON("https://api.flickr.com/services/rest/?&method=f"
+"lickr.photos.search&api_key=33f27236670b6107249908b17b9dfb58&tags=" + $("#val").val() + "&tag_mode=any&per_page=500&page="+cP+"&format=json&jsonc"
+"allback=?", function(d){
		console.log("DDDDD");
		console.log($("#val").val());
		console.log(d);
	 fD = d.photos.photo;
		console.log("FD RECIEVED");
		console.log(fD);
	}); }
