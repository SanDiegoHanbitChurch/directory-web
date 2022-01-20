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

  return (
    <Box display="flex" flexDirection="row" justifyContent="center" m={3}>
      <MemberCard
        name={name}
        avatar={avatar}
        phone={phone}
        email={email}
        address={address}
      />
    </Box>
  );
};

export default Member;
