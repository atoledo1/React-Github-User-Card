import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <h1>User:</h1>
        <img src={props.user.avatar_url} alt="userpicture" />
        <p>Name: {props.user.name}</p>
        <p>Username: {props.user.login}</p>
        <p>Bio: {props.user.bio}</p>
        <p>Followers: {props.user.followers}</p>
        <p>Following: {props.user.following}</p>
      </div>

      {props.followers.map((item) => (
        <div key={item.id}>
          <h2>Followers:</h2>
          <img src={item.avatar_url} alt="userpicture" />
          <p>Username: {item.login}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
