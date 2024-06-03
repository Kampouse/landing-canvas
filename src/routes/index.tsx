import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const Header = () => {
  return (
    <header class="h-[25rem] lg:h-screen  bg-hero-foor gap-10  lg:gap-10 flex flex-col    bg-cover   ">
      <div class="flex flex-col">
        <h1 class=" lg:pl-base pl-5 pt-14  text-6xl    line-clamp-0  leading-0 ">
          Hello <br /> am just Alice ;)
        </h1>
        <h1 class=" lg:pl-base pl-5   p-5   text-xl  line-clamp-0  leading-0 ">
          {" "}
          i wired the  cod3  block  <br /> for some  time while being the rat
        </h1>
      </div>
    </header>
  );
};
const Description = () => {
  return (
    <div class="bg-[#4b4b4b]    lg:h-fit h-fit">

      <h1 class=" lg:pt-24 text-5xl   pt-3   font-semibold text-primary  pl-5 lg:pl-base">
        Hello am the  Reliable Rat   {" "}
      </h1>
      <h1 class=" text-primary   pl-5 pt-0 lg:pl-base underline-offset-4 underline">
        who am i & what i rate for {" "}
      </h1>
      <div class="flex flex-col   lg:w-2/4   w-5/6  lg:h-80 ">
        <p class="ml-5  leading-6 text-white whitespace-normal lg:text-2xl sm:text-2xl md:text-2xl "></p>
        <p class="p-5  lg:pl-base lg:text-3xl lg:py-24    font-mono"> I am a professional rat.<br /> I eat all of the food. <br />  I am the  rat  that lasted
        </p>
      </div>
    </div >
  );
};
const Services = () => {
  const linksDescription = [

    {
      description: "Setup my base in haven",
      links:
        "https://kampouse-food.my.canva.site/alice-website-maybe/images/2d11253c7e91e82bf4597458ec86fa10.svg",
    },
    {
      description: "drink in the last saloon",
      links:
        "https://kampouse-food.my.canva.site/alice-website-maybe/images/32f25523f1da16a205e327fdd9ebc8e9.svg",
    },
    {
      description: " enjoy abstract art",
      links:
        "https://kampouse-food.my.canva.site/alice-website-maybe/images/39755d4349dc138eb5b9684d629dd0c8.svg",
    },
  ];
  return (
    <div class=" gap-8 lg:py-16 py-2 pb-5   h-fit bg-white">
      <h1 class=" text-left text-5xl text-primary lg:pl-20 pb-5 m-8">Services</h1>
      <div class="flex lg:flex-row md:flex-row flex-row self-center lg:pl-24 gap-5 ">
        {linksDescription.map((elem) => {
          return (
            <div class="m-2 flex flex-col  " key={elem.links}>
              <img
                class=" my-2 mx-2   h-40 w-40 self-center "
                src={elem.links}
                alt="rat activiy maybe?"
                height={100}
                width={100}
              />
              <p class="  text-2xl lg:py-8 font-semibold text-primary">
                {elem.description}
              </p>
            </div>
          );
        })
        }
      </div>
    </div>
  );
};
const Service = () => {
  return (
    <div class="flex flex-col lg:flex-row  h-fit   bg-primary ">
      <img class="lg:rounded-r-[4em] w-screen lg:w-1/3 h-[35em] bg-cover lg:pr-5" src="https://images.nightcafe.studio/jobs/2Tym3Pji55bJwMxETWS5/2Tym3Pji55bJwMxETWS5--1--ciok5.jpg?tr=w-1600,c-at_max
        "
        height={500} width={250} />
      <div class="flex flex-col  px-20   lg:pl-44 lg:pt-20 pt-10 text-black ">

        <h1 class="text-4xl font-serif">what my latest client proclamed</h1>
        <p class="my-5 text-lg font-medium lg:w-72 w-fit">
          "Working with Aaliyah is a true blessing. She came in and turned our company around with an awesome online rebrand. She provided us with a comprehensive digital marketing strategy that shot our search engine rankings up and boosted our social media presence."
        </p>

        <h1 class="text-4xl"> - Yuqin Feng </h1>
        <h1 class="text-base mb-8">  Founder and CEO, the rat foundation </h1>

      </div >
    </div>
  );
};



const Footer = () => {
  return (
    <div class="bg-primary lg:h-[25rem] h-fit   gap-12 pb-20  flex flex-col p-2     bg-cover  bg-center  ">
      <h1 class="text-[2rem]  lg:text-8xl text-6xl  p-5 pb-6 pt-1  text-black lg:self-start self-center ">
        {" "}
        Cafe on Qwik
      </h1>
      <div class="flex flex-col self-center  ">
        <div class="flex lg:flex-row flex-col lg:gap-10 gap-5  text-center text-3xl  ">
          <div class="text-black gap-2 font-thin  ">
            <h1 class="font-bold">get in touch!</h1>
            <p>123-456-7890</p>
            <p> instagram</p>
            <p> facebook</p>
            <p> x</p>
          </div>
          <div class="text-black gap-3 font-thin   ">
            <h1 class="font-bold">Email</h1>
            <p class=""> contact@gmail.com</p>
          </div>
          <div class="text-black gap-2 font-thin ">
            <h1 class="font-bold">Hours</h1>
            <p>Mon-Fri: 7am-9pm</p>
            <p>Sat-Sun: 8am-10pm</p>
          </div>
          <div class="text-black gap-2 font-thin ">
            <h1 class="font-bold">Location</h1>
            <p>123 Main St.</p>
            <p>Springfield, IL 62701</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default component$(() => {
  return (
    <>
      <Header />
      <Description />
      <Services />
      <Service />
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
