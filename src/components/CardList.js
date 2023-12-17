import React from "react";
import Card from "../components/Card";

const CardList = ({robots}) => {
    return(
        <div>
          {
            robots.map((user,i)=>{
                return( <Card name={robots[i].name} email={robots[i].email} id={robots[i].id}/>);
            })
          }
        </div>
    );
}

export default CardList;