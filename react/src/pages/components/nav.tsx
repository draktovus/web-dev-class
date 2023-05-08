import Link from 'next/link';

export default function Navbar() {
    return (
        <>
            <nav className="navbar is-primary">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="">
                            <img src="@/assets/logo.svg" alt="Vue" width="30" height="30">
                        </a>
                        <div className="navbar-burger" >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div className="navbar-menu" >
                        <div className="navbar-start">
                            <Link className="navbar-item" href="/">Home</Link>
                            <Link className="navbar-item" href="/about">About</Link>
                            <Link className="navbar-item" href="/products">Products</Link>
                            <Link className="navbar-item" href="/storeLocations">Store Locations</Link>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                    Admin
                                </a>
                                <div className="navbar-dropdown">
                                    <Link href="/admin/products" className="navbar-item">Product List</Link>
                                    <hr className="navbar-divider">
                                        <Link href="/admin/users" className="navbar-item">Users</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}