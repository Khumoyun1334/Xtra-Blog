import React from "react";

import Ab from "../../img/about-01.jpg";
import Ab2 from "../../img/about-02.jpg";
import A3 from "../../img/about-03.jpg";
import Ab4 from "../../img/about-04.jpg";
import Ab5 from "../../img/about-05.jpg";
import CardC from "../CardC";

function HAAAA() {
  return (
    <div>
      <div className="  md:mx-[30px] lg:mx-0 xl:mx-[0px] mx-0  lg:px-[100px] xl:pl-8 xl:px-0">
        <div className="container-fluid">
          <main className="  mx-[0px] md:mx-[0px ] xl:mx-[70px]  w-full">
            <div className="row tm-row ">
              <div className="col-12">
                <form
                  method="GET"
                  className="form-inline tm-mb-80 tm-search-form w-[320px] xl:w-[980px] md:w-[710px] lg:w-[500px] pr-[50px]"
                >
                  <input
                    class="form-control tm-search-input   px-[20px] border"
                    name="query"
                    type="text"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                  <button className="tm-search-button" type="submit">
                    <i
                      className="fas fa-search tm-search-icon"
                      aria-hidden="true"
                    ></i>
                  </button>
                </form>
              </div>
            </div>
            <div className="row tm-row tm-mb-45 w-full pr-[50px] xl:w-[1000px] md:w-[710px] lg:w-[500px]">
              <div className="col-12 ">
                <hr className="tm-hr-primary tm-mb-55" />
                <img className="w-[100%]" src={Ab} alt="" />
              </div>
            </div>
            <div className="row tm-row tm-mb-40 lg:w-[450px] w-[290px] md:w-[660px] xl:w-[900px]">
              <div className="col-12">
                <div className="mb-4">
                  <h2 className="pt-2 tm-mb-40 tm-color-primary tm-post-title">
                    About this xtra blog
                  </h2>
                  <p className="text-[18px] leading-10">
                    You can immediately download
                    <a
                      rel="nofollow"
                      href="https://templatemo.com/tm-553-xtra-blog"
                      target="_blank"
                      className="text-blue-600 mx-3"
                    >
                      Xtra Blog Template
                    </a>
                    from TemplateMo website for 100% free of charge. Etiam
                    vehicula, tortor ac eleifend tincidunt, diam neque
                    pellentesque ipsum, a geugiat eros mauris eget lorem.
                    Quisque in bibendum elit, in egestas turpis. Vestibulum
                    ornare sollicitudin congue. Aliquam lorem mi, maximus at
                    iaculis ut, viverra vel mauris. Duis congue luctus metus,
                    sodales tincidunt lectus fringilla ut. Nunc tempus at magna
                    sed vestibulum.
                  </p>
                  <p className="text-[18px] leading-10 mt-5">
                    Proin et arcu ligula. Praesent quis erat eu est solliditudin
                    tristique ut in arcu. Donec bibendum ex id ligula semper
                    dictum. Proin malesuada luctus auctor. Suspendisse
                    ullamcorper, mi vel molestie ornare, arcu magna euismod
                    ipsum, in malesuada nulla magna ut enim. Morbi lacinia magna
                    sed sapien auctor, vitae luctus nunc cursus.
                  </p>
                </div>
              </div>
            </div>
            <div className="row tm-row tm-mb-120 grid-cols-1 w-[270px] md:grid md:grid-cols-1 lg:w-[450px] md:w-[660px] xl:w-[1300px] lg:grid lg:grid-cols-1 xl:grid xl:grid-cols-3 gap-7">
              <div className="col-lg-4 tm-about-col">
                <div className="tm-bg-gray tm-about-pad">
                  <div className="text-center tm-mt-40 tm-mb-60">
                    <i className="fas fa-bezier-curve fa-4x tm-color-primary"></i>
                  </div>
                  <h2 className="mb-3 tm-color-primary tm-post-title">
                    Background
                  </h2>
                  <p className="mb-0 tm-line-height-short text-[19px]">
                    Phasellus pulvinar nisl ornare leo porttitor, et vestibulum
                    lorem semper. Duis risus ex, molestie sit amet magna in,
                    pharetra pellentesque est. Curabitur elit metus.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 tm-about-col">
                <div className="tm-bg-gray tm-about-pad">
                  <div className="text-center tm-mt-40 tm-mb-60">
                    <i className="fas fa-users-cog fa-4x tm-color-primary"></i>
                  </div>
                  <h2 className="mb-3 tm-color-primary tm-post-title">
                    Teamwork
                  </h2>
                  <p className="mb-0 tm-line-height-short text-[19px]">
                    Suspendisse ullamcorper, mi vel molestie ornare, arcu magna
                    euismod ipsum, in malesuada nulla magna ut enim. Morbi
                    lacinia magna sed auctor, vitae nunc cursus.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 tm-about-col">
                <div className="tm-bg-gray tm-about-pad">
                  <div className="text-center tm-mt-40 tm-mb-60">
                    <i className="fab fa-creative-commons-sampling fa-4x tm-color-primary"></i>
                  </div>
                  <h2 className="mb-3 tm-color-primary tm-post-title">
                    Our Core Value
                  </h2>
                  <p className="mb-0 tm-line-height-short text-[19px]">
                    Nunc mi ante, suscipit vel dapibus et, volutpat sit amet
                    ante. In tempor nec sem vitae varius. Aliquam tincidunt orci
                    sem, et imperdiet massa consectetur nec.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12">
              <hr className="tm-hr-primary tm-mb-55 lg:w-[500px] xl:w-[970px]  md:w-[670px] w-[270px]" />
            </div>
            <div className="row tm-row tm-mb-60 w-[300px] md:w-[680px] xl:w-[1200px]  grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-1 md:gap-7 xl:grid xl:grid-cols-2">
              <div className=" tm-mb-60  ">
                <div className="media tm-person flex">
                  <div className="w-[45%] ">
                    <img
                      className="w-[83%] md:h-[190px] xl:w-[160px] lg:h-[240px] h-[180px]"
                      src={Ab2}
                      alt=""
                    />
                  </div>

                  <div className="media-body md:w-[65%] w-[50%]">
                    <h2 className="tm-color-primary tm-post-title mb-2">
                      John Henry
                    </h2>
                    <h3 className="tm-h3 mb-3">Project Director</h3>
                    <p className="mb-0 tm-line-height-short text-[17px]">
                      Quisque in bibendum elit, in egestas turpis. Vestibulum
                      ornare sollicitudin congue. Aliquam lorem mi, maximus at
                      iaculis ut.
                    </p>
                  </div>
                </div>
              </div>

              <div className=" tm-mb-60  ">
                <div className="media tm-person flex">
                  <div className="w-[45%]">
                    <img
                      className="w-[83%] lg:h-[240px]  md:h-[190px] xl:w-[160px] h-[190px]"
                      src={A3}
                      alt=""
                    />
                  </div>

                  <div className="media-body  md:w-[65%] w-[50%]">
                    <h2 className="tm-color-primary tm-post-title mb-2">
                      Timy Cake
                    </h2>
                    <h3 className="tm-h3 mb-3">Project Director</h3>
                    <p className="mb-0 tm-line-height-short text-[17px] ">
                      Quisque in bibendum elit, in egestas turpis. Vestibulum
                      ornare sollicitudin congue. Aliquam lorem mi, maximus at
                      iaculis ut.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" tm-mb-60  ">
                <div className="media tm-person flex ">
                  <div className="w-[45%]">
                    <img
                      className="w-[83%] lg:h-[240px] md:h-[190px]  xl:w-[160px] h-[190px]"
                      src={Ab4}
                      alt=""
                    />
                  </div>

                  <div className="media-body  md:w-[65%] w-[50%]">
                    <h2 className="tm-color-primary tm-post-title mb-2">
                      Jay Zona
                    </h2>
                    <h3 className="tm-h3 mb-3">Project Director</h3>
                    <p className="mb-0 tm-line-height-short text-[17px] ">
                      Quisque in bibendum elit, in egestas turpis. Vestibulum
                      ornare sollicitudin congue. Aliquam lorem mi, maximus at
                      iaculis ut.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" tm-mb-60  ">
                <div className="media tm-person flex">
                  <div className="w-[45%]">
                    <img
                      className="w-[83%] lg:h-[240px] md:h-[190px] xl:w-[160px] h-[190px]"
                      src={Ab5}
                      alt=""
                    />
                  </div>

                  <div className="media-body  md:w-[65%] w-[50%]">
                    <h2 className="tm-color-primary tm-post-title mb-2">
                      Catherine Soft
                    </h2>
                    <h3 className="tm-h3 mb-3">Project Director</h3>
                    <p className="mb-0 tm-line-height-short text-[17px] ">
                      Integer eu sapien hendrerit, imperdiet arcu sit amet,
                      sollicitudin ipsum. Phasellus consequat suscipit ligula
                      eget bibendum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default HAAAA;
