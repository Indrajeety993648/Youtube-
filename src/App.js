import "./App.css"
import Head from "./components/Head.js";
import SideBar from "./components/SideBar.js";
import Body from "./components/Body.js";
import { Provider } from "react-redux";
import store from "./utils/store.js";
function App() {
  return (
    <Provider store = {store}>
    <div>
      <Head/>
      <Body/>
      <SideBar/>
    </div>
    </Provider>
  );
}

export default App;
/**
 * head 
 * Body
 * SideBar
 *   MenuItems
 * MainContainer
 *   ButtonList
 *   VideoList
 *    VideoCard 
 * 
 * 
 */