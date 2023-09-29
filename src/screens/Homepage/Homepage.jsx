import React from "react";
import { BoldMapLocationMapPoint } from "../../icons/BoldMapLocationMapPoint";
import { BoldTimeCalendarMinimalistic } from "../../icons/BoldTimeCalendarMinimalistic";
import { BoldTransportPartsServiceTransmissionSquare } from "../../icons/BoldTransportPartsServiceTransmissionSquare";
import { BrokenMapLocationMapPoint } from "../../icons/BrokenMapLocationMapPoint";
import { InstagramOriginal } from "../../icons/InstagramOriginal";
import { InstagramOriginal1 } from "../../icons/InstagramOriginal1";
import { OutlineArrowsAltArrowDown } from "../../icons/OutlineArrowsAltArrowDown";
import { OutlineArrowsArrowRight1 } from "../../icons/OutlineArrowsArrowRight1";
import { OutlineCallPhoneRounded } from "../../icons/OutlineCallPhoneRounded";
import { OutlineMapLocationMapPoint } from "../../icons/OutlineMapLocationMapPoint";
import { OutlineTimeClockCircle } from "../../icons/OutlineTimeClockCircle";
import "./style.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="div">
        <div className="text-wrapper">Our services</div>
        <div className="overlap">
          <div className="main-section">
            <div className="overlap-group">
              <div className="overlap-group-2">
                <p className="engineering-office">
                  <span className="span">
                    Engineering
                    <br />
                    office in{" "}
                  </span>
                  <span className="text-wrapper-2">Cologne</span>
                </p>
                <img className="ARROW" alt="Arrow" src="https://c.animaapp.com/zbVyMyyH/img/arrow@2x.png" />
                <img className="image" alt="Image" src="https://c.animaapp.com/zbVyMyyH/img/image-1-1.png" />
              </div>
              <div className="frame">
                <div className="text-wrapper-3">Book an Appointment</div>
              </div>
              <div className="find-us-on-google">
                <p className="p">Find us on Google map:</p>
                <img
                  className="google-maps"
                  alt="Google maps"
                  src="https://c.animaapp.com/zbVyMyyH/img/google-maps-1.svg"
                />
              </div>
            </div>
            <header className="header">
              <div className="navbar">
                <div className="text-wrapper-4">Homepage</div>
                <div className="text-wrapper-4">Services</div>
                <div className="text-wrapper-4">Locations</div>
                <div className="text-wrapper-4">Contacts</div>
              </div>
              <p className="text-wrapper-5">+49 221 57 000 807</p>
              <img className="line" alt="Line" src="https://c.animaapp.com/zbVyMyyH/img/line-37-1.svg" />
              <button className="btn">
                <div className="text-wrapper-6">Call Back</div>
              </button>
              <button className="div-wrapper">
                <div className="text-wrapper-7">Book an Appointment</div>
              </button>
            </header>
            <p className="t-v-s-d-AUTO-PARTNER">
              TÜV SÜD AUTO PARTNER
              <br />
              IN NEUSS
            </p>
            <div className="heinrich-pesch-str">
              Heinrich-Pesch-Str.
              <br />
              5a 50739 Köln
            </div>
            <div className="mon-fri">Mon-Fri, 9:00-19:00</div>
            <img className="img" alt="Line" src="https://c.animaapp.com/zbVyMyyH/img/line-37.svg" />
            <img className="line-2" alt="Line" src="https://c.animaapp.com/zbVyMyyH/img/line-37.svg" />
            <BrokenMapLocationMapPoint className="broken-map-location" />
            <div className="group">
              <img
                className="ingenieurteam"
                alt="Ingenieurteam"
                src="https://c.animaapp.com/zbVyMyyH/img/ingenieurteam-1.svg"
              />
              <img className="ST" alt="St" src="https://c.animaapp.com/zbVyMyyH/img/st-1@4x.png" />
            </div>
            <div className="social-pages">
              <div className="instagram">
                <InstagramOriginal1 className="instagram-original" />
              </div>
              <div className="tik-tok">
                <img className="tik-tok-2" alt="Tik tok" src="https://c.animaapp.com/zbVyMyyH/img/tiktok-1.svg" />
              </div>
              <div className="facebook">
                <img className="facebook-2" alt="Facebook" src="https://c.animaapp.com/zbVyMyyH/img/facebook-1.svg" />
              </div>
            </div>
          </div>
          <div className="booking">
            <div className="location">
              <div className="text-wrapper-8">Location</div>
              <div className="text-wrapper-9">Cologne</div>
            </div>
            <div className="date">
              <div className="text-wrapper-8">Date</div>
              <div className="text-wrapper-9">12/08/2023</div>
            </div>
            <div className="select-a-service">
              <div className="text-wrapper-8">Select a service</div>
              <div className="text-wrapper-9">Emissions</div>
            </div>
            <img className="line-3" alt="Line" src="https://c.animaapp.com/zbVyMyyH/img/line-42.svg" />
            <img className="line-4" alt="Line" src="https://c.animaapp.com/zbVyMyyH/img/line-42.svg" />
            <BoldMapLocationMapPoint className="bold-map-location" color="#C5CBD5" />
            <BoldTimeCalendarMinimalistic className="bold-time-calendar" color="#C5CBD5" />
            <BoldTransportPartsServiceTransmissionSquare className="bold-transport-parts" color="#C5CBD5" />
            <button className="button">
              <div className="text-wrapper-7">Book an Appointment</div>
            </button>
          </div>
        </div>
        <div className="overlap-2">
          <div className="map">
            <div className="overlap-group-wrapper">
              <div className="bold-map-location-wrapper">
                <BoldMapLocationMapPoint className="bold-map-location-map-point" color="#2271E9" />
              </div>
            </div>
            <img
              className="google-maps-2"
              alt="Google maps"
              src="https://c.animaapp.com/zbVyMyyH/img/google-maps.svg"
            />
          </div>
          <footer className="footer">
            <div className="instagram-original-wrapper">
              <InstagramOriginal className="instagram-original-instance" />
            </div>
            <div className="tik-tok-wrapper">
              <img className="tik-tok-3" alt="Tik tok" src="https://c.animaapp.com/zbVyMyyH/img/tiktok.svg" />
            </div>
            <div className="facebook-wrapper">
              <img className="facebook-3" alt="Facebook" src="https://c.animaapp.com/zbVyMyyH/img/facebook.svg" />
            </div>
            <div className="text-wrapper-10">© ST-Ingenieurteam 2023</div>
            <p className="heinrich-pesch-str-2">
              <span className="text-wrapper-11">
                Heinrich-Pesch-Str.
                <br />
                5a 50739 Köln
              </span>
              <span className="text-wrapper-12">а</span>
            </p>
            <div className="mon-fir">Mon-Fir, 9:00-19:00</div>
            <p className="text-wrapper-13">+49 221 57 000 807</p>
            <div className="col">
              <div className="text-wrapper-14">Company</div>
              <div className="list-items">
                <div className="text-wrapper-15">Services</div>
                <div className="text-wrapper-16">Prices</div>
                <div className="text-wrapper-16">Locations</div>
                <div className="text-wrapper-16">Contacts</div>
              </div>
            </div>
            <div className="col-2">
              <div className="text-wrapper-14">Legal</div>
              <div className="list-items">
                <div className="text-wrapper-15">Imprint</div>
                <div className="text-wrapper-16">Data protection</div>
              </div>
            </div>
            <img className="line-5" alt="Line" src="https://c.animaapp.com/zbVyMyyH/img/line-41.svg" />
            <p className="t-v-s-d-AUTO-PARTNER-2">
              TÜV SÜD AUTO PARTNER
              <br />
              IN NEUSS
            </p>
            <button className="btn-2">
              <div className="text-wrapper-7">Book an Appointment</div>
            </button>
            <div className="logo">
              <img
                className="ingenieurteam"
                alt="Ingenieurteam"
                src="https://c.animaapp.com/zbVyMyyH/img/ingenieurteam.svg"
              />
              <img className="ST" alt="St" src="https://c.animaapp.com/zbVyMyyH/img/st.svg" />
            </div>
            <OutlineMapLocationMapPoint className="outline-map-location" />
            <OutlineCallPhoneRounded className="outline-call-phone" />
            <OutlineTimeClockCircle className="outline-time-clock" />
          </footer>
        </div>
        <img className="car-brands" alt="Car brands" src="https://c.animaapp.com/zbVyMyyH/img/car-brands.svg" />
        <div className="our-work">
          <div className="description-wrapper">
            <div className="description">
              <div className="text-wrapper-17">General inspections and safety</div>
              <div className="text-wrapper-18">Audi A5</div>
            </div>
          </div>
          <div className="img-2">
            <div className="description-2">
              <div className="text-wrapper-17">Gas system tests according</div>
              <div className="text-wrapper-19">Toyota Avensis</div>
            </div>
          </div>
          <div className="img-3">
            <div className="description-2">
              <div className="text-wrapper-17">Emissions tests according to</div>
              <div className="text-wrapper-18">Volvo</div>
            </div>
          </div>
          <div className="text-wrapper-20">Our work</div>
          <div className="nav">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
          </div>
        </div>
        <div className="text-wrapper-21">Contact us</div>
        <div className="input-field">
          <div className="frame-2">
            <div className="text-wrapper-22">First name</div>
          </div>
          <div className="text-wrapper-23">First name</div>
        </div>
        <div className="input-field-2">
          <div className="frame-2">
            <div className="text-wrapper-22">Last name</div>
          </div>
          <div className="text-wrapper-23">Last name</div>
        </div>
        <div className="input-field-3">
          <div className="frame-2">
            <div className="text-wrapper-24">Choose location</div>
            <OutlineArrowsAltArrowDown className="outline-arrows-alt" />
          </div>
          <div className="text-wrapper-23">Location</div>
        </div>
        <div className="input-field-4">
          <div className="frame-2">
            <div className="text-wrapper-22">Choose service</div>
            <OutlineArrowsAltArrowDown className="outline-arrows-alt" />
          </div>
          <div className="text-wrapper-25">Choose service</div>
        </div>
        <button className="btn-3">
          <div className="text-wrapper-26">Send message</div>
        </button>
        <p className="text-wrapper-27">
          If you have a technical question, please always provide us with your contact details - even if you are already
          our customer. In order to quickly forward your request to the right place, as well as for any questions, it is
          very helpful for us to provide us with your place of residence and your telephone number. Thank you.
        </p>
        <div className="go-to-the-services">
          <p className="text-wrapper-28">Go to the services page</p>
          <OutlineArrowsArrowRight1 className="outline-arrows-arrow" />
        </div>
        <div className="change-acceptances">
          <div className="image-2" />
          <div className="information">
            <p className="text-wrapper-29">
              Special wheels, spoilers, or would it rather be a chassis change? Our test engineers assess and document
              the changes for you in accordance with the regulations.
            </p>
            <div className="text-wrapper-30">Change acceptances</div>
            <button className="btn-4">
              <div className="text-wrapper-7">Learn more</div>
            </button>
          </div>
        </div>
        <div className="change-acceptances-2">
          <div className="image-3" />
          <div className="information">
            <p className="text-wrapper-31">
              If you have been involved in an accident through no fault of your own, we offer you to prepare an
              independent damage report so that you can enforce your right to compensation.
            </p>
            <div className="text-wrapper-32">Accident and valuation reports</div>
            <button className="btn-5">
              <div className="text-wrapper-7">Learn more</div>
            </button>
          </div>
        </div>
        <div className="inspection">
          <div className="image-4" />
          <div className="information">
            <p className="text-wrapper-29">
              Is your general inspection due? Our test engineers, like our competitors from TÜV and Dekra, are
              authorized to carry out the HU both in our test center and in our bases.
            </p>
            <div className="text-wrapper-30">Inspection</div>
            <button className="btn-4">
              <div className="text-wrapper-7">Learn more</div>
            </button>
          </div>
        </div>
        <div className="inspection-2">
          <div className="image-5" />
          <div className="information">
            <p className="text-wrapper-29">
              Is your vehicle older than 30 years and largely in its original condition? Our test engineers also carry
              out classic car inspections in accordance with Section 23 StVZO.
            </p>
            <div className="text-wrapper-30">Classic car – report</div>
            <button className="btn-4">
              <div className="text-wrapper-7">Learn more</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
