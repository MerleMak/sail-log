import styled from 'styled-components';
import Button from '../Button/Button';
import { GrTrash } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import { Header } from '../styled-components/Header';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

export default function LogForm({ header, preloadedValues, onSubmitEntry }) {
  const navigate = useNavigate();
  const [image, setImage] = useState(
    preloadedValues?.image ? preloadedValues?.image : ''
  );
  const [loading, setLoading] = useState(false);
  const [process, setProcess] = useState(0);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'all',
    defaultValues: preloadedValues
      ? {
          tripDate: preloadedValues.tripDate,
          boatName: preloadedValues.boatName,
          crewNames: preloadedValues.crewNames,
          windSpeed: preloadedValues.windSpeed,
          windUnit: preloadedValues.windUnit,
          windDirection: preloadedValues.windDirection,
          waveHeight: preloadedValues.waveHeight,
          waveUnit: preloadedValues.waveUnit,
          notes: preloadedValues.notes,
          image: preloadedValues.image,
        }
      : {
          tripDate: '',
          boatName: '',
          crewNames: '',
          windSpeed: '',
          windUnit: 'kn',
          windDirection: '',
          waveHeight: '',
          waveUnit: 'm',
          notes: '',
          image: '',
        },
  });
  return (
    <Form
      autoComplete="off"
      aria-labelledby="header"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormHeader id="header">{header}</FormHeader>

      <Container>
        <Label htmlFor="tripDate">date of the trip</Label>
        <InputHint id="instruction">- Select the date of this trip -</InputHint>
        <LInput
          aria-describedby="instruction"
          name="tripDate"
          id="tripDate"
          {...register('tripDate', { required: true })}
          type="date"
        />
      </Container>

      <Container>
        <Label htmlFor="boatName">name of the boat</Label>
        <LInput
          name="boatName"
          id="boatName"
          {...register('boatName', { required: true, maxLength: 40 })}
          type="text"
        />
      </Container>

      <Container>
        <Label htmlFor="crewNames">names of the crew</Label>
        <InputHint id="instruction">
          - type in the names separated by comma -
        </InputHint>
        <LInput
          aria-describedby="instruction"
          name="crewNames"
          id="crewNames"
          {...register('crewNames', { maxLength: 100 })}
          type="text"
        />
      </Container>

      <SelectContainer>
        <Label htmlFor="windSpeed">speed of wind</Label>
        <SelectInput
          name="windSpeed"
          id="windSpeed"
          {...register('windSpeed', { maxLength: 5 })}
          type="text"
          labelText="speed of wind"
        />
        <Select name="windUnit" {...register('windUnit')}>
          <option value="Bft">Beaufort</option>
          <option value="m/s">m/s</option>
          <option value="km/h">km/h</option>
          <option value="kn">kn</option>
          <option value="mph">mph</option>
        </Select>
      </SelectContainer>

      <Container>
        <Label htmlFor="windDirection">direction of wind</Label>
        <Select
          {...register('windDirection', { maxLength: 4 })}
          id="windDirections"
          name="windDirection"
        >
          <option value="N">N</option>
          <option value="NE">NE</option>
          <option value="E">E</option>
          <option value="SE">SE</option>
          <option value="S">S</option>
          <option value="SW">SW</option>
          <option value="W">W</option>
          <option value="NW">NW</option>
        </Select>
      </Container>

      <SelectContainer>
        <Label htmlFor="waveHeight">height of waves</Label>
        <SelectInput
          name="waveHeight"
          id="waveHeight"
          {...register('waveHeight')}
          type="text"
        />
        <Select name="waveUnit" {...register('WaveUnit')}>
          <Option value="m">m</Option>
          <Option value="cm">cm</Option>
          <Option value="ft">ft</Option>
          <Option value="inch">inch</Option>
        </Select>
      </SelectContainer>

      <Container>
        <Label htmlFor="notes">notes</Label>
        <InputHint id="instruction">
          - type additional information about your trip -
        </InputHint>
        <Textarea
          name="notes"
          id="notes"
          rows={6}
          {...register('notes', { maxLength: 250 })}
        ></Textarea>
      </Container>

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
                width: '96%',
                margin: '2%',
              }}
              name="image"
              {...register('image')}
            />
          </Preview>
        ) : (
          <input
            type="file"
            name="file"
            id="file"
            aria-label="upload-your-picture"
            onChange={upload}
          />
        )}
      </ImageUpload>

      <SaveButton type="submit" variant="save">
        Save to logbook
      </SaveButton>
    </Form>
  );

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

  function onSubmit(data) {
    onSubmitEntry(data, image);
    navigate('../logbook');
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;
const FormHeader = styled(Header)`
  width: auto;
  font-size: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: #d5e5f2;
  padding: 10px;
  margin: 10px;
  border: #012e40 2px solid;
  border-radius: 20px;
`;

const SelectContainer = styled.div`
  color: #d5e5f2;
  padding: 10px;
  margin: 10px;
  border: #012e40 2px solid;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 2;
  grid-template-rows: 2;
  gap: 2px;
`;

const Select = styled.select`
  padding: 10px;
  background-color: #d5e5f2;
  border: #012e40 2px solid;
  border-radius: 15px;
  font-family: Raleway;
  font-size: 1rem;
  grid-column: 2/3;
  grid-row: 2/3;
  position: relative;
`;
const Option = styled.option`
  position: absolute;
  top: 100px;
`;

const SelectInput = styled.input`
  padding: 10px;
  background-color: #d5e5f2;
  border: #012e40 2px solid;
  border-radius: 15px;
  grid-column: 1/2;
`;

const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: 10px;
  margin: 5px;
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
    border-radius: 15px;
    width: 100%;
    background-color: #d5e5f2;
    color: #012e40;
    font-size: 1.3rem;
    padding: 10px;

    ::-webkit-file-upload-button {
      font-family: Raleway;
      margin-right: 10px;
      border-radius: 10px;
      background-color: #f2b705;
      color: #012e40;
      border: none;
      box-shadow: 1px 2px 2px black;
    }
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
  right: -2px;
  top: -5px;
  padding: 10px 10px 7px 10px;
  border-radius: 10px;
`;

const SaveButton = styled(Button)`
  width: fit-content;
  align-self: center;
  margin: 15px;
`;

const InputHint = styled.p`
  font-size: 0.9rem;
  margin: 5px;
`;

const LInput = styled.input`
  padding: 10px;
  background-color: #d5e5f2;
  border: #012e40 2px solid;
  border-radius: 15px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  background-color: #d5e5f2;
  border: #012e40 2px solid;
  border-radius: 15px;
`;
