import Procard from "./Procard";
import Procard2 from "./Procard2";

function Project() {
  const Paras = {
    p1: "A feature-rich, Amazon-style shopping platform built with ReactJS, offering a seamless dynamic user experience.Integrated Amazon-like APIs for real-time product data, pricing and search functionality.Includes advanced features like smart product filtering, shopping cart, wishlist, and checkout flow.",
    p2: "A sleek and intuitive task management application built with TypeScript & JavaScript for better scalability and maintainability.Features add, edit, delete, and mark-as-done functionalities with a smooth and responsive user interface.Optimized for performance, usability, and seamless productivity across all devices.",
    p3: "An innovative ReactJS web app designed to connect blood donors with seekers in real-time.Integrated search & filter functionality for quick access to donors based on location and blood group.Built with a modern UI, responsive design, and optimized for speed and accessibility.",
    p4: "A smart ReactJS-based medicine search platform that helps users find medicines, alternatives and pricing instantly.Implemented real-time API integration for accurate medical data and search results.Designed with a clean, user-friendly interface for smooth navigation across all devices.",
    p5: "A powerful ReactJS web app that enables students to explore, compare, and find the best courses easily.Includes dynamic search, filtering, and categorization features for personalized recommendations.Optimized for performance, responsiveness, and an engaging learning experience.",
    p6: "A ReactJS-powered weather application that provides real-time weather updates for any city worldwide.Integrated live weather APIs to display temperature, humidity, wind speed, and conditions instantly.Built with a clean, responsive UI and optimized for speed, accuracy, and seamless user experience.",
    p7: "A feature-rich searching platform clone built with ReactJS & Redux for state management and seamless performance.Integrated movie/TV show APIs to display trending content, search, and category-based browsing.",
    p8: "A ReactJS-based Age Calculator that accurately computes age from the entered birth date.Features a clean, interactive interface and real-time calculations for instant results.",
    p9: "A fun and interactive Tic Tac Toe game built with ReactJS for web play.Includes dynamic game board, win/tie detection, and reset functionality for engaging gameplay.",
  }
  return (
    <>
      <div className="h-full w-full lg:pt-2 p-3 lg:p-2 bg20 flex flex-col space-y-6 justify-center items-center bg-fixed">
        <h1 className="text-3xl font-medium">My Work</h1>
        <div className="flex flex-wrap justify-center items-start w-full h-full gap-2">
          <Procard2 title="Gro4ers Web App" image="/bg/gro4ers.png" alt="Gro4ers BG" href="https://groffers.netlify.app" para={Paras.p1} href2="https://github.com/Shrey42a/Grocery" />
          <Procard title="Todo Web App" image="/bg/todo.png" alt="Todo Image BG" href="https://42todots.netlify.app" para={Paras.p2} href2="https://github.com/Shrey42a/TodoAppTS" />
          <Procard2 title="Blood Donor Finder Web App" image="/bg/bd.png" alt="Blood Donor BG" href="https://skbdfinder.netlify.app" para={Paras.p3} href2="https://github.com/Shrey42a/Blooddonerfinder" />
          <Procard title="Medicine Finder Web App" image="/bg/md.png" alt="Medicine BG" href="https://skmdfinder.netlify.app" para={Paras.p4} href2="https://github.com/Shrey42a/mdfinder" />
          <Procard2 title="Course Finder Web App" image="/bg/course.png" alt="Course BG" href="https://skcoursefinder.netlify.app" para={Paras.p5} href2="https://github.com/Shrey42a/coursefinder" />
          <Procard title="Weather Web App" image="/bg/weather.png" alt="Weather BG" href="https://42weather.netlify.app" para={Paras.p6} hre2="https://github.com/Shrey42a/42weather" />
          <Procard2 title="Movie Flix" image="/bg/movieflix.png" alt="Movie flix BG" href="https://42flix.netlify.app" para={Paras.p7} href2="https://github.com/Shrey42a/TV" />
          <Procard title="Age Calculator" image="/bg/age.png" alt="Age BG" href="https://42age.netlify.app" para={Paras.p8} href2="https://github.com/Shrey42a/Age" />
          <Procard2 title="Tic Tac Toe Web Game" image="/bg/ttt.png" alt="TTT BG" href="https://xo42.netlify.app" para={Paras.p9} href2="https://github.com/Shrey42a/tictac" />
        </div>
      </div>
    </>
  );
}
export default Project;