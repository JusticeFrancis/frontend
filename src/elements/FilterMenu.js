import React from 'react';
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  FormControlLabel,
  TextField,
  Collapse,
  InputBase,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const FilterMenu = ({showFilter, setShowFilter, setOpenFilterModal}) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (key) => {
    setExpanded((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="p-6 h-fit flex flex-col  space-y-2 bg-white shadow-md ">
      <div>
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-semibold flex-grow">Filter</h2>
          <IconButton 
          onClick={()=> {
            setShowFilter(!showFilter)
            setOpenFilterModal(!showFilter)
          }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        </div>

        <List component="nav">
          {/* Performer Type */}
          <ListItem button onClick={() => toggleExpand('performerType')} 
          
          className='border-b-[1px] border-gray-200'>
            <ListItemText primary="Performer Type" />
            <ExpandMoreIcon />
          </ListItem>
          <Collapse in={expanded.performerType} timeout="auto" unmountOnExit>
            <div className="pl-6">
              {['Actor', 'Dancer', 'Stunt Guy', 'Voice over', 'Comedian'].map((item, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox color='dark' defaultChecked={index === 0} />}
                  label={item}
                />
              ))}
            </div>
          </Collapse>
          

          {/* Age Range */}
          <ListItem button onClick={() => toggleExpand('ageRange')} className='border-b-[1px] border-gray-200' >
            <ListItemText primary="Age range" />
            <ExpandMoreIcon />
            
          </ListItem>
         
          <Collapse in={expanded.ageRange} timeout="auto" unmountOnExit>
       
            <div className="pl-6 flex space-x-4">
                <div>
                    <div className='text-[14px]'>FROM</div>
                    <InputBase label="FROM"  variant="outlined" size="small" className="w-20 border-[1px] border-gray-300" />
                </div>
              
                <div>
                    <div className='text-[14px]'>TO</div>
                    <InputBase label="FROM"  variant="outlined" size="small" className="w-20 border-[1px] border-gray-300" />
                </div>
            </div>
          </Collapse>
          

          {/* Gender */}
          <ListItem button onClick={() => toggleExpand('gender')}>
            <ListItemText primary="Gender" />
            <ExpandMoreIcon />
          </ListItem>
          <Collapse in={expanded.gender} timeout="auto" unmountOnExit>
            <div className="pl-6">
              {['Male', 'Female', 'Non-binary', 'Transgender', 'Gender-nonconforming', 'Something-else'].map(
                (item, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox color='dark'  defaultChecked={index < 2} />}
                    label={item}
                  />
                )
              )}
            </div>
          </Collapse>
          <hr className="border-t border-gray-200" />

          {/* Location */}
          <ListItem button onClick={() => toggleExpand('location')}>
            <ListItemText primary="Location" />
            <ExpandMoreIcon />
          </ListItem>
          <Collapse in={expanded.location} timeout="auto" unmountOnExit>
            <div className="pl-6">
              {['United States', 'France', 'Canada'].map((item, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox color='dark' defaultChecked={index === 0} />}
                  label={item}
                />
              ))}
            </div>
          </Collapse>
          <hr className="border-t border-gray-200" />

          {/* Ethnicity */}
          <ListItem button onClick={() => toggleExpand('ethnicity')}>
            <ListItemText primary="Ethnicity" />
            <ExpandMoreIcon />
          </ListItem>
          <Collapse in={expanded.ethnicity} timeout="auto" unmountOnExit>
            <div className="pl-6">
              <FormControlLabel
                control={<Checkbox color='dark' defaultChecked />}
                label="Mediterranean"
              />
            </div>
          </Collapse>
          <hr className="border-t border-gray-200" />

          {/* Race */}
          <ListItem button onClick={() => toggleExpand('race')}>
            <ListItemText primary="Race" />
            <ExpandMoreIcon />
          </ListItem>
          <Collapse in={expanded.race} timeout="auto" unmountOnExit>
            <div className="pl-6">
              {['Black / African Descent', 'Asian', 'Ethnically Ambiguous / Multiracial', 'Indigenous Peoples', 'Southeast Asian / Pacific Islander', 'South Asian / Indian'].map(
                (item, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox color='dark' defaultChecked={index < 2} />}
                    label={item}
                  />
                )
              )}
            </div>
          </Collapse>
          <hr className="border-t border-gray-200" />

          {/* Union Affiliation */}
          <ListItem button onClick={() => toggleExpand('unionAffiliation')}>
            <ListItemText primary="Union Affiliation" />
            <ExpandMoreIcon />
          </ListItem>
          <Collapse in={expanded.unionAffiliation} timeout="auto" unmountOnExit>
            <div className="pl-6">
              {['Union', 'SAG-AFTRA', 'Equity', 'ACTRA', 'BECTU', 'AGVA'].map((item, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox color='dark' defaultChecked={index < 2} />}
                  label={item}
                />
              ))}
            </div>
          </Collapse>
          <hr className="border-t border-gray-200" />

          {/* Disability Type */}
          <ListItem button onClick={() => toggleExpand('disabilityType')}>
            <ListItemText primary="Disability Type" />
            <ExpandMoreIcon />
          </ListItem>
          <Collapse in={expanded.disabilityType} timeout="auto" unmountOnExit>
            <div className="pl-6 overflow-y-scroll h-40  " style={{ scrollbarColor: "#3b82f6 #e5e7eb" }}>
              {['Mobility (crutch/wheelchair etc.)', 'Amputee/Limb Difference', 'Deaf/Hearing Loss', 'Vision/Blindness', 'Medical Condition (like cancer or MS)', 'Speech Difference'].map(
                (item, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox color='dark' defaultChecked={index < 2} />}
                    label={item}
                  />
                )
              )}
            </div>
          </Collapse>
          <hr className="border-t border-gray-200" />

          {/* Specific Disability Type */}
          <ListItem button onClick={() => toggleExpand('specificDisabilityType')}>
            <ListItemText primary="Specific Disability Type" />
            <ExpandMoreIcon />
          </ListItem>
          <Collapse in={expanded.specificDisabilityType} timeout="auto" unmountOnExit>
            <div className="pl-6">
              {['ALS', 'Amputee arm', 'Cerebral Palsy', 'Down Syndrome', 'Blind', 'Hard of Hearing'].map(
                (item, index) => (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox color='dark' defaultChecked={index < 2} />}
                    label={item}
                  />
                )
              )}
            </div>
          </Collapse>
          <hr className="border-t border-gray-200" />
        </List>
      </div>

      <div className="flex justify-between">
      <Button
            variant="contained"
            color="primary"
            className="bg-gradient-to-r from-[#000000] to-[#000000] text-white border-b-2 "
            sx={{
                borderRadius: '20px',
                textTransform: "none",
                py:1,
                px:3
            }}
          
          >
            Confirm
          </Button>
          <Button
            className="bg-white text-black  border-b-2 "
            sx={{
                borderRadius: '20px',
                textTransform: "none",
                py:1,
                px:3,
                border:'1px solid black',
                backgroundColor:'white',
                color:'black'
            }}
          
          >
           Clear filters
          </Button>
      </div>
    </div>
  );
};

export default FilterMenu;
