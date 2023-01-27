import { connect } from "react-redux"; 
import Dialogs from "./Dialogs";


// let mapStateToProps = (state) => ({dialog: state.dialog});
let mapStateToProps = (state) =>  ({dialog: state.dialog});

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;