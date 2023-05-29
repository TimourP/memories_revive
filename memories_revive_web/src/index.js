import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
	RouterProvider,
	createBrowserRouter,
	createHashRouter,
} from "react-router-dom";
import Root from "./routes/root/Root";
import ErrorPage from "./routes/error_page/ErrorPage";
import ProductsList from "./routes/products_list/ProductsList";
import Home from "./routes/home/Home";
import NotFound from "./routes/not_found/NotFound";
import Frames from "./routes/frames/Frames";
import Brand from "./routes/brand/Brand";
import Contact from "./routes/contact/Contact";
import Account from "./routes/account/Account";
import Cart from "./routes/cart/Cart";
import Career from "./routes/career/Career";
import Checkout from "./routes/checkout/Checkout";
import Product from "./routes/product_detail/ProductDetail";
import MainMvp from "./routes/still_working/MainMvp";

const router = createBrowserRouter([
	{
		path: "/*",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "shop",
				element: <ProductsList />,
			},
			{
				path: "frames",
				element: <Frames />,
			},
			{
				path: "brand",
				element: <Brand />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "account",
				element: <Account />,
			},
			{
				path: "shop/basket",
				element: <Cart />,
			},
			{
				path: "shop/checkout",
				element: <Checkout />,
			},
			{
				path: "shop/:product_id/:product_name",
				element: <Product />,
			},
			{
				path: "career",
				element: <Career />,
			},
			{
				path: "mvp",
				element: <MainMvp />,
			},
			{
				path: "conditions-generales",
				element: <MainMvp />,
			},
			{
				path: "mentions-legales",
				element: <MainMvp />,
			},
			{
				path: "politique-de-vie-privee",
				element: <MainMvp />,
			},
			{
				path: "utilisation-des-cookies",
				element: <MainMvp />,
			},
			{
				path: "garanties",
				element: <MainMvp />,
			},
			{
				path: "droit-de-retractation",
				element: <MainMvp />,
			},
			{
				path: "",
				element: <Home />,
			},
		],
		scrollTop: true,
	},
	{
		path: "*",
		element: <NotFound />,
		errorElement: <ErrorPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
