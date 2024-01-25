import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import React from "react";
import Futter from "../Futtter";

function ContactC() {
  return (
    <div>
      <div className="container-fluid  w-full  ">
        <main className=" w-full xl:px-[40px]">
          <div className="row tm-row ">
            <div className="col-12 ">
              <form
                method="GET"
                className="form-inline tm-mb-80 tm-search-form  px-[20px] w-[280px] md:px-[30px] lg:w-[500px] xl:w-[870px] lg:ml-[100px]"
              >
                <input
                  className="form-control tm-search-input border px-[15px]"
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
          <div className="row tm-row tm-mb-45 w-[260px] md:w-[690px] lg:w-[500px]   lg:ml-[80px] xl:w-[860px] ml-1">
            <div className="col-12">
              <hr className="tm-hr-primary tm-mb-55" />
              <div className="gmap_canvas">
                <iframe
                  width="100%"
                  height="477"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row tm-row tm-mb-120">
            <div className="col-12">
              <h2 className="tm-color-primary text-[17px] tm-post-title tm-mb-60 ml-3 lg:ml-[80px]">
                Contact Us
              </h2>
            </div>
            <div className="block md:flex gap-[30px] lg:block xl:flex">
              <div className=" xl:w-[60%] md:w-[60%] lg:w-[100%]  lg:px-[75px]">
                <form method="POST" action="" class="mb-5  tm-contact-form">
                  <div className=" row mb-4 gap-[28px] block md:flex  text-right  md:text-right w-[270px] md:w-0 lg:w-0 xl:w-0">
                    <label
                      for="name"
                      className="col-sm-3 col-form-label  text-right tm-color-primary pl-9 pt-2 w-[140px] "
                    >
                      Name
                    </label>
                    <div className="col-sm-9">
                      <input
                        className="form-control border xl:w-[400px] md:w-[300px] lg:w-[350px] w-[270px]"
                        name="name"
                        id="name"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className=" row mb-4 gap-[30px] block md:flex mt-7 text-right md:text-left w-[270px] md:w-0 lg:w-0 xl:w-0">
                    <label
                      for="name"
                      className="col-sm-3 col-form-label text-right tm-color-primary pt-2 pl-9 md:w-[100px] w-[300px] "
                    >
                      Email
                    </label>
                    <div class="col-sm-9">
                      <input
                        className="form-control mr-0 ml-auto border xl:w-[400px] md:w-[300px] lg:w-[350px] w-[270px]"
                        name="name"
                        id="name"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className=" row mb-4 gap-[30px] block md:flex mt-7  text-right md:text-left w-[270px] md:w-0 lg:w-0 xl:w-0">
                    <label
                      for="name"
                      class="col-sm-3 col-form-label text-right text-[17px] pl-4 tm-color-primary md:w-[100px] pt-2 w-[300px] "
                    >
                      Subject
                    </label>
                    <div class="col-sm-9">
                      <input
                        className="form-control mr-0 ml-auto border xl:w-[400px] md:w-[300px] lg:w-[350px] w-[270px]"
                        name="name"
                        id="name"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className=" row mb-4 gap-[30px] block md:flex mt-7 text-right md:text-left w-[270px] md:w-0 lg:w-0 xl:w-0">
                    <label
                      for="message"
                      class="col-sm-3 col-form-label text-right tm-color-primary pt-2 w-[100px]"
                    >
                      Message
                    </label>
                    <div className="col-sm-9 ">
                      <textarea
                        className="lg:w-[350px] xl:w-[400px]  md:w-[300px] w-[270px]  border border-[#00CCCC]"
                        name="postContent"
                        rows={6}
                        s
                      />
                    </div>
                  </div>
                  <div className="form-group row text-right xl:ml-[350px] lg:ml-[330px] md:ml-[280px] ml-[140px]">
                    <div className="col-12 ">
                      <button className="tm-btn tm-btn-primary tm-btn-small mt-8">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className=" xl:w-[40%] lg:w-[100%] mt-[50px] w-[300px] md:mt-0 md:w-[30%] text-[17px]  xl:text-[17px] xl:px-0 lg:px-[70px]">
                <p className="mb-4 tm-color-gray leading-8">
                  120 Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <span className="d-block leading-10">
                  Tel:
                  <a href="tel:060-070-0980" class="tm-color-gray">
                    060-070-0980
                  </a>
                </span>
                <br />
                <span className=" mt-3">
                  Email:
                  <a href="mailto:info@company.com" class="tm-color-gray">
                    info@company.com
                  </a>
                </span>
                <p className="mb-5 tm-line-height-short mt-6 leading-10 ">
                  Maecenas eu mi eu dui cursus consequat non eu metus. Morbi ac
                  turpis eleifend, commodo purus eget, commodo mauris.
                </p>
                <div className="tm-social-links grid grid-cols-4 md:grid-cols-3 md:w-[200px] lg:gap-10 lg:grid lg:grid-cols-4 md:grid w-[300px]  mt-[40px]">
                  <div className="mb-2 border w-[50px] h-[50px] flex justify-center items-center bg-[#00CCCC] text-white">
                    <BsFacebook />
                  </div>
                  <div className="mb-2 border w-[50px] h-[50px] flex justify-center items-center bg-[#00CCCC] text-white">
                    <AiOutlineTwitter />
                  </div>
                  <div className="mb-2 border w-[50px] h-[50px] flex justify-center items-center bg-[#00CCCC] text-white">
                    <AiFillYoutube />
                  </div>
                  <div className="mb-2 border w-[50px] h-[50px] flex justify-center items-center bg-[#00CCCC] text-white">
                    <AiOutlineInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Futter />
    </div>
  );
}

export default ContactC;
