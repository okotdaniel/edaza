
import './assets/css/main.css';

function App(){
  return(
  <div className="hmm">
    <nav className="uk-navbar-container uk-letter-spacing-small">
      
      <div className="uk-container">
        <div className="uk-position-z-index" data-uk-navbar>
          <div className="uk-navbar-left">
            <a className="uk-navbar-item uk-logo" href="index.html">Edaza</a>
            <ul className="uk-navbar-nav uk-visible@m uk-margin-large-left">
              <li className="uk-active"><a href="/"   target="_blank" rel="noopener noreferrer">Home</a></li>
              <li ><a href="recipe.html">Recipe</a></li>
              <li ><a href="search.html">Search</a></li>
              <li ><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div className="uk-navbar-right">
            <div>
              <a className="uk-navbar-toggle" data-uk-search-icon href="/">search</a>
              <div className="uk-drop uk-background-default" data-uk-drop="mode: click; pos: left-center; offset: 0">
                <form className="uk-search uk-search-navbar uk-width-1-1">
                  <input className="uk-search-input uk-text-demi-bold" type="search" placeholder="Search..." autofocus />
                </form>
              </div>
            </div>
            <ul className="uk-navbar-nav uk-visible@m">
              <li ><a href="sign-in.html">Sign In</a></li>
            </ul>
            <div className="uk-navbar-item">
              <div><a className="uk-button uk-button-primary" href="sign-up.html">Sign Up</a></div>
            </div>          
            <a className="uk-navbar-toggle uk-hidden@m" href="/offcanvas" data-uk-toggle><span
              data-uk-navbar-toggle-icon></span></a>
          </div>
        </div>
      </div>
    </nav>
    
    <div className="uk-container">
      <div className="uk-border-rounded-large uk-background-top-center uk-background-cover 
        uk-background-norepeat uk-light uk-inline uk-overflow-hidden uk-width-1-1" 
        style={{'backgroundImage': 'url(img/header.jpg)'}}>
        <div className="uk-position-cover uk-header-overlay"></div>
        <div className="uk-position-relative" data-uk-grid>
          <div className="uk-width-1-2@m uk-flex uk-flex-middle">
            <div className="uk-padding-large uk-padding-remove-right">
              <h1 className="uk-heading-small uk-margin-remove-top">Choose from thousands of recipes</h1>
              <p className="uk-text-secondary">Appropriately integrate technically sound value with scalable infomediaries
                negotiate sustainable strategic theme areas</p>
              <a className="uk-text-secondary uk-text-600 uk-text-small hvr-forward" href="sign-up.html">Sign up today<span
                className="uk-margin-small-left" data-uk-icon="arrow-right"></span></a>
            </div>
          </div>
          <div className="uk-width-expand@m">
          </div>
        </div>
      </div>
    </div>
    
    <div className="uk-section uk-section-default">
      <div className="uk-container">
        <div data-uk-grid>
          <div className="uk-width-1-4@m sticky-container">
            <div data-uk-sticky="offset: 100; bottom: true; media: @m;">
            <h2>Recipes</h2>
              <ul className="uk-nav-default uk-nav-parent-icon uk-nav-filter uk-margin-medium-top" data-uk-nav >
                <li className="uk-parent uk-open">
                  <a href="/">Dish Type</a>
                  <ul className="uk-nav-sub">
                    <li><a href="/">Appetizers & Snacks</a></li>
                    <li><a href="/">Bread Recipes</a></li>
                    <li><a href="/">Cake Recipes</a></li>
                    <li><a href="/">Candy and Fudge</a></li>
                    <li><a href="/">Casserole Recipes</a></li>
                    <li><a href="/">Christmas Cookies</a></li>
                    <li><a href="/">Cocktail Recipes</a></li>
                    <li><a href="/">Main Dishes</a></li>
                    <li><a href="/">Pasta Recipes</a></li>
                    <li><a href="/">Pie Recipes</a></li>
                    <li><a href="/">Sandwiches</a></li>
                  </ul>
                </li>
                <li className="uk-parent">
                  <a href="/">Meal Type</a>
                  <ul className="uk-nav-sub">
                    <li><a href="/">Breakfast and Brunch</a></li>
                    <li><a href="/">Desserts</a></li>
                    <li><a href="/">Dinners</a></li>
                    <li><a href="/">Lunch</a></li>
                  </ul>
                </li>
                <li className="uk-parent">
                  <a href="/">Diet and Health</a>
                  <ul className="uk-nav-sub">
                    <li><a href="/">Diabetic</a></li>
                    <li><a href="/">Gluten Free</a></li>
                    <li><a href="/">High Fiber Recipes</a></li>
                    <li><a href="/">Low Calorie</a></li>
                  </ul>
                </li>
                <li className="uk-parent">
                  <a href="/">World Cuisine</a>
                  <ul className="uk-nav-sub">
                    <li><a href="/">Chinese</a></li>
                    <li><a href="/">Indian</a></li>
                    <li><a href="/">Italian</a></li>
                    <li><a href="/">Mexican</a></li>
                  </ul>
                </li>
                <li className="uk-parent">
                  <a href="/">Seasonal</a>
                  <ul className="uk-nav-sub">
                    <li><a href="/">Baby Shower</a></li>
                    <li><a href="/">Birthday</a></li>
                    <li><a href="/">Christmas</a></li>
                    <li><a href="/">Halloween</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="uk-width-expand@m">
            <div  data-uk-grid>
              <div className="uk-width-expand@m">
                <form className="uk-search uk-search-default uk-width-1-1">
                  <span data-uk-search-icon></span>
                  <input className="uk-search-input uk-text-small uk-border-rounded uk-form-large" type="search" placeholder="Search for recipes..." />
                </form>          
              </div>
              <div className="uk-width-1-3@m uk-text-right@m uk-light">
                <select className="uk-select uk-select-light uk-width-auto uk-border-pill uk-select-primary">
                  <option>Sort by: Latest</option>
                  <option>Sort by: Top Rated</option>
                  <option>Sort by: Trending</option>
                </select>
              </div>
            </div>      
            <div className="uk-child-width-1-2 uk-child-width-1-3@s" data-uk-grid>
              <div>
              <a href="recipe.html">
                <div
                  className="uk-card">
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img className="uk-border-rounded-medium" src="https://source.unsplash.com/-YHSwy6uqvk/300x160" alt="Course Title" />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      
                    </div>
                  </div>
                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Chef John's Turkey Sloppy Joes</h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                        <span className="uk-margin-xsmall-left">5.0</span>
                        <span>(73)</span>
                      </div>
                      <div className="uk-width-expand uk-text-right">by John Keller</div>
                    </div>
                  </div>
                  
                </div>
              </a>
              </div>
              <div>
              <a href="recipe.html">
                <div
                  className="uk-card">
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img className="uk-border-rounded-medium" src="https://source.unsplash.com/jUPOXXRNdcA/300x160" alt="Course Title" />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      
                    </div>
                  </div>
                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top"> <a href="recipe.html" className="">Brown Sugar Meatloaf</a></h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                        <span className="uk-margin-xsmall-left">3.0</span>
                        <span>(94)</span>
                      </div>
                      <div className="uk-width-expand uk-text-right">by Danial Caleem</div>
                    </div>
                  </div>
                 
                </div>
                </a>
              </div>
              
              <div>
              <a href="recipe.html">
                <div
                  className="uk-card">
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img className="uk-border-rounded-medium" src="https://source.unsplash.com/nTZOILVZuOg/300x160" alt="Course Title" />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      
                    </div>
                  </div>
                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Awesome Slow Cooker Pot Roast</h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                        <span className="uk-margin-xsmall-left">4.5</span>
                        <span>(153)</span>
                      </div>
                      <div className="uk-width-expand uk-text-right">by Janet Small</div>
                    </div>
                  </div>
                  
                </div>
                </a>
              </div>
              <div>
              <a href="recipe.html">
                <div
                  className="uk-card">
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img className="uk-border-rounded-medium" src="https://source.unsplash.com/Cf_Df-Zl8iw/300x160" alt="Course Title" />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">

                    </div>
                  </div>
                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Broiled Tilapia Parmesan</h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                        <span className="uk-margin-xsmall-left">5.0</span>
                        <span>(524)</span>
                      </div>
                      <div className="uk-width-expand uk-text-right">by Aleaxa Dorchest</div>
                    </div>
                  </div>
                  
                </div>
                </a>
              </div>
              <div>
              <a href="recipe.html">
                <div
                  className="uk-card">
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img className="uk-border-rounded-medium" src="https://source.unsplash.com/aGjP08-HbYY/300x160" alt="Course Title" />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      
                    </div>
                  </div>
                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Baked Teriyaki Chicken</h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                        <span className="uk-margin-xsmall-left">4.6</span>
                        <span>(404)</span>
                      </div>
                      <div className="uk-width-expand uk-text-right">by Ben Kaller</div>
                    </div>
                  </div>
                  
                </div>
                </a>
              </div>
              <div>
              <a href="recipe.html">
                <div
                  className="uk-card">
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img className="uk-border-rounded-medium" src="https://source.unsplash.com/SxTlB4fde9Q/300x160" alt="Course Title" />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      
                    </div>
                  </div>
                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Zesty Slow Cooker Chicken</h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                        <span className="uk-margin-xsmall-left">3.9</span>
                        <span>(629)</span>
                      </div>
                      <div className="uk-width-expand uk-text-right">by Sam Brown</div>
                    </div>
                  </div>
                  
                </div>
                </a>
              </div>
              <div>
              <a href="recipe.html">
                <div
                  className="uk-card">
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img className="uk-border-rounded-medium" src="https://source.unsplash.com/MNtag_eXMKw/300x160" alt="Course Title" />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                     
                    </div>
                  </div>
                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Rosemary Ranch Chicken Kabobs</h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                        <span className="uk-margin-xsmall-left">3.6</span>
                        <span>(149)</span>
                      </div>
                      <div className="uk-width-expand uk-text-right">by Theresa Samuel</div>
                    </div>
                  </div>
                  
                </div>
                </a>
              </div>
              <div>
              <a href="recipe.html">
                <div
                  className="uk-card">
                  <div className="uk-card-media-top uk-inline uk-light">
                    <img className="uk-border-rounded-medium" src="https://source.unsplash.com/Yr4n8O_3UPc/300x160" alt="Course Title" />
                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                    <div className="uk-position-xsmall uk-position-top-right">
                      
                    </div>
                  </div>
                  <div>
                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Slow Cooker Pulled Pork</h3>
                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                      <div className="uk-width-auto uk-flex uk-flex-middle">
                        <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                        <span className="uk-margin-xsmall-left">2.9</span>
                        <span>(309)</span>
                      </div>
                      <div className="uk-width-expand uk-text-right">by Adam Brown</div>
                    </div>
                  </div>
                  
                </div>
                </a>
              </div>
              
              <div>
              <a href="recipe.html">
                          <div
                            className="uk-card">
                            <div className="uk-card-media-top uk-inline uk-light">
                              <img className="uk-border-rounded-medium" src="https://source.unsplash.com/jivmv9hE6bM/300x160" alt="Course Title" />
                              <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                              <div className="uk-position-xsmall uk-position-top-right">
                               
                              </div>
                            </div>
                            <div>
                              <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Greek Lemon Chicken and Potatoes</h3>
                              <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                                <div className="uk-width-auto uk-flex uk-flex-middle">
                                  <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                                  <span className="uk-margin-xsmall-left">3.6</span>
                                  <span>(124)</span>
                                </div>
                                <div className="uk-width-expand uk-text-right">by Thomas Haller</div>
                              </div>
                            </div>
                            
                          </div>
                          </a>
                        </div>
                        <div>
                        <a href="recipe.html">
                          <div
                            className="uk-card">
                            <div className="uk-card-media-top uk-inline uk-light">
                              <img className="uk-border-rounded-medium" src="https://source.unsplash.com/tzl1UCXg5Es/300x160" alt="Course Title" />
                              <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                              <div className="uk-position-xsmall uk-position-top-right">
                                
                              </div>
                            </div>
                            <div>
                              <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Turkey Posole Dinner</h3>
                              <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                                <div className="uk-width-auto uk-flex uk-flex-middle">
                                  <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                                  <span className="uk-margin-xsmall-left">4.0</span>
                                  <span>(84)</span>
                                </div>
                                <div className="uk-width-expand uk-text-right">by Thomas Haller</div>
                              </div>
                            </div>
                            
                          </div>
                          </a>
                        </div>
                        <div>
                        <a href="recipe.html">
                          <div
                            className="uk-card">
                            <div className="uk-card-media-top uk-inline uk-light">
                              <img className="uk-border-rounded-medium" src="https://source.unsplash.com/6G98hiCJETA/300x160" alt="Course Title" />
                              <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                              <div className="uk-position-xsmall uk-position-top-right">
                                
                              </div>
                            </div>
                            <div>
                              <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Baked Macaroni and Cheese</h3>
                              <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                                <div className="uk-width-auto uk-flex uk-flex-middle">
                                  <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                                  <span className="uk-margin-xsmall-left">2.9</span>
                                  <span>(311)</span>
                                </div>
                                <div className="uk-width-expand uk-text-right">by Thomas Haller</div>
                              </div>
                            </div>
                            
                          </div>
                          </a>
                        </div>
                        <div>
                        <a href="recipe.html">
                          <div
                            className="uk-card">
                            <div className="uk-card-media-top uk-inline uk-light">
                              <img className="uk-border-rounded-medium" src="https://source.unsplash.com/_0JpjeqtSyg/300x160" alt="Course Title" />
                              <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium"></div>
                              <div className="uk-position-xsmall uk-position-top-right">
                                
                              </div>
                            </div>
                            <div>
                              <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Deb's General Tso's Chicken</h3>
                              <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                                <div className="uk-width-auto uk-flex uk-flex-middle">
                                  <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7"></span>
                                  <span className="uk-margin-xsmall-left">4.4</span>
                                  <span>(68)</span>
                                </div>
                                <div className="uk-width-expand uk-text-right">by Thomas Haller</div>
                              </div>
                            </div>
                            
                          </div>
                          </a>
                        </div>
            </div>
            <div className="uk-margin-large-top uk-text-small">
              <ul className="uk-pagination uk-flex-center uk-text-500 uk-margin-remove" data-uk-margin>
                <li><a href="/"><span data-uk-pagination-previous></span></a></li>
                <li><a href="/">1</a></li>
                <li className="uk-active"><span>2</span></li>
                <li><a href="/">3</a></li>
                <li><a href="/">4</a></li>
                <li><a href="/"><span data-uk-pagination-next></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="uk-section uk-section-default">
      <div className="uk-container">
        <div data-uk-grid>
          <div className="uk-width-expand">
            <h2>Trending Today</h2>          
          </div>
          <div className="uk-width-1-3 uk-text-right uk-light">
            <select className="uk-select uk-select-light uk-width-auto uk-border-pill uk-select-primary">
              <option>Featured</option>
              <option>Top Rated</option>
              <option>Trending</option>
            </select>
          </div>
        </div>      
        <div className="uk-child-width-1-2 uk-child-width-1-4@s" data-uk-grid>
          <div>
            <div
              className="uk-card uk-card-video">
              <div className="uk-inline uk-light">
                <img className="uk-border-rounded-large" src="https://source.unsplash.com/GTMGG-xvxdU/300x400" alt="Course Title" />
                <div className="uk-position-cover uk-card-overlay uk-border-rounded-large"></div>
                <div className="uk-position-center">
                  <span data-uk-icon="icon: play-circle; ratio: 3.4"></span>
                </div>
                <div className="uk-position-small uk-position-bottom-left">
                  <h5 className="uk-margin-small-bottom">Business Presentation Course</h5>
                  <div className="uk-text-xsmall">by Thomas Haller</div>
                </div>
              </div>
              
            </div>
          </div>
          <div>
            <div
              className="uk-card uk-card-video">
              <div className="uk-inline uk-light">
                <img className="uk-border-rounded-large" src="https://source.unsplash.com/HjWzkqW1dgI/300x400" alt="Course Title" />
                <div className="uk-position-cover uk-card-overlay uk-border-rounded-large"></div>
                <div className="uk-position-center">
                  <span data-uk-icon="icon: play-circle; ratio: 3.4"></span>
                </div>
                <div className="uk-position-small uk-position-bottom-left">
                  <h5 className="uk-margin-small-bottom">Business Presentation Course</h5>
                  <div className="uk-text-xsmall">by Thomas Haller</div>
                </div>
              </div>
              
            </div>
          </div>
          <div>
            <div
              className="uk-card uk-card-video">
              <div className="uk-inline uk-light">
                <img className="uk-border-rounded-large" src="https://source.unsplash.com/usfIE5Yc7PY/300x400" alt="Course Title" />
                <div className="uk-position-cover uk-card-overlay uk-border-rounded-large"></div>
                <div className="uk-position-center">
                  <span data-uk-icon="icon: play-circle; ratio: 3.4"></span>
                </div>
                <div className="uk-position-small uk-position-bottom-left">
                  <h5 className="uk-margin-small-bottom">Business Presentation Course</h5>
                  <div className="uk-text-xsmall">by Thomas Haller</div>
                </div>
              </div>
              
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-video">
              <div className="uk-inline uk-light">
                <img className="uk-border-rounded-large" src="https://source.unsplash.com/-YHSwy6uqvk/300x400" alt="Course Title" />
                <div className="uk-position-cover uk-card-overlay uk-border-rounded-large"></div>
                <div className="uk-position-center">
                  <span data-uk-icon="icon: play-circle; ratio: 3.4"></span>
                </div>
                <div className="uk-position-small uk-position-bottom-left">
                  <h5 className="uk-margin-small-bottom">Business Presentation Course</h5>
                  <div className="uk-text-xsmall">by Thomas Haller</div>
                </div>
              </div>
              
            </div>
          </div>      
        </div>
      </div>
    </div>
    
    
    
    <footer className="uk-section uk-section-default">
      <div className="uk-container uk-text-secondary uk-text-500">
        <div className="uk-child-width-1-2@s" data-uk-grid>
          <div>
            <a href="/" className="uk-logo">Edaza</a>
          </div>
          <div className="uk-flex uk-flex-middle uk-flex-right@s">
            
          </div>
        </div>
        <div className="uk-child-width-1-2@s uk-child-width-1-4@m" data-uk-grid>
          <div>
            <ul className="uk-list uk-text-small">
              <li><a className="uk-link-text" href="/">Presentations</a></li>
              <li><a className="uk-link-text" href="/">Professionals</a></li>
              <li><a className="uk-link-text" href="/">Stores</a></li>
            </ul>
          </div>
          <div>
            <ul className="uk-list uk-text-small">
              <li><a className="uk-link-text" href="/">Webinars</a></li>
              <li><a className="uk-link-text" href="/">Workshops</a></li>
              <li><a className="uk-link-text" href="/">Local Meetups</a></li>
            </ul>
          </div>
          <div>
            <ul className="uk-list uk-text-small">
              <li><a className="uk-link-text" href="/">Our Initiatives</a></li>
              <li><a className="uk-link-text" href="/">Giving Back</a></li>
              <li><a className="uk-link-text" href="/">Communities</a></li>
            </ul>
          </div>
          <div>
            <ul className="uk-list uk-text-small">
              <li><a className="uk-link-text" href="/">Contact Form</a></li>
              <li><a className="uk-link-text" href="/">Work With Us</a></li>
              <li><a className="uk-link-text" href="/">Visit Us</a></li>
            </ul>
          </div>
        </div>
        <div className="uk-margin-medium-top uk-text-small uk-text-muted">				
          <div>Made by <a className="uk-link-muted" href="https://unbound.studio/" target="_blank"  rel="noreferrer">Unbound Studio</a> in Guatemala City.</div>
        </div>
      </div>
    </footer>
    
    <div id="offcanvas" data-uk-offcanvas="flip: true; overlay: true">
      <div className="uk-offcanvas-bar">
        <a className="uk-logo" href="index.html">Kocina</a>
        <button className="uk-offcanvas-close" type="button" data-uk-close="ratio: 1.2"></button>
        <ul className="uk-nav uk-nav-primary uk-nav-offcanvas uk-margin-medium-top uk-text-center">
          <li className="uk-active"><a href="index.html">Home</a></li>
          <li ><a href="recipe.html">Recipe</a></li>
          <li ><a href="search.html">Search</a></li>
          <li ><a href="contact.html">Contact</a></li>
          <li ><a href="sign-in.html">Sign In</a></li>
          <li ><a href="sign-up.html">Sign Up</a></li>
        </ul>
        <div className="uk-margin-medium-top">
          <a className="uk-button uk-width-1-1 uk-button-primary" href="sign-up.html">Sign Up</a>
        </div>
        <div className="uk-margin-medium-top uk-text-center">
          <div data-uk-grid className="uk-child-width-auto uk-grid-small uk-flex-center">
            
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}


export default App;