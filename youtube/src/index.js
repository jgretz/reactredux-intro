// imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// constants
const API_KEY = "AIzaSyA2t37N-TqHYfn0Ppn9l43soq3pqcOhp0o";

// app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch } />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => { this.setState({selectedVideo}); } }
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
