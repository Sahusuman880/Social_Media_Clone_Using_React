import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import PostListProvider from "./Store/postlist-store";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} classNameName="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} classNameName="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div classNameName="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p classNameName="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <div className="sidebars">
            <Sidebar
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            ></Sidebar>
          </div>

          <div className="content">
            <div className="Header">
              <Header></Header>
            </div>

            <div className="innercontent">
              {selectedTab === "Home" ? (
                <PostList></PostList>
              ) : (
                <CreatePost></CreatePost>
              )}
            </div>
            <div className="Footer">
              <Footer></Footer>
            </div>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
