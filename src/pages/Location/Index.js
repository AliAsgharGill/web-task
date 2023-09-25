import React, { useState } from "react";
import SideBar from "../SideBar/Index";
import Button from "../../components/Buttons/Index";
import Input from "../../components/Inputs/Input";
import Label from "../../components/Label/Index";
import { Link } from "react-router-dom";
const Index = () => {
  const [visibility, setVisibility] = useState("hidden");
  return (
    <>
      <SideBar />
      <div className="w-full flex min-h-screen ">
        <div className="mt-[49px] ml-[300px]">
          <div
            onClick={() => {
              setVisibility("block");
            }}
            className="text-gray-600 text-lg   font-bold font-['Inter'] leading-[18px] hover:cursor-pointer "
          >
            + Check In
          </div>
          {/* Current Locaiton */}
          <div className="text-gray-600 text-lg mt-6 font-bold font-['Inter'] leading-[18px]">
            Current location
          </div>
          <div className="w-[342px] h-[45px] mt-[16px] justify-start items-start gap-4 inline-flex">
            <div className="w-6 h-[23px] text-center text-black text-lg font-medium font-['Inter'] leading-normal">
              📍{" "}
            </div>
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <div className="w-[302px] text-gray-600 text-lg font-medium font-['Inter'] leading-normal">
                Pustegränd, Stockholm, SE
              </div>
              <div className="text-gray-400 text-sm font-semibold font-['Inter']">
                59.3293° N, 18.0686° E
              </div>
            </div>
          </div>
          {/* Previous Location */}
          <div className="text-gray-600 text-lg font-bold font-['Inter'] leading-[18px] mt-[32px] ">Previous location</div>
          <div className="w-[342px] h-[289px] flex-col justify-start items-start gap-4 inline-flex">
            <div className="self-stretch h-[45px] flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-6 h-[23px] text-center text-black text-lg font-medium font-['Inter'] leading-normal">
                  📍{" "}
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-[302px] text-gray-600 text-lg font-medium font-['Inter'] leading-normal">
                    Halsingegätan, Stockholm, SE
                  </div>
                  <div className="text-gray-400 text-sm font-semibold font-['Inter']">
                    59.3293° N, 18.0686° E
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[45px] flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-6 h-[23px] text-center text-black text-lg font-medium font-['Inter'] leading-normal">
                  📍{" "}
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-[302px] text-gray-600 text-lg font-medium font-['Inter'] leading-normal">
                    Pustegränd, Stockholm, SE
                  </div>
                  <div className="text-gray-400 text-sm font-semibold font-['Inter']">
                    59.3293° N, 18.0686° E
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[45px] flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-6 h-[23px] text-center text-black text-lg font-medium font-['Inter'] leading-normal">
                  📍{" "}
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-[302px] text-gray-600 text-lg font-medium font-['Inter'] leading-normal">
                    Långa Gatan, Stockholm, SE
                  </div>
                  <div className="text-gray-400 text-sm font-semibold font-['Inter']">
                    59.3293° N, 18.0686° E
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[45px] flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-6 h-[23px] text-center text-black text-lg font-medium font-['Inter'] leading-normal">
                  📍{" "}
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-[302px] text-gray-600 text-lg font-medium font-['Inter'] leading-normal">
                    Djurgården, Stockholm, SE
                  </div>
                  <div className="text-gray-400 text-sm font-semibold font-['Inter']">
                    59.3293° N, 18.0686° E
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[45px] flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-start gap-4 inline-flex">
                <div className="w-6 h-[23px] text-center text-black text-lg font-medium font-['Inter'] leading-normal">
                  📍{" "}
                </div>
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-[302px] text-gray-600 text-lg font-medium font-['Inter'] leading-normal">
                    Svartensgatan, Stockholm, SE
                  </div>
                  <div className="text-gray-400 text-sm font-semibold font-['Inter']">
                    59.3293° N, 18.0686° E
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Form */}
        <div
          className={`w-full flex justify-center items-center fixed top-[100px] ${visibility}  `}
        >
          <div className="w-[765px] h-[320px] shadow-2xl sprea mb-40 z-10 bg-white ">
            <form className="p-5 flex flex-col justify-center">
              <div className="text-black text-xl mt-[34px] ml-[45px] font-semibold font-['Inter']">
                New Location
              </div>
              <div className="flex space-x-3 mt-[40px] ml-[96px]">
                <Label
                  className="text-stone-300  text-base  font-['Inter']"
                  title="Add Location"
                />
              </div>
              <Input
                type="text"
                id="summary"
                classesNames="border-b hover:outline-none  outline-none ml-[96px] w-2/3 "
              />
              {/* Save Button */}
              <div className="flex space-x-3 mt-[40px] m-auto  justify-center flex-col ">
                <Button
                  label="Save"
                  name="Button"
                  id="saveButton"
                  onClick={() => {
                    setVisibility("none");
                  }}
                  className="bg-black text-white border rounded-full h-[50px] w-[343px] outline-none cursor-pointer "
                />
                <Button
                  label="Cancel"
                  name="Button"
                  id="cancelButton"
                  onClick={() => {
                    setVisibility("none");
                  }}
                  className=" text-black  rounded-full ml-[100px] h-[50px] w-[343px] outline-none cursor-pointer "
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
