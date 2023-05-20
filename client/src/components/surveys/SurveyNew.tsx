import React from 'react'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

const SurveyNew = () => {
  const [showReview, setShowReview] = React.useState(false)

  const renderContent = () => {
    return showReview ? (
      <SurveyFormReview setShowReview={setShowReview} />
    ) : (
      // @ts-expect-error
      <SurveyForm setShowReview={setShowReview} />
    )
  }
  return <div>{renderContent()}</div>
}

export default SurveyNew
