import React from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import EventList from './EventList';
import { useSelector, useDispatch } from 'react-redux';
import EventListItemPlaceholder from './EventListItemPlaceholder';
import EventFilters from './EventFilters';
import { fetchEvents } from '../eventActions';
import { useState } from 'react';
import EventsFeed from './EventsFeed';
import { useEffect } from 'react';
import { RETAIN_STATE } from '../eventConstants';
import News from '../../../new/news';
import '../../../new/stylesNew.css'
export default function EventDashboard() {
  const limit = 2;
  const dispatch = useDispatch();
  const { events, moreEvents, filter, startDate, lastVisible, retainState } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);
  const { authenticated } = useSelector((state) => state.auth);
  const [loadingInitial, setLoadingInitial] = useState(false);

  useEffect(() => {
    if (retainState) return;
    setLoadingInitial(true);
    dispatch(fetchEvents(filter, startDate, limit)).then(() => {
      setLoadingInitial(false);
    });
    return () => {
      dispatch({type: RETAIN_STATE})
    }
  }, [dispatch, filter, startDate, retainState]);

  function handleFetchNextEvents() {
    dispatch(fetchEvents(filter, startDate, limit, lastVisible));
  }

  return (
    <>
    <Grid>
      <Grid.Column width={10}>
        {loadingInitial && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList
          events={events}
          getNextEvents={handleFetchNextEvents}
          loading={loading}
          moreEvents={moreEvents}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {/* {authenticated && <EventsFeed />} */}
        {authenticated && <News/>}
        <EventFilters
          loading={loading}
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Loader active={loading} />
      </Grid.Column>
    </Grid>
    <footer>
      <div className="main-content">
        <div className="left box">
          <h2>About us</h2>
          <div className="content">
            <p>Karib is socializing application made with an intention that this will revolutionize this domain.Main userbase for this application are students which have long felt ingelected in this sphere and we aspire to remove that feeling.</p>
            <div className="social">
              <a href="#"><span className="fab fa-facebook-f"></span></a>
              <a href="#"><span className="fab fa-twitter"></span></a>
              <a href="#"><span className="fab fa-instagram"></span></a>
              <a href="#"><span className="fab fa-youtube"></span></a>
            </div>
          </div>
        </div>
        <div className="center box">
          <h2>Address</h2>
          <div className="content">
            <div className="place">
              <span className="fas fa-map-marker-alt"></span>
              <span className="text">JAMIA HAMDARD</span>
            </div>
            <div className="phone">
              <span className="fas fa-phone-alt"></span>
              <span className="text">+089-765432100</span>
            </div>
            <div className="email">
              <span className="fas fa-envelope"></span>
              <span className="text">abc@example.com</span>
            </div>
          </div>
        </div>
        <div className="right box">
          <h2>Contact us</h2>
          <div className="content">
            <form action="#">
              <div className="email">
                <div className="text">Email *</div>
                <input type="email" required/>
              </div>
              <div className="msg">
                <div className="text">Message *</div>
                <textarea rows="2" cols="25" required></textarea>
              </div>
              <div className="btn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">Created By <a href="#">MuditChoudhary</a> | </span>
          <span className="far fa-copyright"></span><span> 2022 All rights reserved.</span>
        </center>
      </div>
    </footer>
    </>
  );
}
