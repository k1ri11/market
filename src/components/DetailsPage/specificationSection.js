import React from 'react';
import cn from 'classnames';

import specificationSectionStyles from './specificationSection.module.scss';

function renderSpecificationSection(props) {
  return (
    <section className={specificationSectionStyles.specificationSection}>
      {/* Product details and review section */}

      <article className={specificationSectionStyles.detailsWrapper}>
        <div className={specificationSectionStyles.infoContainer}>
          <div className={specificationSectionStyles.specificationContainer}>
            <div className={specificationSectionStyles.specHeader}>
              <p className={specificationSectionStyles.title}>
                Product details
              </p>
              <p className={specificationSectionStyles.subTitle}>
                General specs
              </p>

              <div className={specificationSectionStyles.modelInfo}>
                <div className={specificationSectionStyles.info6}>Model:</div>
                <img
                  className={specificationSectionStyles.image13}
                  src={'/assets/cd627f697b64eeef8f8b6014fb5606fa.svg'}
                  alt="alt text"
                />
                <div className={specificationSectionStyles.info13}>
                  iPhone 14 Plus
                </div>
              </div>
            </div>

            <a className={specificationSectionStyles.detailsLink}>
              <div className={specificationSectionStyles.info14}>
                See all product details
              </div>
              <img
                className={specificationSectionStyles.image6}
                src={'/assets/f2b371cfae6aa2a54cb51294f884fbc3.svg'}
                alt="alt text"
              />
            </a>
          </div>

          <div className={specificationSectionStyles.reviewsHeader}>
            {/* Review section header with action button */}
            <div className={specificationSectionStyles.info12}>Reviews</div>
          </div>

          <div className={specificationSectionStyles.reviewStats}>
            {/* Review statistics and ratings */}

            <div className={specificationSectionStyles.content_box4}>
              <div className={specificationSectionStyles.flex_col}>
                <div className={specificationSectionStyles.info16}>4.1</div>
                <img
                  className={specificationSectionStyles.image17}
                  src={'/assets/b857babeffc3d4c5cb45297fcafd5003.svg'}
                  alt="alt text"
                />
                <div className={specificationSectionStyles.info61}>
                  68 reviews
                </div>
              </div>
            </div>

            <div className={specificationSectionStyles.flex_col1}>
              <div className={specificationSectionStyles.flex_row}>
                <div className={specificationSectionStyles.info62}>5</div>
                <img
                  className={specificationSectionStyles.image}
                  src={'/assets/8fcd28f724bdd9afa14b0bf298e6c946.svg'}
                  alt="alt text"
                />
                <img
                  className={specificationSectionStyles.image18}
                  src={'/assets/48d072e0784394487ca93ef1f01ed06e.svg'}
                  alt="alt text"
                />
                <div className={specificationSectionStyles.info17}>37</div>
              </div>

              <div className={specificationSectionStyles.flex_row}>
                <div className={specificationSectionStyles.info62}>4</div>
                <img
                  className={specificationSectionStyles.image}
                  src={'/assets/8fcd28f724bdd9afa14b0bf298e6c946.svg'}
                  alt="alt text"
                />
                <img
                  className={specificationSectionStyles.image18}
                  src={'/assets/1766fd4c5d5604622d4e0eead71e38c0.svg'}
                  alt="alt text"
                />
                <div className={specificationSectionStyles.info17}>16</div>
              </div>

              <div className={specificationSectionStyles.flex_row1}>
                <div className={specificationSectionStyles.info62}>3</div>
                <img
                  className={specificationSectionStyles.image}
                  src={'/assets/8fcd28f724bdd9afa14b0bf298e6c946.svg'}
                  alt="alt text"
                />
                <img
                  className={specificationSectionStyles.image18}
                  src={'/assets/7ae25bd583ed812c77de1363e6f41451.svg'}
                  alt="alt text"
                />
                <div className={specificationSectionStyles.info17}>9</div>
              </div>

              <div className={specificationSectionStyles.flex_row1}>
                <div className={specificationSectionStyles.info62}>2</div>
                <img
                  className={specificationSectionStyles.image}
                  src={'/assets/8fcd28f724bdd9afa14b0bf298e6c946.svg'}
                  alt="alt text"
                />
                <img
                  className={specificationSectionStyles.image18}
                  src={'/assets/880607679674e8088cc9106b758444b6.svg'}
                  alt="alt text"
                />
                <div className={specificationSectionStyles.info17}>4</div>
              </div>

              <div className={specificationSectionStyles.flex_row1}>
                <div className={specificationSectionStyles.info62}>1</div>
                <img
                  className={specificationSectionStyles.image}
                  src={'/assets/8fcd28f724bdd9afa14b0bf298e6c946.svg'}
                  alt="alt text"
                />
                <img
                  className={specificationSectionStyles.image18}
                  src={'/assets/05de376c3cf3bf39c275fe31cf70faed.svg'}
                  alt="alt text"
                />
                <div className={specificationSectionStyles.info17}>3</div>
              </div>
            </div>
          </div>

          <article className={specificationSectionStyles.reviewItem}>
            {/* Individual review content */}

            <div className={specificationSectionStyles.flex_row2}>
              <div className={specificationSectionStyles.info10}>
                Rafael Marquez
              </div>
              <div className={specificationSectionStyles.info171}>
                June 28, 2023
              </div>
            </div>

            <img
              className={specificationSectionStyles.ratingStars}
              src={'/assets/be1db3778a6e67977bc5bdea73de90d6.svg'}
              alt="alt text"
            />

            <div className={specificationSectionStyles.flex_row3}>
              <div className={specificationSectionStyles.flex_row4}>
                <div className={specificationSectionStyles.info131}>Color:</div>
                <div className={specificationSectionStyles.info62}>Blue</div>
              </div>

              <div className={specificationSectionStyles.flex_row5}>
                <div className={specificationSectionStyles.info131}>Model:</div>
                <div className={specificationSectionStyles.info62}>128GB</div>
              </div>
            </div>

            <p className={specificationSectionStyles.reviewText}>
              The phone has a new A15 Bionic chip, which makes it lightning-fast
              and responsive. The camera system has also been upgraded, and it
              now includes a 12-megapixel ultra-wide lens and a 12-megapixel
              wide lens.
            </p>

            <div className={specificationSectionStyles.flex_row6}>
              <div className={specificationSectionStyles.info131}>Pros:</div>
              <div className={specificationSectionStyles.info62}>
                Premium device, and it comes with a high price tag
              </div>
            </div>

            <div className={specificationSectionStyles.flex_row7}>
              <div className={specificationSectionStyles.info131}>Cons:</div>
              <div className={specificationSectionStyles.info62}>
                Does not have a headphone jack
              </div>
            </div>
          </article>

          <div className={specificationSectionStyles.wrapper30} />

          <div className={specificationSectionStyles.flex_row12}>
            <a className={specificationSectionStyles.info14}>
              Show all reviews
            </a>
            <img
              className={specificationSectionStyles.image6}
              src={'/assets/78632332a8995da980d8875e33359e6d.svg'}
              alt="alt text"
            />
          </div>
        </div>

        <article className={specificationSectionStyles.relatedProduct}>
          {/* Product summary card */}

          <div className={specificationSectionStyles.flex_col2}>
            <div className={specificationSectionStyles.productPreview}>
              <img
                className={specificationSectionStyles.productImg}
                src={'/assets/fdef6946dbe6b7830a34083028c1519d.png'}
                alt="alt text"
              />

              <div className={specificationSectionStyles.flex_col3}>
                <div className={specificationSectionStyles.flex_row13}>
                  <img
                    className={specificationSectionStyles.image15}
                    src={'/assets/f134e2e919a07e2c1e905e3b6c3e2afb.svg'}
                    alt="alt text"
                  />
                  <div className={specificationSectionStyles.info2}>68</div>
                </div>

                <div className={specificationSectionStyles.info132}>
                  Apple iPhone 14 Plus 128GB Blue
                </div>

                <div className={specificationSectionStyles.wrapper19}>
                  <div className={specificationSectionStyles.wrapper191}>
                    $940.00
                  </div>
                </div>
              </div>
            </div>

            <div className={specificationSectionStyles.flex_row14}>
              <button className={specificationSectionStyles.cartBtn}>
                {/* TODO */}
                <img
                  className={specificationSectionStyles.btn_icon}
                  src={'/assets/e2cb0efb8481bc2057ab8e032964dc23.svg'}
                  alt="alt text"
                />
                <div className={specificationSectionStyles.btn_text1}>
                  Add to cart
                </div>
              </button>

              <div className={specificationSectionStyles.flex_row15}>
                <div className={specificationSectionStyles.block6}>
                  <img
                    className={specificationSectionStyles.image61}
                    src={'/assets/c5fc911b643f04a2e9731ba40acbe440.svg'}
                    alt="alt text"
                  />
                </div>

                <div className={specificationSectionStyles.block6}>
                  <img
                    className={specificationSectionStyles.image61}
                    src={'/assets/fdb7498da20b1db304b7e1790f22b75d.svg'}
                    alt="alt text"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </section>
  );
}

export default renderSpecificationSection;
