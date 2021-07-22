import { signUp } from "../../services/users.js"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import Layout from "../../components/Layout/Layout.jsx"

function SignUp(props) {
  const history = useHistory()
  const [form, setForm] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    isError: false,
    errorMsg: "",
  })

  const handleChange = (event) =>
  setForm({
    ...form,
    [event.target.name]: event.target.value,
  })

  const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await signUp(form)
      setUser(user)
      history.push("/albums")
    } catch (error) {
      console.error(error)
        setForm({
        email: "",
        password: "",
        passwordConfirm: "",
        isError: true,
        errorMsg: "Sign Up Details Invalid",
      })
  }
  }
  const renderError = () => {
    const toggleForm = form.isError ? "danger" : ""
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type="submit">Sign Up</button>
    }
  }
  const { email, password, passwordConfirm } = form

  return (
    <Layout user={props.user}>
    <div className="signup-form">
      <form onSubmit={onSignUp}>
        <input
        required
        type="text"
        name="email"
        value={email}
        placeholder="E-mail"
        onChange={handleChange}
        />
        <input
        required
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={handleChange}
        />
        <input
        required
        type="password"
        name="passwordConfirm"
        value={passwordConfirm}
        placeholder="Confirm Password"
        onChange={handleChange}
        />
        {renderError()}
      </form>
      
    </div>
    </Layout>
  )
}
export default SignUp