import React, { useEffect, useState } from "react";
import Members from "./members";
import { getMembers, searchMembers } from "../api/index";
import { MemberType, User } from "../types";
import SearchBar from "./search/searchBar";

type Props = {
  user: User;
};

const MembersContainer = ({ user }: Props) => {
  const [membersState, setMembers] = useState<MemberType[]>([]);

  const handleOnSearch = async (searchTerm: string) => {
    const result = await searchMembers(user, searchTerm);
    setMembers(result);
  };

  const fetchData = async () => {
    const members = await getMembers(user);
    setMembers(members);
  };

  const handleOnClear = () => {
    fetchData();
  };

  // gets exectued after compoonent is mounted
  useEffect(() => {
    fetchData();
  }, [user]);

  return (
    <>
      <SearchBar onSearch={handleOnSearch} onClear={handleOnClear} />
      <Members members={membersState} />
    </>
  );
};

export default MembersContainer;
