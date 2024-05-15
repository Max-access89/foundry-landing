import "./App.css";
import Hero from "./components/Hero/Hero";
import { Nav } from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button/Button";
import ListItem from "./components/ListItem/ListItem";
import Section from "./components/Section/SectionItem";
import Footer from "./components/Footer/Footer";
import { Products } from "./Data/Products";
import { ArrowRightIcon, CheckIcon } from "./components/Icons/Icons";
import { moreFromFoundryItems, poweredByFoundryItems } from "./Data/Clients";
import Card from "./components/Card/Card";

//image
import productad from "./Assets/product-ad.png";
import walkinCustomer from "./Assets/walk-in-customer.png";
import topDemo from "./Assets/top-demo.png";
import metalRing from "./Assets/Metallic White (75).png";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="sections-container d-flex flex-column gap-5 mt-5">
        <div className="d-flex">
          <div>
            <Hero
              headerTitle={"Empowering all the ways you do business"}
              listitems
              isCard
            />
          </div>

          <div className="hero-1">
            <div className="h-50 bg-white"></div>
            <div className="p-5 w-75">
              <img
                src={topDemo}
                alt="demo"
                style={{ width: "100%", height: "auto", borderRadius: "1rem" }}
              />
              <Card
                backgroundImage={metalRing}
                buttonLabel={
                  <div>
                    <span className="p-0 d-flex align-items-center gap-2">
                      Get In Touch <ArrowRightIcon />
                    </span>
                  </div>
                }
                onButtonClick={() => alert("Learn more clicked!")}
              >
                <div className="text-white">
                  Maximize your sales with easy-to-use, reliable, and fast
                  in-store POS system and payment solutions. Find out how our
                  POS system can benefit your business.
                </div>
              </Card>
            </div>
          </div>
        </div>

        <Hero
          headerTitle={
            "Effortlessly expand your sales reach, rapidly and seamlessly, across any location"
          }
          subtitle={
            "Tailored product suites designed specifically for restaurants, retail, and beauty businesses"
          }
          cardContent={
            <div className="">
              <Card
                buttonLabel={
                  <span className="p-0 d-flex align-items-center gap-2">
                    Book Demo <ArrowRightIcon />
                  </span>
                }
                onButtonClick={() => alert("Learn more clicked!")}
              >
                <p className="p-3 rounded glass-effect walk-in">
                  <img width="100%" src={walkinCustomer} alt="" />
                </p>
              </Card>
            </div>
          }
        />
        <Section title="Built For Business Owners Like You">
          <div className="d-flex gap-5">
            <div className="" style={{ width: "35%" }}>
              <img src={productad} alt="products" width="60%" />

              <div className="p-2 w-75 ">
                <Card
                  layout="sideways"
                  buttonLabel={<ArrowRightIcon />}
                  onButtonClick={() => alert("Learn more clicked!")}
                >
                  <p className=" text-white">
                    Streamline the allocation of resources and time slots,
                    optimising bookings to minimise gaps and maximise
                    utilisation
                  </p>
                </Card>
              </div>
            </div>
            <div className="sections-grid" style={{ width: "60%" }}>
              {Products.map((product, index) => (
                <ListItem Icon={<CheckIcon />} {...product} key={index} />
              ))}
            </div>
          </div>
        </Section>
        <Section
          title="Powered by Foundry"
          action={
            <Button
              title="Show All"
              variant="ghost"
              onClick={() => alert("Action clicked!")}
            />
          }
        >
          <div className="d-flex gap-3">
            {poweredByFoundryItems.map((item, index) => (
              <ListItem {...item} key={index} />
            ))}
          </div>
        </Section>
        <Section title="More from Foundry">
          <div className="d-flex gap-3">
            {moreFromFoundryItems.map((item, index) => (
              <ListItem {...item} key={index} />
            ))}
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
}

export default App;
