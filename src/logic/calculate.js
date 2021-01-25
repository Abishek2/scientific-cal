import operate from "./operate";
import isNumber from "./isNumber";

export default function calculate(obj, buttonName) {
  if (buttonName === "Clear") {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }
  if (isNumber(buttonName)) {
    if (buttonName === "0" && obj.next === "0") {
      return {};
    }
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName };
      }
      return { next: buttonName };
    }
    if (obj.next) {
      const next = obj.next === "0" ? buttonName : obj.next + buttonName;
      return {
        next,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }
  if (buttonName === "=") {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      
      return {};
    }
  }
  if (buttonName === "+/-") {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }
  if (buttonName === "sqr") {
    if (obj.next) {
      return { next: ( parseFloat(obj.next)).toString()**2 };
    }
    if (obj.total) {
      return { total: (parseFloat(obj.total)).toString() **2 };
    }
    return {};
  }
  if (buttonName === "sqrt") {
    if (obj.next) {
      return { next: (parseFloat(obj.next)).toString()**0.5 };
    }
    if (obj.total) {
      return { total: (parseFloat(obj.total)).toString()**0.5 };
    }
    return {};
  }
  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }
  if (!obj.next) {
    return { operation: buttonName };
  }
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
