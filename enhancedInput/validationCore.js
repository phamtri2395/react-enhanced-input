export default {
  onlyNumber: (data) => {
    const regEx = /^[0-9]+$/;

    return data.match(regEx);
  },

  phoneNumber: (data) => {
    const regEx1 = /^(?=\d{11}$)(012)\d+$/;
    const regEx2 = /^(?=\d{11}$)(016)\d+$/;
    const regEx3 = /^(?=\d{11}$)(0186|0188)\d+$/;
    const regEx4 = /^(?=\d{11}$)(0199)\d+$/;
    const regEx5 = /^(?=\d{10}$)(0868)\d+$/;
    const regEx6 = /^(?=\d{10}$)(088)\d+$/;
    const regEx7 = /^(?=\d{10}$)(089)\d+$/;
    const regEx8 = /^(?=\d{10}$)(09)\d+$/;

    return (data.match(regEx1) || data.match(regEx2) || data.match(regEx3) || data.match(regEx4) || data.match(regEx5) || data.match(regEx6) || data.match(regEx7) || data.match(regEx8));
  },

  email: (data) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return data.match(regEx);
  }
};
