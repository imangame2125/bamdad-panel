function CourseDetail({ title, value }) {
  if (title) {
    return (
      <p className="card-text" title={title}>
        {title}: <b>{value}</b>
      </p>
    )
  }
  else {
    return (
      <p className="card-text">
        {value}
      </p>
    )
  }
}

export default CourseDetail