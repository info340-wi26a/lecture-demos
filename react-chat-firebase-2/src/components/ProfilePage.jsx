import React, { useState } from 'react';

import { getApp } from 'firebase/app';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';

export default function ProfilePage(props) {
  const { currentUser } = props;
  //convenience
  const displayName = currentUser.userName;

  const [imageFile, setImageFile] = useState(undefined)
  const [imageUrl, setImageUrl] = useState(currentUser.userImg) //initial URL

  //image uploading!
  const handleChange = (event) => {
    if(event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0]
      setImageFile(imageFile);
      console.log(URL.createObjectURL(imageFile));
      setImageUrl(URL.createObjectURL(imageFile));
    }
  }

  const handleImageUpload = async (event) => {
    console.log("Uploading", imageFile);

    const storage = getStorage(getApp(), "gs://info340-media.firebasestorage.app");

    const imageRef = storageRef(storage, "lecture-demo/userImg/"+currentUser.userId+".png");

    await uploadBytes(imageRef, imageFile);
    const url = await getDownloadURL(imageRef)
    console.log(url);

    //updates the user list
    //updateProfile(currentUser, {photoURL: url});
    //alternatively: push something to the RTDB, 

  }

  return (
    <div className="container">
      <h2>
        {props.currentUser.userName && displayName+"'s"} Profile
      </h2>

      <div className="mb-5 image-upload-form">
        <p className="mb-2"><img src={imageUrl} alt="user avatar preview"/></p>
        <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
        <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
        <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
      </div>
    </div>
  )
}