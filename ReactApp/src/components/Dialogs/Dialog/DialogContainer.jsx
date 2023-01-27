import { connect } from "react-redux";
import Dialog from './Dialog';


let mapStateToProps = (state) => {
    return {dialogData: state.dialog.dialogData};
}
const DialogContainer = connect(mapStateToProps)(Dialog);

export default DialogContainer;