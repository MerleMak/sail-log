import styled from 'styled-components';
import LogInput from '../LogInput/LogInput';
import LogTextarea from '../LogTextarea/LogTextarea';
import Button from '../Button/Button';
import { Header } from '../styled-components/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function LogForm({ onSubmit }) {
  const [formData, setFormData] = useState({});
  const [image, setImage] = useState('');
  const navigate = useNavigate();

  function handleOnChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    formData.append('upload_preset', PRESET);

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    setImage(response.data.url);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    onSubmit(formData, image);
    form.reset();
    navigate('../logbook');
  }

  return (
    <Form autoComplete="off" aria-labelledby="header" onSubmit={handleSubmit}>
      <CreateHeader id="header">create new log entry</CreateHeader>
      <LogInput
        type="text"
        labelText="name of the boat"
        name="boatName"
        required
        onChange={handleOnChange}
      ></LogInput>
      <LogInput
        type="text"
        labelText="names of the crew"
        inputHint="type in the names separated by a comma"
        name="crewNames"
        required
        onChange={handleOnChange}
      ></LogInput>
      <LogInput
        type="text"
        labelText="speed of wind"
        name="windSpeed"
        required
        onChange={handleOnChange}
      ></LogInput>
      <LogInput
        type="text"
        labelText="direction of wind"
        name="windDirection"
        required
        onChange={handleOnChange}
      ></LogInput>
      <LogInput
        type="text"
        labelText="height of waves"
        name="waveHeight"
        required
        onChange={handleOnChange}
      ></LogInput>
      <LogTextarea
        type="text"
        labelText="notes:"
        textareaHint="type information like wind direction, wave size.."
        name="notes"
        onChange={handleOnChange}
      ></LogTextarea>
      <ImageUpload>
        {image ? (
          <img
            src={image}
            alt=""
            style={{
              width: '90%',
              margin: '5%',
            }}
          />
        ) : (
          <input
            type="file"
            name="file"
            aria-label="upload-your-picture"
            onChange={upload}
          />
        )}
      </ImageUpload>
      <SaveButton type="submit" variant="save">
        save
      </SaveButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

const CreateHeader = styled(Header)`
  width: auto;
  font-size: 32px;
`;

const ImageUpload = styled.div`
  border: #012e40 2px solid;
  border-radius: 20px;
  margin: 10px;
  padding: 10px;
  input {
    border: #012e40 2px solid;
    border-radius: 10px;
    width: 100%;
    background-color: #d5e5f2;
    color: #012e40;
  }
`;

const SaveButton = styled(Button)`
  width: 100px;
  align-self: center;
  margin: 10px;
`;
