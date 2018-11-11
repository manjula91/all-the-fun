import React, { Fragment, Component, useState } from 'react'
import Logo from './logo'

import speakersData from '../data/speakers'
import { addMap } from './map'
import LazyImage from '../lazy-load'
import { registerLazyImageScrollHandler } from '../lazy-load/scroll-helper'

class Home extends Component {
	state = {
		loadSecondFold: true,
		showBanner: false,
		showVideo: false,
	}

	constructor() {
		super()

		this.onImageLoad = this.onImageLoad.bind(this)
	}

	componentDidMount() {
		registerLazyImageScrollHandler()
		setTimeout(() => {
			addMap()
			this.setState({
				loadSecondFold: true,
				showBanner: true,
			})
		}, 100)
	}

	onImageLoad() {
		this.setState({
			loadVideo: true,
		})
	}

	render() {
		const { showBanner, loadSecondFold, loadVideo } = this.state
		return (
			<Fragment>
				<div className="video__wrapper">
					<div className="video__overlay" />
					<div className="video__content">
						<div className="logo__main">
							<Logo />
						</div>
						<div className="m-t-20">
							<div className="caption__small">
								<p className="caption__small--para event-date">
									<i className="fa fa-calendar" />
									22nd - 24th August, 2019.
								</p>
								<p className="caption__small--para uppercase event-location">
									<i className="flaticon-location-pointer" />
									Goa, India
								</p>
							</div>
							<h3 className="content__desc">react india</h3>
							<h2 className="content__title" />
							<div className="content__button">
								<a target="_blank" href="http://bit.ly/React_India_Deck">
									BECOME A SPONSOR
								</a>
							</div>
						</div>
					</div>
					<div className="video__main">
						{showBanner && (
							<LazyImage
								tinySrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/CABEIAA4AGQMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAAGBwgJCv/aAAgBAQAAAACnsymK681yiEyT/8QAFQEBAQAAAAAAAAAAAAAAAAAABQf/2gAIAQIQAAAAvg//xAAVAQEBAAAAAAAAAAAAAAAAAAAFB//aAAgBAxAAAACOKf/EADAQAAEEAQAHBAsBAAAAAAAAAAMBAgQFBgAHERITIUEUUVaWFRYXIiUxMmGBkdTV/9oACAEBAAE/AH41q7KXYHO8T70+Nxk69V4ny/CdE0xrEsD47N3PMLb7yNcpMirWLvKqojXKQ6bHfZVavLvRU0wLCMM4QXtzjDjcm/RktKzYnJFRXPmps/XLry2aeo2I+KsV810f9umt7Jspoaqxp+3AjjLk9Y8j4KGLIBMBj8yG+NAspbvSUSodDNIMeG2Qo7KxIyTOE8keKUGK619Y4oj4NNlNlVVNe60kgiRjjCUsY5kPZJLkDjKWVKlMjs3HneVgFGwIOCMsl5ajI8pubqLTLk13HFZ2MmK8zbKyK9SOGyN2kzDT3jKZrHjY1URrdzeVzHKxiO9neZ+K5nmGy/ytP//EACYRAAIBAQQLAAAAAAAAAAAAAAECAxEABSFBBAcSFBgyQlFhgdH/2gAIAQIBAT8A4jC9THdMxiAILtLGrbVQOWhw819W0nX7Mzil2OmFQu85EgdMBzHf7b//xAAkEQACAAQEBwAAAAAAAAAAAAABAgMEESIAEiFRBQcXIzEycf/aAAgBAwEBPwDplMstH4hDJ0s7mXJaGu0JptQYluW0OGgRptWpT1hEAeN3+4//2Q=="
								imgClassName="dummy-image"
								src="assets/video/still-image-min.jpg"
								onLoad={this.onImageLoad}
							/>
						)}
						{loadVideo && (
							<video autoPlay loop muted>
								<source
									src="https://www.dropbox.com/s/eeb5sl6xp3xbt94/video_2.mp4?dl=1"
									type="video/mp4"
								/>
								Please use a video supported browser
							</video>
						)}
					</div>
				</div>
				{/* End Slider Area */}
				{/* Start About Area */}
				{loadSecondFold && (
					<Fragment>
						<div className="about-area" id="about">
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										{/* Start Heading Title */}
										<div className="heading-title text-center">
											<h2 className="f-weight-700 margin-0">About the Conference</h2>
											<div className="bordershep" />
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12 order-last order-md-first">
										<div className="about-text">
											<p className="first-text">
												React India is a community led non profit initiative with an
												international flavor. The first of its kind in India, the event consists
												of a workshop day and two days of talks around the topic.
											</p>
											<p>
												A 3 day conference with first day focussing on workshops & the next 2
												days talks on things around React, React Native & GraphQL. This edition
												will be gathering Front-end and Full-stack developers across the globe
												in the cool place of India. In this single track event you will learn
												more about React and surrounding topics while meeting some of the
												leading talents around the globe. In addition to enjoying the event,
												this is your chance to explore Goa. Regular and lightning talks will
												cover various React.JS and FE topics including React Native, GraphQL, VR
												&amp; AR, Redux, Preact and more!
											</p>
											<div className="buttons">
												<button type="button" disabled className="mr_btn_fill">
													EARLY BIRD TICKETS COMING SOON
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* End About Area */}
						<section className="conferences">
							<div className="overlay" />
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-md-8">
										{/* Start Heading Title */}
										<div className="heading-title text-center">
											<span className="subtitle">BE A PART OF</span>
											<h2>React India 2019</h2>
											<div className="bordershep" />
											<p>
												Our Attendees, Speakers & Sponsors will be able to meet together and
												share a few exciting and fruitful days, while enjoying the food and warm
												weather from the western coastline streching along Arabian Sea.
											</p>
										</div>

										{/* End Heading Title */}
									</div>
								</div>
								<div className="row">
									<div className="col-12">
										<div className="text-center">
											<p className="date">22nd - 24th AUGUST | GOA, INDIA | 2019 EDITION</p>
											{/* <div class="timer" id="countdown"></div> */}
										</div>
									</div>
									<div className="content__button show-interest-btn">
										<a target="_blank" href="http://bit.ly/showing_interest_react_india_2019">
											SHOW YOUR INTEREST
										</a>
									</div>
								</div>
							</div>
						</section>
						{/* Start Company Info Area */}
						{/* End Company Info Area */}
						{/* Start Testimonial Area */}
						<section className="testimonial-area" id="partners">
							<div className="overlay" />
							{/* Start Container */}
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-md-8">
										{/* Start Heading Title */}
										<div className="heading-title text-center">
											<span className="subtitle">Our</span>
											<h2 className="f-weight-700 margin-0">Partners</h2>
											<div className="bordershep" />
											<a href="http://reactalicante.es/" target="_blank">
												<LazyImage
													imgClassName="partner-img"
													src="assets/images/partners/react-alicante-logo.png"
												/>
											</a>
											<a href="https://react-finland.fi/" target="_blank">
												<LazyImage
													imgClassName="partner-img"
													src="assets/images/partners/react-finland-logo.svg"
												/>
											</a>
										</div>
										{/* End Heading Title */}
									</div>
								</div>
								{/* Start Testimonial Carousel
			<div className="testimonial owl-carousel owl-loaded owl-drag" id="home-testimonial">
				{/*Start Testimonial Item */}
								{/* End Testimonial Item

				<div className="owl-nav disabled">
					<div className="owl-prev">prev</div>
					<div className="owl-next">next</div>
				</div>
				<div className="owl-dots">
					<div className="owl-dot active">
						<span />
					</div>
					<div className="owl-dot">
						<span />
					</div>
				</div>
			</div> */}
								{/* End Testimonial Carousel */}
							</div>
							{/* End Container */}
						</section>
						{/* End Testimonial Area */}
						{/* Start Speakers Area */}
						<div className="speaker_area" id="speakers">
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-md-8">
										{/* Start Heading Title */}
										<div className="heading-title text-center">
											<span className="subtitle">Our</span>
											<h2 className="f-weight-700 margin-0">Awesome Speakers</h2>
											<div className="bordershep" />
										</div>
									</div>
								</div>
								<div className="row">
									{speakersData.map((speakerInfo, i) => (
										<SpeakerCard {...speakerInfo} key={i} />
									))}
								</div>
							</div>
							<div className="more-speaker-text text-center">
								{' '}
								<span>More Speakers Coming soon....</span>
							</div>
						</div>
						{/* End Speakers Area */}
						{/* Start Latest News Area */}
						<section className="latest-news-area" id="organizers">
							{/* Start Container */}
							<div className="container">
								<div className="row justify-content-center">
									<div className="col-md-8">
										{/* Start Heading Title */}
										<div className="heading-title text-center">
											<h2 className="f-weight-700 margin-0">Organized by</h2>
											<div className="bordershep" />
											<a target="_blank" href="http://geekabyte.tech">
												<LazyImage src="assets/images/geekabyte-web.png" />
											</a>
										</div>
										{/* End Heading Title */}
									</div>
								</div>
							</div>
							{/* End Container */}
						</section>
						<div id="map" />
					</Fragment>
				)}
			</Fragment>
		)
	}
}

const SpeakerCard = props => {
	const charLimit = 120
	const [showMore, setFlag] = useState(props.description.length <= charLimit)
	const { description } = props

	return (
		<div className="col-sm-6 col-xl-3" key={props.name}>
			<div className="speaker">
				<div className="sk-img">
					<div className="img">
						<LazyImage
							tinySrc={props.tinySrc}
							imgClassName="img-fluid"
							src={`assets/images/speakers/${props.imgPath}`}
							alt={props.imgPath}
						/>
						<div className="overlay d-flex justify-content-center">
							<div className="slink">
								<div>
									<a target="_blank" href={props.github}>
										<i className="fa fa-github" />
									</a>
									<a target="_blank" href={props.twitter}>
										<i className="fa fa-twitter" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="sk-content">
					<a>
						<h4>{props.name}</h4>
					</a>
					<p>{props.jobrole}</p>
					<div className="sk-desc">
						<p className="sk-desc-p">
							{props.description.substr(
								0,
								description.length > charLimit
									? showMore
										? description.length
										: charLimit
									: description.length
							)}
							{!showMore && '...'}
							<br />
							{description.length > charLimit && (
								<span>
									{showMore ? (
										<span className="toggle-text-length" onClick={() => setFlag(false)}>
											[...]
										</span>
									) : (
										<span className="toggle-text-length" onClick={() => setFlag(true)}>
											[...]
										</span>
									)}
								</span>
							)}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
