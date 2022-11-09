import React,{useState} from "react";
import "./searchPage.css";
import Container from 'react-bootstrap/Container';
import SearchIcon from '@mui/icons-material/Search';
import {Users} from "./users";
import Card from 'react-bootstrap/Card';

const SearchPage = () =>{
    const [search,setSearch] = useState("");   
    return(
        <div>
            <div className="search-header">
                <Container fluid className="container">
                    <div className="div-searchbar">                               
                        <input 
                            type="text" 
                            placeholder="Search name or email" 
                            className="searchbar"
                            onChange={(e) => setSearch(e.target.value)}/>                  
                    </div>                       
                    <div className="div-searchicon">
                        <SearchIcon className="search-icon"/> 
                    </div> 
                </Container>          
            </div>
            <div className="search-items">
                {Users.filter((user) =>
                    user.name.toLocaleLowerCase().includes(search) || user.email.toLocaleLowerCase().includes(search)
                    ).map((user) =>{
                         return(
                            <React.Fragment key={user.id}>                           
                                <Card className="border-bottom">
                                    <div className="search-elements">
                                        <div className="search-person-icon">
                                            <Card.Img className="search-person-img" src={user.img} />
                                        </div>
                                        <div className="search-person-text">
                                            <Card.Body className="search-person-text-name"><b>{user.name}</b></Card.Body>
                                            <Card.Body className="search-person-text-email">{user.email}</Card.Body>
                                        </div>
                                    </div>
                                </Card>
                                <hr style={{
                                    color:`#D4F2FF`,
                                    backgroundColor:`#D4F2FF`,
                                    borderColor : '#D4F2FF'
                                }}/>                          
                            </React.Fragment>                    
                         )
                    })}
            </div>
        </div>
    )
}
export default SearchPage;