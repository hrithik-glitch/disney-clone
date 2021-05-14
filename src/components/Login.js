import React from "react";
import styled from "styled-components";

function Login() {
	return (
		<Container>
			<CTA>
				<CTALogoOne src="/images/cta-logo-one.svg" />
				<Signup>GET ALL THERE</Signup>
				<Description>
					Disney+ (pronounced "Disney Plus") is the new streaming service that
					houses much of the content created by The Walt Disney Company. It
					includes content from Walt Disney Studios, Twentieth Century Fox,
					Marvel Studios, Pixar, Lucasfilm, National Geographic and more.
				</Description>
				<CTALogoTwo src="/images/cta-logo-two.png" />
			</CTA>
		</Container>
	);
}

export default Login;

const Container = styled.div`
	display: flex;
	position: relative;
	height: calc(100vh - 70px);
	align-items: top;
	justify-content: center;

	&:before {
		background-position: top;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url("/images/login-background.jpg");
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		opacity: 0.7;
		z-index: -1;
	}
`;

const CTA = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 100px;
	max-width: 650px;
	padding: 80px 40px;
	width: 90%;
`;

const CTALogoOne = styled.img``;

const Signup = styled.a`
	width: 100%;
	background-color: #0063e5;
	font-weight: bold;
	padding: 17px 0;
	margin-top: 8px;
	margin-bottom: 12px;
	color: #f9f9f9;
	border-radius: 4px;
	text-align: center;
	font-size: 18px;
	cursor: pointer;
	letter-spacing: 1.5px;
	transition: all 250ms;

	&:hover {
		background: #0483ee;
	}
`;

const Description = styled.p`
	font-size: 11px;
	letter-spacing: 1.5px;
	text-align: center;
	line-height: 1.5;
`;

const CTALogoTwo = styled.img`
	width: 90%;
`;
