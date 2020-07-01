<?php
  $api_key = "00ac5f70d662304b87e7da585bbdef9d";
  $perPage = 10;
  $tags = 'lake, animal, flower, tree';
  $url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=';
  $url.= '&api_key='.$api_key;
  $url.= '&tags='.$tags;
  $url.= '&per_page='.$perPage;
  $url.= '&format=json';
  $url.= '&nojsoncallback=1';

  echo $url;