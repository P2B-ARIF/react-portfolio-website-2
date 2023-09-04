import React from "react";
import "./Experiences.css";
import html from "./../../assets/skills/html-5.png";
import css from "./../../assets/skills/css3.png";
import bootstrap from "./../../assets/skills/bootstrap.png";
import tailwindCss from "./../../assets/skills/tailwindCss.png";
import javascript from "./../../assets/skills/javascript.png";
import react from "./../../assets/skills/react-js.png";
import redux from "./../../assets/skills/redux.png";
import node from "./../../assets/skills/node-js.png";
import express from "./../../assets/skills/express-js.png";
import mongodb from "./../../assets/skills/mongodb.png";
import firebase from "./../../assets/skills/firebase.png";
import jwt from "./../../assets/skills/json-web-token.png";

const Experiences = () => {
	return (
		<section id='experiences'>
			<div className='experiences_text'>
				<div className='experiences_text_h5'></div>
				<h2 className='experiences_text_h2'>
					My Experience <div className='span'></div>
				</h2>
			</div>

			<div className='e_container container mx-auto'>
				<div className='e_boxes'>
					<div className='e_box hide_border_full_width hide_border'></div>
					<div className='e_box hide_border_full_width hide_border'></div>
					<div className='e_box hide_border_full_width'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box'></div>
					<div className='e_box '></div>
					<div className='e_box '></div>
					<div className='e_box '></div>
					<div className='e_box '></div>
					<div className='e_box '></div>
					<div className='e_box '></div>
					<div className='e_box '></div>
					<div className='e_box hide_border_max show_box_s'></div>
					<div className='e_box hide_border_max show_box_s'></div>
					<div className='e_box hide_border_max show_box_s'></div>
					<div className='e_box hide_border_max show_box_s'></div>
					<div className='e_box hide_border_max show_box_s'></div>
					<div className='e_box hide_border_max show_box_s'></div>
					<div className='e_box hide_border_max show_box_s'></div>
					<div className='e_box hide_border_max show_box_s'></div>
					<div className='e_box hide_border_max show_box_s'></div>
					<div className='e_box hide_border_max show_box_s'></div>
					<div className='e_box hide_border_full_width hide_border_max show_box_s'></div>
					<div className='e_box hide_border_full_width hide_border_max show_box_s'></div>
					<div className='e_box hide_border_full_width hide_border_max show_box_s'></div>
					<div className='e_box hide_border_full_width hide_border_max show_box_s'></div>
					<div className='e_box hide_border_full_width hide_border_max show_box_s'></div>
					<div className='e_box hide_border_full_width hide_border_max show_box_s'></div>
				</div>

				<div className='e_cards_container'>
					<div className='e_card_group'>
						<div className='e_card_front'>
							<h2>Frontend Development</h2>
							<div id='group' className='e_card_content'>
								<div id='card' className='e_card'>
									<h4 className='e_card_text'>HTML</h4>
									<div className='image_content'>
										<img src={html} className='e_card_image' alt='' />
									</div>
								</div>
								<div className='e_card'>
									<h4 className='e_card_text'>CSS</h4>
									<div className='image_content'>
										<img src={css} className='e_card_image' alt='' />
									</div>
								</div>
								<div className='e_card'>
									<h4 className='e_card_text'>BOOTSTRAP</h4>
									<div className='image_content'>
										<img src={bootstrap} className='e_card_image' alt='' />
									</div>
								</div>
								<div className='e_card'>
									<h4 className='e_card_text'>TAILWIND</h4>
									<div className='image_content'>
										<img src={tailwindCss} className='e_card_image' alt='' />
									</div>
								</div>
								<div className='e_card'>
									<h4 className='e_card_text'>JAVASCRIPT</h4>
									<div className='image_content'>
										<img src={javascript} className='e_card_image' alt='' />
									</div>
								</div>
								<div className='e_card'>
									<h4 className='e_card_text'>REACT JS</h4>
									<div className='image_content'>
										<img src={react} className='e_card_image' alt='' />
									</div>
								</div>
								<div className='e_card'>
									<h4 className='e_card_text'>REDUX</h4>
									<div className='image_content'>
										<img src={redux} className='e_card_image' alt='' />
									</div>
								</div>
							</div>
						</div>

						<div className='e_card_back'>
							<h2>Backend Development</h2>
							<div className='e_card_content'>
								<div className='e_card'>
									<h4 className='e_card_text'>NODE JS</h4>
									<div className='image_content'>
										<img src={node} className='e_card_image' alt='' />
									</div>
								</div>
								<div className='e_card'>
									<h4 className='e_card_text'>EXPRESS JS</h4>
									<div className='image_content'>
										<img src={express} className='e_card_image' alt='' />
									</div>
								</div>
								<div className='e_card'>
									<h4 className='e_card_text'>FIREBASE</h4>
									<div className='image_content'>
										<img src={firebase} className='e_card_image' alt='' />
									</div>
								</div>
								<div className='e_card'>
									<h4 className='e_card_text'>MONGODB</h4>
									<div className='image_content'>
										<img src={mongodb} className='e_card_image' alt='' />
									</div>
								</div>
								<div className='e_card'>
									<h4 className='e_card_text'>JWT</h4>
									<div className='image_content'>
										<img src={jwt} className='e_card_image' alt='' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experiences;
