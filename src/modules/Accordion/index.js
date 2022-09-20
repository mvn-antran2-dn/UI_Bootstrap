import AccordionCP from "../../components/Accordion";
import AccordionAlway from "../../components/AccordionAlway";

export default function Accordion() {
  const dataAccordion = [
    {
      heading: "Accordion Item #1",
      isActive: false
    },
    {
      heading: "Accordion Item #2",
      isActive: false
    },
    {
      heading: "Accordion Item #3",
      isActive: false
    }
  ]
  return (
    <>
      <h1>Accordion</h1>
      <h2>Example</h2>
      <div className="container">
        <div className="content-all">
          <div className="accordion" id="accordion-example">
            {dataAccordion.map((item, index) => {
              return (
                <AccordionCP heading={item.heading} isActive={item.isActive} key={`${item.heading}-${index}`}>
                  <strong>This is the first item's accordion body.</strong> It is
                  shown by default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS
                  transitions. You can modify any of this with custom CSS or
                  overriding our default variables. It's also worth noting that just
                  about any HTML can go within the <span>.accordion-body</span>,
                  though the transition does limit overflow.
                </AccordionCP>
              )
            })}
          </div>
        </div>
      </div>
      <h2>Flush</h2>
      <div className="container">
        <div className="content-all">
          <div className="accordion accordion-flush" id="accordion-example">
            {dataAccordion.map((item, index) => {
              return (
                <AccordionCP heading={item.heading} isActive={item.isActive} key={`${item.heading}-${index}`}>
                  Placeholder content for this accordion, which is intended to demonstrate the <span>.accordion-flush</span> class.
                  This is the first item's accordion body.
                </AccordionCP>
              )
            })}
          </div>
        </div>
      </div>
      <h2>Always open</h2>
      <div className="container">
        <div className="content-all">
          <div className="accordion" id="accordion-example">
            {dataAccordion.map((item, index) => {
              return (
                <AccordionAlway heading={item.heading} isActive={item.isActive} key={`${item.heading}-${index}`}>
                  <strong>This is the first item's accordion body.</strong> It is
                  shown by default, until the collapse plugin adds the appropriate
                  classes that we use to style each element. These classes control the
                  overall appearance, as well as the showing and hiding via CSS
                  transitions. You can modify any of this with custom CSS or
                  overriding our default variables. It's also worth noting that just
                  about any HTML can go within the <span>.accordion-body</span>,
                  though the transition does limit overflow.
                </AccordionAlway>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}