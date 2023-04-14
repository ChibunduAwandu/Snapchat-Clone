import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetCameraImage, selectCameraImage } from './features/cameraSlice';
import "./Preview.css";
import {useNavigate} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import CreateIcon from '@mui/icons-material/Create';
import NoteIcon from '@mui/icons-material/Note';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CropIcon from '@mui/icons-material/Crop';
import TimerIcon from '@mui/icons-material/Timer';
import SendIcon from "@mui/icons-material/Send"
import { v4 as uuidv4 } from 'uuid';
import { db, storage  } from './firebase';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getStorage, getDownloadURL, ref, uploadBytes, uploadString } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

function Preview() {
    const cameraImage = useSelector(selectCameraImage);
    const history = useNavigate();
    const dispatch = useDispatch();

    useEffect(() =>{
        if (!cameraImage) {
            
            history("/", { replace: true })

        }
    }, [cameraImage, history]);

    const closePreview = () => {
        dispatch(resetCameraImage());
        


    };
    const sendPost = () => {
        const id = uuidv4();
        const storageRef = ref(storage, `posts/${id}`);
        const metadata = {
          contentType: 'image/jpeg',
        };
        const uploadTask = uploadString(storageRef, cameraImage, 'data_url', metadata);
      
        uploadTask.on('state_changed', 
          (snapshot) => {
            // Monitor progress
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
          }, 
          (error) => {
            // Handle errors
            console.error(error);
          }, 
          () => {
            // Handle successful upload
            console.log('Upload successful');
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
              db.collection('posts').add({
                imageUrl: url,
                username: 'Rebecca',
                read: false,
                timestamp: getFirestore.FieldValue.serverTimestamp(),
              });
              history('/chats', { replace: true });
            });
          }
        );
      };
      
      


    //original
    // const sendPost = () => {
    //     const id = uuidv4();//generates a random string
    //     const uploadTask = ref("posts/${id}")
    //         .putString(cameraImage, "data_url"); //makes an upload to firebase storage

    //     uploadTask.on("state_changed", null, (error) => {
    //         //ERROR function
    //         console.log(error)
    //     }, 
    //     () => {
    //         // COMPLETE function
    //         ref('post')
    //         .child(id)
    //         .getDownloadURL()
    //         .then(url => {
    //             db.collection("posts").add({
    //                 imageUrl: url,
    //                 username: "Rebecca",
    //                 read: false,
    //                 // profilePic,
    //                 timestamp: getFirestore.FieldValue.serverTimestamp(),
                   


    //             })
    //             history("/chats", { replace: true });
    //         })
    //         //gets the download URL
    //     }
        
    //     );



    // };



    
    // const sendPost = () => {
    //     const id = uuidv4();
    //     const storageRef = ref(storage, `posts/${id}`);
    //     uploadString(storageRef, cameraImage, "data_url")
    //       .then((snapshot) => {
    //         snapshot.ref.getDownloadURL().then((url) => {
    //           db.collection("posts").add({
    //             imageUrl: url,
    //             username: "Rebecca",
    //             read: false,
    //             timestamp: getFirestore.FieldValue.serverTimestamp(),
    //           });
    //           history("/chats", { replace: true });
    //         });
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   };
 

    return( <div className='preview'>
        <CloseIcon onClick={closePreview} className='preview_close'/>
        <div className='preview_toolbarRight'>
        <TextFieldsIcon/>
        <CreateIcon/>
        <NoteIcon/>
        <MusicNoteIcon/>
        <AttachFileIcon/>
        <CropIcon/>
        <TimerIcon/>
        </div>

        <img src={cameraImage} alt="" />

        <div onClick = {sendPost}className='preview_footer'>
        <h2>Send Now</h2>
        <SendIcon fontSize= "small" className= "preview_sendIcon" />
        </div>
    </div>);
}

export default Preview;
