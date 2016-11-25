import React, { Component } from 'react';

import validationCore from './validationCore';

export default class enhancedInput extends Component {
  constructor(props) {
    super(props);

    this.delay = props.delay || 500;
    this.delayTimeout = null;

    this.getStatus = typeof props.getStatus === 'function' ? props.getStatus : null;
    // Initialize status
    this.getStatus(true);

    this.state = {
      errorMessage: props.errorMessage,
      isError: false
    };
  }

  validateInput(data) {
    switch (this.props.type) {
    case 'number':
      return validationCore.onlyNumber(data);
    case 'phone':
      return validationCore.phoneNumber(data);
    case 'email':
      return validationCore.email(data);
    default:
      return true;
    }
  }

  handleErrorMessage(data) {
    if (!this.validateInput(data)) {
      this.setState({
        isError: true
      });

      this.getStatus(false);
    }
  }

  handleOnChange(e) {
    this.setState({
      isError: false
    });

    const data = e.target.value;

    // Set timeout after user stop inputing in a moment
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout);
    }

    this.delayTimeout = setTimeout(() => {
      this.handleErrorMessage(data);
    }, this.delay);

    // Call onChange's prop function
    typeof this.props.onChange === 'function' && this.props.onChange(e);
  }

  render() {
    const inputStyle = {
      display: 'inline-block',
      verticalAlign: 'middle',

      outline: 0,
      padding: '6px 12px',
      width: 'auto',

      fontSize: 14,
      lineHeight: 1.42857,
      color: '#555',


      backgroundColor: '#fff',
      border: '1px solid #c2cad8',

      transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s'
    };

    const errorMessageStyle = {
      display: 'block',

      fontSize: 14,
      lineHeight: 1.42857,
      color: 'red'
    };

    return (
      <div>
        <input
          style={Object.assign({}, this.props.style, inputStyle)}

          ref={this.props.ref}

          placeholder={this.props.placeholder}
          value={this.props.value}
          defaultValue={this.props.defaultValue}
          maxLength={this.props.maxLength}
          required={this.props.required}

          onBlur={this.props.onBlur}
          onChange={this.handleOnChange.bind(this)}
          onFocus={this.props.onFocus}
          onSubmit={this.props.onSubmit}

          onKeyDown={this.props.onKeyDown}
          onKeyPress={this.props.onKeyPress}
          onKeyUp={this.props.onKeyUp}

          onClick={this.props.onClick}
          onMouseDown={this.props.onMouseDown}
          onMouseMove={this.props.onMouseMove}
          onMouseOut={this.props.onMouseOut}
          onMouseOver={this.props.onMouseOver}
          onMouseUp={this.props.onMouseUp}
          onMouseWheel={this.props.onMouseWheel}
          onScroll={this.props.onScroll}
        />

        {
          this.state.isError ?
          <span style={Object.assign({}, this.props.errorStyle, errorMessageStyle)}>{this.state.errorMessage}</span>
          : <span/>
        }
      </div>
    );
  }
}
