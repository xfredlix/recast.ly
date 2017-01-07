class App extends React.Component {

  constructor(props) {
    super(props);
    this.currentVideo = window.fakeVideoData[0];
    searchYouTube();
  }

  onVideoClick(event) {
    let nextVideo = $(event.target).text();
    for (var i = 0; i < window.fakeVideoData.length; i++) {
      if (window.fakeVideoData[i].snippet.title === nextVideo) {
        this.currentVideo = window.fakeVideoData[i];
        this.forceUpdate();
      }
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video = {this.currentVideo}/>
        </div>
        <div onClick={this.onVideoClick.bind(this)} className="col-md-5">
          <VideoList videos = {window.fakeVideoData}/>
        </div>
      </div>
    );
  }

}

// ReactDOM.render(
//   <VideoList videos = {window.fakeVideoData}/>, 
//   document.getElementById('app')
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
