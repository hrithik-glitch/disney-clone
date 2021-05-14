import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
	selectUserName,
	selectUserPhoto,
	setUserLogin,
	setSignOut,
	selectUserEmail,
} from "../features/user/userSlice";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { animateFill } from "tippy.js";

function Header() {
	const dispatch = useDispatch();
	const history = useHistory();
	const userName = useSelector(selectUserName);
	const userEmail = useSelector(selectUserEmail);
	const userPhoto = useSelector(selectUserPhoto);

	useEffect(() => {
		auth.onAuthStateChanged(async (user) => {
			if (user) {
				setUser(user);
				history.push("/home");
			}
		});
	}, [userName]);

	const handleAuth = () => {
		if (!userName) {
			auth
				.signInWithPopup(provider)
				.then((result) => {
					setUser(result.user);
				})
				.catch((error) => {
					alert(error.message);
				});
		} else if (userName) {
			auth
				.signOut()
				.then(() => {
					dispatch(setSignOut());
					history.push("/");
				})
				.catch((err) => alert(err.message));
		}
	};

	const setUser = (user) => {
		dispatch(
			setUserLogin({
				name: user.displayName,
				email: user.email,
				photo: user.photoURL,
			})
		);
	};

	const signOut = () => {
		auth.signOut().then(() => {
			dispatch(setSignOut());
			history.push("/login");
		});
	};

	return (
		<Nav>
			<Logo src="/images/logo.svg" />
			{!userName ? (
				<LoginContainer>
					<Login onClick={handleAuth}>Login</Login>
				</LoginContainer>
			) : (
				<>
					<NavMenu>
						<a>
							<img src="/images/home-icon.svg" alt="" />
							<span>HOME</span>
						</a>
						<a>
							<img src="/images/search-icon.svg" alt="" />
							<span>SEARCH</span>
						</a>
						<a>
							<img src="/images/watchlist-icon.svg" alt="" />
							<span>WATCHLIST</span>
						</a>
						<a>
							<img src="/images/original-icon.svg" alt="" />
							<span>ORIGINALS</span>
						</a>
						<a>
							<img src="/images/movie-icon.svg" alt="" />
							<span>MOVIES</span>
						</a>
						<a>
							<img src="/images/series-icon.svg" alt="" />
							<span>SERIES</span>
						</a>
					</NavMenu>
					<Tippy content="Log Out" animateFill={true} plugins={animateFill}>
						<UserImg onClick={signOut} src={userPhoto} />
					</Tippy>
				</>
			)}
		</Nav>
	);
}

export default Header;

const Nav = styled.nav`
	height: 70px;
	background: #090b13;
	display: flex;
	align-items: center;
	padding: 0 36px;
	overflow-x: hidden;
`;

const Logo = styled.img`
	width: 80px;
`;

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 25px;
	align-items: center;
	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		cursor: pointer;
		img {
			height: 20px;
		}
		span {
			font-size: 13px;
			letter-spacing: 1.42px;
			position: relative;
			&:after {
				content: "";
				height: 2px;
				background: white;
				position: absolute;
				left: 0;
				right: 0;
				bottom: -6px;
				opacity: 0;
				transform-origin: left center;
				transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
				transform: scaleX(0);
			}
		}
		&:hover {
			span:after {
				transform: scaleX(1);
				opacity: 1;
			}
		}
		@media (max-width: 768px) {
			display: none;
		}
	}
`;

const UserImg = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	cursor: pointer;
`;

const Login = styled.a`
	background-color: rgba(0, 0, 0, 0.6);
	padding: 8px 16px;
	text-transform: uppercase;
	letter-spacing: 1.5px;
	border: 1px solid #f9f9f9;
	border-radius: 4px;
	transition: all 0.2s ease 0s;
	cursor: pointer;
	&:hover {
		background-color: #f9f9f9;
		color: #000;
		border-color: transparent;
	}
`;

const LoginContainer = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
`;
