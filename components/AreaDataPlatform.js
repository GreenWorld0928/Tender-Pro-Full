import Image from "next/image";

export default function AreaDataPlatform() {
  return (
    <main className="w-full h-full mt-1 mb-[195px]">
      <section className="tender-container pt-16">
        <div className="btn-secondary">AREA Data Platform</div>
        <div
          className="pt-[22px] flex flex-col md:flex-row items-start justify-between"
        >
          <div className="w-full md:max-w-[568px] lg:w-1/2">
            <h1 className="hero-title">
              Unlock property investment potential with AREA Data Platform and
              mitigate risk
            </h1>
            <div className="max-w-[564px] pt-5">
              <p className="paragraph">
                Gain comprehensive insights into market dynamics, minimise
                uncertainties, and maximise your returns through informed
                decision-making and strategic planning.
              </p>
              <p className="paragraph">
                Utilise the AREA Data Platform to delve into the market depth of
                potential purchasers in your catchment area. Identify the
                maximum affordability of nearby households to optimise pricing
                for your properties. Conduct scenario tests on interest rates to
                assess their impact on potential buyers’ affordability,
                empowering you to make confident data-driven decisions.
              </p>
            </div>
            <div className="pt-[50px] flex flex-row items-center gap-6 w-full">
              <a className="btn-primary" href="#">Book A Demo</a>
              <a className="btn-primary-outlined" href="#">Contact Us</a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pt-10 md:pt-0 md:pl-4">
            <Image
              className="aspect-[466/485] w-[466px] mx-auto md:mr-0"
              src="/images/hero.png"
              width={466}
              height={485}
              alt=""
            />
          </div>
        </div>
      </section>

      <section
        className="tender-container pt-[130px] w-full flex flex-col items-center text-center"
      >
        <div className="btn-secondary">Insights</div>
        <h3 className="maw-w-[1032px] heading pt-[30px]">
          Understand whole market dynamics to identify investment opportunities
          and enhance planning processes
        </h3>
        <p className="max-w-[948px] paragraph pt-5">
          Utilise advanced analytics and diverse data sources provided by AREA
          Data Platform to identify investment opportunities and enhance your
          end-to-end planning process. Evaluate risks with granular insights,
          align with local regulations seamlessly, and capitalize on emerging
          opportunities with precision.
        </p>
      </section>

      <section className="mt-20 bg-[#EAEDFD] pt-10 pb-[128px]">
        <div className="tender-container">
          <h2 className="heading">Benefits</h2>
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 xl:gap-[23px] pt-10"
          >
            <div className="benifits-card">
              <div className="heading2 serial">01</div>
              <div className="benifit-details">
                <h4 className="heading2">Maximise Investment</h4>
                <p className="paragraph pt-2.5">
                  Harness advanced housing market analytics and diverse data
                  sources to gain a comprehensive understanding of the market
                  landscape, enable more informed decisions based on your
                  desired development objectives or investment opportunities.
                </p>
              </div>
            </div>
            <div className="benifits-card">
              <div className="heading2 serial">02</div>
              <div className="benifit-details">
                <h4 className="heading2">Maximise Investment</h4>
                <p className="paragraph pt-2.5">
                  Harness advanced housing market analytics and diverse data
                  sources to gain a comprehensive understanding of the market
                  landscape, enable more informed decisions based on your
                  desired development objectives or investment opportunities.
                </p>
              </div>
            </div>
            <div className="benifits-card">
              <div className="heading2 serial">03</div>
              <div className="benifit-details">
                <h4 className="heading2">Maximise Investment</h4>
                <p className="paragraph pt-2.5">
                  Harness advanced housing market analytics and diverse data
                  sources to gain a comprehensive understanding of the market
                  landscape, enable more informed decisions based on your
                  desired development objectives or investment opportunities.
                </p>
              </div>
            </div>
            <div className="benifits-card">
              <div className="heading2 serial">04</div>
              <div className="benifit-details">
                <h4 className="heading2">Maximise Investment</h4>
                <p className="paragraph pt-2.5">
                  Harness advanced housing market analytics and diverse data
                  sources to gain a comprehensive understanding of the market
                  landscape, enable more informed decisions based on your
                  desired development objectives or investment opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-20">
        <div className="flex flex-col items-center">
          <div
            className="flex items-center justify-center space-x-3 lg:space-x-8 heading"
          >
            <h3>We deliver the best predictive data</h3>
          </div>
        </div>

        <div
          className="max-w-[800px] pt-[50px] flex flex-wrap justify-center items-center mx-auto gap-x-11 sm:gap-x-[75px] gap-y-10"
        >
          <div className="text-center">
            <p className="matrix pb-3">30.8m</p>
            <p className="paragraph">Households</p>
          </div>
          <div className="text-center">
            <p className="matrix pb-3">60+</p>
            <p className="paragraph">Data sources</p>
          </div>
          <div className="text-center">
            <p className="matrix pb-3">2,300+</p>
            <p className="paragraph">Attributes per record</p>
          </div>
          <div className="text-center">
            <p className="matrix pb-3">81%</p>
            <p className="paragraph">Market listing coverage</p>
          </div>
          <div className="text-center">
            <p className="matrix pb-3">75b</p>
            <p className="paragraph">Data points</p>
          </div>
          <div className="text-center">
            <p className="matrix pb-3">90%</p>
            <p className="paragraph">Address match accuracy</p>
          </div>
          <div className="text-center">
            <p className="matrix pb-3">GDPR</p>
            <p className="paragraph">Compliant</p>
          </div>
        </div>
      </section>
    </main>
  );
}