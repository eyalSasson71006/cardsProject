import React from "react";
import { Route, Routes } from "react-router-dom";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import ROUTES from "./routesModel.js";
import LoginPage from "../users/pages/LoginPage.jsx";
import MyCards from "../cards/pages/MyCards.jsx";
import SignupPage from "../users/pages/SignupPage.jsx";
import SandboxPage from "../sandbox/SandboxPage.jsx";
import FavoriteCards from "../cards/pages/FavoriteCards.jsx";
import CardDetailsPage from "../cards/pages/CardDetailsPage.jsx";
import AddCardPage from "../cards/pages/AddCardPage.jsx";
import EditCardPage from "../cards/pages/EditCardPage.jsx";
import UserProfilePage from "../users/pages/UserProfilePage.jsx";
import EditUserPage from "../users/pages/EditUserPage.jsx";

export default function Router() {
	return (
		<Routes>
			<Route path={ROUTES.ROOT} element={<CardsPage />} />
			<Route path={ROUTES.CARDS} element={<CardsPage />} />
			<Route path={ROUTES.ABOUT} element={<AboutPage />} />
			<Route path={ROUTES.MY_CARDS} element={<MyCards />} />
			<Route path={ROUTES.FAV_CARDS} element={<FavoriteCards />} />
			<Route path={ROUTES.LOGIN} element={<LoginPage />} />
			<Route path={ROUTES.SIGNUP} element={<SignupPage />} />
			<Route path={ROUTES.CREATE_CARD} element={<AddCardPage />} />
			<Route
				path={ROUTES.CARD_INFO + "/:id"}
				element={<CardDetailsPage />}
			/>
			<Route
				path={ROUTES.EDIT_CARD + "/:id"}
				element={<EditCardPage />}
			/>
			<Route path={ROUTES.USER_PROFILE} element={<UserProfilePage />} />
			<Route
				path={ROUTES.EDIT_USER + "/:id"}
				element={<EditUserPage />}
			/>

			<Route path={ROUTES.SANDBOX} element={<SandboxPage />} />
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}
