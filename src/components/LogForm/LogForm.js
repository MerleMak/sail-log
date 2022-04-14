import styled from 'styled-components';
import LogInput from '../LogInput/LogInput';
import LogTextarea from '../LogTextarea/LogTextarea';
import Button from '../Button/Button';
import { GrTrash } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import { Header } from '../styled-components/Header';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function LogForm({ onSubmit }) {
  const [formData, setFormData] = useState({});
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [process, setProcess] = useState(0);
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
        onUploadProgress: progressEvent => {
          setLoading(true);
          let percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setProcess(percent);
        },
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    setImage(response.data.url);
    setLoading(false);
  }

  function handleRemoveImage() {
    setImage('');
    setProcess(0);
    setLoading(false);
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
        labelText="notes"
        textareaHint="type information like wind direction, wave size.."
        name="notes"
        onChange={handleOnChange}
      ></LogTextarea>
      <ImageUpload>
        <label htmlFor="file">upload a picture of your trip</label>
        {loading && (
          <UploadProgress>uploading image...{process}%</UploadProgress>
        )}
        {image ? (
          <Preview>
            <DeleteButton
              type="button"
              variant="deny"
              onClick={handleRemoveImage}
              aria-label="Remove this image from the entry"
            >
              <IconContext.Provider value={{ stroke: 'white' }}>
                <GrTrash />
              </IconContext.Provider>
            </DeleteButton>

            <img
              src={image}
              alt="your sailing trip"
              style={{
                width: '90%',
                margin: '5%',
              }}
            />
          </Preview>
        ) : (
          <input
            type="file"
            name="file"
            id="file"
            aria-label="upload-your-picture"
            onChange={upload}
            multiple="multiple"
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  label {
    font-size: 1.5rem;
    padding: 5px;
  }
  input {
    border: #012e40 2px solid;
    border-radius: 10px;
    width: 100%;
    background-color: #d5e5f2;
    color: #012e40;
    font-size: 1.5rem;
  }
`;

const UploadProgress = styled.div`
  margin: 10px;
`;

const Preview = styled.div`
  border-radius: 10px;
  position: relative;
  img {
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
  }
`;

const DeleteButton = styled(Button)`
  position: absolute;
  right: 5px;
  box-shadow: 1px 2px 2px black;
`;

const SaveButton = styled(Button)`
  width: 100px;
  align-self: center;
  margin: 10px;
`;
