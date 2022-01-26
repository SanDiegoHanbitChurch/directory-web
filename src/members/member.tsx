import React from "react";
import { Box } from "@material-ui/core";
import MemberCard from "./memberCard";

type Props = {
  member: {
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
  };
};

const Member = ({ member }: Props) => {
  const { name, avatar, phone, email, address } = member;

  const handleOnOpenMap = () => {
    const destination = encodeURIComponent(
      `${address.street} ${address.zip}, ${address.city}`
    );
    const link = `http://maps.google.com/?daddr=${destination}`;
    window.open(link);
  };

  return (
    <Box display="flex" flexDirection="row" justifyContent="center" m={3}>
      <MemberCard
        name={name}
        avatar={avatar}
        phone={phone}
        email={email}
        address={address}
        onOpenMap={handleOnOpenMap}
      />
    </Box>
  );
};

export default Member;
