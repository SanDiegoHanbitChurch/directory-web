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
  const [dataLoadingState, setDataLoadingState] = useState(false);

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
    setDataLoadingState(true);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    await getMembers(user, offsetState);
    setDataLoadingState(false);
  };

  const handleOnBackMembers = () => {
    setOffsetState(offsetState - 25);
    setDataLoadingState(true);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    setTimeout(() => {
      // eslint-disable-next-line no-alert
      setDataLoadingState(false);
    }, 1000);
  };

  const handleOnClear = () => {
    fetchData();
  };

  // gets exectued after compoonent is mounted
  useEffect(() => {
    fetchData();
  }, [user, offsetState]);

  if (dataLoadingState === true) {
    return (
      <Box m={10} display="flex" justifyContent="center" alignItems="center">
        <CircularProgress color="secondary" />
      </Box>
    );
  }
  return (
    <>
      <SearchBar onSearch={handleOnSearch} onClear={handleOnClear} />
      <PagesContainer
        onBackMembers={handleOnBackMembers}
        offset={offsetState}
        onNextMembers={handleOnNextMembers}
      />
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
