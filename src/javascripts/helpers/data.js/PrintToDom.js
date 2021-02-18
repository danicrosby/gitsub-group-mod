const PrintToDom = (divID, textToPrint) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = textToPrint;
};

export default PrintToDom;
