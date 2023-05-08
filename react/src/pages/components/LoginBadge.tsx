import { useSession, useLogin, useLogout } from '@/model/session';



export default function LoginBadge() {
    const session = useSession();
    const logout = useLogout();
    const login = useLogin();

    return (
        <>
            { session.user ? 

            <div className="navbar-item" v-if="session.user">
                Welcome, { session.user.name }
                <a onClick={()=>{logout()}}>Logout</a>
            </div >
            :
            <div className="navbar-item" v-else>
                <p className="control">
                    <button className="button is-primary" onClick={()=>login()}>
                        <span className="icon">
                            <i className="fas fa-user"></i>
                        </span>
                        <strong>Login</strong>
                    </button>
                </p>
                <p className="control">
                    <button className="button is-info is-light">
                        <span className="icon">
                            <i className="fas fa-user-plus"></i>
                        </span>
                        <strong>Sign up</strong>
                    </button>
                </p>
            </div >
            }
        </>
    )
}
