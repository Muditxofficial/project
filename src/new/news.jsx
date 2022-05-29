import React from 'react'
import { Feed, Header, Segment } from 'semantic-ui-react';
import { getAuth } from "firebase/auth";
export default function News() {
  

  const auth = getAuth();
  const user = auth.currentUser;
  let displayName;
  let email;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    displayName= user.displayName;
    email = user.email;
  }

  const image = '/assets/user.png';
  const date = "Online";
  const summary = `${displayName}`;

  return (
    <>
      <Header attached color='teal' icon='newspaper' content='News Feed'>
        <Segment attached='bottom'>
           <Feed>
             <Feed.Event image={image} date={date} summary={summary}/>
           </Feed>
        </Segment>
      </Header>
    </>
  )
}
