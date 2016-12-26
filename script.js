//Ties our uploader to our cloud name
cloudinary.setCloudName('dalc8ebep');

 //creates widget frame on  and sends uploaded image to cloudinary and comes back within callback
 cloudinary.applyUploadWidget(document.getElementById('image-uploader'), 
 { 
  stylesheet: 'li.camera{display: none} li.url{display: none} li.local{display: none} #cloudinary-navbar{height: 0px; border-color: none; border-bottom-width: 0px; border-bottom-style: 0px; border: 0px solid white;} #cloudinary-widget{height: 452px}',
  upload_preset: 'iofr6plk'
}, 
function(error, result) {

   //the 'result' perameter is the returned image back from Cloudinary that you uploaded.
   //Send this 'result' anywhere in your project you would like to send it!

});

 //info: http://cloudinary.com/documentation/upload_widget#upload_widget_options