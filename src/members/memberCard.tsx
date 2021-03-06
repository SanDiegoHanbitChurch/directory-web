import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Name from "./name";
import Phone from "./phone";
import Email from "./email";
import Address from "./address";

type Props = {
  name: string;
  avatar: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  onOpenMap: () => void;
  onSendEmail: () => void;
  onCallNumber: () => void;
};

const useStyles = makeStyles({
  media: {
    height: 250,
  },
});

const MemberCard = ({
  name,
  phone,
  email,
  avatar,
  address,
  onOpenMap,
  onSendEmail,
  onCallNumber,
}: Props) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia
        className={classes.media}
        image={avatar}
        title="Member Avatar"
      />
      <CardContent className="CardContent">
        <Name name={name} />
        <Phone phone={phone} onClick={onCallNumber} />
        <Address address={address} onClick={onOpenMap} />
        <Email email={email} onClick={onSendEmail} />
      </CardContent>
    </Card>
  );
};

export default MemberCard;
