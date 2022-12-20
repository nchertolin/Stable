const sendData = (name, phone, OnSuccsess, OnError, onFinally) => {
  fetch(`https://api.telegram.org/bot5692087584:AAF5Jt4Wardrkb57J-m-IaWSCvNl3aMh5C4/sendMessage?chat_id=-1001639677585&text=${name}, 7 ${phone}`)
    .then((response) => {
      if (response.ok) {
        OnSuccsess();
      } else throw new Error();
    })
    .catch(OnError)
    .finally(onFinally);
};

export { sendData };