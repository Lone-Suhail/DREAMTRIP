import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import TopDestinations2 from "@/components/destinations/TopDestinations2";
import Faq from "@/components/faq/Faq";
import TestimonialLeftCol from "@/components/home/home-1/TestimonialLeftCol";
import Testimonial from "@/components/home/home-1/Testimonial";
import Link from "next/link";
import Slights from "@/components/block/Slights";
import LocationTopBar from "@/components/common/LocationTopBar";
import Banner from "@/components/destinations/components/Banner";
import Categories from "@/components/destinations/components/Categories";
import IntroTown from "@/components/destinations/components/IntroTown";
import Weather from "@/components/destinations/components/Weather";
import GeneralInfo from "@/components/destinations/components/GeneralInfo";

export const metadata = {
  title: "Destinations || Dream Trip - Travel & Tour",
  description: "Dream Trip - Travel & Tour",
};

const Destinations = () => {
  return (
    <>
      {/* Header */}
      <div className="header-margin"></div>
      <DefaultHeader />
      <LocationTopBar />

      {/* Main Content */}
      <section className="layout-pb-md">
        <div className="container">
          {/* Banner */}
          <div className="row">
            <Banner />
          </div>

          {/* Categories */}
          <div className="row x-gap-20 y-gap-20 items-center pt-20 item_gap-x10">
            <Categories />
          </div>

          {/* Introduction */}
          <div className="row y-gap-20 pt-40">
            <div className="col-auto">
              <h2>What to know before visiting Kashmir</h2>
            </div>
            <IntroTown />
          </div>

          {/* Separator */}
          <div className="pt-30 mt-30 border-top-light" />

          {/* Local Weather */}
          <div className="row y-gap-20">
            <div className="col-12">
              <h2 className="text-22 fw-500">Local weather</h2>
            </div>
            <Weather />
          </div>

          {/* Separator */}
          <div className="pt-30 mt-30 border-top-light" />

          {/* General Info */}
          <div className="row y-gap-20">
            <div className="col-12">
              <h2 className="text-22 fw-500">General info</h2>
            </div>
            <GeneralInfo />
          </div>

          {/* Separator */}
          <div className="mt-30 border-top-light" />
        </div>
      </section>

      {/* Top Sights */}
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Top sights in London</h2>
                <p className="sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>

          <div className="row y-gap-30 pt-40">
            <Slights />
          </div>

          <div className="row justify-center mt-40">
            <div className="col-auto">
              <Link
                href="#"
                className="button h-50 w-250 -outline-blue-1 text-blue-1"
              >
                Explore more <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="layout-pt-lg layout-pb-lg bg-light-2">
        <div className="container">
          <div className="row y-gap-40 justify-between">
            <div className="col-xl-5 col-lg-6" data-aos="fade-up">
              <TestimonialLeftCol />
            </div>
            <div className="col-lg-6">
              <div
                className="overflow-hidden js-testimonials-slider-3"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-lg-4">
              <h2 className="text-30 fw-500">
                FAQs about
                <br />
                Kashmir
              </h2>
            </div>
            <div className="col-lg-8">
              <div className="accordion -simple row y-gap-20 js-accordion">
                <Faq />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Destinations */}
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Destinations near Kashmir
                </h2>
                <p className="sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>

          <div className="pt-40 relative">
            <TopDestinations2 />
          </div>
        </div>
      </section>

      {/* Call to Actions */}
      <CallToActions />

      {/* Footer */}
      <DefaultFooter />
    </>
  );
};

export default dynamic(() => Promise.resolve(Destinations), { ssr: false });
