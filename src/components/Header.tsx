import ExploreMenu from "./ExploreMenu";

function Header() {
    return (
        <header className="site-header">
            <div className="logo">
                <a href="/"><img src="/images/learning.png" alt="Site Logo" /></a>
            </div>
            <Navigation />
            {/* Other header elements like search, user profile, etc. */}
        </header>
    );
}


function Navigation() {
    const menu = ["Design", "Marketing", "Lifestyle"];
    return (
        <nav className="main-navigation">
            <ul>
                <li><ExploreMenu  title="explore" menu={menu}/></li>
                <li>
                    <input type="text" className="search" placeholder="Search for anything" />
                </li>
                <li><a href="/login">Log in</a></li>
                <li><a href="/signup">Sign up</a></li>
            </ul>
        </nav>
    )
}

export default Header;
