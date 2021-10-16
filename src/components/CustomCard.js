import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActions, CardMedia, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

import { useStyles } from './styles';

const CustomCard = ({ image, heading, body, cost, startDate, seatsLeft, tutors, reviews, isTabletorMobile }) => {

    const classes = useStyles(isTabletorMobile)();

    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    const register = () => {
        // Push to registration page
    }
    
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
                    <Button variant="contained" color="primary" className={classes.button} onClick={toggleExpanded}>
                        Details
                    </Button>
                </CardActions>
            </Card>
            <Dialog
                open={expanded}
                onClose={toggleExpanded}
            >
                <DialogTitle>
                    {heading}
                </DialogTitle>
                <DialogContent>
                    <img src={image} alt="thumbnail" className={classes.actions} style={{ borderRadius: '15px' }}/>
                    <DialogContentText>
                        <br/>
                        {body}
                        <br/>
                        Cost: {cost}
                        <br/>
                        Start date: {startDate}
                        <br/>
                        No. of Vaccant Seats: {seatsLeft}
                        <br/>
                        <strong>Tutors:</strong>
                        {tutors.map(tutor => (
                            <>
                                <br/>
                                Name: {tutor.name}
                                <br/>
                                Bio: {tutor.bio}
                                <br/>
                            </>
                        ))}
                        <br/>
                        <strong>Reviews:</strong>
                        {reviews.map((review, id) => (
                            <>
                                <br/>
                                {id+1}. {review}
                            </>
                        ))}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={toggleExpanded}>Close</Button>
                <Button variant="contained" color="primary" onClick={register} autoFocus>
                    Register
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CustomCard;
