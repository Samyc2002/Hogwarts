import React from 'react';
import { Paper } from '@material-ui/core';

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
