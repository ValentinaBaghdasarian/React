import React from 'react';



class ProfileStatus extends React.Component{
    constructor(props){
        super(props);
        this.state = {editMode: false,
                      status: this.props.status
                    };
        this.activateEditMode = this.activateEditMode.bind(this);
        this.deActivateEditMode = this.deActivateEditMode.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
    }

    
    activateEditMode() {
        this.setState({editMode: true});
    }

    deActivateEditMode() {
        this.setState({editMode: false});
        this.props.updateStatus(this.state.status);
    }

    onStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    }

    componentDidUpdate(prevProps, prevSate){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }  
    }

    render(){
        return(
            <div>
                {!this.state.editMode? <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>: <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}/>
                </div>}
                
                
            </div>
        )
    }
};


export default ProfileStatus;