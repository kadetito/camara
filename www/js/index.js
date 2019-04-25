var app = {
 
          initialize: function() {
              this.bindEvents();
          },
         
          bindEvents: function() {
              var takePhoto = document.getElementById('takePhoto');
              takePhoto.addEventListener('click', app.takePhoto, false);
              var sendPhoto = document.getElementById('sendPhoto');
              sendPhoto.addEventListener('click', app.sendPhoto, false);
          },
 
          sendPhoto: function() {
              alert('Imagen enviada al servidor');
          },
 
   takePhoto: function () {
        navigator.camera.getPicture (onPhotoDataSuccess, onFail, {quality: 100, 
        	destinationType: Camera.DestinationType.DATA_URL,
        	sourceType: Camera.PictureSourceType.CAMERA,
        mediaType: Camera.MediaType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        saveToPhotoAlbum: true
        	});
    },
    
          onPhotoDataSuccess: function(imageData) {
         
            var photo = document.getElementById('photo');
 
            photo.style.display = 'block';
 
            photo.src = "data:image/jpeg;base64," + imageData;
 
            var sendPhoto = document.getElementById('sendPhoto');
            sendPhoto.style.display = 'block';
            
          },
 
          onFail: function(message) {
            alert('Failed because: ' + message);
          }
 
      };