import React from "react";
import { API_KEY, APP_ID, TOKEN } from "./env";
import {
  StreamApp,
  NotificationDropdown,
  FlatFeed,
  Activity,
  CommentList,
  CommentField,
  StatusUpdateForm,
  ActivityFooter,
  LoadMorePaginator,
  Title,
  Gallery,
} from "react-activity-feed";
import "react-activity-feed/dist/index.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <StreamApp apiKey={API_KEY} appId={APP_ID} token={TOKEN}>
        <NotificationDropdown notify />
        <StatusUpdateForm />
        <LoadMorePaginator refreshing />
        <Title size={50}>Posts</Title>
        <FlatFeed
          feedGroup="user"
          options={{ reactions: { recent: true } }}
          Activity={(props) => (
            <Activity
              {...props}
              Footer={
                <div style={{ padding: "0 16px 16px" }}>
                  <CommentField activity={props.activity} />
                  <CommentList activityId={props.activity.id} />
                  <ActivityFooter {...props} />
                  <Gallery
                    images={[
                      "https://source.unsplash.com/random/800x600",
                      "https://source.unsplash.com/random/800x601",
                      "https://source.unsplash.com/random/800x603",
                      "https://source.unsplash.com/random/840x600",
                      "https://source.unsplash.com/random/820x600",
                      "https://source.unsplash.com/random/500x500",
                      "https://source.unsplash.com/random/300x300",
                      "https://source.unsplash.com/random/420x420",
                    ]}
                  />
                </div>
              }
            />
          )}
        />
      </StreamApp>
    );
  }
}

export default App;
