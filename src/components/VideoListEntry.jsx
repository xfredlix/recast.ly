var VideoListEntry = (prop) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={prop.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{prop.video.snippet.title}</div>
      <div className="video-list-entry-detail">{prop.video.snippet.description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// ReactDOM.render(
//   <VideoListEntry />, 
//   document.getElementById('app')
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
// prop: {video: etag: 'L332gQTY',
//   id: {
//     videoId: '000001'
//   },
//   snippet: {
//     title: 'Cute cat video',
//     description: 'The best cat video on the internet!',
//     thumbnails: {
//       default: {
//         url: 'http://www.fndvisions.org/img/cutecat.jpg',
//       }
//     }
//   }
// }}