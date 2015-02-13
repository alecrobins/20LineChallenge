// 20 line challenge

var imageLoader = document.getElementById('imageLoader');
		imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');

var curPage = 0;
var curAtt = 0;
var flickrData = {};

function handleImage(e){var reader = new FileReader(); reader.onload =
	function(event){
				var img = new Image();
				img.onload = function(){
						canvas.width = img.width;
						canvas.height = img.height;
						ctx.drawImage(img,0,0);
				}
				img.src = event.target.result;
		}
		reader.readAsDataURL(e.target.files[0]);

}

function imgD () {
	var c=document.getElementById("imageCanvas");
	var ctx=c.getContext("2d");

	var imgData=ctx.getImageData(0,0,c.width,c.height);

	//NOTE: pixes are stores in [r1,g1,b1,a1,r2,g2,b2,a2,r,g....]

	getData();

	$("#newImage").css({
		"width": c.width*10,

	});

	console.log(imgData);

	setTimeout(function(){

		for(var i = 0; i < imgData.data.length; i += 4){

				// if( ((i/4) % 1 )== 0 ){
					//getImages( "0px 20px rgba(" + imgData.data[i] + "," + imgData.data[i + 1] + "," + imgData.data[i + 2] + ", 0.8) inset");
					var rgb = "0px 10px rgba(" + imgData.data[i] + "," + imgData.data[i + 1] + "," + imgData.data[i + 2] + ", 0.8) inset";
					var uq = flickrData[curAtt].id + parseInt(Math.random()*1000);
					var cid = "#" + uq;
					var imgSrc =  "url(https://farm" + flickrData[curAtt].farm + ".staticflickr.com/" + flickrData[curAtt].server +
							"/" + flickrData[curAtt].id + "_" + flickrData[curAtt].secret+ "_s.jpg)";

					console.log(curAtt);

					// $("#newImage").append("<div id='" + flickrData[curAtt].id + "' class='it' ><img src=' https://farm" + flickrData[curAtt].farm + ".staticflickr.com/" + flickrData[curAtt].server +
					// "/" + flickrData[curAtt].id + "_" + flickrData[curAtt].secret+ "_s.jpg' /></div>");

					$("#newImage").append("<div id='" + uq + "' class='it' ></div>")

					$(cid).css({
						"position": "relative",
						"display": "block",
						"float": "left",
						"width": "10px",
						"height": "10px",
						"background-size": "cover",
						"box-shadow": rgb,
					//	"background": imgSrc
					});

					curAtt++;

					if(curAtt == 500){
						curPage++;
						console.log("RESET");
						curAtt = 0;
						//getData();
					}

					// console.log(d);
				// }

		}

	}, 5000);



}

function getImages (rgb) {

	var uq = flickrData[curAtt].id + parseInt(Math.random()*1000);
	var cid = "#" + uq;
	var imgSrc =  "url(https://farm" + flickrData[curAtt].farm + ".staticflickr.com/" + flickrData[curAtt].server +
	 		"/" + flickrData[curAtt].id + "_" + flickrData[curAtt].secret+ "_s.jpg)";

	console.log(curAtt);

	// $("#newImage").append("<div id='" + flickrData[curAtt].id + "' class='it' ><img src=' https://farm" + flickrData[curAtt].farm + ".staticflickr.com/" + flickrData[curAtt].server +
	// "/" + flickrData[curAtt].id + "_" + flickrData[curAtt].secret+ "_s.jpg' /></div>");

	$("#newImage").append("<div id='" + uq + "' class='it' ></div>")

	$(cid).css({
		"position": "relative",
		"display": "block",
		"float": "left",
		"width": "10px",
		"height": "10px",
		"background-size": "cover",
		"box-shadow": rgb,
		"background": imgSrc
	});

	console.log("IMAGE: ");
	console.log(imgSrc);

}

function getData() {
	var userID = "39233913@N02";
	var apiKey = "33f27236670b6107249908b17b9dfb58";
	var itemsPerPage = 500; // Max is 500

	$.getJSON("https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=" + apiKey + "&tags=dog%2Cfamily%2Clandscape%2Ccat%2Ccandid%2Ccity%2Csmile%2Chappy%2Clove%2Cjoy%2Cbeach%2Cmountains&tag_mode=any&content_type=1&per_page=" + itemsPerPage + "&page" + curPage + "&format=json&jsoncallback=?", function(data){
			console.log("DATA LOADED");
			flickrData = data.photos.photo;
	});
}
