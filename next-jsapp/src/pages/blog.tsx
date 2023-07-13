import React, { use } from "react";

// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.

interface UserProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  posts: [],
  users: []
}


const UsersList: React.FC<UserProps> = ({ users }) => {
  return (
    <>
      <ul>
        {users?.map((user: UserProps) => (
          <>
            <li>{user.title}</li>
          </>
        ))}
      </ul>
    </>
  );
};

// This function gets called at build time
export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const users = await res.json();


  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      users,
    },
  };
}

export default UsersList;
