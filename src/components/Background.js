import React from 'react';

import { useStyles } from './styles';

const Background = ({ isTabletorMobile, children }) => {

    const classes = useStyles(isTabletorMobile)();
    return (
        <div className={classes.background}>
            {children}
        </div>
    )
}

export default Background;
