import { useNavigate } from "react-router";
import useAuthCheck from "../../hooks/useAuthCheck";
import styles from "./style.module.css";
import Input from "../Input";
import { Formik, Form } from "formik";
import { IoIosArrowDown } from "react-icons/io";
import UploadInvoice from "../UploadInvoice";
import { MdAdd } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { expenseDetails, invoiceDetails, validate } from "../../constants";

const getInitialValues = () => {
  const savedData = localStorage.getItem("invoiceData");
  if (savedData) {
    return JSON.parse(savedData);
  }
  return {
    vendor: "",
    invoiceDetails: "",
    invoiceNumber: "",
    invoiceDate: "",
    totalAmount: "",
    paymentTerms: "",
    invoiceDueDate: "",
    gLPostDate: "",
    lineAmount: "",
    selectDepartment: "",
    selectAccount: "",
    selectLocation: "",
    invoiceDescription: "",
    expenseDescription: "",
    comments: "",
  };
};

const InvoiceForm = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuthCheck();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  if (loading) return <div>Loading...</div>;
  if (!isAuthenticated) navigate("/");

  const handleSubmit = (values) => {
    localStorage.setItem("invoiceData", JSON.stringify(values));
    alert("Form submitted successfully!");
    console.log("Form Values:", values);
  };

  return (
    <div className={styles.rootContainer}>
      <button className={styles.logoutBtn} onClick={handleLogout}>
        Logout
      </button>

      <div className={styles.vendorContainer}>
        <UploadInvoice />
        <div className={styles.vendor}>
          <div className={styles.vendorDetails}>
            <div className={styles.vendorTab}>
              <span className={styles.vendorTabColor}>Vendor Details</span>
              <span>Invoice Details</span>
              <span>Comments</span>
            </div>
          </div>
          <Formik
            initialValues={getInitialValues()}
            validate={validate}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className={styles.form}>
                <div className={styles.vendorInformation}>
                  <div className={styles.vendorIcon}>
                    <img src="/assets/vendor.svg" alt="icon" />
                    <span>Vendor Details</span>
                  </div>
                  <h3>Vendor Information</h3>
                  <Input
                    label="Vendor"
                    name="vendor"
                    type="text"
                    placeholder="Vendor"
                    showArrowIcon={true}
                  />
                  <span
                    style={{
                      color: "#4b5768",
                      fontSize: "14px",
                      fontWeight: "lighter",
                    }}
                  >
                    550 Main St., Lynn
                  </span>

                  <div className={styles.showVendorDetails}>
                    <IoIosArrowDown />
                    View Vendor Details
                  </div>
                </div>

                <div className={styles.vendorInformation}>
                  <div className={styles.vendorIcon}>
                    <img src="/assets/vendor.svg" alt="icon" />
                    <span>Invoice Details</span>
                  </div>
                  <h3 style={{ marginTop: "1rem" }}>General Information</h3>
                  <Input
                    label="Purchase Order Number"
                    name="invoiceDetails"
                    type="text"
                    placeholder="Select PO Number"
                    showArrowIcon={true}
                  />
                </div>

                <div className={styles.vendorInformation}>
                  <h3 style={{ marginTop: "2rem" }}>Invoice Details</h3>
                  <div className={styles.gridContainer}>
                    {invoiceDetails.map((invoice) => (
                      <Input
                        key={invoice.id}
                        label={invoice.label}
                        name={invoice.name}
                        type="text"
                        placeholder={invoice.placeholder}
                        showArrowIcon={invoice.arrowIcon}
                        className={styles.gridItem}
                        iconSrc={invoice.imgSrc}
                      />
                    ))}
                  </div>
                  <Input
                    label="Invoice Description"
                    name="invoiceDescription"
                    type="text"
                  />
                </div>

                <div className={styles.vendorInformation}>
                  <div
                    className={styles.dollarExpense}
                    style={{ marginTop: "2rem" }}
                  >
                    <h3>Expense Details</h3>
                    <div className={styles.customSwitch}>
                      <span>
                        $ 0.00 <b>/</b>{" "}
                        <span style={{ color: "#1787e0", fontWeight: "bold" }}>
                          $0.00
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={styles.gridContainer}>
                    {expenseDetails.map((invoice) => (
                      <Input
                        key={invoice.id}
                        label={invoice.label}
                        name={invoice.name}
                        type="text"
                        placeholder={invoice.placeholder}
                        showArrowIcon={invoice.arrowIcon}
                        className={styles.gridItem}
                        iconSrc={invoice.imgSrc}
                      />
                    ))}
                  </div>
                  <div className={styles.addExpense}>
                    <Input
                      label="Description"
                      name="expenseDescription"
                      type="text"
                    />
                    <button>
                      <MdAdd fontSize={20} color="#64748b" />
                      Add Expense Coding
                    </button>
                  </div>

                  <div className={styles.commentContainer}>
                    <div className={styles.vendorIcon}>
                      <img src="/assets/comment.svg" alt="icon" />
                      <span>Comments</span>
                    </div>
                    <Input
                      label=""
                      name="comments"
                      placeholder="Add a comment and use @Name to tag someone"
                      type="text"
                      arrowIcon={true}
                    />
                  </div>
                </div>

                <div className={styles.formAction}>
                  <IoMdMore
                    fontSize={25}
                    color="#64748b"
                    style={{ marginRight: "2rem" }}
                  />
                  <button
                    style={{
                      backgroundColor: "white",
                      color: "#64748b",
                      border: "1px solid #64748b",
                    }}
                  >
                    Save as Draft
                  </button>
                  <button type="submit" disabled={isSubmitting}>
                    Submit & New
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
