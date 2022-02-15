import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@material-ui/core";
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
  const [isLoading, setIsLoading] = useState(false);

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

  const handleOnNextMembers = async () => {
    setOffsetState(offsetState + 25);
    setIsLoading(true);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    await getMembers(user, offsetState);
    setIsLoading(false);
  };

  const handleOnBackMembers = async () => {
    setOffsetState(offsetState - 25);
    setIsLoading(true);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    await getMembers(user, offsetState);
    setIsLoading(false);
  };

  const handleOnClear = () => {
    fetchData();
  };

  // gets exectued after compoonent is mounted
  useEffect(() => {
    fetchData();
  }, [user, offsetState]);

  if (isLoading) {
    return (
      <Box m={10} display="flex" justifyContent="center" alignItems="center">
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return (
    <>
      <SearchBar onSearch={handleOnSearch} onClear={handleOnClear} />
      <Members members={membersState} />
      {membersState.length < 25 || membersState === undefined || (
        <PagesContainer
          onBackMembers={handleOnBackMembers}
          offset={offsetState}
          onNextMembers={handleOnNextMembers}
        />
      )}
    </>
  );
};

export default MembersContainer;
