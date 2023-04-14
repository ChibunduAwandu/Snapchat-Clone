import "./WebcamCapture.css";
import React, {useCallback, useRef} from 'react';
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { setCameraImage } from './features/cameraSlice';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",

};



function WebcamCapture(){

    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useNavigate();
    //BEM naming convencion

    

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        history("/preview");

    }, [webcamRef]);
    return ( <div className= "webcamCapture">
        <Webcam
        audio= {false}
        height ={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
        />

        <RadioButtonUncheckedIcon className='webcamCapture_button'
        onClick={capture}
        fontSize="large"
        />


        </div>
    );
    
}

export default WebcamCapture;