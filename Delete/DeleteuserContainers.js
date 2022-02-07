import React, {Component} from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";

export default class HomeContainer extends Component {
    render()
    {
        return(
           <Container>
               <BackComponent />
               <h1>Delete User</h1>
           </Container>
        )
    }
}