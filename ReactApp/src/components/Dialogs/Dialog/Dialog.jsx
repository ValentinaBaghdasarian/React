import React from "react";
import classes from './Dialog.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";


function Dialog(props){
    debugger
let state = props.store.getState().dialog;
let DialogElements = state.dialogData.map( d => <DialogsItem id={d.id} name={d.name} url={d.url}/>);

    return (
        <div className={classes.dialogsItems}>
            { DialogElements }
        </div>
    );
};

export default Dialog;