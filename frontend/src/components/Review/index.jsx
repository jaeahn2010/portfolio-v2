import { useEffect, useState } from "react"
import { updateReview, deleteReview, getReviewerById } from "../../../utils/backend"
import star from "../../assets/star.svg"
import starFill from '../../assets/star-fill.svg'
import starHalf from '../../assets/star-half.svg'

export default function Review({ data, refreshReviews, loginStatus, currentUsername, currentUserId }) {
    const [reviewerName, setReviewerName] = useState('')
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormData, setEditFormData] = useState({
        userId: data.userId,
        rating: data.rating,
        comment: data.comment,
    })

    useEffect(() => {
        getReviewerById(data.userId)
            .then(reviewer => setReviewerName(`${reviewer.firstName} ${reviewer.lastName}`))
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
        updateReview(editFormData, data._id)
            .then(() => refreshReviews())
    }

    function handleDelete() {
        if (confirm("Are you sure you would like to delete this offer?")) {
            deleteReview(data._id)
                .then(() => refreshReviews())
        }
    }

    let btns
    let starRating = []
    for (let i = 0; i < data.rating; i++) {
        starRating.push(<img src={starFill}/>)
    }
    for (let j = 0; j < 5 - data.rating; j++) {
        starRating.push(<img src={star}/>)
    }
    if (showEditForm && loginStatus && data.userId === currentUserId) {
        return (
            <form
                onSubmit={handleSubmit}
                className="bg-gray-100 rounded-lg p-4 my-4 border-gray-700 border-2 w-[80vw] mx-auto text-right">
                <input
                    name="rating"
                    type="number"
                    min="1"
                    max="5"
                    className="px-2 py-1 w-full bg-gray-100"
                    value={editFormData.rating}
                    onChange={handleInputChange}
                />
                <br />
                <textarea
                    name="comment"
                    className="p-2 my-2 h-[100px] w-full bg-gray-100"
                    placeholder="Your comment"
                    value={editFormData.comment}
                    onChange={handleInputChange}
                />
                <div>
                    <button
                        onClick={() => { setShowEditForm(false) }}
                        className="text-white hover:bg-gray-800 font-bold py-2 px-4 bg-gray-700 rounded cursor-pointer mr-2">
                        Close
                    </button>
                    <button
                        type="submit"
                        className="text-white hover:bg-green-800 font-bold py-2 px-4 bg-green-900 rounded cursor-pointer mr-2">
                        Post
                    </button>
                </div>
            </form>
        )
    } else {
        if (loginStatus && data.userId === currentUserId) {
            btns =
            <div className="flex justify-end">
                <button
                    onClick={() => { setShowEditForm(true) }}
                    className="text-white hover:bg-gray-800 font-bold py-2 px-4 bg-gray-700 rounded cursor-pointer mr-2">
                    Edit
                </button>
                <button
                    onClick={handleDelete}
                    className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                    Delete
                </button>
            </div>
        }
        return (
            <div
                className="bg-gray-100 rounded-lg p-4 my-4 border-gray-700 border-2 w-[80vw] mx-auto">
                <p className="font-bold">Reviewer: {reviewerName}</p>
                <div className="flex">
                    <p className="font-bold">Rating:</p>
                    <div className="flex ml-5">{starRating}</div>
                </div>
                <p className="my-2">Comment: {data.comment}</p>
                {btns}
            </div>
        )
    }
}