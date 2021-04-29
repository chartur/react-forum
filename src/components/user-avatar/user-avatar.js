const UserAvatar = ({user, size = 40}) => {
  const splitName = user.name.split(' ').map((part) => part[0].toUpperCase()).join('');

  return (
    <div className="avatar" style={{height: size, width: size}} title={user.name}>
      {
        user.image
          ? <img src={user.image.filePath} alt="user avatar" />
          : <div className="short-name" style={{fontSize: size/2}}>{splitName}</div>
      }
    </div>
  )
}

export default UserAvatar;