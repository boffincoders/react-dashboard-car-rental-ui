import "./App.sass";
import { BrowserRouter } from "react-router-dom";
import logo from "./image/logo.png";
import car1 from "./image/car1.png";
import car2 from "./image/car2.png";
import car3 from "./image/car3.png";
import car4 from "./image/car4.png";
import car5 from "./image/car5.png";
import React, { Component, useState } from "react";

function App() {
  const [sidebarVisibility, setSidebarVisibility] = useState(true);
  return (
    <div className="App">
      <section className="dashboard">
        <div
          id="mySidenav"
          className="sidenav"
          style={{ width: sidebarVisibility ? "250px" : "0" }}
        >
          <div className="navi">
            <a to="/">
              <img src={logo} />
            </a>
            <a
              href="javascript:void(0)"
              className="closebtn"
              onClick={() => {
                setSidebarVisibility(!sidebarVisibility);
              }}
            >
              &times;
            </a>
          </div>
          <ul className="menu">
            <li>
              <a to="/">
                {" "}
                <i className="fa fa-dashboard"></i>Dashboard
              </a>
            </li>
            <li>
              <a to="/">
                <i className="fa fa-bandcamp"></i>Brand
              </a>
            </li>
            <li>
              <a to="/">
                <i className="	fa fa-car"></i>Passenger
              </a>
            </li>
            <li>
              <a to="/">
                <i className="fa fa-file-zip-o"></i>Features
              </a>
            </li>
            <li>
              <a to="/">
                <i className="fa fa-map-signs"></i>Car Types
              </a>
            </li>
            <li className="bottom">
              <a to="/">
                <i className="fa fa-sign-out"></i>Logout
              </a>
            </li>
          </ul>
        </div>

        <div
          id="main"
          style={{ marginLeft: sidebarVisibility ? "250px" : "0" }}
        >
          <div className="col-sm-12">
            <div className="statistics">
              <h6
                type="button"
                className="title"
                onClick={() => {
                  setSidebarVisibility(!sidebarVisibility);
                }}
              >
                &#9776;Dashboard
              </h6>
              {sidebarVisibility}
              <div className="row topbar">
                <div className="col-sm-10">
                  <div className="input-group content">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type in to Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-light" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                      <button className="btn btn-light" type="submit">
                        <i className="fa fa-bell"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <div className="profile">
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        Bruno Silva
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Link 1
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Link 2
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Link 3
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row col-sm-12">
                <div className="col-sm-8">
                  <div className="income">
                    <div id="bar-chart"></div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="saving">
                    <div className="collection">
                      <i className="fa fa-desktop"></i>
                      <span>Lorem ipsume</span>
                      <div className="progress">
                        <div
                          className="progress-bar1"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="collection">
                      <i className="fa fa-home"></i>
                      <span>Lorem ipsume</span>
                      <div className="progress">
                        <div
                          className="progress-bar2"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="collection">
                      <i className="fa fa-gg-circle"></i>
                      <span>Lorem ipsume</span>
                      <div className="progress">
                        <div
                          className="progress-bar3"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="collection">
                      <i className="fa fa-bitbucket-square"></i>
                      <span>Lorem ipsume</span>
                      <div className="progress">
                        <div
                          className="progress-bar4"
                          role="progressbar"
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8">
                  <div className="booking">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Recent car bookings</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img src={car1} />
                            <kbd>EN15014888</kbd>
                          </td>
                          <td>
                            <span>March 22, 10:59 AM</span>
                          </td>
                          <td>
                            <span>BMW3</span>
                          </td>
                          <td>
                            <label>$ 20.00</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src={car2} />
                            <kbd>EN15014888</kbd>
                          </td>
                          <td>
                            <span>March 24, 11:59 AM</span>
                          </td>
                          <td>
                            <span>Ferrari</span>
                          </td>
                          <td>
                            <label>$ 40.00</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src={car3} />
                            <kbd>EN15014888</kbd>
                          </td>
                          <td>
                            <span>March 20, 1:59 AM</span>
                          </td>
                          <td>
                            <span>Lamborghini</span>
                          </td>
                          <td>
                            <label>$ 50.00</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src={car4} />
                            <kbd>EN15014888</kbd>
                          </td>
                          <td>
                            <span>March 15, 5:59 AM</span>
                          </td>
                          <td>
                            <span>Tesla</span>
                          </td>
                          <td>
                            <label>$ 120.00</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src={car5} />
                            <kbd>EN15014888</kbd>
                          </td>
                          <td>
                            <span>March 11, 09:45 AM</span>
                          </td>
                          <td>
                            <span>BMW 2</span>
                          </td>
                          <td>
                            <label>$ 400.00</label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="expensive">
                    <div className="row ">
                      <div className="col-sm-4">
                        <div className="rate">
                          <h5>$ 10.00</h5>
                          <p>Daily Report</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="rate">
                          <h5>$ 35.00</h5>
                          <p>Weekly Report</p>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="rate">
                          <h5>$ 90.00</h5>
                          <p>Monthly Report</p>
                        </div>
                      </div>
                    </div>
                    <div className="row expend">
                      <div className="col-sm-4">
                        <div className="progress12 blue">
                          <span className="progress12-left">
                            <span className="progress12-bar"></span>
                          </span>
                          <span className="progress12-right">
                            <span className="progress12-bar"></span>
                          </span>
                          <div className="progress12-value">50%</div>
                        </div>
                      </div>
                      <div className="col-sm-8">
                        <ul className="chart">
                          <li className="list1">
                            <label>Lorem ipsum</label>
                          </li>
                          <li className="list2">
                            <label>Lorem ipsum</label>
                          </li>
                          <li className="list3">
                            <label>Lorem ipsum</label>
                          </li>
                          <li className="list4">
                            <label>Lorem ipsum</label>
                          </li>
                          <li className="list5">
                            <label>Lorem ipsum</label>
                          </li>
                          <li className="list6">
                            <label>Lorem ipsum</label>
                          </li>
                          <li className="list7">
                            <label>Lorem ipsum</label>
                          </li>
                          <li className="list8">
                            <label>Lorem ipsum</label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
