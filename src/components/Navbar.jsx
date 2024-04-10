const NavBar = () => {
    return (
        <div className="navbar-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQggb14nbzkAcBG5OSGdinZWcNGFUi7JsVsNz39wNOrF9vX5LtvN7yJ07uwwg&s" alt="logo" className="logo" />
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button className="login-btn">Login</button>
        </div>
    )
}
export default NavBar;
