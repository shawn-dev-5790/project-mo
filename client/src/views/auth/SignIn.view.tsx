import css from './SignIn.view.module.css'

const SignInView = () => {
  return (
    <div className={css.wrap}>
      <header>
        <h1>ASAP</h1>
        <span>Project - ASAP</span>
      </header>
      <main>
        <h2>Sign In to ASimpleAPp</h2>
        <form>
          <fieldset>
            <label htmlFor="useremail">Username</label>
            <input type="text" id="useremail" name="useremail" />
          </fieldset>
          <fieldset>
            <label htmlFor="password">
              <span>Password</span>
              <a href="/password_reset">Forgot Password?</a>
            </label>
            <input type="password" id="password" name="password" />
          </fieldset>
          <button type="submit">Sign In</button>
        </form>
        <p>
          <span>
            <a href="/signup">Sign up</a>
          </span>
        </p>
      </main>
      <footer>
        <small>Copyright © 2024 Shawn Lee.</small>
      </footer>
    </div>
  )
}

export default SignInView
