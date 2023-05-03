import { Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import TodoPage from "../pages/TodoPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";

export const privateRoutes = [
  {
    path: "/todo",
    element: <TodoPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/profile/:id",
    element: <ProfilePage />,
  },
  {
    path: "*",
    element: <Navigate to="/todo" />,
  },
];
