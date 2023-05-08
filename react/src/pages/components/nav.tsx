import cn from 'classnames';
import Link from 'next/link';
import { ReactNode, useState } from 'react';

const quantity = 0;

const Notifications = () => {
    return (
        <h1>Notifications</h1>
    )
}

const LoginBadge = () => {
    return (
        <h1>LoginBadge</h1>
    )
}

const Flyout = ({children, className}: {children: ReactNode, className: string}) => {
    return (
        <div className={cn("flyout",{ className })}>
            {children}
        </div>
    )
}

const Cart = () => {
    return (
        <h1>Cart</h1>
    )
}


export default function Navbar() {
    // truly functional library
    // never actually change the value of a variable
    // replaces old variable with new state of a variable
    // only way to change isMenuActive is to use setIsMenuActive
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [isCartActive, setIsCartActive] = useState(false)

    return (
        <>
            <nav className="navbar is-primary">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="">
                            <img src="@/../public/logo.svg" alt="Vue" width="30" height="30" />
                        </a>
                        <div className={cn("navbar-burger", { 'is-active': isMenuActive })} onClick={() => setIsMenuActive(!isMenuActive)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div className={cn("navbar-menu", { 'is-active': isMenuActive })} >
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
                                    <hr className="navbar-divider" />
                                    <Link href="/admin/users" className="navbar-item">Users</Link>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <Notifications />
                            </div>

                            <div className="navbar-item">
                                <button className={cn("button is-primary")} onClick={() => setIsCartActive(!isCartActive)} >
                                    <span className="icon">
                                        <i className="fas fa-shopping-cart"></i>
                                        <span v-if="totalQuantity!=0" className="tag is-danger quantity-tag">{quantity}</span>
                                    </span>
                                </button>
                            </div>
                            <LoginBadge />

                            <div className="navbar-item">
                                <div className="field is-grouped">
                                    <p className="control">
                                        <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet"
                                            data-social-target="https://bulma.io" target="_blank"
                                            href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                                            <span className="icon">
                                                <i className="fab fa-twitter"></i>
                                            </span>
                                            <span>
                                                Tweet
                                            </span>
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a className="button is-primary"
                                            href="">
                                            <span className="icon">
                                                <i className="fas fa-download"></i>
                                            </span>
                                            <span>Download</span>
                                        </a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </nav >
            <Flyout className={cn({ 'is-active': isCartActive })}>
                <Cart />
            </Flyout>
        </>
    )
}