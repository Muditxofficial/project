import React from "react";
import {
  Segment,
  Grid,
  Item,
  Header,
  Statistic,
  Divider,
  Reveal,
  Button,
} from "semantic-ui-react";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  followUser,
  unfollowUser,
  getFollowingDoc,
} from "../../../app/firestore/firestoreService";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setFollowUser, setUnfollowUser } from "../profileActions";
import { CLEAR_FOLLOWINGS } from "../profileConstants";

export default function ProfileHeader({ profile, isCurrentUser }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { followingUser } = useSelector((state) => state.profile);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    if (isCurrentUser) return;
    setLoading(true);
    async function fetchFollowingDoc() {
      try {
        const followingDoc = await getFollowingDoc(profile.id);
        if (followingDoc && followingDoc.exists) {
          dispatch(setFollowUser());
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchFollowingDoc().then(() => setLoading(false));
    return () => {
      dispatch({ type: CLEAR_FOLLOWINGS });
    };
  }, [dispatch, profile.id, isCurrentUser]);

  async function handleFollowUser() {
    setLoading(true);
    setChecking(true);

    try {
      await followUser(profile);
      dispatch(setFollowUser());
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleUnfollowUser() {
    setLoading(true);
    setChecking(false);

    try {
      await unfollowUser(profile);
      dispatch(setUnfollowUser());
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Segment>
      <Grid>
        <Grid.Column width={12}>
          <Item.Group>
            <Item>
              <Item.Image
                avatar
                size='small'
                src={profile.photoURL || "/assets/user.png"}
              />
              <Item.Content verticalAlign='middle'>
                <Header
                  as='h1'
                  style={{ display: "block", marginBottom: 10 }}
                  content={profile.displayName}
                />
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Statistic.Group>
            {/* <Statistic label='Followers' value={votes} />
            <Statistic label='Following' value={votes} /> */}
          </Statistic.Group>
          {!isCurrentUser && (
            <>
              <Divider />
              <Reveal animated='move'>
                <Reveal.Content visible style={{ width: "100%" }}>
                  <Button
                    fluid
                    color='teal'
                    content={checking ? "following" : "CLick to follow"}
                  />
                  {/* <Button fluid color='teal' content={followingUser ? 'Following' : 'Not following'} /> */}
                </Reveal.Content>
                <Reveal.Content hidden style={{ width: "100%" }}>
                  <Button
                    onClick={checking ? handleUnfollowUser : handleFollowUser}
                    loading={loading}
                    basic
                    fluid
                    color={checking ? "red" : "green"}
                    content={checking ? "Unfollow" : "Follow"}
                  />
                </Reveal.Content>
              </Reveal>
            </>
          )}
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
