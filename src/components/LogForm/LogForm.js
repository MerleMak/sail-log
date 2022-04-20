import styled from 'styled-components';
import LogInput from '../LogInput/LogInput';
import LogTextarea from '../LogTextarea/LogTextarea';
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
  const [tripDate, setTripDate] = useState(
    preloadedValues?.tripDate ? preloadedValues?.tripDate : ''
  );

  const [boatName, setBoatName] = useState(
    preloadedValues?.boatName ? preloadedValues?.boatName : ''
  );
  console.log(preloadedValues.boatName);

  const [crewNames, setCrewNames] = useState(
    preloadedValues?.crewNames ? preloadedValues?.crewNames : ''
  );
  const [windSpeed, setWindSpeed] = useState(
    preloadedValues?.windSpeed ? preloadedValues?.windSpeed : ''
  );
  const [windUnit, setWindUnit] = useState(
    preloadedValues?.windUnit ? preloadedValues?.windUnit : ''
  );
  const [windDirection, setWindDirection] = useState(
    preloadedValues?.windDirection ? preloadedValues?.windDirection : ''
  );
  const [waveHeight, setWaveHeight] = useState(
    preloadedValues?.waveHeight ? preloadedValues?.waveHeight : ''
  );
  const [waveUnit, setWaveUnit] = useState(
    preloadedValues?.waveUnit ? preloadedValues?.waveUnit : ''
  );
  const [notes, setNotes] = useState(
    preloadedValues?.notes ? preloadedValues?.notes : ''
  );
  const [image, setImage] = useState(
    preloadedValues?.image ? preloadedValues?.image : ''
  );
  const [loading, setLoading] = useState(false);
  const [process, setProcess] = useState(0);

  const {
    register,
    formState: { errors },
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
    <Form autoComplete="off" aria-labelledby="header" onSubmit={onSubmit}>
      <FormHeader id="header">{header}</FormHeader>

      <Container>
        <LogInput
          name="tripDate"
          {...register('tripDate', { required: true })}
          type="date"
          labelText="date of the trip"
          inputHint="- Select the date of this trip -"
          onChange={event => {
            setTripDate(event.target.value);
          }}
        />
      </Container>

      <Container>
        <LogInput
          name="boatName"
          {...register('boatName', { required: true, maxLength: 40 })}
          type="text"
          labelText="name of the boat"
          onChange={event => {
            setBoatName(event.target.value);
          }}
        />
      </Container>

      <Container>
        <LogInput
          name="crewNames"
          {...register('crewNames', { maxLength: 100 })}
          type="text"
          labelText="names of the crew"
          inputHint="- type in the names separated by a comma -"
          onChange={event => {
            setCrewNames(event.target.value);
          }}
        />
      </Container>

      <SelectContainer>
        <Input
          name="windSpeed"
          {...register('windSpeed', { maxLength: 5 })}
          type="text"
          labelText="speed of wind"
          onChange={event => {
            setWindSpeed(event.target.value);
          }}
        />
        <Select
          {...register('windUnit')}
          onChange={event => {
            setWindUnit(event.target.value);
          }}
        >
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
          onChange={event => {
            setWindDirection(event.target.value);
          }}
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
        <Input
          name="waveHeight"
          {...register('waveHeight', { maxLength: 4 })}
          type="text"
          labelText="height of waves"
          onChange={event => {
            setWaveHeight(event.target.value);
          }}
        />

        <Select
          {...register('WaveUnit')}
          onChange={event => {
            setWaveUnit(event.target.value);
          }}
        >
          <option value="m">m</option>
          <option value="cm">cm</option>
          <option value="ft">ft</option>
          <option value="inch">inch</option>
        </Select>
      </SelectContainer>

      <Container>
        <LogTextarea
          name="notes"
          {...register('waveHeight', { maxLength: 4 })}
          labelText="notes"
          textareaHint="- type additional information to your trip -"
          onChange={event => {
            setNotes(event.target.value);
          }}
        ></LogTextarea>
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

  function onSubmit() {
    onSubmitEntry({
      tripDate: tripDate,
      boatName: boatName,
      crewNames: crewNames,
      windSpeed: windSpeed,
      windUnit: windUnit,
      windDirection: windDirection,
      waveHeight: waveHeight,
      waveUnit: waveUnit,
      notes: notes,
      image: image,
    });
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
  font-size: 32px;
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
  grid-template-rows: 3;
  gap: 2px;
`;

const Input = styled(LogInput)`
  border: none;
  width: 90%;
`;

const Select = styled.select`
  padding: 10px;
  background-color: #d5e5f2;
  border: #012e40 2px solid;
  border-radius: 15px;
  font-family: Raleway;
  font-size: 1rem;
  grid-column: 2/3;
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
