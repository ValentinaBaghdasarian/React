import { connect } from "react-redux";
import Photos from "./Photos";
import {setPhotos} from "../../../../redux/reducers/profile-reducer";


let mapStateToProps = (state) => ({ photosData: state.profile.photosData});

const PhotosContainer = connect(mapStateToProps, {setPhotos})(Photos);

export default PhotosContainer;