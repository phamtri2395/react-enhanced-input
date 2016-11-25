# React enhanced input

## How to use
* Clone this folder into your project.

* Import file enhancedInput.jsx in enhancedInput folder to your project.
```javascript
import EnhancedInput from '../components/enhancedInput/enhancedInput';
```
* Use component.
```javascript
<EnhancedInput
  type="email"
  errorMessage="Not a valid email format"
/>
```

## Input status
To get status of input from outside, pass it a function as getStatus props. Everytimes component's status changes, it will call this function & pass its status as a variable.
```javascript
getStatus(status) {
  this.setState({
    status: status
  });
}

render() {
  return (
    <EnhancedInput
      type="phone"
      errorMessage="Not a phone number"
      getStatus={this.getStatuses.bind(this)}
    />
  );
}
```

## Props
* *type* **(string)**: number, phone, email,...
* *errorMessage* **(string)**: error message to show when input failed for validation.
* *getStatus* **(function)**: pass a function to get input's status. Component will call this function & pass its status as a variable.

**Beside**: this component provides all built-in props for standard input component: *style*, *ref*, *value*, *maxLength*, *required*, *onChange*, *onBlur*,...

## Supported types
* **number**: only allows numbers.
* **phone**: only allows Vietnamese phone number format: *012*, *016*, *0186*, *0188*, *0199*, *0868*, *088*, *089*, *09*,...
* **email**: only allows email.

## License
See the [LICENSE](https://github.com/phamtri2395/react-enhanced-input/blob/master/LICENSE.md) file for license rights and limitations (MIT).
