import { Link } from "react-router-dom";

export default function RegisterView() {
    return (
        <>
            <div>RegisterView</div>
            <nav>
                <Link to='/auth/login'>
                    ¿Ya tines cuenta? .... Inicia sesion aquí!!
                </Link>
            </nav>
        </>

    )
}
