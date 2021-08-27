import React, {ChangeEvent} from 'react';
import s from './ProfileStatus.module.css';

type ProfileStatusType = {
    profileStatus: string
    updateStatus: (newStatus: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.profileStatus
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
        this.props.updateStatus(this.state.status);
    }

    changeProfileStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>) {
        if (prevProps.profileStatus !== this.props.profileStatus) {
            this.setState({
                status: this.props.profileStatus
            });
        }
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
                        placeholder='print your status'
                        onChange={this.changeProfileStatusHandler}
                    />
                </div>
                : <div>
                 <span onDoubleClick={this.activateEditModeHandler}>
                     <b>Status: </b> {this.props.profileStatus || 'the user didn\'t write a status...'}
                 </span>
                </div>}
        </div>
    }
}
