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

    useEffect(() => {
        getReviews()
            .then(reviews => setReviews(reviews))
    }, [])

    let ratingsTotal = 0
    for (let review of reviews) {
        ratingsTotal += Number(review.rating)
    }
    let ratingsAverage = ratingsTotal / reviews.length

    function handleInputChange(event) {
        setCreateFormData({
            ...createFormData,
            [event.target.name]: event.target.value
        })
    }

    function toggleCreateForm() {
        if (loginStatus) {
            setShowCreateForm(!showCreateForm)
        } else {
            alert("Please sign in to leave a review.")
        }
    }

    function refreshReviews() {
        getReviews()
            .then(newReviewData => setReviews(newReviewData))
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
                if (Number(starIcon.id) <= Number(event.target.id)) {
                    starIcon.src = starFill
                }
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
            if (Number(starIcon.id) <= Number(event.target.id)) {
                starIcon.src = starFill
            } else {
                starIcon.src = star
            }
        }
        setCreateFormData({
            ...createFormData,
            rating: Number(event.target.id),
        })
    }

    let reviewElements = [<p key='0' className='text-center'>No reviews yet. Be the first to review!</p>]
    if (reviews.length > 0) {
        reviewElements = reviews.map(review => {
            return <Review
                key={review._id}
                data={review}
                refreshReviews={refreshReviews}
                loginStatus={loginStatus}
                currentUsername={currentUsername}
                currentUserId={currentUserId}
            />
        })
    }

    let btnText = 'Leave a Review'
    if (showCreateForm) btnText = 'Close'

    let starRating
    let reviewForm
    if (loginStatus && showCreateForm) {
        starRating =
        <div className="flex">
            <img className="star w-[50px]" id="1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} src={star}/>
            <img className="star w-[50px]" id="2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} src={star}/>
            <img className="star w-[50px]" id="3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} src={star}/>
            <img className="star w-[50px]" id="4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} src={star}/>
            <img className="star w-[50px]" id="5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} src={star}/>
        </div>
        reviewForm =
        <form
            onSubmit={handleSubmit}
            className="bg-gray-100 rounded-lg p-4 my-4 border-gray-700 border-2 w-[80vw] mx-auto text-right">
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
            <br />
            <textarea
                name="comment"
                className="p-2 my-2 h-[100px] w-full bg-gray-100"
                placeholder="Your comments"
                value={createFormData.comment}
                onChange={handleInputChange}
            />
            <button
                type="submit"
                className="text-white hover:bg-gray-800 font-bold py-2 px-4 bg-gray-700 rounded cursor-pointer mr-2">
                Post
            </button>
        </form>
    }

    return (
        <div className='bg-gray-300 rounded-t-lg p-4 pb-10 mt-4 mx-10 space-y-4 relative'>
            <h1 className='text-xl font-bold'>Reviews</h1>
            <p>Overall rating: {ratingsAverage.toFixed(2)} / 5</p>
            <button
                onClick={toggleCreateForm}
                className="top-0 right-5 absolute text-white hover:bg-green-800 font-bold py-2 px-4 bg-green-900 rounded cursor-pointer mr-2"
            >
                {btnText}
            </button>
            {starRating}
            {reviewForm}
            {reviewElements}
        </div>
    )
}