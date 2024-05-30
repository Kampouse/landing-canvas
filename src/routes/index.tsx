import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


const Header = () => {
  return (
    <header class="h-[25rem] lg:h-screen  bg-hero-foor gap-24 mb-2 lg:gap-[20em] flex flex-col    bg-cover  bg-center ">
      <h1 class="text-[1.5rem] lg:pl-32 pl-5 pt-14 leading-6 ">Cafe on <br />  Qwik</h1>
      <h1 class="text-[2rem] lg:pl-32 lg:text-8xl text-6xl text-primary p-5 pb-6 pt-1   ">Wholesome <br /> goodness is here</h1>
    </header>
  );
};
const Description = () => {
  return (
    <div class="grid  lg:grid-cols-2  gap-6 ml-8  pt-8 mb-[2.5em] lg:ml-16">
      <h1 class="text-5xl text-primary">Hello!
        We're Cafe on Eleventh. </h1>
      <div class="flex flex-col  gap-5 lg:w-2/4   w-5/6 scale-110">
        <p class="p-0 m-0 leading-6 text-white whitespace-normal lg:text-2xl sm:text-2xl md:text-2xl ">
          We just moved into the neighborhood, <br /> but it's like we've been here forever! You've welcomed us like old friends, dropping by with ready smiles and eager appetites.
        </p>
        <p class="p-0 m-0 leading-6 text-white whitespace-normal lg:text-2xl sm:text-2xl md:text-2xl">
          That's why we vow to always serve up goodness. Our food will always be organically grown, locally sourced, slow-cooked, and served with warm smiles. We're family now. And this is how we cook for those we love.
        </p>
        <p class="p-0 m-0 leading-6 text-white whitespace-normal lg:text-2xl sm:text-2xl md:text-2xl">
          Welcome home.
        </p>
      </div>
    </div>


  )
}
const BreakFasts = () => {

  const elems = ["slow-cooked oats", "Vine-ripened grapes & berries", "Naturally sweetened dried fruit", "Homemade yogurt", "Freshly harvested honey"]

  const linksDescription = [{
    description: "Breakfast in a jar",
    links: "https://kampouse-food.my.canva.site/images/563a8d1623c30beadac2c6e17342e244.jpg"
  },
  {
    description: "healthy meals",
    links: "https://kampouse-food.my.canva.site/images/2bc7569202dcddebaffef1d263421718.jpg"
  },
  {
    description: "Guilt-free Desserts",
    links: "https://kampouse-food.my.canva.site/images/38fa3dab7e6fc590b34655f62d0da351.jpg"
  },
  ]





  return (
    <div class="gap-6  py-8 px-5 mt-[2.5em] h-fit bg-white">
      <div class="pt-2">

        <div class="flex lg:flex-row flex-col">

          <div class="lg:mb-0 mb-5">
            <h1 class="text-5xl text-black pl-2 mb-5">Breakfast
              To-Go </h1>
            <p class="text-black pl-2 w-1/2 mb-3">
              No time to linger? That's fine. We've packed you a breakfast fit for kings. Emphasis on "fit."
              Check out the ingredients:
            </p>
            {
              elems.map((elem) => {
                return (
                  <li class="text-black pl-2 w-2/3 lg:ml-5" key={elem}>
                    {elem}
                  </li>)
              })
            }
          </div>
          <img src="https://kampouse-food.my.canva.site/images/2f9597cd42486a38dd77700f6066685b.jpg" width={500} height={500} alt="Breakfast" class=" border rounded-xl"></img>
        </div>



      </div>
      <div class="lg:flex lg:flex-row">
        {
          linksDescription.map((elem) => {
            return (

              <div key={elem.description} class="lg:mx-24 mx-5 p-2">
                <img src={elem.links} width={500} height={500} alt="Breakfast" class="w-screen pt-3 border rounded-xl" ></img>
                <h1 class="text-2xl text-black pl-2  text-center">{elem.description}</h1>

              </div>)
          })
        }
      </div>
    </div>
  )
}
const Service = () => {

  const serv = [
    {
      title: "Dine in",
      description: "Reserve a table online so we know to expect you."

    },
    {
      title: "Take out",
      description: "Order online and pick up your meal at the cafe."
    },
    {


      title: "Delivery",
      description: "Order online and we'll bring your meal to you."
    }

  ]



  return (
    <div class="flex flex-col">
      <h1 class="text-5xl text-primary pl-2 pb-5 m-10">Our cafe, your way</h1>
      <div class="flex lg:flex-row flex-col  align-middle lg:ml-[10em]   ">
        {
          serv.map((elem) => {
            return (
              <>
                <div class="flex  flex-col  align-middle ">
                  <h1 key={elem.title} class=" text-center ">{elem.title}</h1>
                  <p key={elem.description} class="m-5 mt-1 text-center">{elem.description}</p>
                </div>

              </>
            )
          })
        }



      </div>
    </div>



  )
}






export default component$(() => {
  return (
    <>
      <Header />
      <Description />
      <BreakFasts />
      <Service />
      <h1>Hi 👋</h1>
      <div></div>

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
