var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      query: options.query,
      max: options.max
    },
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(data) {
      console.log('hi');
    },
    error: function(data) {
      console.log(data);
    }
  });
  console.log(callback());
};

window.searchYouTube = searchYouTube;


