import { useState } from 'react';
import './profile-image.css'

const ProfileImage = ({ user }) => {

  const [image, setImage] = useState(user.image);
  const splitName = user.authUser.name.split(' ').map((part) => part[0].toUpperCase()).join('');

  const selectFile = (e) => {
    const file = e.target.files[0];
    if(!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = (ev) => {
      setImage(ev.target.result)
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <label htmlFor="avatar-image" className="avatar">
      {
        image
          ? <img src={image} />
          : <div className="short-name">{splitName}</div>
      }
      <input id="avatar-image" type="file" name="avatar" accept=".jpg, .jpeg, .png" onChange={selectFile}/>
    </label>
  );
};

export default ProfileImage;