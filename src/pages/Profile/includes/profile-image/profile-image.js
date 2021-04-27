import {useRef, useState} from 'react';
import './profile-image.css'
import firebaseApp  from '../../../../utils/colud'
import Loading from "../../../../components/loading/loading";
import ProfileService from "../../../../services/profile.service";
import { connect } from "react-redux";
import {errorToast, successToast} from "../../../../actions/toaster.actions";
import {signIn} from "../../../../actions/auth.actions";

const ProfileImage = ({ user, errorToast, updateUserData, successToast }) => {

  const profileService = new ProfileService();
  const [image, setImage] = useState(user?.image?.filePath ?? null);
  const splitName = user.name.split(' ').map((part) => part[0].toUpperCase()).join('');
  const loadingRef = useRef();

  const selectFile = (e) => {
    const file = e.target.files[0];
    if(!file) {
      return;
    }
    loadingRef.current.display();
    const extension = file.type.split('/')[1];
    const fileReader = new FileReader();
    fileReader.onload = (ev) => {
      setImage(ev.target.result);
      const fileName = `${user.id}.${extension}`;
      const uploadAvatar = firebaseApp.storage().ref('user-avatar')
        .child(fileName)
        .put(file);

      uploadAvatar.on(
        null,
        null,
        () => loadingRef.current.hide(),
        async () => {
          try {
            const avatarUrl = await uploadAvatar.snapshot.ref.getDownloadURL();
            const userUpdatedData = await profileService.updateProfileImage({
              filePath: avatarUrl,
              name: fileName
            });
            updateUserData(userUpdatedData.data);
            loadingRef.current.hide();
            successToast('Your profile image has been successfully updated!')
          } catch (e) {
            loadingRef.current.hide();
            errorToast(e.message);
          }
        },
      )

    };
    fileReader.readAsDataURL(file);
  };

  return (
    <>
      <label htmlFor="avatar-image" className="avatar">
        {
          image
            ? <img src={image} alt="Profile avatar" />
            : <div className="short-name">{splitName}</div>
        }
        <input id="avatar-image" type="file" name="avatar" accept=".jpg, .jpeg, .png" onChange={selectFile}/>
      </label>

      <Loading ref={loadingRef} />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    errorToast: (message) => dispatch(errorToast(message)),
    successToast: (message) => dispatch(successToast(message)),
    updateUserData: (userData) => dispatch(signIn(userData))
  }
}

export default connect(undefined, mapDispatchToProps)(ProfileImage);