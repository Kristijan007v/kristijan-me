import Image from "next/image";
import { React, useState } from "react";
import toast from "react-hot-toast";
import ButtonDefault from "../../Buttons/ButtonDefault";
import LinkDefault from "../../LinkDefault/LinkDefault";
import SectionHeading from "../../SectionHeading/SectionHeading";
import VisibilitySensor from "react-visibility-sensor";

export default function About() {
  const toastStyle = [
    {
      position: "bottom-center",
      style: {
        borderRadius: "10px",
        background: "rgb(21, 28, 38, 60%)",
        backdropFilter: "blur(10px)",
        color: "#fff",
        border: "1px solid rgb(29, 78, 216)",
      },
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  const [imageVisible, setImageVisible] = useState(false);

  const handleChange = (imageVisible) => {
    setImageVisible(imageVisible);
  };

  const downloadFile = () => {
    toast("🤞 Please wait...", toastStyle[0]);
    setTimeout(() => {
      toast("😁 Testing your patience...", toastStyle[0]);
      setTimeout(() => {
        toast("❤️ Okay here you go, sorry!", toastStyle[0]);
        window.location.href = "/documents/resume.pdf";
        setIsVisible(true);
      }, 4200);
    }, 4000);
  };

  return (
    <div className="border__default container__xl flex flex-col space-y-6 pb-20">
      <SectionHeading
        title="About"
        number={"01"}
        desciption={"Let me introduce myself."}
        align={"left"}
      />
      <div className="flex flex-col space-y-8 md:space-x-6 lg:flex-row lg:items-start">
        <div className="flex flex-col space-y-6">
          <VisibilitySensor onChange={handleChange}>
            <div className="relative h-72 w-full">
              <Image
                priority
                className={`mask mask-squircle ${
                  imageVisible ? "grayscale-0" : "grayscale"
                } hover:grayscale-0`}
                src={"/images/my_photo.webp"}
                layout="fill"
                objectFit="cover"
                alt={"My Photo"}
              />
            </div>
          </VisibilitySensor>
          <div className="mockup-code bg-secondaryGray">
            <pre data-prefix="$">
              <code>print(date-of-birth)</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>07.03.2000.</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Done!</code>
            </pre>
            <pre data-prefix="$">
              <code>print(education)</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>Highscool: Gimnazija Sesvete (2015-2019)</code>
            </pre>
            <pre data-prefix=">" className="text-success">
              <code>Done!</code>
            </pre>
          </div>
          <ButtonDefault
            text={"Download My Resume"}
            onclick={downloadFile}
            ariaLabel={"Download my resume"}
          />
          {isVisible && (
            <LinkDefault
              text={"Not working? Click here to download."}
              href={"/documents/resume.pdf"}
              align={"center"}
            />
          )}
        </div>
        <div className="flex flex-col space-y-4 rounded-md">
          <p className="border-b-2 border-blue-600 pb-2 text-2xl text-blue-600 lg:text-3xl">
            My story
          </p>
          <p className="p__default">
            I am a software developer with a passion for creating beautiful
            applications. I have a strong background in web development and have
            been working in the field for the last 5 years. I am a self-taught
            developer and I am constantly learning new things.
          </p>
        </div>
      </div>
    </div>
  );
}
