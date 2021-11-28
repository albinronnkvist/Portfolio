import setLanguage from 'next-translate/setLanguage'
import Select, { components } from 'react-select';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from "framer-motion"

export default function changeLanguage() {
  const { locale } = useRouter()

  const { Option } = components
  const CustomSelectOption = props => (
    <Option {...props}>
      <Image src={props.data.icon}
        width={30}
        height={30}
        alt={props.data.label}
      />
    </Option>
  )

  const CustomSelectValue = props => (
    <div>
      <Image 
        src={props.data.icon} 
        width={30}
        height={30}
        alt={props.data.label}
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
    { value: 'sv', label: 'Swedish', icon: '/images/sweden.png' },
    { value: 'en-US', label: 'English', icon: '/images/us.png' }
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