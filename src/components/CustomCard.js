import React from 'react';
import { Card, CardContent, Typography, CardActions, CardMedia } from '@material-ui/core';

import { useStyles } from './styles';

const CustomCard = ({ image, heading, body, isTabletorMobile, children }) => {

    const classes = useStyles(isTabletorMobile)();
    
    return (
        <div>
            <Card className={classes.rootC} elevation={5}>
                <div>
                    {image && <CardMedia
                        className={classes.media}
                        image={image}
                        title="image"
                    />}
                    <CardContent className={classes.content}>
                        {heading && (
                            <Typography variant="h4" gutterBottom className={classes.heading}>
                                { heading }
                            </Typography>
                        )}
                        <Typography variant="h6" className={classes.typography}>
                            { body }
                        </Typography>
                    </CardContent>
                </div>
                <CardActions className={classes.actions}>
                    { children }
                </CardActions>
            </Card>
        </div>
    )
}

export default CustomCard;
