import setLanguage from 'next-translate/setLanguage'
import Select, { components } from 'react-select';
import { useRouter } from 'next/router'
import { motion } from "framer-motion"

export default function changeLanguage() {
  const { locale } = useRouter()

  const { Option } = components
  const CustomSelectOption = props => (
    <Option {...props}>
      <img 
        src={props.data.icon}
        alt={props.data.label}
      />
    </Option>
  )

  const CustomSelectValue = props => (
    <div className="absolute top-0 left-0 px-2 md:px-2">
      <img 
        src={props.data.icon} 
        alt={props.data.label}
      />
    </div>
  )

  const customStyles = {
    control: (provided) => ({
      ...provided,
      position: 'relative',
      width: '3rem',
      backgroundColor: 'transparent',
      border: 'none',
      "&:hover": {
        backgroundColor: '#34D399',
        cursor: 'pointer'
      }
    }),

    option: (provided) => ({
      ...provided,
      backgroundColor: '#0e0f0f',
      "&:hover": {
        backgroundColor: '#34D399',
        cursor: 'pointer'
      }
    }),

    menu: (provided) => ({
      ...provided,
      backgroundColor: '#0e0f0f'
    })
  }

  const options = [
    { value: 'sv', label: 'Swedish', icon: '/images/sv.svg' },
    { value: 'en-US', label: 'English', icon: '/images/us.svg' }
  ]

  const changeLanguage = (e) => {
    setLanguage(e.value)
  }

  return (
    <motion.button 
      aria-label="Change language" 
      whileHover={{ scale: 1.1 }} 
      whileFocus={{ scale: 1.1 }} 
      whileTap={{ scale: 0.9 }}
      className="ml-2 md:ml-0"
    >
      <Select 
        className="react-select" 
        classNamePrefix="react-select"
        value = {
          locale ? (options.filter(option => 
            option.value === locale
          )) : (
            "sv"
          )
        }
        inputProps={{readOnly:true}}
        isSearchable={ false }
        onChange={changeLanguage}
        options={options}
        components={{ 
          IndicatorSeparator: () => null, 
          DropdownIndicator:() => null,
          Option: CustomSelectOption, 
          SingleValue: CustomSelectValue,
        }}
        styles={customStyles}
      />
    </motion.button>
  )
}