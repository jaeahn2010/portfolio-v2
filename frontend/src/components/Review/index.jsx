import { useEffect, useState } from "react"
import { updateReview, deleteReview, getReviewerById } from "../../../utils/backend"
import star from "../../assets/star.svg"
import starFill from '../../assets/star-fill.svg'

export default function Review({ review, refreshReviews, loginStatus, currentUsername, currentUserId, darkTheme }) {
    const [reviewerName, setReviewerName] = useState('')
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormData, setEditFormData] = useState({
        userId: review.userId,
        rating: review.rating,
        comment: review.comment,
    })

    useEffect(() => {
        getReviewerById(review.userId).then(reviewer => setReviewerName(`${reviewer.firstName} ${reviewer.lastName}`))
    }, [])

    function handleInputChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setShowEditForm(false)
        updateReview(editFormData, review._id).then(() => refreshReviews())
    }

    function handleDelete() {
        if (confirm("Are you sure you would like to delete this review?")) {
            deleteReview(review._id).then(() => refreshReviews())
        }
    }

    let btns
    let starRating = []
    for (let i = 0; i < 5; i++) {
        starRating.push(<img key={i + 1} src={i < review.rating ? starFill : star}/>)
    }
    if (showEditForm && loginStatus && review.userId === currentUserId) {
        return (
            <form
                onSubmit={handleSubmit}
                className="bg-gray-100 rounded-lg p-4 my-4 border-gray-700 border-2 w-[80vw] mx-auto">
                <div className="flex justify-between items-center">
                    <label htmlFor="rating" className="w-1/3 text-right mx-5 text-stone-800">Change your rating: </label>
                    <input
                        name="rating"
                        id='rating'
                        type="number"
                        min="1"
                        max="5"
                        className="px-2 py-1 w-full bg-gray-100 text-stone-800 border-stone-800 border-2 rounded-xl"
                        value={editFormData.rating}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex justify-between items-center">
                    <label htmlFor="comment" className="w-1/3 text-right mx-5 text-stone-800">Change your rating: </label>
                    <textarea
                        name="comment"
                        id='comment'
                        className="p-2 my-2 h-[100px] w-full bg-gray-100 text-stone-800 border-stone-800 border-2 rounded-xl"
                        placeholder="Your comment"
                        value={editFormData.comment}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={() => setShowEditForm(false)} className="border-stone-800 border-2 text-center my-5 mx-4 rounded-xl shadow-xl hover:scale-110 duration-500 bg-gradient-to-r from-amber-300 via-amber-100 to-amber-300 p-2 text-stone-800 w-1/6">Close</button>
                    <button type="submit" className="border-stone-800 border-2 text-center my-5 mx-4 rounded-xl shadow-xl hover:scale-110 duration-500 bg-gradient-to-r from-green-300 via-green-100 to-green-300 p-2 text-stone-800 w-1/6">Post</button>
                </div>
            </form>
        )
    } else {
        if (loginStatus && review.userId === currentUserId) {
            btns =
            <div className="flex justify-end">
                <button onClick={() => setShowEditForm(true)} className="border-stone-800 border-2 text-center my-5 mx-4 rounded-xl shadow-xl hover:scale-110 duration-500 bg-gradient-to-r from-amber-300 via-amber-100 to-amber-300 p-2 text-stone-800 w-1/6">Edit</button>
                <button onClick={handleDelete} className="border-stone-800 border-2 text-center my-5 mx-4 rounded-xl shadow-xl hover:scale-110 duration-500 bg-gradient-to-r from-red-300 via-red-100 to-red-300 p-2 text-stone-800 w-1/6">Delete</button>
            </div>
        }
        return (
            <div className="bg-gray-100 rounded-lg p-4 my-4 border-gray-700 border-2 w-[80vw] mx-auto text-stone-800">
                <p className="font-bold">Reviewer: {reviewerName}</p>
                <div className="flex">
                    <p className="font-bold">Rating:</p>
                    <div className="flex ml-5">{starRating}</div>
                </div>
                <p className="my-2">Comment: {review.comment}</p>
                {btns}
            </div>
        )
    }
}