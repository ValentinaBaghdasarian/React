import React from "react";
import StoreContext from "../../../redux/StoreContext";
import classes from './Dialog.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";


function Dialog(props){
   return( 
    <StoreContext.Consumer>{
        (store) =>{
            let state = store.getState().dialog;
            let DialogElements = state.dialogData.map( d => <DialogsItem id={d.id} name={d.name} url={d.url}/>);

            return (
                <div className={classes.dialogsItems}>
                    { DialogElements }
                </div>
            );
        }
    }
    </StoreContext.Consumer>
   )
};

export default Dialog;