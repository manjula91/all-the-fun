import React, { Fragment, Component } from "react";
import Logo from "./logo";
import LazyImage from "../lazy-load";
import { registerLazyImageScrollHandler } from "../lazy-load/scroll-helper";
import Header from "../header";
import Partners from "./partners";
import Organizers from "./organizers";
import Highlight from "./highlight";

const navItems = [
  { name: "About", id: "#about", scrollToPath: true },
  { name: "Partners", id: "#partners", scrollToPath: true },
  { name: "Organizers", id: "#organizers", scrollToPath: true },
  { name: "React India 2019", id: "/conferences/2019" },
];

class Home extends Component {
  constructor() {
    super();

    this.state = {
      loadSecondFold: true,
      showBanner: false,
      loadVideo: false,
      add: "hello",
    };
  }

  componentDidMount() {
    registerLazyImageScrollHandler();
    window.scrollTo(0, 0);
    this.setState({ showBanner: true });
  }

  render() {
    const { showBanner } = this.state;

    return (
      <Fragment>
        <div className="video__wrapper" key="root">
          <div className="video__overlay" />
          <div className="video__content">
            <div className="logo__main">
              <Logo />
            </div>
            <div className="m-t-20">
              <div className="caption__small">
                <p className="caption__small--para event-date">
                  <i className="fa fa-calendar" />
                  REACT INDIA 2021
                </p>
                <p className="caption__small--para uppercase event-location">
                  <i className="flaticon-location-pointer" />
                  12th - 13th NOVEMBER 2021, INDIA
                </p>
              </div>

              <h3 className="content__desc">react India</h3>
              <h2 className="content__title" />
              <div className="content__button_impressions">
                <div>
                  <a href="mailto:react-india@geekabyte.tech">
                    EMAIL US FOR SPONSORSHIP
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="video__main">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////+v//////////////////////////////////////////////////////////////////////////////2wBDAf//////////////////////////////////////////////////////////////////////////////////////wAARCACCAMMDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEC/8QAHBABAQEBAQADAQAAAAAAAAAAAAERIUExUWFx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/ACgAAAAAAAIAAAAoIAAqAKIAoAAAAAKIIKIooi4AgAiKCgAAAAigIKAgKggoKgCoCACw9AGogiqIAogAAqAICiaoCdDQTabV9QFipBBaICiVV4oyNcARNBUXU00QUZUAVAAAA8p/QAoAACKGgpUAAAAANF4KMqYiAACiKBKVGgRWVAiLEoCkNAimoAgoIAA1GVlBU9XU/QOh0BZxKrKoARFI1GVlBavjNpAgnwtQAAFQUWk6gCLSoAEAF+0DQVKAAAAAAALiGioGgimgQAwPAAAAABFIC4g0gAlIAIoAAAAAACqgigIKAgoCCiCCgIACKAoAAAAACAAoAACooAAAAAAAACAgKACAAKAAAA//2Q=="
              className="dummy-image"
            />
            {showBanner && (
              <div>
                <LazyImage
                  tinySrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAP//////+v//////////////////////////////////////////////////////////////////////////////2wBDAf//////////////////////////////////////////////////////////////////////////////////////wAARCACCAMMDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEC/8QAHBABAQEBAQADAQAAAAAAAAAAAAERIUExUWFx/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/ACgAAAAAAAIAAAAoIAAqAKIAoAAAAAKIIKIooi4AgAiKCgAAAAigIKAgKggoKgCoCACw9AGogiqIAogAAqAICiaoCdDQTabV9QFipBBaICiVV4oyNcARNBUXU00QUZUAVAAAA8p/QAoAACKGgpUAAAAANF4KMqYiAACiKBKVGgRWVAiLEoCkNAimoAgoIAA1GVlBU9XU/QOh0BZxKrKoARFI1GVlBavjNpAgnwtQAAFQUWk6gCLSoAEAF+0DQVKAAAAAAALiGioGgimgQAwPAAAAABFIC4g0gAlIAIoAAAAAACqgigIKAgoCCiCCgIACKAoAAAAACAAoAACooAAAAAAAACAgKACAAKAAAA//2Q=="
                  imgClassName="dummy-image"
                  alt="hero banner"
                  src="/assets/images/ri2020.jpg?t=2"
                  onLoad={this.onImageLoad}
                />
              </div>
            )}
          </div>
        </div>
        <Header navItems={navItems} />
        <div className="latest-news-area">
          <div className="container">
            <div className="col-md-12">
              {/* Start Heading Title */}
              <div className="heading-title text-center">
                <h2 className="f-weight-700 margin-0">
                  <i> React India is rescheduled to 2021 </i>
                </h2>
                <div className="bordershep" />
              </div>
            </div>
            <div className="col-md-12">
              <p>
                Out of concern for the health and safety of every one in the
                React India community, and in line with the recent orders from
                the Indian government, React India will not be held in any
                capacity this year.{" "}
              </p>

              <p>
                {" "}
                Based on current observations, our team has decided it's best to
                reschedule React India to 2021. Right now, the most important
                thing that all of us can do is to focus our attention on helping
                everyone with the new challenges we all face.{" "}
              </p>

              <p>
                Take care of yourselves. The new date for our event is{" "}
                <b> 12 - 13th November 2021 </b>
              </p>
              <p>
                <b>
                  <i>
                    We are open for sponsorship for React India 2021, Contact us
                    at react-india@geekabyte.tech
                  </i>
                </b>
              </p>
            </div>
          </div>
        </div>
        <div class="content">
          <div className="about-area" id="about">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  {/* Start Heading Title */}
                  <div className="heading-title text-center">
                    <h2 className="f-weight-700 margin-0">About React India</h2>
                    <div className="bordershep" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-12 order-last order-md-first"
                  id="tickets"
                >
                  <div className="about-text">
                    <p className="first-text">
                      React India is an international community-led non-profit
                      initiative that provides a platform for developers to
                      share and discuss their insights and experiences with
                      React.
                    </p>
                    <div className="hidden-xs">
                      The first of the two days will be focused on workshops and
                      the following day will be dedicated to talks on topics
                      revolving around React, React Native & GraphQL. The
                      conference will bring together front-end and full-stack
                      developers from across the globe to India. In this
                      conference, you will learn more about React and everything
                      related to it while meeting some of the leading talents
                      from around the globe in the developer community. In
                      addition to enjoying the event, this is also your chance
                      to visit India! Regular and lightning talks will cover
                      various topics related to React.JS and FE, including React
                      Native, GraphQL, VR and AR, Redux, Preact and more and
                      more!
                    </div>
                    <div className="buttons">
                      <div className="content__button"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="conferences">
            <div className="overlay" />
            <div className="row">
              <div className="col-sm-7">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      {/* Start Heading Title */}
                      <div className="heading-title text-center">
                        <span className="subtitle">BE A PART OF</span>
                        <h2>React India 2021</h2>
                        <div className="bordershep" />
                        <p>
                          React India is coming back next year in November 2021.
                          Stay tuned for more details.
                        </p>
                      </div>
                      {/* End Heading Title */}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="text-center">
                        <p className="date">
                          {/* 26th - 28th SEPTEMBER | GOA, INDIA | 2019 EDITION */}
                        </p>
                        {/* <div className="timer" id="countdown"></div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-5">
                <img
                  className="react-lady-img"
                  src="/assets/video/GirlAnimation-no-BG.gif"
                />
              </div>
            </div>
          </section>
          <Highlight />
          <Partners />
          <Organizers />
        </div>
      </Fragment>
    );
  }
}

export default Home;
