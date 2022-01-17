import React, { useEffect, useState } from "react";
import Members from "./members";
import { getMembers } from "../api/index";
import { MemberType, User } from "../types";

type Props = {
  user: User;
};

const MembersContainer = ({ user }: Props) => {
  const [membersState, setMembers] = useState<MemberType[]>([]);

  useEffect(() => {
    const fetchData = async (user: User) => {
      const members = await getMembers(user);
      setMembers(members);
    };
    fetchData(user);
  }, [user]);

  return <Members members={membersState} />;
};

export default MembersContainer;
