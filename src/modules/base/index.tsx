import '../../styles/Dcp.module.scss';
// import home from '../../styles/Home.module.scss';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Typography } from "@mui/material";
import { addNumberAction } from "./redux-saga/reducer";
import { dcpBaseReducer } from "@/config/redux-saga/constants";
import { useTheme } from '@/branding/theme/context';

function RootContainer() {
  const { setCurrentTheme, themeType } = useTheme();
  const dispatch = useDispatch();
  const number = useSelector((state: any) => state[dcpBaseReducer].number);
  const handleAdd = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    dispatch(addNumberAction());
  };
  return (
    <Container classes={{root:'containerMui'}}>
      <Typography className={'content__paragraph'}>Main page</Typography>
      <Button onClick={handleAdd}>+ 1</Button>
      <Typography className={'content__paragraph'}>{number}</Typography>
      <Typography classes={{root:'content__paragraph'}} >
        This is an example how to make <b>themes</b> in NextJs application
      </Typography>
      <Button onClick={(event) => setCurrentTheme(themeType == 'dark'? 'light' : 'dark')}>Toggle Mode
      </Button>
    </Container>
  );
}

export default RootContainer;
