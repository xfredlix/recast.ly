var searchYouTube = (options = {}, callback) => {
  options['part'] = 'snippet';
  let results = [];
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(data) {
      return callback(data.items);
    },
    error: function(data) {
      console.log('error', data);
    }
  });
};

window.searchYouTube = searchYouTube;


