import { useState } from "react";
import { Parallax } from "react-parallax";
import { animated, Spring, to } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
const Hero = () => {
  const [isVisible, setVisible] = useState(false)
  return <Spring delay={300} to={{ opacity: isVisible ? 1 : 0, top: isVisible ? 0 : 200 }} config={{
    duration: 2000
  }}>
    {({ opacity, top }) => (
      <animated.section
        style={{
          opacity
        }}
        id="home"
        className="s-home target-section"
      >
        <VisibilitySensor onChange={(visible) => {
          if (visible) {
            setVisible(true)
          }
        }}>
          {({ }) => (
            <Spring delay={1000} to={{ opacity: isVisible ? 1 : 0 }} config={{
              duration: 1000
            }}>
              {({ opacity }) => (
                <animated.div
                  className="parallax-mirror"
                  style={{
                    visibility: "visible",
                    zIndex: -100,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                    transform: "translate3d(0px, 0px, 0px)",
                    height: "100vh",
                    width: "100%",
                    opacity
                  }}
                >
                  <Parallax bgImage={'images/hero-bg.jpg'} strength={500} bgStyle={{
                    objectFit: 'cover'
                  }}>
                    <div style={{ height: '100vh', }}>
                    </div>
                  </Parallax>
                </animated.div>
              )}
            </Spring>
          )}
        </VisibilitySensor>
        <div className="overlay" />
        <div className="shadow-overlay" />
        <Spring delay={1000} to={{ opacity: isVisible ? 1 : 0, top: isVisible ? 0 : 200 }} config={{
          duration: 700
        }}>
          {
            (style) => (
              <div className="home-content">
                <animated.div style={style} className="row home-content__main">
                  <h3>Welcome to Glint</h3>
                  <h1>
                    We are a creative group <br /> of people who design <br />{" "}
                    influential brands and <br /> digital experiences.
                  </h1>
                  <div className="home-content__buttons">
                    {" "}
                    <a href="#contact" className="smoothscroll btn btn--stroke">
                      {" "}
                      Start a Project{" "}
                    </a>{" "}
                    <a href="#about" className="smoothscroll btn btn--stroke">
                      {" "}
                      More About Us{" "}
                    </a>
                  </div>
                </animated.div>
                <div className="home-content__scroll">
                  {" "}
                  <a href="#about" className="scroll-link smoothscroll">
                    {" "}
                    <span>Scroll Down</span>{" "}
                  </a>
                </div>
                <div className="home-content__line" />
              </div>
            )
          }
        </Spring>

        <ul className="home-social">
          <li>
            {" "}
            <a href="#0">
              <i className="fa fa-facebook" aria-hidden="true" />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="#0">
              <i className="fa fa-twitter" aria-hidden="true" />
              <span>Twiiter</span>
            </a>
          </li>
          <li>
            {" "}
            <a href="#0">
              <i className="fa fa-instagram" aria-hidden="true" />
              <span>Instagram</span>
            </a>
          </li>
          <li>
            {" "}
            <a href="#0">
              <i className="fa fa-behance" aria-hidden="true" />
              <span>Behance</span>
            </a>
          </li>
          <li>
            {" "}
            <a href="#0">
              <i className="fa fa-dribbble" aria-hidden="true" />
              <span>Dribbble</span>
            </a>
          </li>
        </ul>
      </animated.section>
    )}
  </Spring>
}
const About = () => {
  const [isVisible, setVisible] = useState(false)
  return (
    <VisibilitySensor partialVisibility onChange={(visible) => {
      if (visible) {
        setVisible(true)
      }
    }}>
      {() => (
        <section id="about" className="s-about">
          <Spring delay={200} to={{ opacity: isVisible ? 1 : 0, top: isVisible ? 0 : 200 }} config={{
            duration: 700
          }}>
            {
              ({ opacity, top }) => (<animated.div style={{
                opacity,
                transform: to([top], (top) => `translateY(${top}px`)
              }}
                className="row section-header has-bottom-sep aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="col-full">
                  <h3 className="subhead subhead--dark">Hello There</h3>
                  <h1 className="display-1 display-1--light">We Are Glint</h1>
                </div>
              </animated.div>)}
          </Spring>
          <Spring delay={400} to={{ opacity: isVisible ? 1 : 0, top: isVisible ? 0 : 200 }} config={{
            duration: 700
          }}>
            {
              ({ opacity, top }) => (<animated.div style={{
                opacity,
                transform: to([top], (top) => `translateY(${top}px`)
              }}
                className="row about-desc aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="col-full">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt.
                  </p>
                </div>
              </animated.div>
              )}
          </Spring>

          <div
            className="row about-stats stats block-1-4 block-m-1-2 block-mob-full aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="col-block stats__col ">
              <div className="stats__count">127</div>
              <h5>Awards Received</h5>
            </div>
            <div className="col-block stats__col">
              <div className="stats__count">1505</div>
              <h5>Cups of Coffee</h5>
            </div>
            <div className="col-block stats__col">
              <div className="stats__count">109</div>
              <h5>Projects Completed</h5>
            </div>
            <div className="col-block stats__col">
              <div className="stats__count">102</div>
              <h5>Happy Clients</h5>
            </div>
          </div>
          <div className="about__line" />
        </section>
      )}
    </VisibilitySensor>

  )
}
export default function Home() {
  return (
    <>
      <div>
        <div className="pace  pace-inactive">
          <div
            className="pace-progress"
            data-progress-text="100%"
            data-progress={99}
            style={{ transform: "translate3d(100%, 0px, 0px)" }}
          >
            <div className="pace-progress-inner" />
          </div>
          <div className="pace-activity" />
        </div>
        <header className="s-header">
          <div className="header-logo">
            {" "}
            <a className="site-logo" href="index.html">
              {" "}
              <img
                src="data:image/webp;base64,UklGRnYDAABXRUJQVlA4TGkDAAAv7UATEPdAmG1Uf6DTu+cUBAJJXPt7LRBI8tufZ4EAYcF/pAQJ/qNYAQO0BIBpYlsJPdJO79f97/MpiQzg+4zo/wTA/9RbsDbEuxQ1Hpp8iwKeq+0Gbdiq8u2pqgntwiQK1mpERGsdxXwRIbOFkJnWJJNFvnJUHsFwwoIU0ihuqHaHXLscxePFPi1BYj5Q8dihTV0ZThgFMh+HFPbpSkeBE1cia+xWUT+FoWEhCLs2pRcIbXEdqsPOVewFTIuHZagG+6deIJwogmXIGh/R9wIlGEQTCixDNfiYqZcRP1g1+JAqwaIZlLZEKaVIzoioDIsWUNZHaC2bZekMi7ahaKjALr7NVFi0qiRsAdFiG0yFVXMoSCBO6shXGFcmZzWiso7yiBLyVYYLs/mPB/4FhMwWZNJR8QqbNVUWXp4u0zyV4dJqEAOMqjgUDHUsG7JVhour2WBUpFBUp6FoXoTHHIJH8W0gEdkBpuXxQhqHYxmYlsdLt1FUZKdpGbw4D2JjWZjW5WYQjpWWBWkMimNgXdQQMnJpYXAbwcYq89OeUopkJMyRPebY1nwJcTTMziQ4LZaH9eCUA71ajpegi9NgAjQTL46HJPBiGssGTGKFAShOnBsB23DsAJCbpqaBnzjmXmwCYBh4L0CSbowVScOxHJqZF6mjCzMLIjAczzEzoykQB+vNSax4c4DlBPiLZzlYbg6x/M0pLFXuDRgOupuzsXC7N6BZKt8bYqGut6ZqFpp6Z2Djocl34uX1mQGWhyrKpcV6/9n3ff/7fG4qiofoqkz1uChZ6OVvP/9ogU0CFVVeIYWrQjJv//bWrxbwEojKx6a6OZRcBlUlXv7t7R8t1YggorK0pZQieYPCEzMMNPWguNrwuzP/PTdANUIdTsxxUIWUyCHS2dvO/mqBrFaLWOfm7Jv3rwmyeggP88piWE7+ePtzE1TzAAQTAy0WTnbB1zaotjcVYWokprsBoL5shblVLYXx6EcA+Fn3owi484Eo5o8+eb8CUKkXV2B+4KWwHjzz3iUAiu/BJhCcEXipdABfnD+QLv4qn0B0SuBFdIbjp1/GixhAIS1nqIDwnCAqlqIK5y+/Te9wbSYroBwVkJ8UVNJNmio0P32d/b1Ah4mCteo/1jqKGRY1kzWIaB1l4D9//uz73/c73HMA"
                alt="Homepage"
              />{" "}
            </a>
          </div>
          <nav className="header-nav">
            <a href="#0" className="header-nav__close" title="close">
              <span>Close</span>
            </a>
            <div className="header-nav__content">
              <h3>Navigation</h3>
              <ul className="header-nav__list">
                <li className="current">
                  <a className="smoothscroll" href="#home" title="home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#about" title="about">
                    About
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#services" title="services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#works" title="works">
                    Works
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#clients" title="clients">
                    Clients
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#contact" title="contact">
                    Contact
                  </a>
                </li>
              </ul>
              <p>
                Perspiciatis hic praesentium nesciunt. Et neque a dolorum{" "}
                <a href="#0">voluptatem</a> porro iusto sequi veritatis libero
                enim. Iusto id suscipit veritatis neque reprehenderit.
              </p>
              <ul className="header-nav__social">
                <li>
                  {" "}
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <i className="fa fa-behance" />
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <a className="header-menu-toggle" href="#0">
            {" "}
            <span className="header-menu-text">Menu</span>{" "}
            <span className="header-menu-icon" />{" "}
          </a>
        </header>
        <Hero />
        <About />
        <section id="services" className="s-services">
          <div
            className="row section-header has-bottom-sep aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="col-full">
              <h3 className="subhead">What We Do</h3>
              <h1 className="display-2">
                We’ve got everything you need to launch and grow your business
              </h1>
            </div>
          </div>
          <div className="row services-list block-1-2 block-tab-full">
            <div
              className="col-block service-item aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="service-icon">
                {" "}
                <i className="icon-paint-brush" />
              </div>
              <div className="service-text">
                <h3 className="h2">Brand Identity</h3>
                <p>
                  Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                  suscipit ipsum laudantium. Quo delectus est. Maiores voluptas
                  ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                  Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </p>
              </div>
            </div>
            <div
              className="col-block service-item aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="service-icon">
                {" "}
                <i className="icon-group" />
              </div>
              <div className="service-text">
                <h3 className="h2">Illustration</h3>
                <p>
                  Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                  suscipit ipsum laudantium. Quo delectus est. Maiores voluptas
                  ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                  Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </p>
              </div>
            </div>
            <div
              className="col-block service-item aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="service-icon">
                {" "}
                <i className="icon-megaphone" />
              </div>
              <div className="service-text">
                <h3 className="h2">Marketing</h3>
                <p>
                  Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                  suscipit ipsum laudantium. Quo delectus est. Maiores voluptas
                  ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                  Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </p>
              </div>
            </div>
            <div
              className="col-block service-item aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="service-icon">
                {" "}
                <i className="icon-earth" />
              </div>
              <div className="service-text">
                <h3 className="h2">Web Design</h3>
                <p>
                  Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                  suscipit ipsum laudantium. Quo delectus est. Maiores voluptas
                  ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                  Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </p>
              </div>
            </div>
            <div
              className="col-block service-item aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="service-icon">
                {" "}
                <i className="icon-cube" />
              </div>
              <div className="service-text">
                <h3 className="h2">Packaging Design</h3>
                <p>
                  Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                  suscipit ipsum laudantium. Quo delectus est. Maiores voluptas
                  ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                  Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </p>
              </div>
            </div>
            <div
              className="col-block service-item aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="service-icon">
                <i className="icon-lego-block" />
              </div>
              <div className="service-text">
                <h3 className="h2">Web Development</h3>
                <p>
                  Nemo cupiditate ab quibusdam quaerat impedit magni. Earum
                  suscipit ipsum laudantium. Quo delectus est. Maiores voluptas
                  ab sit natus veritatis ut. Debitis nulla cumque veritatis.
                  Sunt suscipit voluptas ipsa in tempora esse soluta sint.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="works" className="s-works">
          <div className="intro-wrap">
            <div
              className="row section-header has-bottom-sep light-sep aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="col-full">
                <h3 className="subhead">Recent Works</h3>
                <h1 className="display-2 display-2--light">
                  We love what we do, check out some of our latest works
                </h1>
              </div>
            </div>
          </div>
          <div className="row works-content">
            <div className="col-full masonry-wrap">
              <div
                className="masonry"
                style={{ position: "relative", height: 1820 }}
              >
                <div
                  className="masonry__brick aos-init aos-animate"
                  data-aos="fade-up"
                  style={{ position: "absolute", left: 0, top: 0 }}
                >
                  <div className="item-folio">
                    <div className="item-folio__thumb">
                      {" "}
                      <a
                        href="images/portfolio/gallery/g-shutterbug.jpg"
                        className="thumb-link"
                        title="Shutterbug"
                        data-size="1050x700"
                      >
                        {" "}
                        <img
                          src="images/portfolio/xlady-shutterbug.jpg.pagespeed.ic.L78MPZ15Bu.webp"
                          srcSet="images/portfolio/xlady-shutterbug.jpg.pagespeed.ic.L78MPZ15Bu.webp 1x, images/portfolio/xlady-shutterbug,402x.jpg.pagespeed.ic.2Gd7FzOYRa.webp 2x"
                          alt
                        />{" "}
                      </a>
                    </div>
                    <div className="item-folio__text">
                      <h3 className="item-folio__title"> Shutterbug</h3>
                      <p className="item-folio__cat"> Branding</p>
                    </div>
                    <a
                      href="https://www.behance.net/"
                      className="item-folio__project-link"
                      title="Project link"
                    >
                      {" "}
                      <i className="icon-link" />{" "}
                    </a>
                    <div className="item-folio__caption">
                      <p>
                        Vero molestiae sed aut natus excepturi. Et tempora
                        numquam. Temporibus iusto quo.Unde dolorem corrupti
                        neque nisi.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="masonry__brick aos-init aos-animate"
                  data-aos="fade-up"
                  style={{ position: "absolute", left: 560, top: 0 }}
                >
                  <div className="item-folio">
                    <div className="item-folio__thumb">
                      {" "}
                      <a
                        href="images/portfolio/gallery/g-woodcraft.jpg"
                        className="thumb-link"
                        title="Woodcraft"
                        data-size="1050x700"
                      >
                        {" "}
                        <img
                          src="images/portfolio/xwoodcraft.jpg.pagespeed.ic.9Sgb2Cbm2k.webp"
                          srcSet="images/portfolio/xwoodcraft.jpg.pagespeed.ic.9Sgb2Cbm2k.webp 1x, images/portfolio/xwoodcraft,402x.jpg.pagespeed.ic.6u4QaTESg9.webp 2x"
                          alt
                        />{" "}
                      </a>
                    </div>
                    <div className="item-folio__text">
                      <h3 className="item-folio__title"> Woodcraft</h3>
                      <p className="item-folio__cat"> Web Design</p>
                    </div>
                    <a
                      href="https://www.behance.net/"
                      className="item-folio__project-link"
                      title="Project link"
                    >
                      {" "}
                      <i className="icon-link" />{" "}
                    </a>
                    <div className="item-folio__caption">
                      <p>
                        Vero molestiae sed aut natus excepturi. Et tempora
                        numquam. Temporibus iusto quo.Unde dolorem corrupti
                        neque nisi.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="masonry__brick aos-init aos-animate"
                  data-aos="fade-up"
                  style={{ position: "absolute", left: 0, top: 560 }}
                >
                  <div className="item-folio">
                    <div className="item-folio__thumb">
                      {" "}
                      <a
                        href="images/portfolio/gallery/g-beetle.jpg"
                        className="thumb-link"
                        title="The Beetle Car"
                        data-size="1050x700"
                      >
                        {" "}
                        <img
                          src="images/portfolio/xthe-beetle.jpg.pagespeed.ic.SN25FoWyHG.webp"
                          srcSet="images/portfolio/xthe-beetle.jpg.pagespeed.ic.SN25FoWyHG.webp 1x, images/portfolio/xthe-beetle,402x.jpg.pagespeed.ic.shy2_6kRSw.webp 2x"
                          alt
                        />{" "}
                      </a>
                    </div>
                    <div className="item-folio__text">
                      <h3 className="item-folio__title"> The Beetle</h3>
                      <p className="item-folio__cat"> Web Development</p>
                    </div>
                    <a
                      href="https://www.behance.net/"
                      className="item-folio__project-link"
                      title="Project link"
                    >
                      {" "}
                      <i className="icon-link" />{" "}
                    </a>
                    <div className="item-folio__caption">
                      <p>
                        Vero molestiae sed aut natus excepturi. Et tempora
                        numquam. Temporibus iusto quo.Unde dolorem corrupti
                        neque nisi.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="masonry__brick aos-init aos-animate"
                  data-aos="fade-up"
                  style={{ position: "absolute", left: 560, top: 700 }}
                >
                  <div className="item-folio">
                    <div className="item-folio__thumb">
                      {" "}
                      <a
                        href="images/portfolio/gallery/g-grow-green.jpg"
                        className="thumb-link"
                        title="Grow Green"
                        data-size="1050x700"
                      >
                        {" "}
                        <img
                          src="images/portfolio/xgrow-green.jpg.pagespeed.ic.IfG2gjDTOk.webp"
                          srcSet="images/portfolio/xgrow-green.jpg.pagespeed.ic.IfG2gjDTOk.webp 1x, images/portfolio/xgrow-green,402x.jpg.pagespeed.ic.Ze_q2zWRx2.webp 2x"
                          alt
                        />{" "}
                      </a>
                    </div>
                    <div className="item-folio__text">
                      <h3 className="item-folio__title"> Grow Green</h3>
                      <p className="item-folio__cat"> Branding</p>
                    </div>
                    <a
                      href="https://www.behance.net/"
                      className="item-folio__project-link"
                      title="Project link"
                    >
                      {" "}
                      <i className="icon-link" />{" "}
                    </a>
                    <div className="item-folio__caption">
                      <p>
                        Vero molestiae sed aut natus excepturi. Et tempora
                        numquam. Temporibus iusto quo.Unde dolorem corrupti
                        neque nisi.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="masonry__brick aos-init aos-animate"
                  data-aos="fade-up"
                  style={{ position: "absolute", left: 0, top: 1120 }}
                >
                  <div className="item-folio">
                    <div className="item-folio__thumb">
                      {" "}
                      <a
                        href="images/portfolio/gallery/g-guitarist.jpg"
                        className="thumb-link"
                        title="Guitarist"
                        data-size="1050x700"
                      >
                        {" "}
                        <img
                          src="images/portfolio/xguitarist.jpg.pagespeed.ic.XlIs6QyzIt.webp"
                          srcSet="images/portfolio/xguitarist.jpg.pagespeed.ic.XlIs6QyzIt.webp 1x, images/portfolio/xguitarist,402x.jpg.pagespeed.ic.TL2l96vgqP.webp 2x"
                          alt
                        />{" "}
                      </a>
                    </div>
                    <div className="item-folio__text">
                      <h3 className="item-folio__title"> Guitarist</h3>
                      <p className="item-folio__cat"> Web Design</p>
                    </div>
                    <a
                      href="https://www.behance.net/"
                      className="item-folio__project-link"
                      title="Project link"
                    >
                      {" "}
                      <i className="icon-link" />{" "}
                    </a>
                    <div className="item-folio__caption">
                      <p>
                        Vero molestiae sed aut natus excepturi. Et tempora
                        numquam. Temporibus iusto quo.Unde dolorem corrupti
                        neque nisi.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="masonry__brick aos-init aos-animate"
                  data-aos="fade-up"
                  style={{ position: "absolute", left: 560, top: 1260 }}
                >
                  <div className="item-folio">
                    <div className="item-folio__thumb">
                      {" "}
                      <a
                        href="images/portfolio/gallery/g-palmeira.jpg"
                        className="thumb-link"
                        title="Palmeira"
                        data-size="1050x700"
                      >
                        {" "}
                        <img
                          src="images/portfolio/xpalmeira.jpg.pagespeed.ic.JaY25Mc1m0.webp"
                          srcSet="images/portfolio/xpalmeira.jpg.pagespeed.ic.JaY25Mc1m0.webp 1x, images/portfolio/xpalmeira,402x.jpg.pagespeed.ic.6A6bSszvQJ.webp 2x"
                          alt
                        />{" "}
                      </a>
                    </div>
                    <div className="item-folio__text">
                      <h3 className="item-folio__title"> Palmeira</h3>
                      <p className="item-folio__cat"> Web Design</p>
                    </div>
                    <a
                      href="https://www.behance.net/"
                      className="item-folio__project-link"
                      title="Project link"
                    >
                      {" "}
                      <i className="icon-link" />{" "}
                    </a>
                    <div className="item-folio__caption">
                      <p>
                        Vero molestiae sed aut natus excepturi. Et tempora
                        numquam. Temporibus iusto quo.Unde dolorem corrupti
                        neque nisi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="clients" className="s-clients">
          <div
            className="row section-header aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="col-full">
              <h3 className="subhead">Our Clients</h3>
              <h1 className="display-2">
                Glint has been honored to partner up with these clients
              </h1>
            </div>
          </div>
          <div
            className="row clients-outer aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="col-full">
              <div
                className="clients slick-initialized slick-slider slick-dotted"
                role="toolbar"
              >
                <div aria-live="polite" className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 3880,
                      transform: "translate3d(-1164px, 0px, 0px)",
                    }}
                    role="listbox"
                  >
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-cloned"
                      data-slick-index={-6}
                      aria-hidden="true"
                      style={{ width: 194 }}
                      tabIndex={-1}
                    >
                      <img src="images/clients/xblackberry.png.pagespeed.ic.4YUA8e33nk.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-cloned"
                      data-slick-index={-5}
                      aria-hidden="true"
                      style={{ width: 194 }}
                      tabIndex={-1}
                    >
                      <img src="images/clients/xdropbox.png.pagespeed.ic.aYYvBaVnd-.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-cloned"
                      data-slick-index={-4}
                      aria-hidden="true"
                      style={{ width: 194 }}
                      tabIndex={-1}
                    >
                      <img src="images/clients/xenvato.png.pagespeed.ic.c-N8yRIHHd.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-cloned"
                      data-slick-index={-3}
                      aria-hidden="true"
                      style={{ width: 194 }}
                      tabIndex={-1}
                    >
                      <img src="images/clients/xfirefox.png.pagespeed.ic.rChz0H7dGu.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-cloned"
                      data-slick-index={-2}
                      aria-hidden="true"
                      style={{ width: 194 }}
                      tabIndex={-1}
                    >
                      <img src="images/clients/xjoomla.png.pagespeed.ic.FpAVRF996j.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-cloned"
                      data-slick-index={-1}
                      aria-hidden="true"
                      style={{ width: 194 }}
                      tabIndex={-1}
                    >
                      <img src="images/clients/xmagento.png.pagespeed.ic.dhkdk5A1Gu.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-current slick-active"
                      data-slick-index={0}
                      aria-hidden="false"
                      style={{ width: 194 }}
                      tabIndex={-1}
                      role="option"
                      aria-describedby="slick-slide00"
                    >
                      <img src="images/clients/xapple.png.pagespeed.ic.LRyKIqS94g.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-active"
                      data-slick-index={1}
                      aria-hidden="false"
                      style={{ width: 194 }}
                      tabIndex={-1}
                      role="option"
                      aria-describedby="slick-slide01"
                    >
                      <img src="images/clients/xatom.png.pagespeed.ic.dwjCwOpoMB.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-active"
                      data-slick-index={2}
                      aria-hidden="false"
                      style={{ width: 194 }}
                      tabIndex={-1}
                      role="option"
                      aria-describedby="slick-slide02"
                    >
                      <img src="images/clients/xblackberry.png.pagespeed.ic.4YUA8e33nk.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-active"
                      data-slick-index={3}
                      aria-hidden="false"
                      style={{ width: 194 }}
                      tabIndex={-1}
                      role="option"
                      aria-describedby="slick-slide03"
                    >
                      <img src="images/clients/xdropbox.png.pagespeed.ic.aYYvBaVnd-.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-active"
                      data-slick-index={4}
                      aria-hidden="false"
                      style={{ width: 194 }}
                      tabIndex={-1}
                      role="option"
                      aria-describedby="slick-slide04"
                    >
                      <img src="images/clients/xenvato.png.pagespeed.ic.c-N8yRIHHd.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-active"
                      data-slick-index={5}
                      aria-hidden="false"
                      style={{ width: 194 }}
                      tabIndex={-1}
                      role="option"
                      aria-describedby="slick-slide05"
                    >
                      <img src="images/clients/xfirefox.png.pagespeed.ic.rChz0H7dGu.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide"
                      data-slick-index={6}
                      aria-hidden="true"
                      style={{ width: 194 }}
                      tabIndex={-1}
                      role="option"
                      aria-describedby="slick-slide06"
                    >
                      <img src="images/clients/xjoomla.png.pagespeed.ic.FpAVRF996j.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide"
                      data-slick-index={7}
                      aria-hidden="true"
                      style={{ width: 194 }}
                      tabIndex={-1}
                      role="option"
                      aria-describedby="slick-slide07"
                    >
                      <img src="images/clients/xmagento.png.pagespeed.ic.dhkdk5A1Gu.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-cloned"
                      data-slick-index={8}
                      aria-hidden="true"
                      style={{ width: 194 }}
                      tabIndex={-1}
                    >
                      <img src="images/clients/xapple.png.pagespeed.ic.LRyKIqS94g.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-cloned"
                      data-slick-index={9}
                      aria-hidden="true"
                      style={{ width: 194 }}
                      tabIndex={-1}
                    >
                      <img src="images/clients/xatom.png.pagespeed.ic.dwjCwOpoMB.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-cloned"
                      data-slick-index={10}
                      aria-hidden="true"
                      style={{ width: 194 }}
                      tabIndex={-1}
                    >
                      <img src="images/clients/xblackberry.png.pagespeed.ic.4YUA8e33nk.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-cloned"
                      data-slick-index={11}
                      aria-hidden="true"
                      style={{ width: 194 }}
                      tabIndex={-1}
                    >
                      <img src="images/clients/xdropbox.png.pagespeed.ic.aYYvBaVnd-.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-cloned"
                      data-slick-index={12}
                      aria-hidden="true"
                      style={{ width: 194 }}
                      tabIndex={-1}
                    >
                      <img src="images/clients/xenvato.png.pagespeed.ic.c-N8yRIHHd.webp" />
                    </a>
                    <a
                      href="#0"
                      title
                      className="clients__slide slick-slide slick-cloned"
                      data-slick-index={13}
                      aria-hidden="true"
                      style={{ width: 194 }}
                      tabIndex={-1}
                    >
                      <img src="images/clients/xfirefox.png.pagespeed.ic.rChz0H7dGu.webp" />
                    </a>
                  </div>
                </div>
                <ul className="slick-dots" style={{}} role="tablist">
                  <li
                    className="slick-active"
                    aria-hidden="false"
                    role="presentation"
                    aria-selected="true"
                    aria-controls="navigation00"
                    id="slick-slide00"
                  >
                    <button
                      type="button"
                      data-role="none"
                      role="button"
                      tabIndex={0}
                    >
                      1
                    </button>
                  </li>
                  <li
                    aria-hidden="true"
                    role="presentation"
                    aria-selected="false"
                    aria-controls="navigation01"
                    id="slick-slide01"
                  >
                    <button
                      type="button"
                      data-role="none"
                      role="button"
                      tabIndex={0}
                    >
                      2
                    </button>
                  </li>
                  <li
                    aria-hidden="true"
                    role="presentation"
                    aria-selected="false"
                    aria-controls="navigation02"
                    id="slick-slide02"
                  >
                    <button
                      type="button"
                      data-role="none"
                      role="button"
                      tabIndex={0}
                    >
                      3
                    </button>
                  </li>
                  <li
                    aria-hidden="true"
                    role="presentation"
                    aria-selected="false"
                    aria-controls="navigation03"
                    id="slick-slide03"
                  >
                    <button
                      type="button"
                      data-role="none"
                      role="button"
                      tabIndex={0}
                    >
                      4
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="row clients-testimonials aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="col-full">
              <div className="testimonials slick-initialized slick-slider">
                <button
                  type="button"
                  data-role="none"
                  className="slick-prev slick-arrow"
                  aria-label="Previous"
                  role="button"
                  style={{}}
                >
                  Previous
                </button>
                <div
                  aria-live="polite"
                  className="slick-list draggable"
                  style={{ height: 510 }}
                >
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 4640,
                      transform: "translate3d(-928px, 0px, 0px)",
                    }}
                    role="listbox"
                  >
                    <div
                      className="testimonials__slide slick-slide slick-cloned"
                      data-slick-index={-1}
                      aria-hidden="true"
                      style={{ width: 928 }}
                      tabIndex={-1}
                    >
                      <p>
                        Repellat dignissimos libero. Qui sed at corrupti
                        expedita voluptas odit. Nihil ea quia nesciunt. Ducimus
                        aut sed ipsam. Autem eaque officia cum exercitationem
                        sunt voluptatum accusamus. Quasi voluptas eius
                        distinctio.
                      </p>
                      <img
                        src="images/avatars/xuser-02.jpg.pagespeed.ic.T71c7D0WMQ.webp"
                        alt="Author image"
                        className="testimonials__avatar"
                      />
                      <div className="testimonials__info">
                        {" "}
                        <span className="testimonials__name">
                          Satya Nadella
                        </span>{" "}
                        <span className="testimonials__pos">
                          CEO, Microsoft
                        </span>
                      </div>
                    </div>
                    <div
                      className="testimonials__slide slick-slide slick-current slick-active"
                      data-slick-index={0}
                      aria-hidden="false"
                      style={{ width: 928 }}
                      tabIndex={-1}
                      role="option"
                      aria-describedby="slick-slide10"
                    >
                      <p>
                        Qui ipsam temporibus quisquam vel. Maiores eos cumque
                        distinctio nam accusantium ipsum. Laudantium quia
                        consequatur molestias delectus culpa facere hic dolores
                        aperiam. Accusantium quos qui praesentium corpori.
                        Excepturi nam cupiditate culpa doloremque deleniti
                        repellat.
                      </p>
                      <img
                        src="images/avatars/xuser-01.jpg.pagespeed.ic.6i12ClXOQG.webp"
                        alt="Author image"
                        className="testimonials__avatar"
                      />
                      <div className="testimonials__info">
                        {" "}
                        <span className="testimonials__name">
                          Tim Cook
                        </span>{" "}
                        <span className="testimonials__pos">CEO, Apple</span>
                      </div>
                    </div>
                    <div
                      className="testimonials__slide slick-slide"
                      data-slick-index={1}
                      aria-hidden="true"
                      style={{ width: 928 }}
                      tabIndex={-1}
                      role="option"
                      aria-describedby="slick-slide11"
                    >
                      <p>
                        Excepturi nam cupiditate culpa doloremque deleniti
                        repellat. Veniam quos repellat voluptas animi adipisci.
                        Nisi eaque consequatur. Quasi voluptas eius distinctio.
                        Atque eos maxime. Qui ipsam temporibus quisquam vel.
                      </p>
                      <img
                        src="images/avatars/xuser-05.jpg.pagespeed.ic.APnAqT_Vqk.webp"
                        alt="Author image"
                        className="testimonials__avatar"
                      />
                      <div className="testimonials__info">
                        {" "}
                        <span className="testimonials__name">
                          Sundar Pichai
                        </span>{" "}
                        <span className="testimonials__pos">CEO, Google</span>
                      </div>
                    </div>
                    <div
                      className="testimonials__slide slick-slide"
                      data-slick-index={2}
                      aria-hidden="true"
                      style={{ width: 928 }}
                      tabIndex={-1}
                      role="option"
                      aria-describedby="slick-slide12"
                    >
                      <p>
                        Repellat dignissimos libero. Qui sed at corrupti
                        expedita voluptas odit. Nihil ea quia nesciunt. Ducimus
                        aut sed ipsam. Autem eaque officia cum exercitationem
                        sunt voluptatum accusamus. Quasi voluptas eius
                        distinctio.
                      </p>
                      <img
                        src="images/avatars/xuser-02.jpg.pagespeed.ic.T71c7D0WMQ.webp"
                        alt="Author image"
                        className="testimonials__avatar"
                      />
                      <div className="testimonials__info">
                        {" "}
                        <span className="testimonials__name">
                          Satya Nadella
                        </span>{" "}
                        <span className="testimonials__pos">
                          CEO, Microsoft
                        </span>
                      </div>
                    </div>
                    <div
                      className="testimonials__slide slick-slide slick-cloned"
                      data-slick-index={3}
                      aria-hidden="true"
                      style={{ width: 928 }}
                      tabIndex={-1}
                    >
                      <p>
                        Qui ipsam temporibus quisquam vel. Maiores eos cumque
                        distinctio nam accusantium ipsum. Laudantium quia
                        consequatur molestias delectus culpa facere hic dolores
                        aperiam. Accusantium quos qui praesentium corpori.
                        Excepturi nam cupiditate culpa doloremque deleniti
                        repellat.
                      </p>
                      <img
                        src="images/avatars/xuser-01.jpg.pagespeed.ic.6i12ClXOQG.webp"
                        alt="Author image"
                        className="testimonials__avatar"
                      />
                      <div className="testimonials__info">
                        {" "}
                        <span className="testimonials__name">
                          Tim Cook
                        </span>{" "}
                        <span className="testimonials__pos">CEO, Apple</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  data-role="none"
                  className="slick-next slick-arrow"
                  aria-label="Next"
                  role="button"
                  style={{}}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="s-contact">
          <div className="overlay" />
          <div className="contact__line" />
          <div
            className="row section-header aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="col-full">
              <h3 className="subhead">Contact Us</h3>
              <h1 className="display-2 display-2--light">
                Reach out for a new project or just say hello
              </h1>
            </div>
          </div>
          <div
            className="row contact-content aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="contact-primary">
              <h3 className="h6">Send Us A Message</h3>
              <form
                name="contactForm"
                id="contactForm"
                method="post"
                action
                noValidate="novalidate"
              >
                <fieldset>
                  <div className="form-field">
                    {" "}
                    <input
                      name="contactName"
                      type="text"
                      id="contactName"
                      placeholder="Your Name"
                      defaultValue
                      minLength={2}
                      required
                      aria-required="true"
                      className="full-width"
                    />
                  </div>
                  <div className="form-field">
                    {" "}
                    <input
                      name="contactEmail"
                      type="email"
                      id="contactEmail"
                      placeholder="Your Email"
                      defaultValue
                      required
                      aria-required="true"
                      className="full-width"
                    />
                  </div>
                  <div className="form-field">
                    {" "}
                    <input
                      name="contactSubject"
                      type="text"
                      id="contactSubject"
                      placeholder="Subject"
                      defaultValue
                      className="full-width"
                    />
                  </div>
                  <div className="form-field">
                    <textarea
                      name="contactMessage"
                      id="contactMessage"
                      placeholder="Your Message"
                      rows={10}
                      cols={50}
                      required
                      aria-required="true"
                      className="full-width"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-field">
                    {" "}
                    <button className="full-width btn--primary">Submit</button>
                    <div className="submit-loader">
                      <div className="text-loader">Sending...</div>
                      <div className="s-loader">
                        <div className="bounce1" />
                        <div className="bounce2" />
                        <div className="bounce3" />
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
              <div className="message-warning">
                {" "}
                Something went wrong. Please try again.
              </div>
              <div className="message-success">
                {" "}
                Your message was sent, thank you!
                <br />
              </div>
            </div>
            <div className="contact-secondary">
              <div className="contact-info">
                <h3 className="h6 hide-on-fullwidth">Contact Info</h3>
                <div className="cinfo">
                  <h5>Where to Find Us</h5>
                  <p>
                    {" "}
                    1600 Amphitheatre Parkway
                    <br /> Mountain View, CA
                    <br /> 94043 US
                  </p>
                </div>
                <div className="cinfo">
                  <h5>Email Us At</h5>
                  <p>
                    {" "}
                    contact@glintsite.com
                    <br /> info@glintsite.com
                  </p>
                </div>
                <div className="cinfo">
                  <h5>Call Us At</h5>
                  <p>
                    {" "}
                    Phone: (+63) 555 1212
                    <br /> Mobile: (+63) 555 0100
                    <br /> Fax: (+63) 555 0101
                  </p>
                </div>
                <ul className="contact-social">
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa fa-behance" aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <i className="fa fa-dribbble" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="row footer-main">
            <div className="col-six tab-full left footer-desc">
              <div className="footer-logo" /> Proin eget tortor risus. Mauris
              blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent
              sapien massa, convallis a pellentesque nec, egestas non nisi.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla
              porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt.
              Quaerat voluptas autem necessitatibus vitae aut.
            </div>
            <div className="col-six tab-full right footer-subscribe">
              <h4>Get Notified</h4>
              <p>
                Quia quo qui sed odit. Quaerat voluptas autem necessitatibus
                vitae aut non alias sed quia. Ut itaque enim optio ut excepturi
                deserunt iusto porro.
              </p>
              <div className="subscribe-form">
                <form id="mc-form" className="group" noValidate="true">
                  {" "}
                  <input
                    type="email"
                    defaultValue
                    name="EMAIL"
                    className="email"
                    id="mc-email"
                    placeholder="Email Address"
                    required
                  />{" "}
                  <input
                    type="submit"
                    name="subscribe"
                    defaultValue="Subscribe"
                  />{" "}
                  <label htmlFor="mc-email" className="subscribe-message" />
                </form>
              </div>
            </div>
          </div>
          <div className="row footer-bottom">
            <div className="col-twelve">
              <div className="copyright">
                {" "}
                <span>© Copyright Glint 2022</span>{" "}
                <span>
                  Site Template by{" "}
                  <a
                    href="https://colorlib.com/"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Colorlib
                  </a>
                </span>
              </div>
              <div className="go-top" style={{ display: "none" }}>
                {" "}
                <a className="smoothscroll" title="Back to Top" href="#top">
                  <i className="icon-arrow-up" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div aria-hidden="true" className="pswp" role="dialog" tabIndex={-1}>
          <div className="pswp__bg" />
          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item" />
              <div className="pswp__item" />
              <div className="pswp__item" />
            </div>
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <div className="pswp__counter" />
                <button
                  className="pswp__button pswp__button--close"
                  title="Close (Esc)"
                />{" "}
                <button
                  className="pswp__button pswp__button--share"
                  title="Share"
                />{" "}
                <button
                  className="pswp__button pswp__button--fs"
                  title="Toggle fullscreen"
                />{" "}
                <button
                  className="pswp__button pswp__button--zoom"
                  title="Zoom in/out"
                />
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip" />
              </div>
              <button
                className="pswp__button pswp__button--arrow--left"
                title="Previous (arrow left)"
              />{" "}
              <button
                className="pswp__button pswp__button--arrow--right"
                title="Next (arrow right)"
              />
              <div className="pswp__caption">
                <div className="pswp__caption__center" />
              </div>
            </div>
          </div>
        </div>
        <div id="preloader" style={{ display: "none" }}>
          <div id="loader" style={{ display: "none" }}>
            <div className="line-scale-pulse-out">
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
