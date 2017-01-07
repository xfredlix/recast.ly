class App extends React.Component {

  constructor(props) {
    super(props);
    // let videos = props.searchYouTube(options, data);
    // console.log(videos);
    this.state = {
      currentVideo: fakeVideoData[0],
      videoList: fakeVideoData,
      key: window.YOUTUBE_API_KEY,
      q: 'warriors',
      max: 5
    };
    this.currentVideo = exampleVideoData[0];
    this.props.searchYouTube({
      key: this.state.key,
      q: this.state.q,
      maxResults: this.state.max
    }, this.data.bind(this));
  }

  data(data) {
    this.setState({videoList: data});
  }

  onVideoClick(event) {
    let nextVideo = $(event.target).text();
    for (var i = 0; i < this.state.videoList.length; i++) {
      if (this.state.videoList[i].snippet.title === nextVideo) {
        this.setState( {currentVideo: this.state.videoList[i]} );
      }
    }
  }

  onVideoChange(event) {
    this.setState({ q: $(event.target).val()});
  }

  componentWillUpdate(nextProps, nextState) {
    this.props.searchYouTube({
      key: this.state.key,
      q: this.state.q,
      maxResults: this.state.max
    }, this.data.bind(this));
  }

  render() {
    return (
      <div>
        <Nav prop={this.onVideoChange.bind(this)}/>
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
