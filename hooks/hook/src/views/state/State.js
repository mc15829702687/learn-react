import React, {PureComponent} from 'react'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

// 华氏转摄氏
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// 摄氏转华氏
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

/**
  *	@method: tryConvert
  *	@param: temperature(String), convert(Function)
  * @description: 温度相互转换，并进行四舍五入
  * @return: rounded.toString()
  **/
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if(props.isBoling >= 100) {
    return <p>The water is boiling</p>
  }else {
    return <p>The water is not boiling</p>
  }
} 

class TemplatureCpn extends PureComponent {
  changeTem(e) {
    this.props.onChangeTemplature(e.target.value)
  }

  render() {
    const {scale, templature} = this.props

    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={templature} onChange={e => this.changeTem(e)}/>
          <BoilingVerdict isBoling={parseFloat(templature)}/>
        </fieldset>
      </div>
    )
  }
}

class Caculator extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      scale: 'c',
      templature: ''
    }
  }

  handleCelsiusChange(val) {
    this.setState({
      scale: 'c',
      templature: val
    })
  }

  handleFahrenheitChange(val) {
    this.setState({
      scale: 'f',
      templature: val
    })
  }

  render() {
    const {scale, templature} = this.state
    const celsius = scale === 'f' ? tryConvert(templature, toCelsius) : templature
    const fahrenheit = scale === 'c' ? tryConvert(templature, toFahrenheit) : templature

    return (
      <div>
        <TemplatureCpn scale="c" templature={celsius} onChangeTemplature={val => this.handleCelsiusChange(val)}/>
        <TemplatureCpn scale="f" templature={fahrenheit} onChangeTemplature={val => this.handleFahrenheitChange(val)}/>
      </div>
    )
  }
}

export default class State extends PureComponent{
  render() {
    return (
      <div>
        <Caculator/>
      </div>
    )
  }
}