import React from "react";

const CatsLinkList = ({cats}) => {
    return (
        <div className="imageContainer">
            {cats &&
            cats.map((cat) => {
                return (
                    <div>
                        <div className="card">
                            <img
                                src={cat.photoUrl}
                                alt="Avatar"
                            />
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default CatsLinkList;
