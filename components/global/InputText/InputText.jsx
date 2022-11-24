// @ts-check
import Style from './InputText.module.css'
import { validate } from '#/utils/validate'
import { useState } from 'react'

/** @param {import('./types').Props} props */
export function InputText (props) {
  const {
    type,
    value,
    maxLength,
    minLength,
    name = '',
    regExp = /.+/,
    className = '',
    isValid = true,
    placeholder = '',
    selectOptions = [],
    autoComplete = 'off',
    isDisable = false,
    onChange = () => {}
  } = props

  const [activate, setActivate] = useState(false)
  const [data, setData] = useState('')

  const getClassNameInput = () => {
    if (!isValid) return `${Style.BoxInput_input}  ${Style.BoxInput_inputError}`

    if (value) return `${Style.BoxInput_input} ${Style.BoxInput_inputActivate}`

    if (activate) return `${Style.BoxInput_input} ${Style.BoxInput_inputActivate}`

    return `${Style.BoxInput_input} `
  }

  const getClassNameLabel = () => {
    if (value) return `${Style.BoxInput_label} ${Style.BoxInput_labelActivate}`

    if (activate) return `${Style.BoxInput_label} ${Style.BoxInput_labelActivate}`

    return `${Style.BoxInput_label}`
  }

  const getSelectValid = () => {
    if (!isValid) return `${Style.BoxInput} ${Style.Select} ${Style.selectError}`

    if (activate) return `${Style.BoxInput} ${Style.Select} ${Style.selectActivate}`

    return `${Style.BoxInput} ${Style.Select}`
  }

  if (type === 'select') {
    return (
      <div className={getSelectValid()}>
        <label className={Style.BoxInput_labelActivate} style={{ marginLeft: '4px' }} htmlFor="fruit">{name}</label>
        <select
          required
          defaultValue={'Selecciona una categoría'}
          onChange={(e) => {
            const { value } = e.target
            const isValid = value !== selectOptions[0]
            console.log({ value, name })
            onChange && onChange(value, isValid, '')
            setActivate(isValid)
          }}
        >

          {selectOptions?.map((e, i) => <option value={e} key={i}>{e}</option>)}
        </select>
      </div>
    )
  }

  return (
    <div className={`${Style.BoxInput} ${className}`}>
      <label className={getClassNameLabel()} htmlFor={name}>
        {name}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        disabled={isDisable}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={getClassNameInput()}
        onFocus={() => setActivate(true)}
        onBlur={() => data === '' && setActivate(false)}
        onChange={(e) => {
          const value = e.target.value

          const tempIsValid = validate({
            regExp,
            stringToValidate: value
          })

          setData(value)

          // @ts-ignore
          onChange && onChange(value, tempIsValid, e.nativeEvent.data)
        }}
      />
    </div>
  )
}
