import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginContainer,
  LoginBox,
  Logo,
  Label,
  Input,
  ShowPasswordContainer,
  LoginButton,
  ErrorMsg,
} from './styledcomponent'

const Login = () => {
  const navigate = useNavigate()
  const jwtToken = Cookies.get('jwt_token')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  if (jwtToken !== undefined) {
    navigate('/', {replace: true})
  }

  const handleLogin = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const requestBody = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(requestBody),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      setError(data.error_msg)
    }
  }

  return (
    <LoginContainer>
      <LoginBox onSubmit={handleLogin}>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <Label htmlFor="username">USERNAME</Label>
        <Input
          id="username"
          type="text"
          placeholder="rahul"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <Label htmlFor="password">PASSWORD</Label>
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="rahul@2021"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <ShowPasswordContainer>
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={e => setShowPassword(e.target.checked)}
          />
          <label htmlFor="showPassword">Show Password</label>
        </ShowPasswordContainer>

        <LoginButton type="submit">Login</LoginButton>

        {error && <ErrorMsg>*{error}</ErrorMsg>}
      </LoginBox>
    </LoginContainer>
  )
}

export default Login
