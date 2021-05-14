import React from "react";
import styled from "styled-components";
import HoverVideoPlayer from "react-hover-video-player";

function Viewers() {
	return (
		<Container>
			<Wrap>
				<HoverVideoPlayer
					videoSrc="/videos/1564674844-disney.mp4"
					videoStyle={{
						borderRadius: "10px",
						paddingTop: "2px",
						paddingRight: "1px",
						width: "100%",
					}}
					pausedOverlay={
						<img
							src="/images/viewers-disney.png"
							alt=""
							style={{
								background:
									"url(/images/home-background.png) center center / cover no-repeat fixed",
								borderRadius: "5px",
							}}
						/>
					}
					loadingOverlay={<div className="loading-spinner-overlay" />}
				/>
			</Wrap>

			<Wrap>
				<HoverVideoPlayer
					videoSrc="/videos/1564676714-pixar.mp4"
					videoStyle={{
						borderRadius: "10px",
						paddingTop: "2px",
						paddingRight: "1px",

						width: "100%",
					}}
					pausedOverlay={
						<img
							src="/images/viewers-pixar.png"
							alt=""
							style={{
								background:
									"url(/images/home-background.png) center center / cover no-repeat fixed",
								borderRadius: "5px",
							}}
						/>
					}
					loadingOverlay={<div className="loading-spinner-overlay" />}
				/>
			</Wrap>
			<Wrap>
				<HoverVideoPlayer
					videoSrc="/videos/1564676115-marvel.mp4"
					videoStyle={{
						borderRadius: "10px",
						paddingTop: "2px",
						paddingRight: "1px",
						width: "100%",
					}}
					pausedOverlay={
						<img
							src="/images/viewers-marvel.png"
							alt=""
							style={{
								background:
									"url(/images/home-background.png) center center / cover no-repeat fixed",
								borderRadius: "5px",
							}}
						/>
					}
					loadingOverlay={<div className="loading-spinner-overlay" />}
				/>
			</Wrap>
			<Wrap>
				<HoverVideoPlayer
					videoSrc="/videos/1608229455-star-wars.mp4"
					videoStyle={{
						borderRadius: "10px",
						paddingTop: "2px",
						paddingRight: "1px",
						width: "100%",
					}}
					pausedOverlay={
						<img
							src="/images/viewers-starwars.png"
							alt=""
							style={{
								background:
									"url(/images/home-background.png) center center / cover no-repeat fixed",
								borderRadius: "5px",
							}}
						/>
					}
					loadingOverlay={<div className="loading-spinner-overlay" />}
				/>
			</Wrap>

			<Wrap>
				<HoverVideoPlayer
					videoSrc="/videos/anime-video.mp4"
					videoStyle={{
						borderRadius: "10px",
						paddingTop: "2px",
						paddingRight: "1px",
						width: "100%",
					}}
					pausedOverlay={
						<img
							src="\images\anime-removebg-preview.png"
							alt=""
							style={{
								background:
									"url(/images/home-background.png) center center / cover no-repeat fixed",
								borderRadius: "5px",
							}}
						/>
					}
					loadingOverlay={<div className="loading-spinner-overlay" />}
				/>
			</Wrap>
		</Container>
	);
}

export default Viewers;

const Container = styled.div`
	margin-top: 30px;
	display: grid;
	grid-gap: 25px;
	padding: 30px 0px 26px;
	grid-template-columns: repeat(5, minmax(0, 1fr));

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`;

const Wrap = styled.div`
	border: 3px solid rgba(249, 249, 249, 0.1);
	border-radius: 10px;

	box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
		rgb(0 0 0 / 73%) 0px 16px 10px -10px;
	transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
	cursor: pointer;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&:hover {
		box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
			rgb(0 0 0 / 72%) 0px 30px 22px -10px;
		transform: scale(1.05);
		border-color: rgba(249, 249, 249, 0.8);
	}
`;
