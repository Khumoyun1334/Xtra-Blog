import React from "react";
import { BiSearch } from "react-icons/bi";
import Video from "../Video";
import SingC from "../SingC";
import Ya from "../../img/comment-1.jpg";
import Ya2 from "../../img/comment-2.jpg";
import Ya3 from "../../img/img-03.jpg";
import Ya4 from "../../img/img-01.jpg";
import Ya5 from "../../img/img-05.jpg";
import Ya6 from "../../img/img-02.jpg";
import Y36 from "../../img/img-04.jpg";
import Futter from "../Futtter";

function Asosiy2() {
  return (
    <div>
      <div className=" h-[2030px] ">
        <main className="">
          <div className="">
            <div className="col-12 w-[283px] md:w-[680px] lg:w-[480px] lg:ml-[80px] xl:w-[1040px] xl:ml-0">
              <form
                method="GET"
                className="form-inline tm-mb-80 tm-search-form"
              >
                <input
                  className="form-control tm-search-input border px-[20px]"
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
          <div className="row tm-row  xl:mx-[65px] lg:mx-[90px] md:mx-[35px]">
            <div className="col-12">
              <hr className="tm-hr-primary tm-mb-55 lg:w-[470px] xl:w-[980px] md:w-[650px] w-[270px]" />

              <video
                controls
                class="tm-mb-40 xl:w-[1000px] xl:h-[535px] lg:w-[470px] md:w-[650px] w-[270px]"
              >
                <source src="video/wheat-field.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className=" xl:flex xl:justify-between md:mx-[65px] xl:mx-[40px] lg:mx-[30px]">
            <div className=" w-[50%] ml-0 md:ml-[-30px] lg:ml-0 xl:ml-[40px]">
              <div className="tm-post-full">
                <div className="mb-4 w-[280px] md:w-[650px]  lg:w-[495px]  lg:ml-[45px] xl:w-[620px] xl:ml-0">
                  <h2 className="pt-2 tm-color-primary tm-post-title">
                    Single Post of Xtra Blog HTML Template
                  </h2>
                  <p className="tm-mb-40 mt-5 text-[19px]">
                    June 16, 2020 posted by Admin Nat
                  </p>
                  <p className="text-[19px] leading-9">
                    This is a description of the video post. You can also have
                    an image instead of the video. You can free download
                    <a
                      rel="nofollow"
                      href="https://templatemo.com/tm-553-xtra-blog"
                      target="_blank"
                      className="text-blue-600 mx-3"
                    >
                      Xtra Blog Template
                    </a>
                    from TemplateMo website. Phasellus maximus quis est sit amet
                    maximus. Vestibulum lorem, ac sodales augue. Aliquam erat
                    volutpat. Duis lectus orci, blandit in arcu est, elementum
                    tincidunt lectus. Praesent vel justo tempor, variusa a,
                    pharetra lacus.{" "}
                  </p>
                  <p className="text-[18px]  md:w-[600px] w-[280px] lg:w-[530px]  mt-5 leading-9">
                    Duis pretium efficitur nunc. Mauris vehicula nibh nisi.
                    Curabitur gravida neque dignissim, aliquet nulla sed,
                    condimentum nulla. Pellentesque id venenatis quam, id cursus
                    velit. Fusce semper tortor ac metus iaculis varius. Praesent
                    aliquam ex vel lectus ornare tristique. Nunc et eros quis
                    enim feugiat tincidunt et vitae dui.
                  </p>
                  <span className="block text-right text-[19px] text-[#099] mt-5">
                    Creative . Design . Business
                  </span>
                </div>

                <div className="lg:ml-[40px] xl:ml-0">
                  <h2 className="tm-color-primary tm-post-title">Comments</h2>
                  <hr className="tm-hr-primary tm-mb-45  w-[250px] md:w-[650px] xl:w-[630px] lg:w-[500px]" />
                  <div className="tm-comment tm-mb-45  w-[250px] md:w-[650px] lg:w-[500px] xl:w-[600px]">
                    <figure className="tm-comment-figure w-[1000px]  md:w-[300px] xl:w-[460px] h-[100px]">
                      <img
                        className=" md:h-[100px] h-[90px] rounded-full border-[3px] border-white shadow-lg"
                        src={Ya}
                        alt=""
                      />
                      <figcaption className="tm-color-primary  w-[120px] mt-3 text-[19px]">
                        Mark Sonny
                      </figcaption>
                    </figure>
                    <div>
                      <p className="text-[19px] leading-9">
                        Praesent aliquam ex vel lectus ornare tritique. Nunc et
                        eros quis enim feugiat tincidunt et vitae dui. Nullam
                        consectetur justo ac ex laoreet rhoncus. Nunc id leo
                        pretium, faucibus sapien
                      </p>
                      <div className="md:flex text-right leading-10 text-[19px] justify-between pt-7">
                        <a href="#" className="tm-color-primary">
                          REPLY
                        </a>
                        <span className="tm-color-primary ">June 14, 2020</span>
                      </div>
                    </div>
                  </div>
                  <div className="tm-comment-reply tm-mb-45  w-[700px] lg:w-[500px]">
                    <div className="w-[200px] md:w-[640px] lg:w-[500px]">
                      <hr className="mt-[0px] " />
                    </div>
                    <div className="tm-comment  w-[230px] ml-[-30px] md:ml-0 mt-[20px] lg:w-[500px]  lg:ml-0  xl:ml-0 md:w-[620px] ">
                      <figure className="tm-comment-figure w-[390px] h-[100px] ">
                        <img
                          className="rounded-full  border-[3px] border-white shadow-lg"
                          src={Ya2}
                          alt=""
                        />
                        <figcaption className="tm-color-primary text-center mt-3 mr-[40px] lg:w-[100px] pl-2 text-[19px]">
                          Jewel Soft
                        </figcaption>
                      </figure>
                      <p className="text-[19px] leading-9 md:ml-[-50px]   ">
                        Nunc et eros quis enim feugiat tincidunt et vitae dui.
                        Nullam consectetur justo ac ex laoreet rhoncus. Nunc id
                        leo pretium,
                      </p>
                    </div>
                    <span
                      className="block text-[#099] text-right w-[230px] 
                     md:ml-[410px] text-[19px] mt-[50px] tm-color-primar lg:ml-[250px]"
                    >
                      June 21, 2020
                    </span>
                  </div>
                  <form
                    action=""
                    className="mb-5 tm-comment-form md:mx-[0px] lg:ml-[40px] xl:mx-[20px] "
                  >
                    <h2 className="tm-color-primary tm-post-title mb-4">
                      Your comment
                    </h2>
                    <div className="mb-4">
                      <input
                        className="form-control border lg:w-[350px] xl:w-[350px]  md:w-[330px] w-[270px]"
                        name="name"
                        type="text"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        className="form-control border lg:w-[350px] mt-2 xl:w-[350px]  md:w-[330px] w-[270px]"
                        name="email"
                        type="text"
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        className="lg:w-[350px] xl:w-[350px] mt-2  md:w-[330px] w-[270px]  border border-[#00CCCC]"
                        name="postContent"
                        rows={6}
                        s
                      />
                    </div>
                    <div className="text-right">
                      <button className="tm-btn tm-btn-primary tm-btn-small mr-[90px] md:mr-[30px] lg:mr-[10px] xl:mr-[10px]">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <aside className="md:w-[500px]  lg:w-[450px] xl:mr-[70px] md:ml-[-30px] mt-8 lg:ml-[60px] xl:ml-[-50px]">
              <div className="tm-post-sidebar ">
                <hr className="tm-hr-primary tm-mb-45  w-[250px] md:w-[650px] xl:w-[300px] lg:w-[500px]" />

                <h2 className="mb-4 tm-post-title tm-color-primary">
                  Categories
                </h2>
                <ul className="tm-mb-75 pl-[60px] tm-category-list">
                  <li>
                    <a href="#" className="tm-color-primary text-[17px]">
                      Visual Designs
                    </a>
                  </li>
                  <li className="mt-3">
                    <a href="#" className="tm-color-primary text-[17px]">
                      Travel Events
                    </a>
                  </li>
                  <li className="mt-3">
                    <a href="#" className="tm-color-primary text-[17px]">
                      Web Development
                    </a>
                  </li>
                  <li className="mt-3">
                    <a href="#" className="tm-color-primary text-[17px]">
                      Video and Audio
                    </a>
                  </li>
                  <li className="mt-3">
                    <a href="#" className="tm-color-primary text-[17px]">
                      Etiam auctor ac arcu
                    </a>
                  </li>
                  <li className="mt-3">
                    <a href="#" className="tm-color-primary text-[17px]">
                      Sed im justo diam
                    </a>
                  </li>
                </ul>
                <hr className="tm-hr-primary tm-mb-45  w-[250px] md:w-[650px] xl:w-[300px] lg:w-[500px]" />

                <h2 className="tm-mb-40 tm-post-title tm-color-primary">
                  Related Posts
                </h2>
                <a
                  href="#"
                  className="block w-[270px] md:w-[460px] xl:w-[280px] tm-mb-40"
                >
                  <figure>
                    <img src={Ya6} alt="" />
                    <figcaption className="tm-color-primary mt-4 text-[17px]">
                      Duis mollis diam nec ex viverra scelerisque a sit
                    </figcaption>
                  </figure>
                </a>
                <a
                  href="#"
                  className="block w-[270px] md:w-[460px] xl:w-[280px] tm-mb-40"
                >
                  <figure>
                    <img src={Ya5} alt="" />
                    <figcaption className="tm-color-primary mt-4 text-[17px]">
                      Duis mollis diam nec ex viverra scelerisque a sit
                    </figcaption>
                  </figure>
                </a>
                <a
                  href="#"
                  className="block w-[270px] md:w-[460px] xl:w-[280px] tm-mb-40"
                >
                  <figure>
                    <img src={Y36} alt="" />
                    <figcaption className="tm-color-primary mt-4 text-[17px]">
                      Duis mollis diam nec ex viverra scelerisque a sit
                    </figcaption>
                  </figure>
                </a>
              </div>
            </aside>
          </div>
        </main>
        <Futter />
      </div>
    </div>
  );
}

export default Asosiy2;
