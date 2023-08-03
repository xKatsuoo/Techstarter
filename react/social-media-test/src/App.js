import React from "react";
import {
  StreamApp,
  NotificationDropdown,
  FlatFeed,
  Activity,
  LikeButton,
  CommentField,
  CommentList,
  StatusUpdateForm,
} from "react-activity-feed";
import "react-activity-feed/dist/index.css";

class App extends React.Component {
  render() {
    return (
      <StreamApp
        apiKey="dz5f4d5kzrue"
        appId="102254"
        token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoic3dlZXQtbWF0aC00IiwiZXhwIjoxNjkxMTAwNDIwfQ.oxraWNLfdP_ZMsw4s7cFyUsUXRPRsF3zn_pOrr3KyP4"
      >
        <NotificationDropdown notify />
        <StatusUpdateForm
          feedGroup="timeline"
          userId="jason"
          placeholder="What are you doing?" />
        <FlatFeed
          options={{ reactions: { recent: true } }}
          notify
          Activity={(props) => (
            <Activity
              {...props}
              Footer={() => (
                <div style={{ padding: "8px 16px" }}>
                  <LikeButton {...props} />
                  <CommentField
                    activity={props.activity}
                    onAddReaction={props.onAddReaction}
                  />
                  <CommentList activityId={props.activity.id} />
                </div>
              )}
            />
          )}
        />
      </StreamApp>
    );
  }
}

export default App;
