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
        className="w-16 md:12"
      />
    </Option>
  )

  const CustomSelectValue = props => (
    <div>
      <img 
        src={props.data.icon} 
        alt={props.data.label}
        className="w-16 md:w-10 mb-2"
      />
    </div>
  )

  const customStyles = {
    input: (provided) => ({
      ...provided,
      height: '0px',
      color: 'transparent'
    }),

    control: (provided) => ({
      ...provided,
      paddingLeft: '5px',
      backgroundColor: 'transparent',
      border: 'none',
      "&:hover": {
        backgroundColor: '#34D399',
        cursor: 'pointer'
      }
    }),

    option: (provided) => ({
      ...provided,
      marginTop: '0',
      backgroundColor: '#0e0f0f',
      "&:hover": {
        backgroundColor: '#34D399',
        cursor: 'pointer'
      }
    }),

    menu: (provided) => ({
      ...provided,
      marginTop: '0',
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
        onChange={changeLanguage}
        options={options}
        components={{ 
          
          IndicatorSeparator: () => null, 
          DropdownIndicator:() => null,
          Option: CustomSelectOption, 
          SingleValue: CustomSelectValue
        }}
        styles={customStyles}
      />
    </motion.button>
  )
}