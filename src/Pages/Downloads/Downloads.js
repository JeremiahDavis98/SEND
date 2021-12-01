import React from "react";
import "./Downloads.css";

export default function Downloads() {
    return (
        <div className = "Downloads">
            <div className = "dwnlds">
                <h1>Physionet Resources</h1>
                <a href="https://physionet.org/static/published-projects/sgamp/squid-giant-axon-membrane-potential-1.0.0.zip">
                Squid Giant Axon Membrane Potential
                </a><br/>
                <p>
                The SGAMP database contains single-unit neuronal recordings of North Atlantic squid (Loligo pealei) giant axons in response to stimulus currents. The membrane potential and stimulus current are given for a total of 170 trials across 8 different axons.
                </p>

                <a href="https://physionet.org/static/published-projects/images/samples-of-mr-images-1.0.0.zip">
                Samples of MR Images
                </a><br/>
                <p>
                These magnetic resonance angiography (MRA) images show coronal slices acquired from consecutive anteroposterior positions within the torso. The study was performed on a 1.5T General Electric (GE) Signa imaging system with gadolinium-contrast-enhancement for visualization of the cardiopulmonary vasculature. The pulse sequence used was a 3D time-of-flight fast spoiled gradient recalled acquisition in steady state (FSPGR, TR=6.3, TE=1.4, NEX=1, FOV = 40cm, slice thickness = 1.2mm).

                <br/><br/>This sample image contains 76 frames. It is available in DICOM format (E1154S7I.dcm), as an animated GIF (E1154S7I.gif), as .ogg, .mp4, .webm, and .swf animations, or as individual PNG-format frames.

                <br/><br/>The original DICOM image was converted into GIF and PNG formats using reformat-dicom, a script that makes use of the ImageMagick convert utility (included in most Linux distributions and available freely for most other platforms from http://www.imagemagick.org).
                </p>

                <a href="https://physionet.org/static/published-projects/accelerometry-walk-climb-drive/labeled-raw-accelerometry-data-captured-during-walking-stair-climbing-and-driving-1.0.0.zip">
                Labeled raw accelerometry data captured during walking, stair climbing and driving
                </a>
                <p>
                The database contains raw accelerometry data collected during outdoor walking, stair climbing, and driving for 32 healthy adults. Accelerometry data were collected simultaneously at four body locations: left wrist, left hip, left ankle, and right ankle, at a sampling frequency of 100 Hz. The 3-axial ActiGraph GT3X+ devices were used to collect the data. The data include labels of activity type performed (walking, descending stairs, ascending stairs, driving, clapping) for each time point of data collection. Basic demographic information of participants is also provided. All data are anonymized.
                </p>

                <a href="https://physionet.org/static/published-projects/cded/cerebromicrovascular-disease-in-elderly-with-diabetes-1.0.0.zip">
                Cerebromicrovascular Disease in Elderly with Diabetes 
                </a>
                <p>
                This dataset was collected as part of a prospective observational study to evaluate the effects of type 2 diabetes mellitus (DM) on cerebral vasoregulation, perfusion and functional outcomes, measured by blood flow responses to hypocapnia and hypercapnia, Valsalva maneuver, head-up tilt, and sit-to-stand test. The dataset comprises of observations from 69 diabetic and control participants (aged 55 to 75 years) with continuous measurements of cerebral blood flow using transcranial Doppler and MRI (magnetic resonance imaging), heart rate, blood pressure, and respiratory parameters, balance, walking, laboratory and retinopathy measures at baseline, and 41 subjects who completed the two-years of follow-up. Regional gray, white matter and cerebrospinal fluid volumes were quantified using a segmentation method applied on T1- and T2- weighted images and perfusion maps, using a continuous arterial spin labeling (CASL) images at 3 Tesla MRI. White matter integrity was determined from fluid attenuated inversion recovery (FLAIR) and diffusion tensor imaging (DTI) MRI. Dynamics of cerebral vasoregulation to CO2 challenge and orthostatic stress were measured using Transcranial Doppler ultrasound (TCD).
                </p>

                <a href="https://physionet.org/static/published-projects/propofol-anesthesia-dynamics/behavioral-and-autonomic-dynamics-during-propofol-induced-unconsciousness-1.0.zip">
                Behavioral and autonomic dynamics during propofol-induced unconsciousness
                </a>
                <p>
                During general anesthesia, both behavioral and autonomic changes are caused by the administration of anesthetics such as propofol. Propofol produces unconsciousness by creating highly structured oscillations in brain circuits. The anesthetic also has autonomic effects due to its actions as a vasodilator and myocardial depressant. Understanding how autonomic dynamics change in relation to propofol-induced unconsciousness is an important scientific and clinical question since anesthesiologists often infer changes in level of unconsciousness from changes in autonomic dynamics.

                <br/><br/>Therefore, we present a dataset combining physiology-based indices for heart rate variability and electrodermal activity with a robust statistical tool to compare behavioral and multimodal autonomic changes before, during, and after propofol-induced unconsciousness. This dataset was recorded from nine healthy volunteers during computer-controlled administration of propofol. 
                </p>
            </div>
        </div>
    )
}