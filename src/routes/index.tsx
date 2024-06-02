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
          i wirte cod3 <br /> some time when i think about rat
        </h1>
      </div>
    </header>
  );
};
const Description = () => {
  return (
    <div class="bg-[#4b4b4b]    lg:h-3/4 h-fit">
      <h1 class=" text-primary pl-5 p-4 lg:pl-base underline-offset-4 underline">
        who am i & what i ate{" "}
      </h1>
      <h1 class="text-5xl  font-semibold text-primary pt-5 pl-5 lg:pl-base">
        Hello am the last Rat to stand{" "}
      </h1>
      <div class="flex flex-col   lg:w-2/4   w-5/6">
        <p class="ml-5  leading-6 text-white whitespace-normal lg:text-2xl sm:text-2xl md:text-2xl "></p>
        <p class="p-5 lg:p-base lg:text-3xl lg:pt-5 mb-3">
          {" "}
          I'm a professional digital marketer and social media manager based in
          California. I have worked with several brands in fine-tuning their
          SEO, boosting their social media presence, and developing their
          overall content strategy.{" "}
        </p>
      </div>
    </div>
  );
};
const BreakFasts = () => {
  const elems = [
    "slow-cooked oats",
    "Vine-ripened grapes & berries",
    "Naturally sweetened dried fruit",
    "Homemade yogurt",
    "Freshly harvested honey",
  ];

  const linksDescription = [
    {
      description: "Breakfast in a jar",
      links:
        "https://kampouse-food.my.canva.site/images/563a8d1623c30beadac2c6e17342e244.jpg",
    },
    {
      description: "healthy meals",
      links:
        "https://kampouse-food.my.canva.site/images/2bc7569202dcddebaffef1d263421718.jpg",
    },
    {
      description: "Guilt-free Desserts",
      links:
        "https://kampouse-food.my.canva.site/images/38fa3dab7e6fc590b34655f62d0da351.jpg",
    },
  ];
  return (
    <div class="gap-6  py-8 px-5  h-fit bg-white">
      <div class="pt-2">
        <div class="flex lg:flex-row flex-col">
          <div class="lg:mb-0 mb-5">
            <h1 class="text-5xl text-black  mb-5">Breakfast To-Go </h1>
            <p class="text-black pl-2 w-1/2 mb-3">
              No time to linger? That's fine. We've packed you a breakfast fit
              for kings. Emphasis on "fit." Check out the ingredients:
            </p>
            {elems.map((elem) => {
              return (
                <li class="text-black pl-2 w-2/3 lg:ml-5" key={elem}>
                  {elem}
                </li>
              );
            })}
          </div>
          <img
            src="https://kampouse-food.my.canva.site/images/2f9597cd42486a38dd77700f6066685b.jpg"
            width={500}
            height={500}
            alt="Breakfast"
            class=" border rounded-xl"
          ></img>
        </div>
      </div>
      <div class="lg:flex lg:flex-row">
        {linksDescription.map((elem) => {
          return (
            <div key={elem.description} class="lg:mx-24 mx-5 p-2">
              <img
                src={elem.links}
                width={500}
                height={500}
                alt="Breakfast"
                class="w-screen pt-3 border rounded-xl"
              ></img>
              <h1 class="text-2xl text-black pl-2  text-center">
                {elem.description}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const Service = () => {
  const serv = [
    {
      title: "Dine in",
      description: "Reserve a table online so we know to expect you.",
    },
    {
      title: "Take out",
      description: "Order online and pick up your meal at the cafe.",
    },
    {
      title: "Delivery",
      description: "Order online and we'll bring your meal to you.",
    },
  ];
  return (
    <div class="flex flex-col  h-fit lg:h-72 ">
      <h1 class="text-5xl text-primary pl-2 pb-5 m-10">Our cafe, your way</h1>
      <div class="flex lg:flex-row flex-col  self-center lg:ml-[10em]   place-self-center ">
        {serv.map((elem) => {
          return (
            <>
              <div class="flex  flex-col  align-middle  ">
                <h1 key={elem.title} class=" text-center ">
                  {elem.title}
                </h1>
                <p key={elem.description} class="m-5 mt-1 text-center">
                  {elem.description}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

const TailMenu = () => {
  return (
    <div class="h-[25rem] lg:h-screen  bg-hero-footer gap-24 mb-2 lg:gap-[20em] flex flex-col p-8     bg-cover  bg-center ">
      <h1 class="text-[2rem] lg:pl-32 lg:text-8xl text-6xl text-primary p-5 pb-6 pt-1   ">
        Healthy, hearty meals await. See you soon!
      </h1>
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
      <BreakFasts />
      <Service />
      <TailMenu />
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
