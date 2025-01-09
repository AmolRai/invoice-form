import styles from "./style.module.css";

const UploadInvoice = () => {
  return (
    <div className={styles.uploadContainer}>
      <h3>Upload Your Invoice</h3>
      <span className={styles.auto}>To auto-populate fields and save time</span>
      <iframe
        title="lottie-icon"
        src="https://lottie.host/embed/c550b2d2-6bc3-4df4-9d8f-0fa5f0e946f6/cb0pk7MLha.lottie"
        height={300}
        width={300}
        style={{ border: "none" }}
      ></iframe>
      <button className={styles.uploadBtn}>
        Upload File
        <img src="/assets/upload.svg" alt="upload-icon" />
      </button>
      <span style={{ fontSize: "14px" }}>
        <span style={{ color: "#1787e0", fontWeight: "600" }}>
          Click to Upload
        </span>{" "}
        or Drag and drop
      </span>
    </div>
  );
};

export default UploadInvoice;
