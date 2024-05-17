import "./App.css";
import Hero from "./components/Hero/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "./components/Button/Button";
import ListItem from "./components/ListItem/ListItem";
import Section from "./components/Section/SectionItem";
import Footer from "./components/Footer/Footer";
import { Products } from "./Data/Products";
import { ArrowRightIcon, CheckIcon } from "./components/Icons/Icons";
import { moreFromFoundryItems, poweredByFoundryItems } from "./Data/Clients";
import Card from "./components/Card/Card";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import ContactForm from "./components/Form/ContactForm";
import FloatingCard from "./components/Card/FloatingCard";

// primereact
import "primereact/resources/themes/saga-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

//image
import productad from "./Assets/product-ad.png";
import walkinCustomer from "./Assets/walk-in-customer.png";
import topDemo from "./Assets/top-demo.png";
import sparkles from "./Assets/sparkledbg.png";
import sparklesTwo from "./Assets/sparkledbg2.png";
import { ToastProvider } from "./components/Toast/Toast";
import { Nav } from "./components/Nav";

function App() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  return (
    <ToastProvider>
      <div className="App">
        <Nav />
        <div className="sections-container d-flex flex-column gap-5 mt-5">
          <div className="d-flex">
            <div className="col-sm-9 col-12">
              <Hero
                headerTitle={"Empowering all the ways you do business"}
                listitems
                isCard
              />
            </div>

            <div className="hero-1 col-3">
              <FloatingCard
                topImage={topDemo}
                title="Maximize your sales with easy-to-use, reliable, and fast in-store POS systems."
                description="Find out how our POS system can benefit your business."
                onButtonClick={() => setIsDialogVisible(true)}
              />
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
                  backgroundImage={sparkles}
                  backgroundImageTwo={sparklesTwo}
                  buttonLabel={
                    <span className="p-0 d-flex align-items-center gap-2">
                      Book Demo <ArrowRightIcon />
                    </span>
                  }
                  onButtonClick={() => setIsDialogVisible(true)}
                >
                  <p className="p-3 rounded glass-effect walk-in">
                    <img width="100%" src={walkinCustomer} alt="" />
                  </p>
                </Card>
              </div>
            }
          />
          <Section title="Built For Business Owners Like You">
            <div className="d-flex gap-5 built-for-business">
              <div className="col-12 col-sm-4">
                <img src={productad} alt="products" width="60%" />

                <div className="p-2 d-flex align-items-center justify-content-center">
                  <div className="col-9">
                    <Card
                      layout="sideways"
                      buttonLabel={<ArrowRightIcon />}
                      onButtonClick={() => {}}
                    >
                      <p className="text-white col-11 subtitle-text">
                        Streamline the allocation of resources and time slots,
                        optimising bookings to minimise gaps and maximise
                        utilisation
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
              <div className="sections-grid col-12 col-sm-7">
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
            <div className="section-item-children d-flex gap-3">
              {poweredByFoundryItems.map((item, index) => (
                <ListItem {...item} key={index} />
              ))}
            </div>
          </Section>
          <Section title="More from Foundry">
            <div className="section-item-children d-flex gap-3">
              {moreFromFoundryItems.map((item, index) => (
                <ListItem {...item} key={index} />
              ))}
            </div>
          </Section>
        </div>
        <Dialog
          header="Book a Demo"
          visible={isDialogVisible}
          style={{ width: "50vw" }}
          onHide={() => setIsDialogVisible(false)}
        >
          <ContactForm />
        </Dialog>
        <Footer />
      </div>
    </ToastProvider>
  );
}

export default App;
