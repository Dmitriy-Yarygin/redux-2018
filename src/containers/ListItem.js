import { connect } from 'react-redux';
import ListItem from '../components/ListItem';


import { deleteVideo } from '../reducers/videos';

const mapDispatchToProps = (dispatch) => ({
        del: (data) => dispatch(deleteVideo(data)),
    }
);
 
export default connect(null, mapDispatchToProps)(ListItem);

