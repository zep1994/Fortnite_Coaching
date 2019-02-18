import React from 'react'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Main/Main';
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className="demo-big-content">
            <Layout>
            <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}}
                 to="/">Coaching</Link>} scroll>
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/meetings">Meetings</Link>
                        <Link to="/coaches">Coaches</Link>
                        <Link to="/games">Games</Link>
                    </Navigation>
                </Header>
                <Drawer title="Coaching">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/meetings">Meetings</Link>
                        <Link to="/coaches">Coaches</Link>
                        <Link to="/games">Games</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <Main />
                </Content>
            </Layout>    
        </div>
    )
}

export default NavBar