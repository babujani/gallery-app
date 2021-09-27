import './index.css'

const Thumbnails = props => {
  const {changeImage, imageDetails, presentImg} = props
  const {
    thumbnailUrl,

    thumbnailAltText,

    id,
  } = imageDetails
  const buttonClass = presentImg ? 'active-img-button' : 'img-button'

  const updateGalleryImg = () => {
    changeImage(id)
  }

  return (
    <li>
      <button className={buttonClass} type="button" onClick={updateGalleryImg}>
        <img alt={thumbnailAltText} src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default Thumbnails
