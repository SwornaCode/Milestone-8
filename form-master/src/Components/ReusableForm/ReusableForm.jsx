const ReusableForm = ({handleSubmit,formTitle,submitBtnText = 'Submit',children}) => {



  const handleLocalSubmit = e => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value

    }
    handleSubmit(data)
  }
  
  return (
    <div>
      {children}
      {/* <h2>{formTitle}</h2> */}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value={submitBtnText} />
      </form>
    </div>
  );
};

export default ReusableForm;
