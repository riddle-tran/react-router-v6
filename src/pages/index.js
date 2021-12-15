import Loadable from "react-loadable";
import { LoadingSpinner } from "../components";

export const Activity = Loadable({
  loader: () => import("./Activity"),
  loading: LoadingSpinner,
});

export const Admin = Loadable({
  loader: () => import("./Admin"),
  loading: LoadingSpinner,
});

export const Home = Loadable({
  loader: () => import("./Home"),
  loading: LoadingSpinner,
});

export const Invoice = Loadable({
  loader: () => import("./Invoice"),
  loading: LoadingSpinner,
});

export const SignIn = Loadable({
  loader: () => import("./SignIn"),
  loading: LoadingSpinner,
});

export const SentInvoices = Loadable({
  loader: () => import("./SentInvoices"),
  loading: LoadingSpinner,
});



export const ChildOne = Loadable({
  loader: () => import("./ChildOne"),
  loading: LoadingSpinner,
});

export const ChildTwo = Loadable({
  loader: () => import("./ChildTwo"),
  loading: LoadingSpinner,
});
