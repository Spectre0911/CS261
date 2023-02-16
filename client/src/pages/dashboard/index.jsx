import React, { Component }  from 'react';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { connect } from "react-redux"
import {FaBell} from 'react-icons/fa';
import {RiDashboardFill} from 'react-icons/ri'
import {BsBriefcaseFill} from 'react-icons/bs'
import {BiTask} from 'react-icons/bi'
import {AiFillWarning} from 'react-icons/ai'
import "./index.css"
import Table from './Table';

const Dashboard = () => {


  return (
    <div className='main'>
        <div className='grid'>
            <div className='infoBox'>
                <div className='metricTitle'>
                    Active projects
                </div>
                <div className='metricNumber'>
                    25
                </div>
                <div className="metricCircleBackground metricBlueBackground">
                    <div className='metricIcon metricBlueIcon'>
                        <BsBriefcaseFill/>
                    </div>
                </div>
            </div>

            <div className='infoBox'>
                <div className='metricTitle'>
                    Tasks to complete
                </div>
                <div className='metricNumber'>
                    14
                </div>
                <div className="metricCircleBackground metricBlueBackground">
                    <div className='metricIcon metricBlueIcon'>
                        <BiTask/>
                    </div>
                </div>
            </div>

            <div className='infoBox'>
                <div className='metricTitle'>
                    Notifications
                </div>
                <div className='metricNumber'>
                    20
                </div>
                <div className="metricCircleBackground metricBlueBackground">
                    <div className='metricIcon metricBlueIcon'>
                        <FaBell/>
                    </div>
                </div>
            </div>

            <div className='infoBox'>
                <div className='metricTitle'>
                    Warnings
                </div>
                <div className='metricNumber'>
                    2
                </div>
                <div className="metricCircleBackground metricRedBackground">
                    <div className='metricIcon metricRedIcon'>
                        <AiFillWarning/>
                    </div>
                </div>
            </div>

            <div className="infoBox2 projectTable">
                <div className='metricTitle2'>
                    Project Summary
                </div>
                <Table/>
            </div>

            <div className="infoBox2">
            </div>
            


                
                


                {/* <div className='icon'>
                    <FaBell />
                </div>
                <div className="number">
                    <p>50</p>
                </div>
                <div className="metric">
                    <p>Notifications</p>
                </div> */}
            {/* <ProjectComponent/>
            <ProjectComponent/>
            <ProjectComponent/> */}

        </div>
    </div>
  );
};


export default Dashboard;
