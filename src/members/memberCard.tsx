import React from 'react';
import Name from './name';
import Phone from './phone';
import Email from './email';
import Address from './address';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

type Props = {
    name: string,
    avatar: string,
    phone: string,
    email: string,
    address: {
        street: string,
        city: string,
        state: string,
        zip: string,
    }
}

const useStyles = makeStyles({
    media: {
      height: 150,
    },
  });
  

const MemberCard = ({name, phone, email, avatar, address}: Props) => {
    const classes = useStyles();
    return (
        <Card>
            <CardMedia 
                className={classes.media}
                image={avatar}
                title="Member Avatar"
            />
            <CardContent>
                <Name name={name} />
                <Phone phone={phone} />
                <Address address={address} />
                <Email email={email} />
            </CardContent>
        </Card>
    )
}

export default MemberCard;
