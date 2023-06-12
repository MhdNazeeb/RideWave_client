import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const ProfilePage = () => {
  return (
    <section className="bg-gray-800  ">
      <div className="container py-5">
        <div className="flex"></div>

        <div className="flex ">
          <div className="j ">
          <select className="">
                  <option className="w-1" >Options</option>
                  <option className="w-1">car</option>
                  <option  className="w-1"></option>
                </select>
          </div>
       
          <div className="w-1/3 mr-4">
            <div className="mb-1">
              <div className="flex items-center justify-center flex-col">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle border-2"
                  style={{ width: "150px" }}
                />
                <p className="text-white mb-1">Full Stack Developer</p>
                <p className="text-white mb-4">Bay Area, San Francisco, CA</p>
               
              </div>
            </div>
            <div className="mb-4 flex-wrap justify-center">
              {/* <button
                className=" text-white p-2"
                onClick={() => setOption((state) => !state)}
              >
                Options
              </button> */}

              
               
             
            </div>
          </div>

          <div className="w-1/2 border-3 shadow-sm">
            <div className="mb-4">
              <div className="flex">
                <div className="w-1/3">
                  <p className="mb-2 ml-2 text-white">Full Name</p>
                </div>
                <div className="w-2/3">
                  <p className="text-white ml-4">Johnatan Smith</p>
                </div>
              </div>
              <hr className="my-2" />
              <div className="flex">
                <div className="w-1/3">
                  <p className="mb-2 ml-2 text-white">Email</p>
                </div>
                <div className="w-2/3">
                  <p className="text-white ml-4">Bay Area, San Francisco, CA</p>
                </div>
              </div>
              <hr className="my-2" />
              <div className="flex">
                <div className="w-1/3">
                  <p className="mb-2 ml-2 text-white">Phone</p>
                </div>
                <div className="w-2/3">
                  <p className="text-white ml-4">097 234-5678</p>
                </div>
              </div>
              <hr className="my-2" />
              <div className="flex">
                <div className="w-1/3">
                  <p className="mb-2 ml-2 text-white">Mobile</p>
                </div>
                <div className="w-2/3">
                  <p className="text-white ml-4">098 765-4321</p>
                </div>
              </div>
              <hr className="my-2" />
              <div className="flex">
                <div className="w-1/3">
                  <p className="mb-2 ml-2 text-white">Address</p>
                </div>
                <div className="w-2/3">
                  <p className="text-white ml-4">Bay Area, San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="flex"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
