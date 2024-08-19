

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center spinner">
      <div className="spinner-border spinner spinner-size" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default LoadingSpinner
