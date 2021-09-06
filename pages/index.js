import Head from "next/head";
import { useEffect, useState } from "react";
import Menu from "../common/components/Menu";
import { BASE_URL } from "../utils/api";
import AboutSection from "./home/AboutSection";
import AvailableSliderSection from "./home/AvailableSlider";
import DownloadSection from "./home/DownloadSection";
import Footer from "./home/Footer";
import HeroSection from "./home/HeroSection";
import MakeMoneySection from "./home/MakeMoneySection";

export default function Home() {
  const [aboutUs, setAboutUs] = useState("");
  const [contactUs, setContactUs] = useState("");
  const [places, setPlaces] = useState([]);
  const [stays, setStays] = useState([]);
  const [totalBooking, setTotalBooking] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    fetch(`${BASE_URL}`)
      .then((res) => res.json())
      .then((data) => {
        setAboutUs(data.about_us);
        setContactUs(data.contact_us);
        setPlaces(data.places);
        setStays(data.stays);
        setTotalBooking(data.total_booking);
        setTotalUsers(data.total_user);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Travela</title>
        <meta name="description" content="Travela" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu aboutContent={aboutUs} stays={stays} />
      <HeroSection bookingCount={totalBooking} usersCount={totalUsers} />
      <AvailableSliderSection locations={places} />
      <MakeMoneySection />
      <DownloadSection />
      <AboutSection contactContent={contactUs} />
      <Footer />
    </div>
  );
}
