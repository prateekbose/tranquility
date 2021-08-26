import { FunctionComponent } from 'react'

type Props = {
    links: {
        logIn: string,
        register: string
    }
}

const NavBar: FunctionComponent<Props> = ({ links }) => {
    return (
        <nav>
            <h1>tranquillity</h1>
            <ul>
                <a href={links.register}>Register</a>
                <a href={links.logIn} className="btn-primary">Log In</a>
            </ul>
        </nav>
    )
}

export default NavBar