import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Accordion } from "react-bootstrap";
import './Sidebar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';



interface SidebarLinkProps {
    title: string,
    link: string;
};
const SidebarLink : React.FC<SidebarLinkProps> = ({title, link} : SidebarLinkProps) => {

    interface linkProps {
        title: string,
        link: string
    }
    const createLink = ({title, link} : linkProps) : string => {
        const protocol = window.location.protocol;
        const domain = window.location.hostname;
        const port = window.location.port
        const url = protocol + "//" + domain + ":" + port + "/" + link + title.toLowerCase();
        return url;
    }

    return (
        <div className="sidebarlink">
            <a href={createLink({title: title, link: link})}>
                {title}
            </a>
        </div>
    )
}


interface DropdownProps {
    link: string;
};

const DropdownOptions : React.FC<DropdownProps> = ({link} : DropdownProps) => {
    
    return (
        <div>
            <SidebarLink title={"Grammar"} link={link} />
            <SidebarLink title={"Vocab"} link={link} />
            <SidebarLink title={"Flashcard"} link={link} />
        </div>
    );
}





const ProfileSection : React.FC = () => {


    return (
        <div className="profile">
            <div className="segment">
                <i className="bi bi-person"></i>
                <p>Profile</p>
            </div>
        </div>
    )
}

const JlptDropdowns : React.FC = () => {

    interface eventKeyProps {
        url: string,
        eventKey: string
    }
    const getEventKey = ({url, eventKey} : eventKeyProps) : string => {
        
        if (location.pathname.includes(url) || location.search.includes(url)) 
            return "0";     // 0 = active
        return eventKey;    // normal is inactive
    }

    const n1Url = "n1/";
    const n1EventKey = "1";
    const n1Key = getEventKey({url: n1Url, eventKey: n1EventKey});

    const n2Url = "n2/";
    const n2EventKey = "2";
    const n2Key = getEventKey({url: n2Url, eventKey: n2EventKey});
    
    const n3Url = "n3/";
    const n3EventKey = "3";
    const n3Key = getEventKey({url: n3Url, eventKey: n3EventKey});

    const n4Url = "n4/";
    const n4EventKey = "4";
    const n4Key = getEventKey({url: n4Url, eventKey: n4EventKey});

    const n5Url = "n5/";
    const n5EventKey = "5";
    const n5Key = getEventKey({url: n5Url, eventKey: n5EventKey});

    return (
        <Accordion defaultActiveKey={['0']}>
                        
        <Accordion.Item eventKey={n1Key}>
            <Accordion.Header>JLPT N1</Accordion.Header>
            <Accordion.Body>
                <DropdownOptions link={n1Url} />
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey={n2Key}>
            <Accordion.Header>JLPT N2</Accordion.Header>
            <Accordion.Body>
                <DropdownOptions link={n2Url} />
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey={n3Key}>
            <Accordion.Header>JLPT N3</Accordion.Header>
            <Accordion.Body>
                <DropdownOptions link={n3Url} />
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey={n4Key}>
            <Accordion.Header>JLPT N4</Accordion.Header>
            <Accordion.Body>
                <DropdownOptions link={n4Url} />
            </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey={n5Key}>
            <Accordion.Header>JLPT N5</Accordion.Header>
            <Accordion.Body>
                <DropdownOptions link={n5Url} />
            </Accordion.Body>
        </Accordion.Item>
        
    </Accordion>
    );


}



const Sidebar : React.FC = () => {
    return (
            <div className="sidebar">
                <JlptDropdowns />
                <ProfileSection />
            </div>
    )
}


export default Sidebar;