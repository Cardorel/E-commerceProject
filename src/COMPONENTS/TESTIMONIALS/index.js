import React from "react";
import { RowLayout, ContainerLayout, ColLayout } from "../../BOOTSTRAP/LAYOUT";
import { Jumbotron } from "react-bootstrap";
import './testimonial.styles.scss'

export default function Testimonials() {
  return (
    <div className="m-5">
      <h2 className="m-4 header__testimonial">TESTIMONIALS</h2>
      <Jumbotron>
        <ContainerLayout fluid>
          <RowLayout className="row__testimonial">
            <ColLayout className="col__testimonial">
              <h1 className="quote__testimonial">“</h1>
              <div className="h-50">
                <cite>
                  I didn't know the Snipcart guys were into herbs as well! How
                  beautiful is that Xherbs theme. I'm going to laumch a
                  killer.JAMstack e-commerce store using this for sure.
                </cite>
              </div>
              <h3>
                JOHN DOPE<span className="text-muted">, COLORADO , USA</span>
              </h3>
            </ColLayout>
            <ColLayout className="col__testimonial">
              <h1 className="quote__testimonial">“</h1>
              <div className="h-50">
                <cite>
                  Well I'll be d*mned. These plants really are greener than any
                  of my recruits.
                </cite>
              </div>
              <h3>
                JMAJOR PAYNE<span className="text-muted">, VA , USA</span>
              </h3>
            </ColLayout>
          </RowLayout>
        </ContainerLayout>
      </Jumbotron>
    </div>
  );
}
