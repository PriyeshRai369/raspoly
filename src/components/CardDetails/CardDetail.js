import React from "react";

export default function CardDetail() {
  return (
    <section className="cardBoxContainer">
      <div className="container">
        <div className="row ">
          <div className="col-lg-4 col-md-6 col-sm-12 text-center my-2">
            <div className="cardbx">
              <lord-icon
                src="https://cdn.lordicon.com/trkmlure.json"
                trigger="hover"
                state="hover-rotate-up-to-down"
                colors="primary:#233382,secondary:#233382"
                style={{ width: "130px", height: "130px" }}
                //   style="width:250px;height:250px"
              ></lord-icon>
              <h4>WORLD CLASS INFRASTRUCTURE</h4>
              <p>
                Our state-of-the-art facility spans over one million square feet
                and is equipped with the most advanced machinery, enabling us to
                consistently provide top-quality and timely service to our
                customers
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 text-center my-2">
            <div className="cardbx">
              <lord-icon
                src="https://cdn.lordicon.com/nzdmwlbv.json"
                trigger="hover"
                colors="primary:#233382,secondary:#233382"
                style={{ width: "130px", height: "130px" }}
              ></lord-icon>
              <h4>ALL UNDER ONE ROOF</h4>
              <p>
                We provide an end-to-end processing facility that enhances
                performance and reinforces quality control. Everything needed to
                produce the bags is manufactured in-house, except for the
                polymer resin.
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 text-center my-2">
            <div className="cardbx">
              <lord-icon
                src="https://cdn.lordicon.com/wzrwaorf.json"
                trigger="hover"
                state="hover-conversation-alt"
                colors="primary:#233382,secondary:#233382"
                style={{ width: "130px", height: "130px" }}
              ></lord-icon>
              <h4>WE BELIEVE IN RELATIONSHIPS</h4>
              <p>
                We have always believed in people over business and this has
                ensured that we have a long-term relationship with our
                Customers, Employees and Stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
