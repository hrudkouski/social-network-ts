import React from 'react';
import s from './ProfileStatus.module.css';

type ProfileStatusType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: 'My status',
    }

    activateEditModeHandler = () => {
        this.setState({
            editMode: true
        });
    }

    deActivateEditModeHandler = () => {
        this.setState({
            editMode: false
        });
    }

    render() {
        return <div className={s.wrapperStatus}>
            {this.state.editMode
                ? <div>
                    <input
                        value={this.state.status}
                        type="text"
                        onBlur={this.deActivateEditModeHandler}
                        autoFocus
                    />
                </div>
                : <div>
                 <span onDoubleClick={this.activateEditModeHandler}>
                     <b>Status: </b> {this.props.status}
                 </span>
                </div>}
        </div>
    }
}
