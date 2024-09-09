import React from "react";
import { InputBase, Checkbox, Button, FormControl, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CloudUploadOutlined } from "@mui/icons-material";

const CustomInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1),
    border: "1px solid #C5C5C5",
    borderRadius: "4px",
    backgroundColor: "#fff",
  },
}));

const CustomCheckbox = styled(Checkbox)({
  color: "black",
  "&.Mui-checked": {
    color: "black",
  },
});

const PostNotice = () => {
    const [industry, setIndustry] = React.useState('');

    const handleChange = (event) => {
      setIndustry(event.target.value);
    };
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white my-8 ">
      <div className="relative">
        <div className="text-[20px] mb-4 font-[600] text-center  ">
          {" "}
          Post a{" "}
          <span className="bg-gradient-to-r from-[#FF7C14] to-[#00A3D3] bg-clip-text text-transparent">
            Notice
          </span>
        </div>
        <div className="absolute lg:top-1   lg:left-4 right-4 underline text-blue-500">
          Back
        </div>
      </div>

      <div className="font-bold text-[17px] my-2">Notice details</div>

      <form>
        <div className="mb-4">
          <label className="block text-[13px] font-medium text-[#101828]">
            NOTICE TITLE (EX. CHARACTER, ROLE, ETC)*
          </label>
          <CustomInput fullWidth placeholder="Enter the notice title" />
        </div>

        <div className="mb-4">
          <label className="block text-[13px] font-medium text-[#101828] mb-2">
            NOTICE TYPES (check all that apply)
          </label>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
            <div>
              <CustomCheckbox /> Actor
            </div>
            <div>
              <CustomCheckbox /> Comedian
            </div>
            <div>
              <CustomCheckbox /> Dancer
            </div>
            <div>
              <CustomCheckbox /> Musician
            </div>
            <div>
              <CustomCheckbox /> Public Speaker/Moderator
            </div>
            <div>
              <CustomCheckbox /> Singer
            </div>
            <div>
              <CustomCheckbox /> Stunt Performer
            </div>
            <div>
              <CustomCheckbox /> Trainer/Consultant
            </div>
            <div>
              <CustomCheckbox /> Voice Actor
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-[13px] font-medium text-[#101828]">
            NOTICE DESCRIPTION
          </label>
          <CustomInput
            fullWidth
            placeholder="Enter the notice description"
            multiline
            rows={4}
          />
        </div>

        <h2 className="text-xl font-semibold text-[#101828] mb-4">
          Target performer attributes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-[13px] font-medium text-[#101828]">
              REQUIRED SKILLS
            </label>
            <CustomInput fullWidth placeholder="Enter required skills" />
          </div>

          <div className="mb-4">
            <label className="block text-[13px] font-medium text-[#101828]">
              LANGUAGE(s)
            </label>
            <CustomInput fullWidth placeholder="Enter languages" />
          </div>

          <div className="grid lg:grid-cols-2 gap-2">
            <div className="mb-4 ">
              <label className="block text-[13px] font-medium text-[#101828]">
                MINIMUM ACTING AGE
              </label>
              <CustomInput fullWidth placeholder="Enter minimum age" />
            </div>

            <div className="mb-4">
              <label className="block text-[13px] font-medium text-[#101828]">
                MAXIMUM ACTING AGE
              </label>
              <CustomInput fullWidth placeholder="Enter maximum age" />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[13px] font-medium text-[#101828]">
              TERM AND TIMEFRAME
            </label>
            <CustomInput fullWidth placeholder="Enter term and timeframe" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-[14px] font-normal text-[#101828] mb-2">
            AVAILABLE TO UNION STATUS
          </label>
          <div className="grid grid-cols-2 gap-4 text-[14px]">
            <div>
              <CustomCheckbox /> Non-union member
            </div>
            <div>
              <CustomCheckbox /> Union member
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-[14px] font-normal text-[#101828] mb-2">
            GENDER
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[14px]">
            <div>
              <CustomCheckbox /> Male
            </div>
            <div>
              <CustomCheckbox defaultChecked /> Female
            </div>
            <div>
              <CustomCheckbox /> Non-binary
            </div>
            <div>
              <CustomCheckbox /> Transgender
            </div>
            <div>
              <CustomCheckbox /> Gender-nonconforming
            </div>
            <div>
              <CustomCheckbox /> Something else
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-[13px] font-normal text-[#101828] mb-2">
            DISABILITY CATEGORY
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[14px]">
            <div>
              <CustomCheckbox /> Mobility (crutches, wheelchair, etc.)
            </div>
            <div>
              <CustomCheckbox /> Amputee/Limb Difference
            </div>
            <div>
              <CustomCheckbox /> Deaf/Hearing Loss
            </div>
            <div>
              <CustomCheckbox /> Vision/Blindness
            </div>
            <div>
              <CustomCheckbox /> Learning Disability (e.g., Dyslexia)
            </div>
            <div>
              <CustomCheckbox /> Mental Health (e.g., Bipolar)
            </div>
            <div>
              <CustomCheckbox /> Brain Injury
            </div>
            <div>
              <CustomCheckbox /> Medical Condition (like cancer or MS)
            </div>
            <div>
              <CustomCheckbox /> Perceptible Physical Difference
            </div>
            <div>
              <CustomCheckbox /> Invisible Disability
            </div>
            <div>
              <CustomCheckbox /> Speech Difference
            </div>
            <div>
              <CustomCheckbox /> Cognition/Intellectual Developmental Disability
            </div>
            <div>
              <CustomCheckbox /> Neurodivergent
            </div>
            <div>
              <CustomCheckbox /> Other
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-normal text-[#101828] mb-2">
            RACE
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-[14px]">
            <div>
              <CustomCheckbox /> Black / African Descent
            </div>
            <div>
              <CustomCheckbox /> Asian
            </div>
            <div>
              <CustomCheckbox /> Ethnically Ambiguous / Multiracial
            </div>
            <div>
              <CustomCheckbox /> Indigenous Peoples
            </div>
            <div>
              <CustomCheckbox /> Latinx
            </div>
            <div>
              <CustomCheckbox /> Middle Eastern
            </div>
            <div>
              <CustomCheckbox /> South Asian / Indian
            </div>
            <div>
              <CustomCheckbox /> Southeast Asian / Pacific Islander
            </div>
            <div>
              <CustomCheckbox /> White / European Descent
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-[13px] font-medium text-[#101828]">
              PROJECT START DATE
            </label>
            <CustomInput type="date" fullWidth />
          </div>

          <div className="mb-4">
            <label className="block text-[13px] font-medium text-[#101828]">
              RESPONSE DEADLINE
            </label>
            <CustomInput type="date" fullWidth />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-[13px] font-medium text-[#101828]">
              SIDES/SCRIPT/OTHER PDF DOCUMENT UPLOAD
            </label>
            <div className="flex justify-center w-full">
            <div className="backdrop-blur-lg bg-[#FAFAFA]/60 border-b-[1px] w-full border-b-[#EAECF0]">
                <div className="flex justify-center ">
                  <CloudUploadOutlined
                    className="text-gray-400"
                    fontSize="large"
                  />
                </div>

                <div className="text-blue-500 cursor-pointer text-center">
                  Click to upload
                </div>
                <p className="text-sm text-gray-400 text-center">or drag and drop</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-[13px] font-medium text-[#101828]">
              SIDES SHORT DESCRIPTION
            </label>
            <CustomInput multiline rows={5} fullWidth placeholder="Enter short description" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-[13px] font-medium text-[#101828]">
              PROJECT LOCATION
            </label>
            <CustomInput fullWidth placeholder="Enter project location" />
          </div>

          <div className="mb-4">
            <label className="block text-[13px] font-medium text-[#101828]">
              CITY
            </label>
            <CustomInput fullWidth placeholder="Enter city" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-[13px] font-medium text-[#101828]">
            COUNTRY
          </label>
          <FormControl fullWidth variant="outlined">
      
      <Select
        value={industry}
        onChange={handleChange}
        displayEmpty
        sx={{
            border:'0.3px solid gray',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent', // Regular border color
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent', // Hover state border color
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent', // Remove focus border color
          },
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'transparent', // Hover border color
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent', // Remove focus border color
            },
          },
        }}
      >
        <MenuItem value="">
          <em>-- not set --</em>
        </MenuItem>
        <MenuItem value="Film">Film</MenuItem>
        <MenuItem value="Television">Television</MenuItem>
        <MenuItem value="Music">Music</MenuItem>
        <MenuItem value="Theater">Theater</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Select>
    </FormControl>
        </div>

        <div className="flex items-center space-x-4">
            <div className="flex justify-center mt-3">
              <Button
                variant="contained"
                color="primary"
                className="bg-gradient-to-r from-[#000000] to-[#000000] text-white border-b-2 "
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  py: 1,
                  px: 3,
                }}
              >
                Publish
              </Button>
            </div>

            <div className="flex justify-center mt-3">
              <Button
                variant=""
                color=""
                className="bg-gradient-to-r  text-black border-b-2 "
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  py: 1,
                  px: 3,
                  color: "black",
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
      </form>
    </div>
  );
};

export default PostNotice;
