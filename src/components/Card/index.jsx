import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import Img1 from "../../img/img-01.jpg";
import Img2 from "../../img/img-02.jpg";
import Img3 from "../../img/img-03.jpg";
import Img4 from "../../img/img-04.jpg";
import Img5 from "../../img/img-05.jpg";
import Img6 from "../../img/img-06.jpg";

import { useNavigate } from "react-router";

function Card() {
  const navigate = useNavigate(false);

  const handleNaxt = () => {
    navigate("/singlepost");
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid md:gap-[40px] md:grid-cols-2 md:px-[30px] mt-[100px] xl:px-[100px] lg:px-[70px] xl:gap-[0px] lg:gap-[40px]">
        <article className="w-[270px] md:w-[310px] lg:w-[250px] xl:w-[430px] ">
          <hr className="tm-hr-primary" />
          <a className="effect-lily tm-post-link tm-pt-60">
            <div className="tm-post-link-inner">
              <img onClick={() => handleNaxt()} src={Img1} alt="" />
            </div>
            <div className="absolute mt-3 py-[40px] tm-new-badge">New</div>
            <h2 className="tm-pt-30 tm-color-primary tm-post-title">
              Simple and useful HTML layout
            </h2>
          </a>
          <p className="tm-pt-30 text-[19px] leading-10">
            There is a clickable image with beautiful hover effect and active
            title link for each post item. Left side is a sticky menu bar. Right
            side is a blog content that will scroll up and down.
          </p>
          <div className="leading-10">
            <div className="flex justify-between tm-pt-45">
              <span className="tm-color-primary text-[18px]">
                Travel . Events
              </span>
              <span className="tm-color-primary text-[18px]">
                June 24, 2020
              </span>
            </div>
            <hr />
            <div className="flex justify-between  text-[18px]">
              <span>36 comments</span>
              <span>by Admin Nat</span>
            </div>
          </div>
        </article>
        <article className="w-[270px] md:w-[310px] lg:w-[250px]  xl:w-[430px]">
          <hr className="tm-hr-primary" />
          <a class="effect-lily tm-post-link tm-pt-60">
            <div className=" tm-post-link-inner">
              <img onClick={() => handleNaxt()} src={Img2} alt="" />
            </div>
            <span className="absolute mt-3 p-2 tm-new-badge">New</span>
            <h2 className="tm-pt-30 tm-color-primary tm-post-title">
              Multi-purpose blog template
            </h2>
          </a>
          <p className="tm-pt-30  text-[19px] leading-10">
            <a
              className="text-blue-600"
              rel="nofollow"
              href="https://templatemo.com/tm-553-xtra-blog"
              target="_blank"
            >
              Xtra Blog
            </a>{" "}
            is a multi-purpose HTML CSS template from TemplateMo website. Blog
            list, single post, about, contact pages are included. Left sidebar
            fixed width and content area is a fluid full-width.
          </p>
          <div className="leading-10">
            <div className="flex justify-between text-[18px] tm-pt-45">
              <span className="tm-color-primary">
                Creative . Design . Business
              </span>
              <span className="tm-color-primary">June 16, 2020</span>
            </div>
            <hr />
            <div className="flex justify-between text-[18px]">
              <span>48 comments</span>
              <span>by Admin Sam</span>
            </div>
          </div>
        </article>
        <article className="w-[270px] md:w-[310px] mt-[70px] lg:w-[250px] xl:w-[430px] ">
          <hr className="tm-hr-primary" />
          <a class="effect-lily tm-post-link tm-pt-20">
            <div className="tm-post-link-inner">
              <img onClick={() => handleNaxt()} src={Img3} alt="" />
            </div>
            <h2 className="tm-pt-30 tm-color-primary tm-post-title">
              How can you apply Xtra Blog
            </h2>
          </a>
          <p className="tm-pt-30  text-[19px] leading-10">
            You are <u>allowed</u> to convert this template as any kind of CMS
            theme or template for your custom website builder. You can also use
            this for your clients. Thank you for choosing us.
          </p>
          <div className="leading-10">
            <div className="flex justify-between tm-pt-45 text-[18px]">
              <span className="tm-color-primary">Music . Audio</span>
              <span className="tm-color-primary">June 11, 2020</span>
            </div>
            <hr />
            <div className="flex justify-between text-[18px]">
              <span>24 comments</span>
              <span>by John Walker</span>
            </div>
          </div>
        </article>
        <article className="w-[270px] md:w-[310px] lg:w-[250px] mt-[70px] xl:w-[430px] ">
          <hr className="tm-hr-primary" />
          <a className="effect-lily tm-post-link tm-pt-20">
            <div className="tm-post-link-inner">
              <img onClick={() => handleNaxt()} src={Img4} alt="" />
            </div>
            <h2 className="tm-pt-30 tm-color-primary tm-post-title">
              A little restriction to apply
            </h2>
          </a>
          <p className="tm-pt-30  text-[18px] leading-9">
            You are <u>not allowed</u> to re-distribute this template as a
            downloadable ZIP file on any template collection website. This is
            strongly prohibited as we worked hard for this template. Please
            contact TemplateMo for more information.
            <br />
            For example,{" "}
            <a
              className="text-blue-600"
              href="https://www.free-css.com/free-css-templates/page272/xtra-blog"
              target="_blank"
            >
              Free-CSS
            </a>{" "}
            redistributed this Xtra Blog template on their website without
            asking any permission. It is an illegal act by Free-CSS website
            doing an unauthorized reposting.
          </p>
          <div className="leading-10">
            <div className="flex justify-between tm-pt-45 text-[18px]">
              <span className="tm-color-primary">Artworks . Design</span>
              <span className="tm-color-primary">June 4, 2020</span>
            </div>
            <hr />
            <div className="flex justify-between text-[18px]">
              <span>72 comments</span>
              <span>by Admin Sam</span>
            </div>
          </div>
        </article>
        <article className="w-[270px] md:w-[310px] mt-[70px] lg:w-[250px] xl:w-[430px] ">
          <hr className="tm-hr-primary" />
          <a class="effect-lily tm-post-link tm-pt-20">
            <div className="tm-post-link-inner">
              <img onClick={() => handleNaxt()} src={Img5} alt="" />
            </div>
            <h2 className="tm-pt-30 tm-color-primary tm-post-title">
              Color hexa values of Xtra Blog
            </h2>
          </a>
          <p className="tm-pt-30  text-[18px] leading-10 DAs">
            If you wish to kindly support us, please contact us or contribute a
            small PayPal amount to info [at] templatemo.com that is helpful for
            us.
            <br />
            Title #099 New #0CC <br />
            <span className="tm-color-primary text-[17px]">
              Text #999 Line #CCC Next #0CC Prev #F0F0F0
            </span>
          </p>
          <div className="leading-10">
            <div className="flex justify-between tm-pt-45 text-[18px]">
              <span className="tm-color-primary">
                Creative . Video . Audio{" "}
              </span>
              <span className="tm-color-primary">May 31,2020</span>
            </div>
            <hr className="mt-3" />
            <div className="flex justify-between text-[18px] mt-4">
              <span>84 comments</span>
              <span>by Admin Sam</span>
            </div>
          </div>
        </article>
        <article className="w-[270px] md:w-[310px] lg:w-[250px] mt-[70px] xl:w-[430px]">
          <hr className="tm-hr-primary" />
          <a class="effect-lily tm-post-link tm-pt-20">
            <div className="tm-post-link-inner">
              <img onClick={() => handleNaxt()} src={Img6} alt="" />
            </div>
            <h2 className="tm-pt-30 tm-color-primary tm-post-title">
              Donec convallis varius risus
            </h2>
          </a>
          <p className="tm-pt-30 text-[17.5px] leading-10">
            Quisque id ipsum vel sem maximus vulputate sed quis velit. Nunc vel
            turpis eget orci elementum cursus vitae in eros. Quisque vulputate
            nulla ut dolor consectetur luctus.
          </p>
          <div className="leading-10">
            <div class="flex justify-between tm-pt-45 text-[18px]">
              <span className="tm-color-primary">Visual . Artworks</span>
              <span className="tm-color-primary">June 16, 2020</span>
            </div>
            <hr />
            <div className="flex justify-between text-[18px]">
              <span>96 comments</span>
              <span>by Admin Sam</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Card;
