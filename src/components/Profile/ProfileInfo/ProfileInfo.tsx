import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileUserType} from "../../../redux/profile_reducer";
import {Preloader} from '../../../common/Preloader/Preloader';
import facebookSVG from '../../../assets/icons/facebook.png';
import googleSVG from '../../../assets/icons/www.png';
import vkSVG from '../../../assets/icons/vk.png';
import twitterSVG from '../../../assets/icons/twitter.png';
import instagramSVG from '../../../assets/icons/instagram.png';
import youtubeSVG from '../../../assets/icons/youtube.png';
import gitHubeSVG from '../../../assets/icons/github.png';
import gmailSVG from '../../../assets/icons/gmail.png';
import avatarPhoto from "../../../assets/images/avatar.png";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

export type ProfileInfoType = {
    profileUser: ProfileUserType | null
    profileStatus: string
    updateStatus: (newStatus: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profileUser) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.description}>
                <img alt={'avatar'}
                     src={props.profileUser.photos.large || avatarPhoto}
                    // src={props.profileUser.photos.large ? props.profileUser.photos.large : avatarPhoto}
                />

                <div style={{marginBottom: '10px'}}>
                    {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                </div>

                <div>
                    <ProfileStatusWithHooks
                        isOwner={props.isOwner}
                        updateStatus={props.updateStatus}
                        profileStatus={props.profileStatus}
                    />
                    {/*<ProfileStatus*/}
                    {/*    updateStatus={props.updateStatus}*/}
                    {/*    profileStatus={props.profileStatus}*/}
                    {/*/>*/}
                    <span className={s.titleText}>Full Name: </span>
                    {props.profileUser.fullName}
                </div>
                <div>
                    <span className={s.titleText}>About Me: </span>
                    {props.profileUser.aboutMe}
                </div>
                <div>
                    <span className={s.titleText}>Looking For A Job Description: </span>
                    {props.profileUser.lookingForAJobDescription}
                </div>
                <div className={s.contactsIcons}>
                    <span className={s.titleText}>My contacts: </span>
                    <>
                        <a target="blank" href='https://www.facebook.com/'>
                            <img src={facebookSVG} alt={props.profileUser.contacts.facebook}/>
                        </a>
                        <a target="blank" href='https://www.google.com/'>
                            <img src={googleSVG} alt={props.profileUser.contacts.website}/>
                        </a>
                        <a target="blank" href='https://vk.com/'>
                            <img src={vkSVG} alt={props.profileUser.contacts.vk}/>
                        </a>
                        <a target="blank" href='https://twitter.com/'>
                            <img src={twitterSVG} alt={props.profileUser.contacts.twitter}/>
                        </a>
                        <a target="blank" href='https://www.instagram.com/'>
                            <img src={instagramSVG} alt={props.profileUser.contacts.instagram}/>
                        </a>
                        <a target="blank" href='https://www.youtube.com/'>
                            <img src={youtubeSVG} alt={props.profileUser.contacts.youtube}/>
                        </a>
                        <a target="blank" href='https://github.com/'>
                            <img src={gitHubeSVG} alt={props.profileUser.contacts.github}/>
                        </a>
                        <a target="blank" href='https://mail.google.com/'>
                            <img src={gmailSVG} alt={props.profileUser.contacts.mainLink}/>
                        </a>
                    </>
                </div>
            </div>
        </div>
    );
}