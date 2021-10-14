import React, { useState } from 'react';
import { AppBar, Toolbar, SwipeableDrawer, IconButton } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import { useStyles } from './styles';

const Header = ({ isTabletorMobile, children }) => {

    const classes = useStyles(isTabletorMobile)();

    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className={classes.rootH}>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar variant={isTabletorMobile?'regular':'dense'} className={classes.toolbar}>
                    <div className={classes.center}>
                        {isTabletorMobile && (
                            <IconButton onClick={toggleOpen}>
                                <MenuIcon className={classes.icon}/>
                            </IconButton>
                        )} <span className={classes.logo}>Hogwarts</span>
                    </div>
					{!isTabletorMobile && (
						<div className={classes.children}>
							{children}
						</div>
					)}
                </Toolbar>
            </AppBar>
            <SwipeableDrawer anchor="left" open={open} onOpen={toggleOpen} onClose={toggleOpen}>
                <div className={classes.drawer}>
                    <div className={classes.centerV}>
                        {isTabletorMobile && (
                            <IconButton onClick={toggleOpen}>
                                <MenuIcon/>
                            </IconButton>
                        )} <span className={classes.drawerLogo}>Hogwarts</span>
                    </div>
					<div className={classes.children}>
                        {children}
                    </div>
				</div>
            </SwipeableDrawer>
            <div className={classes.Toolbar}/>
        </div>
    )
}

export default Header;
