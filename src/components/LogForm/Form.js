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
