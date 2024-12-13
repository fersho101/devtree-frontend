import { Link } from 'react-router-dom';

export default function RegisterView() {
    return (
        <>
            <h1 className='text-4xl text-white font-bold' >Crear cuenta</h1>
            <nav className='mt-10'>
                <Link
                    className='text-center text-white text-lg block'
                    to='/auth/login'>
                    ¿Ya tines cuenta? .... Inicia sesion aquí!!
                </Link>
            </nav>
        </>
    );
}
