const AddUser = () => {
  return(
    <div className="card">
      <div className="card-header">
        <h3>Add new user</h3>
      </div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type='text' className="form-control-sm"/>
          </div>

          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input id="name" type='text' className="form-control-sm"/>
          </div>
        </form>
      </div>
      <div className="card-footer">

      </div>
    </div>
  )
}


export default AddUser;