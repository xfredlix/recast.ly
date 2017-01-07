class App extends React.Component {

  constructor(props) {
    super(props);
    this.options = {
      key: window.YOUTUBE_API_KEY,
      query: 'react',
      max: 5
    };
    // let videos = props.searchYouTube(options, data);
    // console.log(videos);
    this.state = {
      currentVideo: fakeVideoData[0],
      videoList: fakeVideoData
    };
    this.currentVideo = exampleVideoData[0];
    props.searchYouTube(this.options, this.data.bind(this));
  }

  data(data) {
    this.setState({videoList: data, currentVideo: data[0]});
  }

  onVideoClick(event) {
    let nextVideo = $(event.target).text();
    for (var i = 0; i < this.state.videoList.length; i++) {
      if (this.state.videoList[i].snippet.title === nextVideo) {
        this.setState( {currentVideo: this.state.videoList[i]} );
      }
    }
  }

  render() {
    return (
      <div>
        <Search />
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video = {this.state.currentVideo}/>
        </div>
        <div onClick={this.onVideoClick.bind(this)} className="col-md-5">
          <VideoList videos = {this.state.videoList}/>
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
