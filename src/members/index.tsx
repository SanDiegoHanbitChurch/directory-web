import React, { useEffect, useState } from "react";
import Members from "./members";
import { getMembers, searchMembers } from "../api/index";
import { MemberType, User } from "../types";
import SearchBar from "./search/searchBar";
import PagesContainer from "./pages";

type Props = {
  user: User;
};

const MembersContainer = ({ user }: Props) => {
  const [membersState, setMembers] = useState<MemberType[]>([]);
  const [offsetState, setOffsetState] = useState(0);

  const handleOnSearch = async (searchTerm: string) => {
    const result = await searchMembers(user, searchTerm);
    setMembers(result);
    if (result.length === 0 || result === undefined) {
      setTimeout(() => {
        // eslint-disable-next-line no-alert
        alert("No users found. Please search again.");
      }, 1000);
    }
  };

  const fetchData = async () => {
    const members = await getMembers(user, offsetState);
    setMembers(members);
  };

  const handleOnNextMembers = () => {
    setOffsetState(offsetState + 25);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const handleOnBackMembers = () => {
    setOffsetState(offsetState - 25);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  const handleOnClear = () => {
    fetchData();
  };

  // gets exectued after compoonent is mounted
  useEffect(() => {
    fetchData();
  }, [user, offsetState]);

  return (
    <>
      <SearchBar onSearch={handleOnSearch} onClear={handleOnClear} />
      <Members members={membersState} />
      <PagesContainer
        onBackMembers={handleOnBackMembers}
        offset={offsetState}
        onNextMembers={handleOnNextMembers}
      />
    </>
  );
};

export default MembersContainer;
