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

## Props
* *type*: number, phone, email,...
* *errorMessage*: error message to show when input failed for validation

**Beside**: this component provides all built-in props for standard input component: *style*, *ref*, *value*, *maxLength*, *required*, *onChange*, *onBlur*,...

## Supported types
* **number**: only allows numbers.
* **phone**: only allows Vietnamese phone number format: *012*, *016*, *0186*, *0188*, *0199*, *0868*, *088*, *089*, *09*
* **email**: only allows email.
