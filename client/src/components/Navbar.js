import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

const NavBar = () => {
    return (
        <div className="demo-big-content">
            <Layout>
                <Header title="Coaching" scroll>
                    <Navigation>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/meetings">Meetings</NavLink>
                        <NavLink to="/coaches">Coaches</NavLink>
                        <NavLink to="/games">Games</NavLink>
                    </Navigation>
                </Header>
                <Drawer title="Coaching">
                    <Navigation>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/meetings">Meetings</NavLink>
                        <NavLink to="/coaches">Coaches</NavLink>
                        <NavLink to="/games">Games</NavLink>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                </Content>
            </Layout>    
        </div>
    )
}

export default NavBar