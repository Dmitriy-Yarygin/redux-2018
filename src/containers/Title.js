import { connect } from 'react-redux';
import Title from '../components/Title';
import { editVideo } from '../reducers/videos';

const mapDispatchToProps = (dispatch) => ({
        edit: (data) => dispatch( editVideo(data)),
    }
);
 
export default connect(null, mapDispatchToProps)(Title);
