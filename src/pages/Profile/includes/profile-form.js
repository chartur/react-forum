const ProfileForm = ({ user }) => {
  return (
    <form>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" name="name" value={user.name} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="text" className="form-control" name="name" value={user.email} />
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn btn-success">Save</button>
      </div>
    </form>
  )
};

export default ProfileForm;