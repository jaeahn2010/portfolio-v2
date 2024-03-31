import { useState, useEffect } from "react"
import { postReview, getReviews } from "../../../utils/backend"
import Review from "../Review"

export default function reviewsPage({ loginStatus, currentUsername, currentUserId }) {
    const [reviews, setReviews] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [createFormData, setCreateFormData] = useState({
        rating: 0,
        comment: ''
    })

    useEffect(() => {
        getReviews()
            .then(reviews => setReviews(reviews))
    }, [])

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

    let reviewForm
    if (loginStatus && showCreateForm) {
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
            <button
                onClick={toggleCreateForm}
                className="top-0 right-5 absolute text-white hover:bg-green-800 font-bold py-2 px-4 bg-green-900 rounded cursor-pointer mr-2"
            >
                {btnText}
            </button>
            {reviewForm}
            {reviewElements}
        </div>
    )
}