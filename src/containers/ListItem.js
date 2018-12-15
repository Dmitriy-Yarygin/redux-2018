import { connect } from "react-redux";
import ListItem from "../components/ListItem";

import { editVideo, deleteVideo } from "../reducers/videos";

const mapDispatchToProps = dispatch => ({
  del: data => dispatch( deleteVideo(data) ),
  edit: data => dispatch( editVideo(data) ),
});

export default connect(
  null,
  mapDispatchToProps
)(ListItem);
