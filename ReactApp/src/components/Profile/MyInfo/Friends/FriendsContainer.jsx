import { connect } from "react-redux";
import Friends from "./friends";

let mapStateToProps = (state) => ({myInfo: state.profile.myInfo});
const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;