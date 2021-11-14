import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Members</span>
      <ul className="widgetSmList">
        
          <li className="widgetSmListItem">
            <img
              src={
               
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Tetyana Yaremko</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        
          <li className="widgetSmListItem">
            <img
              src={
               
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Diego Banovaz</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        
          <li className="widgetSmListItem">
            <img
              src={
               
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Ubeyt Demir</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        
          <li className="widgetSmListItem">
            <img
              src={
               
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Stefano Casassola</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        
          <li className="widgetSmListItem">
            <img
              src={
               
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Riccardo Gullin</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        
      </ul>
    </div>
  );
}
