import React, { Fragment, Component } from 'react';
import Logo from 'logos/logo';
import LazyImage from 'reactor/lazy-load';
import { registerLazyImageScrollHandler } from 'reactor/lazy-load/scroll-helper';
import Header from 'components/header';
import Partners from 'components/partners';
import Organizers from 'components/organizers';
import Highlight from 'components/highlight';

const navItems = [
  { name: 'About', id: '#about', scrollToPath: true },
  { name: 'Blog', id: 'https://blog.reactindia.io', hardRefresh: true },
  { name: 'Partners', id: '#partners', scrollToPath: true },
  { name: 'Organizers', id: '#organizers', scrollToPath: true },
  { name: 'React India 2019', id: '/conferences/2019' },
  { name: 'React India 2021', id: '/conferences/2021', highlight: true },
];

class Home extends Component {
  constructor() {
    super();

    this.state = {
      loadSecondFold: true,
      showBanner: false,
      loadVideo: false,
      add: 'hello',
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
              <h3 className="content__desc">react India</h3>

              <h2 className="content__title"> </h2>
              <div className="content__button_impressions">
                <div>
                  <a href="/conferences/2021">REMOTE EDITION 2021</a>
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
                        <h2>React India</h2>
                        <div className="bordershep" />
                        <p>Stay tuned for further updates!!!</p>
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
