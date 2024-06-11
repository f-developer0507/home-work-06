import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Main from "../pages/main/main";
import { Posts, Comments, Albums, Photos, Todos, Users } from "../pages";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<App/>}>
        <Route path="main/*" element={<Main />}>
          <Route path="posts" element={<Posts />} />
          <Route path="comments" element={<Comments />} />
          <Route path="albums" element={<Albums />} />
          <Route path="photos" element={<Photos />} />
          <Route path="todos" element={<Todos />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Index;
