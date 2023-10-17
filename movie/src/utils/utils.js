import { mobileSize, tabletSize, mobileMoviesObj, tabletMoviesObj, desktopMoviesObj } from "../constants/constants";

export function getNumberMovies() {
	const screenWidth = window.innerWidth;
	if (screenWidth <= mobileSize) {
		return mobileMoviesObj;
	} else if (screenWidth <= tabletSize) {
		return tabletMoviesObj;
	} else {
		return desktopMoviesObj;
	}
}

export const isEmailValid = /[a-z0-9]+@[a-z]+\.[a-z]{2,}/;
export const isNameValidation = /^[a-яёa-z]+(?:[ -][a-яёa-z]+)*$/i