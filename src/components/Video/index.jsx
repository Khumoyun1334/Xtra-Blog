import React from "react";

function Video() {
  return (
    <div>
      <div class="row tm-row  border xl:mx-[70px] ">
        <div class="col-12 w-full  border">
          <hr class="tm-hr-primary tm-mb-55 lg:w-[65%] xl:w-[100%]" />
          <video controls class="tm-mb-40 xl:w-[100%] lg:w-[65%]">
            <source src="video/wheat-field.mp4  " type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Video;
