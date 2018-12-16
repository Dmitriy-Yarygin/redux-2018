import { connect } from 'react-redux';

import List from '../components/List';
import { filteredVideos, videosCount } from '../selectors'

const mapStateToProps = state => ({
    items: filteredVideos(state),
    count: videosCount(state),
});

export default connect(mapStateToProps)(List);