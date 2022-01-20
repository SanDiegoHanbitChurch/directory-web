export type User = {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  accessToken: string | undefined;
};

export type MemberType = {
  id: string;
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
