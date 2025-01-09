export const invoiceDetails = [
  {
    id: "1",
    label: "Invoice Number",
    placeholder: "Selct Vendor",
    arrowIcon: true,
    name: "invoiceNumber",
  },
  {
    id: "2",
    label: "Invoice Date",
    placeholder: "MM/DD/YYYY",
    arrowIcon: true,
    imgSrc: "/assets/calendar-date.svg",
    name: "invoiceDate",
  },
  {
    id: "3",
    label: "Total Amount",
    placeholder: "0.00",
    arrowIcon: "USD",
    imgSrc: "/assets/currency.svg",
    name: "totalAmount",
  },
  {
    id: "4",
    label: "Payment Terms",
    placeholder: "Select",
    arrowIcon: true,
    name: "paymentTerms",
  },
  {
    id: "5",
    label: "Invoice Due Date",
    placeholder: "MM/DD/YYYY",
    arrowIcon: true,
    imgSrc: "/assets/calendar-date.svg",
    name: "invoiceDueDate",
  },
  {
    id: "6",
    label: "GL Post Date",
    placeholder: "MM/DD/YYYY",
    arrowIcon: true,
    imgSrc: "/assets/calendar-date.svg",
    name: "gLPostDate",
  },
];

export const expenseDetails = [
  {
    id: "1",
    label: "Line Amount",
    placeholder: "0.00",
    arrowIcon: true,
    imgSrc: "/assets/currency.svg",
    name: "lineAmount",
  },
  {
    id: "2",
    label: "Department",
    placeholder: "Select Department",
    arrowIcon: true,
    name: "selectDepartment",
  },
  {
    id: "3",
    label: "Account",
    placeholder: "Select Account",
    arrowIcon: true,
    name: "selectAccount",
  },
  {
    id: "4",
    label: "Location",
    placeholder: "Select Location",
    arrowIcon: true,
    name: "selectLocation",
  },
];

export const validate = (values) => {
  const errors = {};

  if (!values.vendor) {
    errors.vendor = "Vendor is required";
  }

  if (!values.invoiceDetails) {
    errors.invoiceDetails = "Invoice details are required";
  }

  if (!values.invoiceNumber) {
    errors.invoiceNumber = "Invoice number is required";
  }

  if (!values.invoiceDate) {
    errors.invoiceDate = "Invoice date is required";
  }

  if (!values.totalAmount) {
    errors.totalAmount = "Total amount is required";
  } else if (isNaN(values.totalAmount)) {
    errors.totalAmount = "Total amount must be a number";
  }

  if (!values.paymentTerms) {
    errors.paymentTerms = "Payment terms are required";
  }

  if (!values.invoiceDueDate) {
    errors.invoiceDueDate = "Invoice due date is required";
  }

  if (!values.gLPostDate) {
    errors.gLPostDate = "GL post date is required";
  }

  if (!values.lineAmount) {
    errors.lineAmount = "Line amount is required";
  } else if (isNaN(values.lineAmount)) {
    errors.lineAmount = "Line amount must be a number";
  }

  if (!values.selectDepartment) {
    errors.selectDepartment = "Department selection is required";
  }

  if (!values.selectAccount) {
    errors.selectAccount = "Account selection is required";
  }

  if (!values.selectLocation) {
    errors.selectLocation = "Location selection is required";
  }

  if (!values.invoiceDescription) {
    errors.invoiceDescription = "Invoice description is required";
  }

  if (!values.expenseDescription) {
    errors.expenseDescription = "Expense description is required";
  }

  if (!values.comments) {
    errors.comments = "Comments are required";
  }

  return errors;
};
