import React, { useEffect, useState } from "react";
import Members from "./members";
import { getMembers } from "../api/index";
import { searchMembers } from '../api/index';
import { MemberType, User } from "../types";
import SearchBar from "./search/searchBar";

type Props = {
  user: User;
};

const MembersContainer = ({ user }: Props) => {
  const [membersState, setMembers] = useState<MemberType[]>([]);

  const handleOnSearch = async (searchTerm: string) => {
    const result = await searchMembers(user,searchTerm);
    setMembers(result);
  };

  const handleOnMembers = () => {
    const fetchData = async (user: User) => {
      const members = await getMembers(user);
      setMembers(members);
    };
    fetchData(user);
  }

  useEffect(() => {
    const fetchData = async (user: User) => {
      const members = await getMembers(user);
      setMembers(members);
    };
    fetchData(user);
  }, [user]);

  return (
    <>
      <SearchBar handleOnSearch={handleOnSearch} handleOnMembers={handleOnMembers}/>
      <Members members={membersState}/>
    </>
    );
};

export default MembersContainer;
