import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">

        <div className="content">
          <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Header>
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
