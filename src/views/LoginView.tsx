import { Link } from "react-router-dom";

export default function LoginView() {
    return (
        <>
            <div className="bg-slate-50 ">LoginView</div>
            <nav>
                <Link to='/auth/register'>
                    ¿No tinenes cuenta? .... Crea una aquí!!
                </Link>
            </nav>
        </>
    )
}
