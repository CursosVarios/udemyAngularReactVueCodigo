import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Global from "../Global";

class ArticleDetails extends Component {
  ulr = Global.url;
  render() {
    return (
      <React.Fragment>
        <Slider title=" Pagina Blog" size="slider-small" />
        <div className="center">
          <section className="content">
            {/* <h1 className="subheader">Ultimos articulos</h1>
             */}
            <article class="article-item-detail" id="article-template">
              <div class="image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1588894181387-939771976bdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=306&q=80"
                  alt="imagen estrellas"
                />
              </div>
              <h1 class="subheader">articulo de prueba</h1>

              <span class="date">Hace 5 minutos </span>
              <div class="clearfix"></div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem minus repellendus reprehenderit placeat mollitia,
                repellat non itaque, accusamus quas rerum iure ab voluptas quae
                odit. Quis facere blanditiis illo libero.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus natus nostrum veniam cumque dolore voluptate culpa
                ut unde nulla voluptatum, hic ea necessitatibus repellendus iure
                facilis provident consequatur perspiciatis alias!
              </p>
            </article>
          </section>
          <Sidebar blog="true" />
        </div>
      </React.Fragment>
    );
  }
}
export default ArticleDetails;
