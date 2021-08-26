import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../../components/NavBar/navBar'

const links = {
    logIn: "",
    register: ""
}

const Start: NextPage = () => {
    return [
        <Head key={-1}>
            <title>Learn To Take Care Of Your Mind &#8212; tranquillity</title>
        </Head>,
        <NavBar links={links} key={0}/>,
        <section className="start-hero" key={1}>
            <div className="hero-img">
                <div className="img"></div>
            </div>
            <div className="hero-content">
                <h1>It is all in the <span>Mind</span></h1>
                <p>It all beginsand ends in your mind. Whatever you give power to, has the power over you, if you allow it.</p>
            </div>
        </section>
    ]
}

export default Start