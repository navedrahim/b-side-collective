import { useEffect } from "react"
import { signOut } from "../../services/users.js"
import { useHistory } from "react-router-dom"

function SignOut(props) {
  const { setUser } = props
  const history = useHistory()
  useEffect(()  => {
    const signOutUser = async () => {
      await signOut()
      setUser(null)
      history.push("/")
    }
    signOutUser()
  }, [history, setUser])
  return (
    ""
  )
}

export default SignOut