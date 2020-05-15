import React, { Fragment } from "react";
import Card from "./Card";

const Cardlist = ({robots}) => {
    return (
      <Fragment>
        <div className="flex-wrap-ns flex-ns justify-center content-center">
          {robots.map((user, i) => {
            return (
              <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
              />
            );
          })}
        </div>
      </Fragment>
    );
}

export default Cardlist;