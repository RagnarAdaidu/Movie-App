export default function Sidebar() {
  return (
    <div className="section-sidebar">
      <header>
        <h1 className="heading-primary">Dev<span className="heading-primary-blue">Hire</span> </h1>
        <nav className="main-nav">
          <ul className="main-nav-list">
          <li className="main-nav-link">
            <ion-icon class='special-ion' name="search-outline"></ion-icon>
            <span>Search</span>
          </li>
          <li className="main-nav-link special">
          <ion-icon class='special-ion-2' name="heart-outline"></ion-icon>
            <span className="special">Watchlist</span>
          </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
