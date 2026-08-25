import React from 'react'
import './Certificates.css';
import { PiMedal } from "react-icons/pi";
import { GoTrophy } from "react-icons/go";

export default function Certificates() {
  return (
    <div>
      <section class="certifications">

    <span class="section-tag">RECOGNITIONS</span>

    <h2>Certifications & Achievements</h2>

    <div class="underline"></div>

    <div class="certificate-container">

        <div class="certificate-card">

            <div class="icon">
                <PiMedal />
            </div>

            <h3>Meta Front-End Development</h3>

            <p>Coursera</p>

        </div>

        <div class="certificate-card">

            <div class="icon">
                <PiMedal />
            </div>

            <h3>Cloud Computing</h3>

            <p>NPTEL</p>

        </div>

        <div class="certificate-card">

            <div class="icon">
                <PiMedal />
            </div>

            <h3>SQL & Java Basics</h3>

            <p>SkillRack</p>

        </div>

        <div class="certificate-card achievement">

            <div class="icon white">
                <GoTrophy />
            </div>

            <small>ACHIEVEMENT</small>

            <h3>🏆 1st Prize — Codathon</h3>

            <p>SLA Institute</p>

        </div>

    </div>

</section>
    </div>
  )
}
