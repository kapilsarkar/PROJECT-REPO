import { useFormik } from "formik";

const Registration = () => {
 
  useFormik({
    initialValues:initialValues,
    onSubmit : (values)=>{
     
      l
    } 
  })

  return (
    <div className="w-96 px-3 shadow-xl  border-2 mt-2">
      <h2 className=" text-center p-2 mt-3">Registration</h2>
      <form>
        <div className="w-full">
          <label htmlFor="name" className="p-2">
            Name
          </label>
          <input
            type="name"
            autoComplete="off"
            name="name"
            id="name"
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="p-2">
            Email
          </label>
          <input
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="password" className="p-2">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div>
          <label htmlFor="confirm_password" className="input-label">
            Confirm Password
          </label>
          <input
            type="password"
            autoComplete="off"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="p-5">
          <a href="#" className="">
            Want to register using Gmail?
          </a>
          <button className="bg-purple-500 text-white rounded-md p-3" type="submit">
            Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
