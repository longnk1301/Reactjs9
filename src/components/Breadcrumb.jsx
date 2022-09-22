import React from 'react';

const Breadcrumb = ({ breadCrumb }) => {
    return (
        <div>
            {breadCrumb.map((tab, index) => (
                <button>
                    {tab}
                    {index === breadCrumb.length - 1 ? '' : ' > '}
                </button>
            ))}
        </div>
    );
};

export default Breadcrumb;
