// @ts-check
import Style from './InputText.module.css'
import { validate } from '#/utils/validate'
import { useState } from 'react'

/**
 * @param {Object} props
 * @param {string} [props.name]
 * @param {string} [props.value]
 * @param {RegExp} [props.regExp]
 * @param {boolean} [props.isValid]
 * @param {number} [props.maxLength]
 * @param {number} [props.minLength]
 * @param {string} [props.className]
 * @param {boolean} [props.isDisable]
 * @param {string} props.placeholder
 * @param {() => void} [props.onSubmit]
 * @param {"off" | "on"} [props.autoComplete]
 * @param {import("react").InputHTMLAttributes<HTMLInputElement>['type']} [props.type]
 * @param {(value: string, isValid: boolean, keyDown: string) => void} [props.onChange]
 * @returns
 */
export function InputText (props) {
  const {
    maxLength,
    minLength,
    type,
    value,
    name = '',
    regExp = /.+/,
    className = '',
    isValid = true,
    placeholder = '',
    autoComplete = 'off',
    isDisable = false,
    onChange = () => {}
  } = props

  const [activate, setActivate] = useState(false)
  const [data, setData] = useState('')

  const getClassNameInput = () => {
    if (!isValid) { return `${Style.BoxInput_input}  ${Style.BoxInput_inputError}` }

    if (value) return `${Style.BoxInput_input} ${Style.BoxInput_inputActivate}`

    if (activate) { return `${Style.BoxInput_input} ${Style.BoxInput_inputActivate}` }

    return `${Style.BoxInput_input} `
  }

  const getClassNameLabel = () => {
    if (value) {
      return `${Style.BoxInput_label} ${Style.BoxInput_labelActivate}`
    }
    if (activate) {
      return `${Style.BoxInput_label} ${Style.BoxInput_labelActivate}`
    }

    return `${Style.BoxInput_label}`
  }

  return (
    <div className={`${Style.BoxInput} ${className}`}>
      <label className={getClassNameLabel()} htmlFor={name}>
        {name}
      </label>

      <input
        disabled={isDisable}
        maxLength={maxLength}
        minLength={minLength}
        value={value}
        autoComplete={autoComplete}
        onFocus={() => setActivate(true)}
        onBlur={() => data === '' && setActivate(false)}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className={getClassNameInput()}
        onChange={(e) => {
          const value = e.target.value

          const tempIsValid = validate({
            regExp,
            stringToValidate: value
          })

          setData(value)

          onChange && onChange(value, tempIsValid, e.nativeEvent.data)
        }}
      />
    </div>
  )
}
