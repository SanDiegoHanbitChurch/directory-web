import React, { useEffect, useState, useRef } from "react";
import Members from "./members";
import { getMembers, searchMembers } from "../api/index";
import { MemberType, User } from "../types";
import SearchBar from "./search/searchBar";

type Props = {
  user: User;
};

// returns height of browser document
const getDocumentHeight = (): number => {
  const { body } = document;
  const html = document.documentElement;

  const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  return height;
};

const MembersContainer = ({ user }: Props) => {
  const [membersState, setMembers] = useState<MemberType[]>([]);
  const [offsetState, _setOffsetState] = useState(0);

  const myRef = useRef(offsetState);

  const setOffsetState = (offset: number) => {
    myRef.current = offset;
    _setOffsetState(offset);
  };

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
    setMembers(membersState.concat(members));
  };

  const handleOnClear = () => {
    fetchData();
  };

  const handleScroll = () => {
    const documentHeight = getDocumentHeight();
    const { pageYOffset } = window;
    const percent = (pageYOffset / documentHeight) * 100;
    if (percent > 75 && percent < 76) {
      setOffsetState(myRef.current + 25);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // gets exectued after compoonent is mounted
  useEffect(() => {
    fetchData();
  }, [user, offsetState]);

  return (
    <>
      <SearchBar onSearch={handleOnSearch} onClear={handleOnClear} />
      <Members members={membersState} />
    </>
  );
};

export default MembersContainer;
