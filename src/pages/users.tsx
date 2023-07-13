import User from "@/components/user";
import React, { use } from "react";

// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.

interface UserListProps {
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

export default function UsersList(props: UserListProps) {
  return (
    <>
      <h1>List of Users</h1>
      <div className="card">
        {props.users.map((user: UserListing) => (
          <User key={user.id} userDetails={user} />
        ))}
      </div>
    </>
  );
}

// This function gets called at build time
export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as UserListProps[];

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      users,
    },
  };
}
