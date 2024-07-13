import { useState, useEffect } from "react"
import { postReview, getReviews } from "../../../utils/backend"
import Review from "../Review"
import star from "../../assets/star.svg"
import starFill from '../../assets/star-fill.svg'

export default function reviewsPage({ loginStatus, currentUsername, currentUserId }) {
    const [reviews, setReviews] = useState([])
    const [starClicked, setStarClicked] = useState(false)
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [createFormData, setCreateFormData] = useState({
        rating: 0,
        comment: ''
    })

    let btnStyle = 'border-stone-800 border-2 text-center my-5 mx-4 rounded-xl shadow-xl hover:scale-110 duration-500 bg-gradient-to-r from-sky-300 via-sky-100 to-sky-300 p-2'

    useEffect(() => {
        getReviews().then(reviews => setReviews(reviews))
    }, [])

    let ratingsTotal = reviews.length ? reviews.reduce((total, review) => total + Number(review.rating), 0) : 0
    let ratingsAverage = reviews.length ? ratingsTotal / reviews.length : 0

    function handleInputChange(event) {
        setCreateFormData({
            ...createFormData,
            [event.target.name]: event.target.value
        })
    }

    function toggleCreateForm() {
        loginStatus ? setShowCreateForm(!showCreateForm) : alert("Please sign in to leave a review.")
    }

    function refreshReviews() {
        getReviews().then(newReviewData => setReviews(newReviewData))
    }

    function handleSubmit(event) {
        event.preventDefault()
        setCreateFormData({
            rating: 0,
            comment: ''
        })
        setShowCreateForm(false)
        postReview({ ...createFormData, userId: currentUserId })
            .then(() => refreshReviews())
    }

    function handleMouseEnter(event) {
        if (!starClicked) {
            let starArr = document.getElementsByClassName('star')
            for (let starIcon of starArr) {
                if (Number(starIcon.id) <= Number(event.target.id)) starIcon.src = starFill
            }
        }
    }

    function handleMouseLeave() {
        if (!starClicked) {
            let starArr = document.getElementsByClassName('star')
            for (let starIcon of starArr) {
                starIcon.src = star
            }
        }
    }

    function handleClick(event) {
        let starArr = document.getElementsByClassName('star')
        setStarClicked(true)
        for (let starIcon of starArr) {
            Number(starIcon.id) <= Number(event.target.id) ? starIcon.src = starFill : starIcon.src = star
        }
        setCreateFormData({
            ...createFormData,
            rating: Number(event.target.id),
        })
    }

    let reviewElements = reviews.length ? reviews.map(review => 
        <Review
            key={review._id}
            review={review}
            refreshReviews={refreshReviews}
            loginStatus={loginStatus}
            currentUsername={currentUsername}
            currentUserId={currentUserId}
        />)
    : <p className='text-center my-5'>No reviews yet. Be the first to review!</p>

    let btnText = showCreateForm ? 'Close ' : 'Leave a Review'
    let starRating
    let reviewForm
    if (loginStatus && showCreateForm) {
        starRating =
        <div className="flex justify-center">
            {[1, 2, 3, 4, 5].map(starCount => <img key={starCount} className="star w-[30px]" id={starCount} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} src={star}/>)}
        </div>
        reviewForm =
        <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center bg-stone-200 rounded-lg p-4 my-2 border-stone-800 border-2 w-[50vw]">
            <p className="my-3 font-bold text-xl">Your review</p>
            {starRating}
            <input
                name="rating"
                type="number"
                min="1"
                max="5"
                className="px-2 py-1 w-full bg-gray-100"
                hidden
                value={createFormData.rating}
                onChange={handleInputChange}
            />
            <br/>
            <textarea
                name="comment"
                className="p-2 my-2 h-[100px] w-full bg-stone-100 border-stone-800 border-2 rounded-xl"
                placeholder="Your comments"
                value={createFormData.comment}
                onChange={handleInputChange}
            />
            <button type="submit" className={btnStyle}>Post</button>
        </form>
    }

    return (
        <div className='flex flex-col items-center p-4 pb-10 min-h-[100vh] mt-4'>
            <h1 className='text-3xl font-bold my-5'>Reviews</h1>
            <p className="my-5">Overall rating: {ratingsAverage.toFixed(2)} / 5</p>
            <button onClick={toggleCreateForm} className={btnStyle}>{btnText}</button>
            {reviewForm}
            {reviewElements}
        </div>
    )
}