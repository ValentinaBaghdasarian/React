import { connect } from 'react-redux';
import Dialog from './Dialog';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';


// let AuthRedirectComponent = withAuthRedirect(Dialog);


let mapStateToProps = (state) => {
    return {
        dialogData: state.dialog.dialogData,
    };
};

export default compose(connect(mapStateToProps), withAuthRedirect)(Dialog);

// const DialogContainer = connect(mapStateToProps)(AuthRedirectComponent);

// export default DialogContainer;