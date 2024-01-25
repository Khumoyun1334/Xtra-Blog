import React from "react";

import Ig from "../../img/comment-1.jpg";
import Ig2 from "../../img/comment-2.jpg";
import QAa from "../../img/img-02.jpg";

function SingC() {
  return (
    <div>
      <div className="row tm-row xl:flex lg:block  xl:gap-[100px] block border xl:w-[1100px] xl:ml-[68px]">
        <div className="col-lg-8 tm-post-col">
          <div className="tm-post-full">
            <div className="mb-4">
              <h2 className="pt-2 tm-color-primary tm-post-title">
                Single Post of Xtra Blog HTML Template
              </h2>
              <p className="tm-mb-40">June 16, 2020 posted by Admin Nat</p>
              <p>
                This is a description of the video post. You can also have an
                image instead of the video. You can free download
                <a
                  rel="nofollow"
                  href="https://templatemo.com/tm-553-xtra-blog"
                  target="_blank"
                >
                  Xtra Blog Template
                </a>
                from TemplateMo website. Phasellus maximus quis est sit amet
                maximus. Vestibulum vel rutrum lorem, ac sodales augue. Aliquam
                erat volutpat. Duis lectus orci, blandit in arcu est, elementum
                tincidunt lectus. Praesent vel justo tempor, varius lacus a,
                pharetra lacus.{" "}
              </p>
              <p>
                Duis pretium efficitur nunc. Mauris vehicula nibh nisi.
                Curabitur gravida neque dignissim, aliquet nulla sed,
                condimentum nulla. Pellentesque id venenatis quam, id cursus
                velit. Fusce semper tortor ac metus iaculis varius. Praesent
                aliquam ex vel lectus ornare tristique. Nunc et eros quis enim
                feugiat tincidunt et vitae dui.
              </p>
              <span className="d-block text-right tm-color-primary">
                Creative . Design . Business
              </span>
            </div>

            <div>
              <h2 className="tm-color-primary tm-post-title">Comments</h2>
              <hr className="tm-hr-primary tm-mb-45" />
              <div className="tm-comment tm-mb-45">
                <figure className="tm-comment-figure w-[300px] h-[300px]">
                  <img
                    className="w-[300px] h-[100px] rounded-full"
                    src={Ig}
                    alt=""
                  />
                  <figcaption className="tm-color-primary text-center">
                    Mark Sonny
                  </figcaption>
                </figure>
                <div>
                  <p>
                    Praesent aliquam ex vel lectus ornare tritique. Nunc et eros
                    quis enim feugiat tincidunt et vitae dui. Nullam consectetur
                    justo ac ex laoreet rhoncus. Nunc id leo pretium, faucibus
                    sapien vel, euismod turpis.
                  </p>
                  <div className="flex justify-between mt-6">
                    <a href="#" className="tm-color-primary">
                      REPLY
                    </a>
                    <span class="tm-color-primary">June 14, 2020</span>
                  </div>
                </div>
              </div>
              <div className="tm-comment-reply tm-mb-45 mt-[-150px]">
                <hr />
                <div className="tm-comment">
                  <figure className="tm-comment-figure w-[300px] h-[300px]">
                    <img
                      className="w-[300px] h-[100px] rounded-full"
                      src={Ig2}
                      alt=""
                    />
                    <figcaption className="tm-color-primary text-center">
                      Mark Sonny
                    </figcaption>
                  </figure>
                  <p>
                    Nunc et eros quis enim feugiat tincidunt et vitae dui.
                    Nullam consectetur justo ac ex laoreet rhoncus. Nunc id leo
                    pretium, faucibus sapien vel, euismod turpis.
                  </p>
                </div>
                <span className="block text-right tm-color-primary mt-[-130px]">
                  June 21, 2020
                </span>
              </div>
              <form action="" className="mb-5 tm-comment-form">
                <h2 classanma="tm-color-primary tm-post-title mb-4">
                  Your comment
                </h2>
                <div className="mb-4">
                  <input
                    className="form-control border w-full"
                    name="name"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="form-control border w-full"
                    name="email"
                    type="text"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className="  border border-[#00CCCC]"
                    name="postContent"
                    rows={6}
                    cols={40}
                  />
                </div>
                <div className="text-right">
                  <button className="tm-btn tm-btn-primary tm-btn-small">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <aside className="col-lg-4 tm-aside-col">
          <div className="tm-post-sidebar">
            <hr className="mb-3 tm-hr-primary" />
            <h2 className="mb-4 tm-post-title tm-color-primary">Categories</h2>
            <ul className="tm-mb-75 pl-5 tm-category-list">
              <li>
                <a href="#" className="tm-color-primary">
                  Visual Designs
                </a>
              </li>
              <li>
                <a href="#" className="tm-color-primary">
                  Travel Events
                </a>
              </li>
              <li>
                <a href="#" className="tm-color-primary">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="tm-color-primary">
                  Video and Audio
                </a>
              </li>
              <li>
                <a href="#" className="tm-color-primary">
                  Etiam auctor ac arcu
                </a>
              </li>
              <li>
                <a href="#" className="tm-color-primary">
                  Sed im justo diam
                </a>
              </li>
            </ul>
            <hr className="mb-3 tm-hr-primary" />
            <h2 className="tm-mb-40 tm-post-title tm-color-primary">
              Related Posts
            </h2>
            <a href="#" className="d-block tm-mb-40">
              <figure>
                <img src={QAa} alt="" />
                <figcaption className="tm-color-primary  mt-3 ">
                  Duis mollis diam nec ex viverra scelerisque a sit
                </figcaption>
              </figure>
            </a>
            <a href="#" className="d-block tm-mb-40">
              <figure className="mt-[30px]">
                <img src={QAa} alt="" />

                <figcaption className="tm-color-primary  mt-3">
                  Integer quis lectus eget justo ullamcorper ullamcorper
                </figcaption>
              </figure>
            </a>
            <a href="#" className="d-block tm-mb-40">
              <figure className="mt-[30px]">
                <img src={QAa} alt="" />
                <figcaption className="tm-color-primary mt-3">
                  Nam lobortis nunc sed faucibus commodo
                </figcaption>
              </figure>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default SingC;
