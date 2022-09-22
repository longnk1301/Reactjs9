import React from "react";

const Breadcrumb = ({ breadCrumb }) => {
    return (
        <div>
            {breadCrumb.map((tab, index) => (
                <a key={index}>{tab}{index === breadCrumb.length - 1 ? "" : " > "}</a>
            ))}
        </div>
    );  
}

export default Breadcrumb;