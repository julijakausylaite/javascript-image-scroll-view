$(document).ready(function () {
  $.ajax({
    url: 'data.php',
    type: 'GET',
    complete: function (data) {
      let photos = [];

      $.get(data.responseText, function (data) {
        fetchPhotos(data);
      });

      function display(photos) {
        let images = "";
        for (let i = 0; i < photos.length; i++) {
          images += `
            <div id="flickr-photo" class="photo">
              <img src = "${photos[i].url}" alt="${photos[i].title}" >
            </div>
              <p class="title">${photos[i].title}</p>
          `;
        }
        $("#images").html(images);
      }

      function fetchPhotos(data) {
        for (let i = 0; i < data.photos.photo.length; i++) {
          farm = data.photos.photo[i].farm;
          id = data.photos.photo[i].id;
          title = data.photos.photo[i].title;
          server = data.photos.photo[i].server;
          secret = data.photos.photo[i].secret;

          let size = 'n';

          let photoUrl = "https://farm" + farm
            + ".staticflickr.com/"
            + server + "/"
            + id + "_"
            + secret + "_"
            + size + ".jpg";

          let photoObj = {
            url: photoUrl,
            title: title,
          }

          photos.push(photoObj);
        }

        display(photos);
      }

      $(window).on("scroll", function () {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
          $(document.body).append($("#images-list").html());
        }
      });

      $("#sortAZ").on("click", function () {
        photos.sort(function (a, b) {
          var aTitle = a.title.toLowerCase();
          var bTitle = b.title.toLowerCase();
          return ((aTitle < bTitle) ? -1 : ((aTitle > bTitle) ? 1 : 0));
        })
        display(photos);
      });

      $("#sortZA").on("click", function () {
        photos.sort(function (a, b) {
          var aTitle = a.title.toLowerCase();
          var bTitle = b.title.toLowerCase();
          return ((aTitle < bTitle) ? 1 : ((aTitle > bTitle) ? -1 : 0));
        })
        display(photos);
      });
    }
  });
});