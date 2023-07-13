interface UserProps {
  users: UserListing[];
}

interface UserListing {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function User(props: any) {
  return (
    <>
      <div>{props.userDetails.name}</div>
      <div>{props.userDetails.email}</div>
    </>
  );
}
