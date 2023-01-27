import { connect } from "react-redux";
import Photos from "./Photos";


let mapStateToProps = (state) => ({ myInfo: state.profile.myInfo});
const PhotosContainer = connect(mapStateToProps)(Photos);

export default PhotosContainer;